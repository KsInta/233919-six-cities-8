import {AppScreenProps} from './type';
import MainScreen from '../main-screen/main-screen';

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersCount={offersCount} />
  );
}

export default App;
