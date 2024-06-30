"use client";

import React, { FC, useState } from 'react';

import { TService } from '@/api/services/services';
import { DEMO_EXPERIENCES_LISTINGS } from '@/data/listings';
import Pagination from '@/shared/Pagination';

import ListingOffersFilter from '../listing-offers-filters/ListingOffersFilters';
import { OffersListing } from '../offers-listing/OffersListing';
import { OffersMap } from '../offers-map/OffersMap';

const DEMO_EXPERIENCES = DEMO_EXPERIENCES_LISTINGS.filter((_, i) => i < 12);

export interface ListingOffersMapProps {
  services: TService[];
}

const ListingOffersMap: FC<ListingOffersMapProps> = ({ services }) => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);

  return (
    <div>
      <ListingOffersFilter />
      <div className="relative flex min-h-screen mt-16 md:mt-20 text-center">
        <div className="min-h-screen w-full xl:w-2/3 2xl:w-1/2 flex-shrink-0 xl:px-8 px-2">
          <div className="grid grid-cols-1 gap-4">
            <OffersListing
              services={services}
              setCurrentHoverID={setCurrentHoverID}
            />
          </div>
        </div>

        <div
          className="flex xl:hidden items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer"
          onClick={() => setShowFullMapFixed(true)}
        >
          <i className="text-lg las la-map"></i>
          <span>Show map</span>
        </div>

        <OffersMap
          showFullMapFixed={showFullMapFixed}
          setShowFullMapFixed={setShowFullMapFixed}
          currentHoverID={currentHoverID}
          services={services}
        />
      </div>
    </div>
  );
};

export default ListingOffersMap;
