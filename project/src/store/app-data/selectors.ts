import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer, Offers, Comments} from '../../types/types';

const getDataLoaded = (state: State): boolean => state[NameSpace.data].isDataLoaded;

const getOffers = (state: State): Offers => state[NameSpace.data].offers;

const getCurrentOffer = (state: State): Offer => state[NameSpace.data].offer;

const getFavouriteOffers = (state: State): Offers => state[NameSpace.data].favouriteOffers;

const getReviews = (state: State): Comments => state[NameSpace.data].reviews;

const getNearOffers = (state: State): Offers => state[NameSpace.data].nearOffers;

export {getDataLoaded, getOffers, getCurrentOffer, getFavouriteOffers, getReviews, getNearOffers};
