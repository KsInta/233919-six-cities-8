import {connect, ConnectedProps} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FavouritesScreen from '../favourites-screen/favourites-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {AppScreenProps} from './type';
import {State} from '../../types/state';
import {isCheckedAuth} from '../../app';

type PropsFromReduxType = ConnectedProps<typeof connector>
type ConnectedComponentPropsType = PropsFromReduxType & AppScreenProps;

const mapStateToProps = ({offers, authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

function App({offers, comments, authorizationStatus, isDataLoaded}: ConnectedComponentPropsType): JSX.Element {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen />
        </Route>
        <Route path={AppRoute.Login} exact>
          <SignInScreen />
        </Route>
        <Route path={AppRoute.RoomId} exact>
          <RoomScreen
            offers={offers}
            comments={comments}
            authorizationStatus={AuthorizationStatus.NoAuth}
          />
        </Route>
        <PrivateRoute
          path={AppRoute.Favourites}
          exact
          render={() => <FavouritesScreen  offers={offers} />}
        >
        </PrivateRoute>
        <Route>
          <PageNotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
