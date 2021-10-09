import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainScreen from '../main-screen/main-screen';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {AppScreenProps} from './type';

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen offersCount={offersCount} />
        </Route>
        <Route path={AppRoute.Login} exact>
          <SignInScreen />
        </Route>
        <Route path={AppRoute.Room} exact>
          <RoomScreen />
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          exact
          render={() => <FavoritesScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <PageNotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
