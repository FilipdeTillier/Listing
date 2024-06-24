import cn from 'classnames';
import { FC } from 'react';

type SkeletonProps = {
  className?: string;
};

export const Skeleton: FC<SkeletonProps> = ({ className }) => (
  <div role="status" className="animate-pulse">
    <div
      className={cn(
        "h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4",
        className
      )}
    ></div>
  </div>
);
