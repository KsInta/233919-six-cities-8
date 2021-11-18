import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo(): JSX.Element {
  return (
    <div className="header__left">
      <Link className="app__back" to={AppRoute.Main}>
        <span className="visually-hidden">Go to home page</span>
        <img className="game__logo" src="img/logo.svg" alt="Six cities" />
      </Link>
    </div>
  );
}

export default Logo;
