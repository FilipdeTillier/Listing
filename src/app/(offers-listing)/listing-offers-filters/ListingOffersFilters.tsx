import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React, { useEffect, useMemo } from 'react';

import FilterBrand from '@/components/FilterBrand/FilterBrand';
import FilterLocation from '@/components/FilterLocation/FilterLocation';
import FilterPriceRange from '@/components/FilterPriceRange/FilterPriceRange';
import { Skeleton } from '@/shared/Skeleton/Skeleton';

type InitialValuesTypes = {
  location: string | null;
  brand: string | null;
  minSalary: string | null;
  maxSalary: string | null;
};

const ListingOffersFilter = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  let {
    brand = null,
    location = null,
    minSalary = null,
    maxSalary = null,
  } = useMemo(() => queryString.parse(searchParams.toString()), []);

  const initialValues: InitialValuesTypes = useMemo(
    () => ({
      location: typeof location === "string" ? location : null,
      brand: typeof brand === "string" ? brand : null,
      minSalary: typeof minSalary === "string" ? minSalary : null,
      maxSalary: typeof maxSalary === "string" ? maxSalary : null,
    }),
    []
  );

  const { handleSubmit, values, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onResetField = (fieldName: keyof InitialValuesTypes) =>
    setFieldValue(fieldName, null);

  useEffect(() => {
    if (typeof brand === "string") setFieldValue("brand", brand);
    if (typeof location === "string") setFieldValue("location", location);
    if (typeof minSalary === "string") setFieldValue("minSalary", minSalary);
    if (typeof maxSalary === "string") setFieldValue("maxSalary", maxSalary);
  }, []);

  useEffect(() => {
    const queries = queryString.stringify(values, {
      skipEmptyString: true,
      skipNull: true,
    });
    if (queries) {
      replace(`/?${queries}`);
    } else {
      replace("/");
    }
  }, [replace, values]);

  return (
    <div className="flex items-center box-border fixed top-20 w-full left-0 right-0 z-40 bg-white xl:px-8 px-2 h-16 md:h-20">
      <form onSubmit={handleSubmit} className="flex lg:space-x-4">
        <div className="flex space-x-4">
          <FilterBrand
            value={values.brand}
            onReset={() => onResetField("brand")}
            onChange={(brandValue) => setFieldValue("brand", brandValue)}
          />
          <FilterPriceRange
            min={values.minSalary !== null ? +values.minSalary : null}
            max={values.maxSalary !== null ? +values.maxSalary : null}
            onChange={({ min, max }) => {
              setFieldValue("minSalary", min);
              setFieldValue("maxSalary", max);
            }}
            onReset={() => {
              onResetField("maxSalary");
              onResetField("minSalary");
            }}
          />
          <FilterLocation
            value={values.location}
            onChange={(value) => setFieldValue("location", value)}
            onReset={() => onResetField("location")}
          />
        </div>
        <div className="flex lg:hidden space-x-4"></div>
      </form>
    </div>
  );
};

export default ListingOffersFilter;
