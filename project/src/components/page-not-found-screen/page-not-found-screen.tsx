import HeaderComponent from '../header-component/header-component';
import {Link} from 'react-router-dom';

function PageNotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <HeaderComponent />
      <main>
        <div className="container" style={{textAlign: 'center'}}>
          <h1>
            404.
            <br />
            <small>Page not found</small>
          </h1>
          <Link to="/">Go to main page</Link>
        </div>
      </main>
    </div>
  );
}

export default PageNotFoundScreen;
