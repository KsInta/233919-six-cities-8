import {Offers, Comments} from '../types/types';
import {ReviewSetting, MAX_RATING, MAX_RATING_IN_PERCENTS} from '../const';

const numberToPersent = (number: number): string => (number * MAX_RATING_IN_PERCENTS / MAX_RATING).toString();

const getCurrentOffers = (offers : Offers, city: string): Offers => offers.filter((offer) => offer.city.name === city);

const getActualReviews = (reviews: Comments): Comments => (
  reviews.sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(0, ReviewSetting.MaxCountPerPage));

export {numberToPersent, getCurrentOffers, getActualReviews};
