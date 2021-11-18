import {Host, ServerHost} from './types';

export type Auth = {
  email: string;
  token: string;
};

type AuthData = {
  login: string,
  password: string,
}

type AuthInfo = Auth&Host;

type ServerAuthInfo = Auth&ServerHost;

export type {AuthData, AuthInfo, ServerAuthInfo};
