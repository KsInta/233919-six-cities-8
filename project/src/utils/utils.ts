import {Offers} from '../types/types';

const MAX_RATING = 5;
const MAX_RATING_IN_PERCENTS = 100;

const numberToPersent = (number: number) => (number * MAX_RATING_IN_PERCENTS / MAX_RATING).toString();

const getCurrentOffers = (offers : Offers, city: string): Offers => offers.filter((offer) => offer.city.name === city);

export {numberToPersent, getCurrentOffers};
