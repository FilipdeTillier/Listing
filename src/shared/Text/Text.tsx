import cn from 'classnames';
import { FC } from 'react';

export type TextSize = "superSmall" | "small" | "medium" | "large";

type TextProps = {
  className?: string;
  as?: React.ElementType;
  children: React.ReactElement | string | number | null | undefined | boolean;
  size?: TextSize;
};

export const SIZES = {
  superSmall: "text-[10px]",
  small: "text-xs",
  medium: "text-sm",
  large: "text-md",
};

export const Text: FC<TextProps> = ({
  className,
  as = "p",
  children,
  size = "medium",
}) => {
  const As = as;

  return <As className={cn(className, SIZES[size])}>{children}</As>;
};
