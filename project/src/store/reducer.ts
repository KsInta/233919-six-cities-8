import {ActionType, Actions} from '../types/action';
import {SortType} from '../const';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
  sortType: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeOffers:
      return {...state, offers: action.payload};
    case ActionType.ChangeSorting:
      return {...state, sortType: action.payload};
    default:
      return state;
  }
};

export {reducer};
