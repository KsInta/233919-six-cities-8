import {connect, ConnectedProps} from 'react-redux';
import OfferComponent from '../offer-component/offer-component';
import {OffersListProps} from './type';
import {State} from '../../types/state';
import {getCurrentOffers} from '../../utils/utils';
import {getSortedOffers} from '../../sorting';

type PropsFromReduxType = ConnectedProps<typeof connector>
type ConnectedComponentPropsType = PropsFromReduxType & OffersListProps;

const mapStateToProps = ({sortType, city}: State) => ({
  sortType,
  city,
});

const connector = connect(mapStateToProps);

function OffersListComponent({offers, onListItemHover, city, sortType} : ConnectedComponentPropsType): JSX.Element {
  offers = getCurrentOffers(offers, city);
  offers = getSortedOffers(offers, sortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferComponent key={offer.id} offer={offer} onListItemHover={onListItemHover}/>)}
    </div>
  );
}

export default connector(OffersListComponent);
