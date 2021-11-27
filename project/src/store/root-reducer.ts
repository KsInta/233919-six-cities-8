import {combineReducers} from 'redux';
import {optionProcess} from './option-process/option-process';
import {appData} from './app-data/app-data';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  option = 'OPTION',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.option]: optionProcess,
  [NameSpace.user]: userProcess,
});

type RootState = ReturnType<typeof rootReducer>;

export type {RootState};
