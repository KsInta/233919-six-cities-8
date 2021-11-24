import {AuthInfo, ServerAuthInfo} from '../types/auth-data';
import {Host, Offer, Review, ServerHost, ServerOffer, ServerReview} from '../types/types';

const adaptHostToClient = (host: ServerHost): Host => {
  const {'is_pro': isPro, 'avatar_url': avatarUrl, ...restUser} = host;
  return {
    ...restUser,
    isPro,
    avatarUrl,
  };
};

const adaptOfferToClient = (offer: ServerOffer) : Offer => {
  const {'is_favorite': isFavorite, 'is_premium': isPremium, 'max_adults': maxAdults,
    'preview_image': previewImage, host, ...rest}=offer;
  return {
    ...rest,
    isFavorite,
    isPremium,
    maxAdults,
    previewImage,
    host: adaptHostToClient(host),
  };
};

const adaptAuthInfoToClient = (authInfo: ServerAuthInfo): AuthInfo => {
  const {email, token, ...rest}=authInfo;
  return {
    ...adaptHostToClient(rest),
    email,
    token,
  };
};

const adaptReviewToClient = (review: ServerReview) : Review => {
  const {user, ...rest}=review;
  return {
    ...rest,
    user: adaptHostToClient(user),
  };
};

const adaptOfferToServer = (offer: Offer) : ServerOffer => {
  const {isPro, avatarUrl, ...restHost} = offer.host;
  const adaptedHost: ServerHost = {
    ...restHost,
    'is_pro': isPro,
    'avatar_url': avatarUrl,
  };
  const {isFavorite, isPremium, maxAdults, previewImage, host, ...rest} = offer;
  return {
    ...rest,
    'is_favorite': isFavorite,
    'is_premium': isPremium,
    'max_adults': maxAdults,
    'preview_image': previewImage,
    host: adaptedHost,
  };
};

export {adaptOfferToClient, adaptOfferToServer, adaptAuthInfoToClient, adaptReviewToClient};
