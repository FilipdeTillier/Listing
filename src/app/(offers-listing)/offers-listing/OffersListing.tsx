import { Dispatch, FC, SetStateAction } from 'react';

import { TService } from '@/api/services/services';

import OfferItem from '../offer-item/OfferItem';

type OffersListingProps = {
  services: TService[];
  setCurrentHoverID?: Dispatch<SetStateAction<string | number>>;
};

export const OffersListing: FC<OffersListingProps> = ({
  services,
  setCurrentHoverID,
}) => {
  return (
    <>
      {services.map((service) => (
        <div
          key={service.id}
          onMouseEnter={() => setCurrentHoverID?.((_) => service.id)}
          onMouseLeave={() => setCurrentHoverID?.((_) => -1)}
        >
          <OfferItem data={service} />
        </div>
      ))}
    </>
  );
};
