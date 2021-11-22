import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import FavouriteComponent from '../favourite-component/favourite-component';
import {FavouritesScreenProps} from './type';
import {AppRoute} from '../../const';

function FavouritesScreen({offers}: FavouritesScreenProps): JSX.Element {
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link to={AppRoute.Main} className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === 'Amsterdam').map((offer) => offer.isFavorite ? <FavouriteComponent offer={offer} key={offer.id}/> : '')}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link to={AppRoute.Main} className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === 'Cologne').map((offer) => offer.isFavorite ? <FavouriteComponent offer={offer} key={offer.id}/> : '')}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavouritesScreen;
