import { useTranslations } from "next-intl";
import React from "react";

import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading2 from "@/shared/Heading2";

import ListingOffersMap from "./(offers-listing)/listing-offers-map/ListingOffersMap";

function PageHome() {
  const t = useTranslations();
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />
      <div className="flex w-full justify-center items-center my-4 lg:my-10 mx-auto text-center">
        <Heading2 subHeading={false} heading={t("h1")} />
      </div>
      <div className="relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <ListingOffersMap />
      </div>
    </main>
  );
}

export default PageHome;
