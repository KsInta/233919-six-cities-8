import {ActionType, Actions} from '../types/action';
import {AuthorizationStatus, SortType, cities} from '../const';
import {AuthInfo} from '../types/auth-data';
import {State} from '../types/state';
import {Offer} from '../types/types';

const initialState = {
  city: cities[0],
  offers: [],
  offer: {} as Offer,
  nearOffers: [],
  reviews: [],
  favouriteOffers: [],
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
    case ActionType.LoadOfferById:
      return {...state, offer: action.payload};
    case ActionType.LoadOfferComments:
      return {...state, reviews: action.payload};
    case ActionType.LoadNearOffers:
      return {...state, nearOffers: action.payload};
    case ActionType.LoadFavouritesOffers:
      return {...state, favouriteOffers: action.payload};
    case ActionType.IsDataLoaded:
      return {...state, isDataLoaded: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth, author: {} as AuthInfo};
    case ActionType.SetAuthor:
      return {...state, author: action.payload};
    case ActionType.SetFavourite:
      return {
        ...state, offers: state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.status;
            return offer;
          }
          return offer;
        }),
      };
    case ActionType.SetFavouriteInOffer:
      if (state.offer && state.offer.id === action.payload.id) {
        return {...state, offer: Object.assign({}, state.offer, {isFavorite: action.payload.status})};
      }
      return state;
    default:
      return state;
  }
};

export {reducer};
