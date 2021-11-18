import {Offers} from './types';
import {AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from './auth-data';

type State = {
  city: string,
  offers: Offers,
  sortType: SortType;
  authorizationStatus: AuthorizationStatus,
  author: AuthInfo;
  isDataLoaded: boolean,
}

export type {State};
