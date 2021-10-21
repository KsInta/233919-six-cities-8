import {City, Offers, Offer} from '../../types/types';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer?: Offer | undefined;
  mapHeigth: string;
};

export type {MapProps};
