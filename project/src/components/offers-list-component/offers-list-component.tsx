import OfferComponent from '../offer-component/offer-component';
import {OffersListProps} from './type';
import {getCurrentOffers} from '../../utils/utils';

function OffersListComponent(props: OffersListProps): JSX.Element {
  const {offers, onListItemHover, city} = props;
  const currentOffers = (city)?getCurrentOffers(offers, city):offers;

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => <OfferComponent key={offer.id} offer={offer} onListItemHover={onListItemHover}/>)}
    </div>
  );
}

export default OffersListComponent;
