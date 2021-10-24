import {Offers, Comments} from '../../types/types';
import {AuthorizationStatus} from '../../const';

type RoomScreenProps = {
  offers: Offers,
  comments: Comments,
  authorizationStatus: AuthorizationStatus,
};

export type {RoomScreenProps};
