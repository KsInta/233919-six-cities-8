import {ThunkActionResult} from '../types/action';
import {loadOffers, requireAuthorization, requireLogout, setAuthor} from './action';
import {saveToken, dropToken} from '../services/token';
import {adaptOfferToClient, adaptAuthInfoToClient} from '../services/adapter';
import {APIRoute, AuthorizationStatus} from '../const';
import {ServerOffer} from '../types/types';
import {AuthData, ServerAuthInfo} from '../types/auth-data';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerOffer[]>(APIRoute.Offers);
    const offers = data.map(adaptOfferToClient);
    dispatch(loadOffers(offers));
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
    await api.post<ServerAuthInfo>(APIRoute.Login, authData)
      .then((response) => {
        const author = adaptAuthInfoToClient(response.data);
        saveToken(author.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthor(author));
      });
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};
