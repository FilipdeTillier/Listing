"use client";

import React, { FC, Fragment, useState } from 'react';

import { TService } from '@/api/services/services';
import { Transition } from '@headlessui/react';

import { MapPinContent } from './MapPinContent';

export interface MapPinComponentProps {
  className?: string;
  isSelected?: boolean;
  lat: number;
  lng: number;
  data: TService;
}

const MapPinComponent: FC<MapPinComponentProps> = ({
  className = "",
  isSelected,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`nc-MapPinComponent relative  ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className={`flex px-2 py-1 rounded-md bg-white dark:bg-neutral-900 text-sm font-semibold items-center justify-center min-w-max shadow-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors ${
          isSelected
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : ""
        }`}
      >
        {data.minSalary}
      </span>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-50 bottom-full pb-3 -left-12 w-[260px] aspect-w-1">
          <div
            className={`nc-ExperiencesCard group relative shadow-2xl bg-white dark:bg-neutral-900 rounded-sm`}
          >
            <MapPinContent data={data} />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MapPinComponent;
