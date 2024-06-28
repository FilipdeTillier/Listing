import GoogleMapReact from 'google-map-react';
import { FC, useState } from 'react';

import { TService } from '@/api/services/services';
import MapPinComponent from '@/components/MapPinComponent/MapPinComponent';
import ButtonClose from '@/shared/ButtonClose';

const { GOOGLE_API_KEY = "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY" } =
  process.env;
const ZOOM_FOR_POLAND = 6;
const WARSAW_COORDS = { lat: 52.22977, lng: 21.01178 };

type OfferMapProps = {
  currentHoverID: string | number;
  services: TService[];
};

export const OffersMap: FC<OfferMapProps> = ({ currentHoverID, services }) => {
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);

  return (
    <div
      className={`xl:flex-grow xl:static xl:block ${
        showFullMapFixed ? "fixed inset-0 z-50" : "hidden"
      }`}
    >
      {showFullMapFixed && (
        <ButtonClose
          onClick={() => setShowFullMapFixed(false)}
          className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
        />
      )}

      <div className="fixed xl:sticky top-0 xl:top-[88px] left-0 w-full h-full xl:h-[calc(100vh-88px)] rounded-md overflow-hidden">
        {/* BELLOW IS MY GOOGLE API KEY -- PLEASE DELETE AND TYPE YOUR API KEY */}

        <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLE_API_KEY,
          }}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={ZOOM_FOR_POLAND}
          center={WARSAW_COORDS}
        >
          {services.map((item) => (
            <MapPinComponent
              isSelected={currentHoverID === item.id}
              key={item.id}
              lat={item.map.lat}
              lng={item.map.lng}
              data={item}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};
