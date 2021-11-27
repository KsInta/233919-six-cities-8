import {ActionType, Actions} from '../../types/action';
import {AppData} from '../../types/state';
import {Offer} from '../../types/types';

const initialState: AppData = {
  offers: [],
  offer: {} as Offer,
  nearOffers: [],
  reviews: [],
  favouriteOffers: [],
  isDataLoaded: false,
};

const appData = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
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

export {appData};
