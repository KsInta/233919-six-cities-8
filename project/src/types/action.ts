import {Offers} from './types';

enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

type ChangeOffersAction = {
  type: ActionType.ChangeOffers,
  payload: Offers,
}

export {ActionType};
export type Actions = ChangeCityAction | ChangeOffersAction;
export type {ChangeCityAction, ChangeOffersAction};
