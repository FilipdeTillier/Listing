import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { PATHS } from '@/routers/paths';
import Logo from '@/shared/Logo';
import NavigationItem from '@/shared/Navigation/NavigationItem';

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  const t = useTranslations();
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        <div className="flex justify-start flex-1 space-x-3 space-x-10">
          <Logo className="w-24 self-center" />
          <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="flex justify-end w-full">
            <NavigationItem
              menuItem={{
                id: "",
                name: t("add-offer"),
                href: PATHS.addOffer,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
