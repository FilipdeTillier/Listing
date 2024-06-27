"use server";

import React from 'react';

import { getProjects } from '@/api/services/services';
import Heading2 from '@/shared/Heading2';

import ListingOffersMap from './(offers-listing)/listing-offers-map/ListingOffersMap';

export type PageHomeQueryParams = {
  location: string;
  brand: string;
  minSalary: string;
  maxSalary: string;
};

type PageHomeProps = {
  searchParams: PageHomeQueryParams;
};

async function PageHome(data: PageHomeProps) {
  const { searchParams } = data;
  const projects = await getProjects(searchParams);
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="flex w-full justify-center items-center my-4 lg:my-10 mx-auto text-center">
        <Heading2 />
      </div>
      <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <ListingOffersMap services={projects} />
      </div>
    </main>
  );
}

export default PageHome;
