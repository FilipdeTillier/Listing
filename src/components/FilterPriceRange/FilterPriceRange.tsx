import cn from "classnames";
import { useTranslations } from "next-intl";
import Slider from "rc-slider";
import { FC, Fragment, useState } from "react";

import { MAX_SALARY, MIN_SALARY } from "@/constant";
import { buttonBorderClasses } from "@/constant/classNames";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonThird from "@/shared/ButtonThird";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type FilterPriceRangeProps = {
  onChange: (range: { min: number; max: number }) => void;
  onReset: () => void;
  min: number | null;
  max: number | null;
};

const DEFAULT_MIN_SALARY = 10000;

const FilterPriceRange: FC<FilterPriceRangeProps> = ({
  onChange,
  onReset,
  min,
  max,
}) => {
  const t = useTranslations();
  const [values, setValues] = useState([MIN_SALARY, DEFAULT_MIN_SALARY]);
  const salaryIsNotNull = min !== null && max !== null;
  const defaultValues = salaryIsNotNull
    ? [min, max]
    : [MIN_SALARY, DEFAULT_MIN_SALARY];
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={cn(
              `flex items-center text-neutral-600 justify-center px-4 py-2 text-sm rounded-full focus:ring focus:ring-primary-200 focus:ring-opacity-50  focus:outline-none`,
              buttonBorderClasses,
              salaryIsNotNull ? "bg-primary-50 border-primary-500" : ""
            )}
          >
            {salaryIsNotNull ? (
              <>
                <span>
                  {`$${convertNumbThousand(min)} - $${convertNumbThousand(
                    max
                  )}`}
                </span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    onReset();
                  }}
                  className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer"
                >
                  <XMarkIcon className="h-3 w-3" />
                </span>
              </>
            ) : (
              <span>{t("salary")}</span>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 ">
              <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                <div className="relative flex flex-col px-5 py-6 space-y-8">
                  <div className="space-y-5">
                    <span className="font-medium">{t("salary")}</span>
                    <Slider
                      range
                      min={min || undefined}
                      max={MAX_SALARY}
                      defaultValue={defaultValues}
                      allowCross={false}
                      onChange={(e) => Array.isArray(e) && setValues(e)}
                    />
                  </div>

                  <div className="flex justify-between space-x-5">
                    <div>
                      <label
                        htmlFor="minPrice"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        {t("min")}
                      </label>
                      <div className="mt-1 relative rounded-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-neutral-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="minPrice"
                          disabled
                          id="minPrice"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                          value={min || MIN_SALARY}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="maxPrice"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        {t("max")}
                      </label>
                      <div className="mt-1 relative rounded-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-neutral-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          disabled
                          name="maxPrice"
                          id="maxPrice"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900 "
                          value={max || DEFAULT_MIN_SALARY}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                  <ButtonThird
                    onClick={() => {
                      close();
                    }}
                    sizeClass="px-4 py-2 sm:px-5"
                    type="button"
                  >
                    {t("cancel")}
                  </ButtonThird>
                  <ButtonPrimary
                    type="button"
                    onClick={() => {
                      onChange({ min: values[0], max: values[1] });
                      close();
                    }}
                    sizeClass="px-4 py-2 sm:px-5"
                  >
                    {t("confirm")}
                  </ButtonPrimary>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default FilterPriceRange;
