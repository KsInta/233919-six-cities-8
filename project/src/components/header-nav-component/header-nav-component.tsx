import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-actions';

const mapStateToProps = ({author, authorizationStatus}: State) => ({
  author,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logoutApp() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function HeaderNavComponent ({author, authorizationStatus, logoutApp}: PropsFromReduxType) :JSX.Element {

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {(authorizationStatus === AuthorizationStatus.Auth) ? <span className="header__user-name user__name">{author.email}</span>
              :<span className="header__login">Sign in</span>}
          </Link>
        </li>
        {(authorizationStatus === AuthorizationStatus.Auth) &&
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#">
                <span className="header__signout" onClick={logoutApp}>Sign out</span>
              </Link>
            </li>}
      </ul>
    </nav>
  );
}

export {HeaderNavComponent};
export default connector(HeaderNavComponent);
