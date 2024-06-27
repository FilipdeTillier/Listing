import Link from 'next/link';
import React, { FC } from 'react';

import { TService } from '@/api/services/services';
import { SalaryRange } from '@/shared/SalaryRange/SalaryRange';
import { Text } from '@/shared/Text/Text';

type MapPinContentProps = {
  data: TService;
};

const IMAGE_SIZE = 40;

export const MapPinContent: FC<MapPinContentProps> = ({
  data: { name, minSalary, logoUrl, maxSalary },
}) => {
  return (
    <Link className="w-full" href={"/about"}>
      <div className="flex w-full">
        <img src={logoUrl} alt={name} width={IMAGE_SIZE} height={IMAGE_SIZE} />
        <div className="flex flex-col  py-1 px-1 w-full">
          <Text className="text-left" as="p">
            {name}
          </Text>
          <div className="text-left">
            <SalaryRange
              minSalary={minSalary}
              maxSalary={maxSalary}
              size="superSmall"
            />
          </div>
        </div>
      </div>
      <div></div>
    </Link>
  );
};
