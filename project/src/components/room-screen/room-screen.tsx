import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import CommentFormComponent from '../comment-form-component/comment-form-component';
import FooterComponent from '../footer-component/footer-component';
import HeaderNavComponent from '../header-nav-component/header-nav-component';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import ReviewListComponent from '../review-list-component/review-list-component';
import {AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import {numberToPersent} from '../../utils/utils';
import {fetchCommentsAction, fetchNearOffersAction, fetchOfferByIdAction, fetchSetFavouriteAction} from '../../store/api-actions';
import {getOffers, getCurrentOffer, getReviews, getNearOffers} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

const mapStateToProps = (state: State) => ({
  offer: getCurrentOffer(state),
  offers: getOffers(state),
  reviews: getReviews(state),
  nearOffers: getNearOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSetFavourite: (id: number, status: boolean) => {
    dispatch(fetchSetFavouriteAction(id, status));
  },
  onLoad: (id: string) => Promise.all([
    dispatch(fetchOfferByIdAction(id)),
    dispatch(fetchCommentsAction(id)),
    dispatch(fetchNearOffersAction(id)),
  ]),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PremiumMarker() {
  return <div className="property__mark"><span>Premium</span></div>;
}

function ApartmentPicture({src}: {src: string}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio"/>
    </div>
  );
}

function Good({goodName}: {goodName: string}) {
  return <li className="property__inside-item">{goodName}</li>;
}

function RoomScreen({offer, reviews, offers, nearOffers, onLoad, onSetFavourite, authorizationStatus}: PropsFromRedux): JSX.Element {
  const {id, rating, title, description, host, isPremium, isFavorite, price, type, bedrooms, maxAdults, goods, images, city} = offer;
  const params: {id: string} = useParams();
  const mapPoints = [...nearOffers, offer];
  const selectedOffer = id;
  const hoverOfferHandler = () => null;

  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    onLoad(params.id).then(() => setDataLoaded(true));
  }, [params.id, onLoad]);

  if (!isDataLoaded) {
    return <LoadingScreen/>;
  }

  if (!id) {
    return <PageNotFoundScreen />;
  }

  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <HeaderNavComponent />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => <ApartmentPicture src={image} key={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <PremiumMarker /> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button" onClick={() => onSetFavourite(id, !isFavorite)}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${numberToPersent(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <Good goodName={good} key={good}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewListComponent reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentFormComponent /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city.name} offers={mapPoints} mapHeigth={'579px'} selectedOffer={selectedOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersListComponent offers={nearOffers} onListItemHover={hoverOfferHandler} />
            </div>
          </section>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export {RoomScreen};
export default connector(RoomScreen);
