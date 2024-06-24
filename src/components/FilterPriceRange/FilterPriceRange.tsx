import { FC } from 'react';

import { Popover } from '@headlessui/react';

import { FilterPriceRangeContent } from './FilterPriceRangeContent';

type FilterPriceRangeProps = {
  onChange: (range: { min: number; max: number }) => void;
  onReset: () => void;
  min: number | null;
  max: number | null;
};

const FilterPriceRange: FC<FilterPriceRangeProps> = ({
  onChange,
  onReset,
  min,
  max,
}) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <FilterPriceRangeContent
          onChange={onChange}
          onReset={onReset}
          min={min}
          max={max}
          open={open}
          close={close}
        />
      )}
    </Popover>
  );
};

export default FilterPriceRange;
