import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

const Heading2: React.FC = ({}) => {
  const t = useTranslations();

  return (
    <div>
      <h2 className="text-4xl font-semibold">{t("h1")}</h2>
    </div>
  );
};

export default Heading2;
