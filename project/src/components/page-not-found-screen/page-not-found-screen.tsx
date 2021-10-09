import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

function PageNotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1>
          404.
          <br />
          <small>Page not found</small>
        </h1>
        <Link to="/">Go to main page</Link>
      </main>
    </div>
  );
}

export default PageNotFoundScreen;
