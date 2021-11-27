const enum AppRoute {
  Favourites = '/favourites',
  Login = '/login',
  Main = '/',
  Room = '/offer/',
  RoomId = '/offer/:id',
}

const enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Hotels = '/hotels',
  Favourite = '/favorite'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const RatingStar = [
  {score: '5', titleName: 'perfect'},
  {score: '4', titleName: 'good'},
  {score: '3', titleName: 'not bad'},
  {score: '2', titleName: 'badly'},
  {score: '1', titleName: 'terribly'},
];

const enum InformationMessages {
  AuthFail = 'Ошибка авторизации, возможно, неправильный email или пароль',
  DataLoadingError = 'Ошибка загрузки данных',
  AuthNo = 'Не забудьте авторизоваться',
}

const enum ReviewSetting {
  Min = 50,
  Max = 300,
  MaxCountPerPage = 10,
}

enum SortType {
  Popular = 'Popular',
  PriceToHight = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_ACTIVE = 'img/pin-active.svg';

const MIN_PASSWORD_LENGTH = 2;

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';

const REQUEST_TIMEOUT = 5000;

const AUTH_TOKEN_KEY_NAME = 'six-xities-token';

const MAX_RATING = 5;

const MAX_RATING_IN_PERCENTS = 100;

const REVIEW_FIELD_NAME = 'review';

export {AppRoute, APIRoute, AuthorizationStatus, SortType, InformationMessages, ReviewSetting, RatingStar, cities, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, MIN_PASSWORD_LENGTH, BACKEND_URL, REQUEST_TIMEOUT, AUTH_TOKEN_KEY_NAME, MAX_RATING, MAX_RATING_IN_PERCENTS, REVIEW_FIELD_NAME};
