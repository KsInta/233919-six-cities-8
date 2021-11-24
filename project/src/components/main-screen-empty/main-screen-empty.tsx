import CityListComponent from '../city-list-component/city-list-component';
import HeaderComponent from '../header-component/header-component';

function MainScreenEmpty(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderComponent/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="container">
          <div className="tabs">
            <CityListComponent />
          </div>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreenEmpty;
