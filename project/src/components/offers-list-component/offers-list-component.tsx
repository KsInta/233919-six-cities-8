import OfferComponent from '../offer-component/offer-component';
import {OffersListProps} from './type';

function OffersListComponent(props: OffersListProps): JSX.Element {
  const {offers, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
        (offer) => (<OfferComponent key={offer.id} offer={offer} onListItemHover={onListItemHover}/>),
      )}
    </div>
  );
}

export default OffersListComponent;
