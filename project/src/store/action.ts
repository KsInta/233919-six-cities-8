import {Offers} from '../types/types';
import {ActionType, ChangeCityAction, ChangeOffersAction, ChangeSortingAction} from '../types/action';
import {SortType} from '../const';

const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const changeOffers = (offers: Offers): ChangeOffersAction => ({
  type: ActionType.ChangeOffers,
  payload: offers,
});

const changeSorting = (option: SortType): ChangeSortingAction => ({
  type: ActionType.ChangeSorting,
  payload: option,
});

export {changeCity, changeOffers, changeSorting};
