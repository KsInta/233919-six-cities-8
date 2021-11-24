import {Offer, Offers, Comments} from './types';
import {AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from './auth-data';

type State = {
  city: string,
  offers: Offers,
  offer: Offer,
  nearOffers: Offers,
  reviews: Comments,
  favouriteOffers: Offers,
  sortType: SortType;
  authorizationStatus: AuthorizationStatus,
  author: AuthInfo;
  isDataLoaded: boolean,
}

export type {State};
