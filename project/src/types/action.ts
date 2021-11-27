import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Offer, Offers, Comments} from './types';
import {AuthInfo} from './auth-data';
import {AuthorizationStatus, SortType} from '../const';

enum ActionType {
  ChangeCity = 'option/changeCity',
  ChangeSorting = 'option/changeSorting',
  LoadOffers = 'data/loadOffers',
  IsDataLoaded = 'data/isLoading',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetAuthor = 'user/setAuthor',
  RedirectToRoute = 'user/redirectToRoute',
  LoadOfferById = 'data/loadOfferById',
  LoadOfferComments = 'data/loadOfferComments',
  LoadNearOffers = 'data/loadNearOffers',
  LoadFavouritesOffers = 'data/loadFavouritesOffers',
  SetFavourite = 'data/favourite',
  SetFavouriteInOffer = 'data/setFavouriteInOffer',
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

type LoadOfferByIdAction = {
  type: ActionType.LoadOfferById,
  payload: Offer,
}

type LoadOfferCommentsAction = {
  type: ActionType.LoadOfferComments,
  payload: Comments,
}

type LoadNearOffersAction = {
  type: ActionType.LoadNearOffers,
  payload: Offers,
}

type LoadFavouritesOffersAction = {
  type: ActionType.LoadFavouritesOffers,
  payload: Offers,
}

type SetFavouriteInOfferAction = {
  type: ActionType.SetFavouriteInOffer,
  payload: {id: number, status: boolean},
}

type SetFavouriteAction = {
  type: ActionType.SetFavourite,
  payload: {id: number, status: boolean},
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

type Actions = ChangeCityAction | ChangeSortingAction | LoadOffersAction | IsDataLoadedAction | RequireAuthorizationAction | RequireLogoutAction | SetAuthorAction | RedirectToRouteAction | LoadOfferCommentsAction | LoadNearOffersAction | LoadOfferByIdAction | LoadFavouritesOffersAction | SetFavouriteInOfferAction | SetFavouriteAction;

export {ActionType};

export type {Actions, ThunkActionResult, ThunkAppDispatch};
