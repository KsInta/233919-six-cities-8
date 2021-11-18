import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Offers} from './types';
import {AuthInfo} from './auth-data';
import {AuthorizationStatus, SortType} from '../const';

enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  ChangeSorting = 'option/changeSorting',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetAuthor = 'data/setAuthor',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

type ChangeSortingAction = {
  type: ActionType.ChangeSorting,
  payload: SortType,
}

type LoadOffersAction = {
  type: ActionType.LoadOffers,
  payload: Offers,
}

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
}

type RequireLogoutAction = {
  type: ActionType.RequireLogout,
  payload: AuthorizationStatus,
}

type SetAuthorAction = {
  type: ActionType.SetAuthor,
  payload: AuthInfo,
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};

export type Actions = ChangeCityAction | ChangeSortingAction | LoadOffersAction | RequireAuthorizationAction | RequireLogoutAction | SetAuthorAction;

export type {ChangeCityAction, ChangeSortingAction, LoadOffersAction, RequireAuthorizationAction, RequireLogoutAction, SetAuthorAction};

export type {ThunkActionResult, ThunkAppDispatch};
