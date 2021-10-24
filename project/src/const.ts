const enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Room = '/room/',
  RoomId = '/room/:id'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const STARS = [
  {score: '5', titleName: 'perfect'},
  {score: '4', titleName: 'good'},
  {score: '3', titleName: 'not bad'},
  {score: '2', titleName: 'badly'},
  {score: '1', titleName: 'terribly'},
];

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_ACTIVE = 'img/pin-active.svg';

export {AppRoute, AuthorizationStatus, STARS, CITIES, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE};
