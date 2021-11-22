import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {OfferComponentProps} from './type';
import {numberToPersent} from '../../utils/utils';

function OfferComponent({offer: {isPremium, price, isFavorite, title, previewImage, rating, type, id}, onListItemHover}: OfferComponentProps): JSX.Element {
  return (
    <article className="cities__place-card place-card" id={id.toString()} onMouseOver={()=> onListItemHover(id)} onMouseOut={()=> onListItemHover(0)}>
      <div className={isPremium ? 'place-card__mark' : 'place-card__mark visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
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

export default OfferComponent;
