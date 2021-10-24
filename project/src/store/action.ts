import {Offers} from '../types/types';
import {ActionType, ChangeCityAction, ChangeOffersAction} from '../types/action';

const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const changeOffers = (offers: Offers): ChangeOffersAction => ({
  type: ActionType.ChangeOffers,
  payload: offers,
});

export {changeCity, changeOffers};
