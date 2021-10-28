import {Offers} from './types';
import {SortType} from '../const';

enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  ChangeSorting = 'option/changeSorting',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

type ChangeOffersAction = {
  type: ActionType.ChangeOffers,
  payload: Offers,
}

type ChangeSortingAction = {
  type: ActionType.ChangeSorting,
  payload: SortType,
}

export {ActionType};
export type Actions = ChangeCityAction | ChangeOffersAction | ChangeSortingAction;
export type {ChangeCityAction, ChangeOffersAction, ChangeSortingAction};
