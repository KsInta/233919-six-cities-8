import {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import CityListComponent from '../city-list-component/city-list-component';
import FooterComponent from '../footer-component/footer-component';
import HeaderComponent from '../header-component/header-component';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
import PlacesOptionComponent from '../places-option-component/places-option-component';
import {State} from '../../types/state';
import {getCurrentOffers} from '../../utils/utils';
import {getActiveCity} from '../../store/option-process/selectors';
import {getOffers} from '../../store/app-data/selectors';

const mapStateToProps = (state: State) => ({
  city: getActiveCity(state),
  offers: getOffers(state),
});

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function MainScreen({city, offers}: PropsFromReduxType): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState(0);
  const handleActiveOffer = (id:number):void => {
    setSelectedOffer(id);
  };

  if (!offers.length) {
    return <MainScreenEmpty />;
  }

  return (
    <div className="page page--gray">
      <HeaderComponent />
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
              <OffersListComponent offers={offers} onListItemHover={handleActiveOffer} />
            </section>
            <div className="cities__right-section" style={{marginTop: '130px'}}>
              <Map city={city} offers={offers} selectedOffer={selectedOffer} mapHeigth="550px"/>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
