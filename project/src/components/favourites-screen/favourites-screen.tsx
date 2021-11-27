import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {useEffect, useState} from 'react';
import FavouritesScreenEmpty from '../favourites-screen-empty/favourites-screen-empty';
import FooterComponent from '../footer-component/footer-component';
import HeaderComponent from '../header-component/header-component';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import {AppRoute} from '../../const';
import {fetchSetFavouriteAction, fetchFavouriteOffersAction} from '../../store/api-actions';
import {numberToPersent} from '../../utils/utils';
import {getFavouriteOffers} from '../../store/app-data/selectors';

const mapStateToProps = (state: State) => ({
  favouriteOffers: getFavouriteOffers(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSetFavorite: (id: number, status: boolean) => {
    dispatch(fetchSetFavouriteAction(id, status)).then(() => dispatch(fetchFavouriteOffersAction()));
  },
  onLoad: () => dispatch(fetchFavouriteOffersAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function FavouritesScreen({favouriteOffers, onSetFavorite, onLoad}: PropsFromReduxType): JSX.Element {
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    onLoad().then(() => setDataLoaded(true));
  }, [onLoad]);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  if (!favouriteOffers.length) {
    return <FavouritesScreenEmpty />;
  }

  const citiesList = Array.from(new Set(favouriteOffers.map(({city}) => city.name))).sort();

  return (
    <div className="page page--gray">
      <HeaderComponent/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favouriteOffers.filter(({city: {name}}) => name === city).map((offer) => (
                      <article key={offer.id} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`${AppRoute.Room}${offer.id}`}>
                            <img className="place-card__image" src={offer.previewImage} width="150" height="110"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button
                              className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={() => onSetFavorite(offer.id, !offer.isFavorite)}
                            >
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"/>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `${numberToPersent(offer.rating)}%`}}/>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`${AppRoute.Room}${offer.id}`}>{offer.title}</Link>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export {FavouritesScreen};
export default connector(FavouritesScreen);
