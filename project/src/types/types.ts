type Host = {
  avatarUrl: string,
  id: number;
  isPro: boolean,
  name: string,
}

type Comment = {
  comment: string,
  rating: number,
}

type Review = Comment & {
  id: number;
  date: string;
  user: Host;
}

type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

type City = {
  location: Location,
  name: string,
}

type Offer = {
  bedrooms: number,
  description: string,
  goods: string[],
  host: Host,
  location: Location,
  city: City,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

type ServerHost = Omit<Host, 'avatarUrl' | 'isPro'>&
{
  'is_pro' : boolean;
  'avatar_url': string;
};

type ServerOffer = Omit<Offer, 'host'|'isFavorite'|'isPremium'|'maxAdults'|'previewImage'>&
{
  host: ServerHost;
  'is_favorite': boolean;
  'is_premium': boolean;
  'max_adults': number;
  'preview_image': string;
}

type ServerReview = Omit<Review, 'user'>&{
  user: ServerHost;
};

type Comments = Review[];

type Offers = Offer[];

export type {Host, Offer, Offers, Review, Comments, City, ServerHost, ServerOffer, ServerReview};
