import MainScreen from '../main-screen/main-screen';
//import SignInScreen from '../sign-in-screen/sign-in-screen';
//import FavoritesScreen from '../favorites-screen/favorites-screen';
//import RoomScreen from '../room-screen/room-screen';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} />
  );
}

export default App;
