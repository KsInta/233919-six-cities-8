import {Offers} from '../../types/types';

type OffersListProps = {
  offers: Offers,
  onListItemHover: (id: number) => void,
  city?: string,
}

export type {OffersListProps};
