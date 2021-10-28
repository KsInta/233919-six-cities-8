import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import CityListComponent from '../city-list-component/city-list-component';
import Logo from '../logo/logo';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
import PlacesOptionComponent from '../places-option-component/places-option-component';
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
              <PlacesOptionComponent />
              <div className="cities__places-list places__list tabs__content">
                <OffersListComponent offers={offers} onListItemHover={handleActiveOffer} />
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
