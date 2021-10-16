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

export {AppRoute, AuthorizationStatus, STARS};
