import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {AuthInfo} from '../../types/auth-data';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

const getAuthor = (state: State): AuthInfo => state[NameSpace.user].author;

export {getAuthorizationStatus, getAuthor};
