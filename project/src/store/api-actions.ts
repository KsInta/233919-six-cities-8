import {ThunkActionResult} from '../types/action';
import {loadOffers, toggleIsLoading, requireAuthorization, requireLogout, setAuthor, redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {adaptOfferToClient, adaptAuthInfoToClient} from '../services/adapter';
import {AppRoute, APIRoute, AuthorizationStatus} from '../const';
import {ServerOffer} from '../types/types';
import {AuthData, ServerAuthInfo} from '../types/auth-data';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(toggleIsLoading(false));
    const {data} = await api.get<ServerOffer[]>(APIRoute.Offers);
    const offers = data.map(adaptOfferToClient);
    dispatch(loadOffers(offers));
    dispatch(toggleIsLoading(true));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<ServerAuthInfo>(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    //dispatch(toggleIsLoading(false));
    await api.post<ServerAuthInfo>(APIRoute.Login, authData)
      .then((response) => {
        const author = adaptAuthInfoToClient(response.data);
        saveToken(author.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthor(author));
        dispatch(redirectToRoute(AppRoute.Main));
      });
    //dispatch(toggleIsLoading(true));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};
