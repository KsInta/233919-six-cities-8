import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import CityListComponent from '../city-list-component/city-list-component';
import Logo from '../logo/logo';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
//import {Offer} from '../../types/types';
import {getCurrentOffers} from '../../utils/utils';

type MainScreenProps = {
}

type PropsFromReduxType = ConnectedProps<typeof connector>
type ConnectedComponentPropsType = PropsFromReduxType & MainScreenProps;

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps);

function MainScreen(props: ConnectedComponentPropsType): JSX.Element {
  const {city, offers} = props;
  const [selectedOffer, setSelectedOffer] = useState(0);
  const handleActiveOffer = (id:number):void => {
    setSelectedOffer(id);
  };

  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityListComponent />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{getCurrentOffers(offers, city).length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersListComponent offers={offers} onListItemHover={handleActiveOffer} city={city}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} selectedOffer={selectedOffer} mapHeigth="100%"/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
