import {AxiosError} from 'axios';
import {ThunkActionResult} from '../types/action';
import {loadOffers, toggleIsLoading, requireAuthorization, requireLogout, setAuthor, redirectToRoute, loadOfferComments, loadNearOffers, loadOfferById, setFavouriteInOffer, loadFavouriteOffers, setFavourite} from './action';
import {saveToken, dropToken} from '../services/token';
import {adaptOfferToClient, adaptAuthInfoToClient, adaptReviewToClient} from '../services/adapter';
import {toast} from 'react-toastify';
import {AppRoute, APIRoute, AuthorizationStatus, InformationMessages} from '../const';
import {ServerOffer} from '../types/types';
import {AuthData, ServerAuthInfo} from '../types/auth-data';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(toggleIsLoading(false));
      const {data} = await api.get<ServerOffer[]>(APIRoute.Offers);
      const offers = data.map(adaptOfferToClient);
      dispatch(loadOffers(offers));
      dispatch(toggleIsLoading(true));
    } catch {
      toast.error(InformationMessages.DataLoadingError);
    }
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<ServerAuthInfo>(APIRoute.Login)
      .then((response) => {
        const author = adaptAuthInfoToClient(response.data);
        saveToken(author.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthor(author));
      })
      .catch((err: AxiosError) => toast.error(err.response?.status));
  };

const loginAction = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<ServerAuthInfo>(APIRoute.Login, authData)
      .then((response) => {
        const author = adaptAuthInfoToClient(response.data);
        saveToken(author.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthor(author));
        dispatch(redirectToRoute(AppRoute.Main));
      })
      .catch((err: AxiosError) => toast.error(err.response?.status));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

const fetchOfferByIdAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}`);
      dispatch(loadOfferById(adaptOfferToClient(data)));
    } catch {
      toast.error(InformationMessages.DataLoadingError);
    }
  };

const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Comments}/${id}`);
      const comments = data.map(adaptReviewToClient);
      dispatch(loadOfferComments(comments));
    } catch {
      dispatch(loadOfferComments([]));
    }
  };

const fetchNearOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
      const offers = data.map(adaptOfferToClient);
      dispatch(loadNearOffers(offers));
    } catch {
      dispatch(loadNearOffers([]));
    }
  };

export const postCommentsAction = ({id, rating, comment}: { id: string, rating: number, comment: string }): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post(`${APIRoute.Comments}/${id}`, {rating, comment});
      const comments = data.map(adaptReviewToClient);
      dispatch(loadOfferComments(comments));
    } catch {
      toast.error(InformationMessages.DataLoadingError);
    }
  };

const fetchSetFavouriteAction = (id: number, status: boolean): ThunkActionResult =>
  async (dispatch, getState, api) => {
    if (getState().authorizationStatus === AuthorizationStatus.Auth) {
      try {
        await api.post(`${APIRoute.Favourite}/${id}/${Number(status)}`);
        dispatch(setFavourite(id, status));
        dispatch(setFavouriteInOffer(id, status));
      } catch {
        toast.error(InformationMessages.DataLoadingError);
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

const fetchFavouriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Favourite}`);
      const offers = data.map(adaptOfferToClient);
      dispatch(loadFavouriteOffers(offers));
    } catch {
      dispatch(loadFavouriteOffers([]));
      toast.error(InformationMessages.DataLoadingError);
    }
  };

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction, fetchCommentsAction, fetchNearOffersAction, fetchOfferByIdAction, fetchSetFavouriteAction, fetchFavouriteOffersAction};
