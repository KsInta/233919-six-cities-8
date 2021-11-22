import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Offers} from './types';
import {AuthInfo} from './auth-data';
import {AuthorizationStatus, SortType} from '../const';

enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSorting = 'option/changeSorting',
  LoadOffers = 'data/loadOffers',
  IsDataLoaded = 'data/isLoading',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetAuthor = 'data/setAuthor',
  RedirectToRoute = 'user/redirectToRoute',
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

type IsDataLoadedAction = {
  type: ActionType.IsDataLoaded,
  payload: boolean,
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

type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute,
  payload: string,
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};

export type Actions = ChangeCityAction | ChangeSortingAction | LoadOffersAction | IsDataLoadedAction | RequireAuthorizationAction | RequireLogoutAction | SetAuthorAction | RedirectToRouteAction;

export type {ChangeCityAction, ChangeSortingAction, LoadOffersAction, IsDataLoadedAction, RequireAuthorizationAction, RequireLogoutAction, SetAuthorAction, RedirectToRouteAction};

export type {ThunkActionResult, ThunkAppDispatch};
