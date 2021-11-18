import {ActionType, Actions} from '../types/action';
import {AuthorizationStatus, SortType} from '../const';
import {AuthInfo} from '../types/auth-data';
import {State} from '../types/state';

const initialState = {
  city: 'Paris',
  offers: [],
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  author: {} as AuthInfo,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSorting:
      return {...state, sortType: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth, author: {} as AuthInfo};
    case ActionType.SetAuthor:
      return {...state, author: action.payload};
    default:
      return state;
  }
};

export {reducer};
