import { FC } from "react";

import { Popover } from "@headlessui/react";

import { FilterLocationContent } from "./FilterLocationContent";

type FilterPriceRangeProps = {
  onChange: (value: string) => void;
  onReset: () => void;
  value: string | null;
};

const FilterPriceRange: FC<FilterPriceRangeProps> = ({
  onChange,
  onReset,
  value,
}) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <FilterLocationContent
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

export default FilterPriceRange;
