import { FC } from "react";

import { Popover } from "@headlessui/react";

import { FilterBrandContent } from "./FilterBrandContent";

type FilterBrandProps = {
  onChange: (value: string) => void;
  onReset: () => void;
  value: string | null;
};

const FilterBrand: FC<FilterBrandProps> = ({ onChange, onReset, value }) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <FilterBrandContent
          open={open}
          close={close}
          onChange={onChange}
          onReset={onReset}
          value={value}
        />
      )}
    </Popover>
  );
};

export default FilterBrand;
