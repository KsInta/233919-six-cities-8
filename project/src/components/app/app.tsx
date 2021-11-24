import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import FavouritesScreen from '../favourites-screen/favourites-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import {AppRoute} from '../../const';
import {State} from '../../types/state';
import {isCheckedAuth, isAuthenticated} from '../../app';
import browserHistory from '../../browser-history';

const mapStateToProps = ({offers, authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>

function App({offers, authorizationStatus, isDataLoaded}: PropsFromReduxType): JSX.Element {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen />
        </Route>
        <Route path={AppRoute.RoomId} exact>
          <RoomScreen />
        </Route>
        <PrivateRoute
          path={AppRoute.Login}
          exact
          render={() => <SignInScreen />}
          redirectTo={AppRoute.Main}
          renderAllowed={!isAuthenticated(authorizationStatus)}
        >
        </PrivateRoute>
        <PrivateRoute
          path={AppRoute.Favourites}
          exact
          render={() => <FavouritesScreen />}
          redirectTo={AppRoute.Login}
          renderAllowed={isAuthenticated(authorizationStatus)}
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
