import { FC } from 'react';

import BtnLikeIcon from '@/components/BtnLikeIcon';
import GallerySlider, { GallerySliderProps } from '@/components/GallerySlider';
import SaleOffBadge from '@/components/SaleOffBadge';

type SliderGallery = GallerySliderProps & {
  like: boolean;
  saleOff: boolean;
  id: string;
};

export const SliderGallery: FC<SliderGallery> = ({
  like,
  saleOff,
  id,
  ...galleryProps
}) => (
  <div className="relative w-full md:w-72 flex-shrink-0 overflow-hidden">
    <GallerySlider
      {...galleryProps}
      ratioClass="aspect-w-12 aspect-h-9 md:aspect-h-11"
      uniqueID={`ExperiencesCardH_${id}`}
    />
    <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />
    {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
  </div>
);
