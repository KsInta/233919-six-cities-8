import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {OfferComponentProps} from '../offer-component/type';
import {numberToPersent} from '../../utils/utils';

type OfferFavouriteComponentProps = Omit<OfferComponentProps, 'onListItemHover'>;

function FavouriteComponent({offer: {isPremium, price, isFavorite, title, previewImage, rating, type, id}}: OfferFavouriteComponentProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className={isPremium ? 'place-card__mark' : 'place-card__mark visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${numberToPersent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavouriteComponent;