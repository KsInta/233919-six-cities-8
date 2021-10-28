import {Offer} from '../../types/types';

type OfferComponentProps = {
  offer: Offer,
  onListItemHover: (id: number) => void,
};

export type {OfferComponentProps};
