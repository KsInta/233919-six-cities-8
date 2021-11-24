import HeaderNavComponent from '../header-nav-component/header-nav-component';
import Logo from '../logo/logo';

function HeaderComponent(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <HeaderNavComponent />
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
