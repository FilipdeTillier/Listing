import { useFormik } from "formik";
import React from "react";

import FilterBrand from "@/components/FilterBrand/FilterBrand";
import FilterLocation from "@/components/FilterLocation/FilterLocation";
import FilterPriceRange from "@/components/FilterPriceRange/FilterPriceRange";

type InitialValuesTypes = {
  location: string | null;
  brand: string | null;
  salary: {
    min: number | null;
    max: number | null;
  };
};

const initialValues: InitialValuesTypes = {
  location: null,
  brand: "",
  salary: {
    min: null,
    max: null,
  },
};

type InitialValuesKeys = keyof typeof initialValues;

const ListingOffersFilter = () => {
  const { handleSubmit, values, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const resetField = (fieldName: InitialValuesKeys) =>
    setFieldValue(fieldName, initialValues[fieldName]);

  return (
    <form onSubmit={handleSubmit} className="flex lg:space-x-4">
      <div className="hidden lg:flex space-x-4">
        <FilterBrand
          value={values.brand}
          onReset={() => resetField("brand")}
          onChange={(brandValue) => setFieldValue("brand", brandValue)}
        />
        <FilterPriceRange
          min={values.salary.min}
          max={values.salary.max}
          onChange={(rangeValues) => setFieldValue("salary", rangeValues)}
          onReset={() => resetField("salary")}
        />
        <FilterLocation
          value={values.location}
          onChange={(value) => setFieldValue("location", value)}
          onReset={() => resetField("location")}
        />
      </div>
      <div className="flex lg:hidden space-x-4"></div>
    </form>
  );
};

export default ListingOffersFilter;

// Duplication of C:\Users\fde\Desktop\Listing\ChisfisNextjs\src\app\(real-estate-listings)\TabFilters.tsx
