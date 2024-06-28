import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import BuildingOffice from '@/images/icons/building-office.svg';
import Pin from '@/images/icons/pin.svg';

export const Icons = {
  BuildingOffice: BuildingOffice,
  Pin: Pin,
};

export type TIconType = keyof typeof Icons;

type IconSize = "superSmall" | "small" | "medium" | "large";

const IconSizes = {
  superSmall: 16,
  small: 24,
  medium: 32,
  large: 40,
} as const;

type IconProps = Partial<{
  className: string;
  onClick: () => void;
  size: IconSize;
}> & {
  icon: TIconType;
};

export const Icon = ({
  icon,
  className = "",
  onClick,
  size = "medium",
}: IconProps): ReactElement => (
  <Image
    className={cn("me-1", className)}
    src={Icons[icon]}
    width={IconSizes[size]}
    height={IconSizes[size]}
    alt="company-icon"
    onClick={onClick}
  />
);
