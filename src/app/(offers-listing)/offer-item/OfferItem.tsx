import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { FC } from 'react';

import { TService } from '@/api/services/services';
import { Icon } from '@/shared/Icon/Icon';
import { SalaryRange } from '@/shared/SalaryRange/SalaryRange';
import { Text } from '@/shared/Text/Text';

export interface OfferItemProps {
  className?: string;
  data: TService;
}

const OfferItem: FC<OfferItemProps> = ({ className = "", data }) => {
  const t = useTranslations();
  const { name, minSalary, maxSalary, company, location, logoUrl } = data;

  const hasPriceValue = minSalary && maxSalary;

  return (
    <div
      className={`shadow-md nc-OfferItem group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-md overflow-hidden ${className}`}
    >
      <Link href={`/about`} className="absolute inset-0" />
      <div className="flex">
        <div>
          <img src={logoUrl} alt={company} />
        </div>
        <div className="flex-grow p-3  flex flex-col">
          <div className="flex justify-between">
            <span>{name}</span>
            {hasPriceValue ? (
              <SalaryRange
                minSalary={minSalary}
                maxSalary={maxSalary}
                size="large"
              />
            ) : (
              <Text as="span">Brak informacji</Text>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex items-center me-3">
                <Icon icon="BuildingOffice" size="superSmall" />
                <Text size="small" as="span">
                  {company}
                </Text>
              </div>
              <div className="flex items-center">
                <Icon icon="Pin" size="superSmall" />
                <Text as="span" size="small">
                  {t(location)}
                </Text>
              </div>
              <div></div>
            </div>
            <div>
              <Text as="span">tags</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
