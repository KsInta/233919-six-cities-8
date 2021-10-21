import {useState} from 'react';
import CityComponent from '../city-component/city-component';
import Logo from '../logo/logo';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
import {MainScreenProps} from './type';
import {CITY} from '../../mocks/offers';
import {Offer} from '../../types/types';

function MainScreen(props: MainScreenProps): JSX.Element {
  const {offersCount, offers} = props;
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offerHandler = (id: number) => {
    const currentOffer = offers.find((offer) => offer.id=== id);
    setSelectedOffer(currentOffer);
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
            <ul className="locations__list tabs__list">
              <CityComponent city="Paris" />
              <CityComponent city="Cologne" />
              <CityComponent city="Brussels" />
              <CityComponent city="Amsterdam" />
              <CityComponent city="Hamburg" />
              <CityComponent city="Dusseldorf" />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
                <OffersListComponent offers={offers} onListItemHover={offerHandler} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={CITY} offers={offers} selectedOffer={selectedOffer} mapHeigth="100%"/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
