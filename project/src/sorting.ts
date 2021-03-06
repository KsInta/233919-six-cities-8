import {SortType} from './const';
import {Offer, Offers} from './types/types';

const comparePriceToHight = (objA:Offer, objB:Offer): number => objA.price-objB.price;
const compareRating = (objA:Offer, objB:Offer): number => objB.rating-objA.rating;
const comparePriceToLow = (objA:Offer, objB:Offer): number => objB.price-objA.price;

const getSortedOffers = (offers: Offers, sortType: string): Offers => {
  switch (sortType) {
    case SortType.PriceToHight:
      return offers.sort(comparePriceToHight);
    case SortType.PriceToLow:
      return offers.sort(comparePriceToLow);
    case SortType.TopRated:
      return offers.sort(compareRating);
    default:
      return offers;
  }
};

export {getSortedOffers};
