import OfferComponent from '../offer-component/offer-component';
import {Offer} from '../../types/types';

function FavoriteComponent({offer}: {offer: Offer}): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <OfferComponent offer={offer} />
    </article>
  );
}

export default FavoriteComponent;
