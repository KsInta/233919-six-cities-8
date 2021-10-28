import {Offers} from './types';
import { SortType } from '../const';

type State = {
  city: string,
  offers: Offers,
  sortType: SortType;
}

export type {State};
