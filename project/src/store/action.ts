import {Offers} from '../types/types';
import {ActionType, ChangeCityAction, ChangeSortingAction, LoadOffersAction, RequireAuthorizationAction, RequireLogoutAction, SetAuthorAction} from '../types/action';
import {AuthorizationStatus, SortType} from '../const';
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

export {changeCity, changeSorting, loadOffers, requireAuthorization, requireLogout, setAuthor};
