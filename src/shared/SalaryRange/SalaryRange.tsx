import { FC } from 'react';

import { CURRENCY, TCurrency } from '@/constant';
import { Text, TextSize } from '@/shared/Text/Text';

type SalaryRangeProps = {
  minSalary: number;
  maxSalary: number;
  size?: TextSize;
  currency?: TCurrency;
};

export const SalaryRange: FC<SalaryRangeProps> = ({
  minSalary,
  maxSalary,
  size = "medium",
  currency = CURRENCY.PLN,
}) => (
  <div className={`text-green-600`}>
    <Text size={size} as="span">
      {minSalary}
    </Text>{" "}
    -{" "}
    <Text size={size} as="span">
      {maxSalary}
    </Text>
    <Text size={size} as="span" className="ms-1">
      {currency}
    </Text>
  </div>
);
