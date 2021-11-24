import {Offer, Offers, Comments} from '../types/types';
import {ActionType, Actions} from '../types/action';
import {AppRoute, AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from '../types/auth-data';

const changeCity = (city: string): Actions => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const changeSorting = (option: SortType): Actions => ({
  type: ActionType.ChangeSorting,
  payload: option,
});

const loadOffers = (offers: Offers): Actions => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const toggleIsLoading = (isLoading: boolean): Actions => ({
  type: ActionType.IsDataLoaded,
  payload: isLoading,
});

const requireAuthorization = (authStatus: AuthorizationStatus): Actions => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): Actions => ({
  type: ActionType.RequireLogout,
  payload: AuthorizationStatus.NoAuth,
});

const setAuthor = (author: AuthInfo): Actions => ({
  type: ActionType.SetAuthor,
  payload: author,
});

const redirectToRoute = (url: AppRoute): Actions => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

const loadOfferById = (offer: Offer): Actions => ({
  type: ActionType.LoadOfferById,
  payload: offer,
});

const loadOfferComments = (comments: Comments): Actions => ({
  type: ActionType.LoadOfferComments,
  payload: comments,
});

const loadNearOffers = (offers: Offers): Actions => ({
  type: ActionType.LoadNearOffers,
  payload: offers,
});

const loadFavouriteOffers = (offers: Offers): Actions => ({
  type: ActionType.LoadFavouritesOffers,
  payload: offers,
});

const setFavouriteInOffer = (id: number, status: boolean): Actions => ({
  type: ActionType.SetFavouriteInOffer,
  payload: {id, status},
});

const setFavourite = (id: number, status: boolean): Actions => ({
  type: ActionType.SetFavourite,
  payload: {id, status},
});

export {changeCity, changeSorting, loadOffers, toggleIsLoading, requireAuthorization, requireLogout, setAuthor, redirectToRoute, loadOfferComments, loadNearOffers, loadOfferById, loadFavouriteOffers, setFavouriteInOffer, setFavourite};
