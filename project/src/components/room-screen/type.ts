import {Offers, Comments} from '../../types/types';
import {AuthorizationStatus} from '../../const';

type RoomScreenProps = {
  offers: Offers,
  comments: Comments,
  neighbours: Offers,
  authorizationStatus: AuthorizationStatus,
};

export type {RoomScreenProps};
