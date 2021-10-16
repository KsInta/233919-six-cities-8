import OfferComponent from '../offer-component/offer-component';
import {OffersListProps} from './type';

function OffersListComponent(props: OffersListProps): JSX.Element {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = id;
        return (
          <OfferComponent key={keyValue} offer={offer}/>
        );
      })}
    </div>
  );
}

export default OffersListComponent;
