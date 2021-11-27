import {connect, ConnectedProps} from 'react-redux';
import OfferComponent from '../offer-component/offer-component';
import {OffersListProps} from './type';
import {State} from '../../types/state';
import {getCurrentOffers} from '../../utils/utils';
import {getSortedOffers} from '../../sorting';
import {getActiveCity, getSorting} from '../../store/option-process/selectors';

const mapStateToProps = (state: State) => ({
  sortType: getSorting(state),
  city: getActiveCity(state),
});

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>
type ConnectedComponentPropsType = PropsFromReduxType & OffersListProps;

function OffersListComponent({offers, onListItemHover, city, sortType} : ConnectedComponentPropsType): JSX.Element {
  offers = getCurrentOffers(offers, city);
  offers = getSortedOffers(offers, sortType);

  return (
    <div className="cities__places-list places__list tabs__content" style={{maxHeight: '65vh'}}>
      {offers.map((offer) => <OfferComponent key={offer.id} offer={offer} onListItemHover={onListItemHover}/>)}
    </div>
  );
}

export default connector(OffersListComponent);
