import {Offers} from '../types/types';
import {ActionType, ChangeCityAction, ChangeSortingAction, LoadOffersAction, IsDataLoadedAction, RequireAuthorizationAction, RequireLogoutAction, SetAuthorAction, RedirectToRouteAction} from '../types/action';
import {AppRoute, AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from '../types/auth-data';

const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const changeSorting = (option: SortType): ChangeSortingAction => ({
  type: ActionType.ChangeSorting,
  payload: option,
});

const loadOffers = (offers: Offers): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const toggleIsLoading = (isLoading: boolean): IsDataLoadedAction => ({
  type: ActionType.IsDataLoaded,
  payload: isLoading,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
  payload: AuthorizationStatus.NoAuth,
});

const setAuthor = (author: AuthInfo): SetAuthorAction => ({
  type: ActionType.SetAuthor,
  payload: author,
});

const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export {changeCity, changeSorting, loadOffers, toggleIsLoading, requireAuthorization, requireLogout, setAuthor, redirectToRoute};
