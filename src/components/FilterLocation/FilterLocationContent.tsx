import cn from "classnames";
import { useTranslations } from "next-intl";
import { FC, Fragment, useEffect, useMemo, useState } from "react";

import { buttonBorderClasses } from "@/constant/classNames";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonThird from "@/shared/ButtonThird";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const locations = [
  { label: "Warszawa", value: "warsaw" },
  { label: "Kraków", value: "cracow" },
  { label: "Wrocław", value: "wroclaw" },
  { label: "Poznań", value: "poznan" },
  { label: "Gdańsk", value: "gdansk" },
];

type FilterLocationContentProps = {
  open: boolean;
  close: () => void;
  value: string | null;
  onReset: () => void;
  onChange: (value: string) => void;
};

export const FilterLocationContent: FC<FilterLocationContentProps> = ({
  open,
  close,
  value,
  onReset,
  onChange,
}) => {
  const salaryIsNotNull = value;
  const t = useTranslations();
  const [currentLocation, setCurrentLocation] = useState(value);

  const locationLabel = useMemo(
    () => locations.find((el) => el.value === value)?.label,
    [value]
  );

  useEffect(() => {
    setCurrentLocation(value);
  }, [open, setCurrentLocation, value]);

  return (
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
            <span>{locationLabel}</span>
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
          <span>{t("location")}</span>
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
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map(({ value, label }) => (
                  <ButtonThird
                    key={value}
                    onClick={() => setCurrentLocation(value)}
                    sizeClass="px-4 py-2 sm:px-5"
                    className={cn(
                      "border",
                      currentLocation === value
                        ? "bg-primary-50 border-primary-500"
                        : ""
                    )}
                    type="button"
                  >
                    {label}
                  </ButtonThird>
                ))}
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
                  currentLocation && onChange(currentLocation);
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
  );
};
