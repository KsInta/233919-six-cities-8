import {Link} from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="app__back" to="/">
      <span className="visually-hidden">Go to home page</span>
      <img className="game__logo" src="img/logo.svg" alt="Six cities" />
    </Link>
  );
}

export default Logo;
