const MAX_RATING = 5;
const MAX_RATING_IN_PERCENTS = 100;

const numberToPersent = (number: number) => (number * MAX_RATING_IN_PERCENTS / MAX_RATING).toString();

export {numberToPersent};
