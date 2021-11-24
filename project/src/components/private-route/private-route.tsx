import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const';
import {History} from 'history';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  renderAllowed: boolean,
  redirectTo: AppRoute,
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, renderAllowed, redirectTo} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        renderAllowed
          ? render(routeProps)
          : <Redirect to={redirectTo} />
      )}
    />
  );
}

export default PrivateRoute;
