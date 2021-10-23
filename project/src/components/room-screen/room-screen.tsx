import {useState} from 'react';
import {useParams} from 'react-router';
import CommentFormComponent from '../comment-form-component/comment-form-component';
import Logo from '../logo/logo';
import Map from '../map/map';
import OffersListComponent from '../offers-list-component/offers-list-component';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import ReviewListComponent from '../review-list-component/review-list-component';
import {RoomScreenProps} from './type';
import {AuthorizationStatus} from '../../const';
import {numberToPersent} from '../../utils/utils';

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

function RoomScreen({offers, comments, neighbours, authorizationStatus}: RoomScreenProps): JSX.Element {
  const params: {id: string} = useParams();
  const id = +params.id;
  const thatOffer = offers.find((offer) => offer.id === id);
  const [activeOffer, setActiveOffer] = useState(0);
  const hoverOfferHandler = (idHover: number) => {
    setActiveOffer(idHover);
  };

  if (!thatOffer) {
    return <PageNotFoundScreen />;
  }

  const {rating, title, description, host, isPremium, isFavorite, price, type, bedrooms, maxAdults, goods, images, city} = thatOffer;

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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <span className="visually-hidden">{activeOffer}</span>
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
                <button className={isFavorite ? 'property__bookmark-button place-card__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewListComponent comments={comments} />
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentFormComponent /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={neighbours} mapHeigth={'579px'}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersListComponent offers={neighbours} onListItemHover={hoverOfferHandler} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
