import {ActionType, Actions} from '../../types/action';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {AuthInfo} from '../../types/auth-data';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  author: {} as AuthInfo,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth, author: {} as AuthInfo};
    case ActionType.SetAuthor:
      return {...state, author: action.payload};
    default:
      return state;
  }
};

export {userProcess};
