import {Offer, Offers, Comments} from './types';
import {AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from './auth-data';
import {RootState} from '../store/root-reducer';

type OptionProcess = {
  city: string,
  sortType: SortType,
}

type AppData = {
  offers: Offers,
  offer: Offer,
  nearOffers: Offers,
  reviews: Comments,
  favouriteOffers: Offers,
  isDataLoaded: boolean,
}

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  author: AuthInfo,
}

type State = RootState;

export type {State, OptionProcess, AppData, UserProcess};
