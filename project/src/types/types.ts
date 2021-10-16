type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

type City = {
  location: Location
  name: string,
}

type Offer = {
  bedrooms: number;
  description: string;
  goods: string[];
  host: Host;
  location: Location;
  city: City;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

type Comments = Comment[];

type Offers = Offer[];

export type {Offer, Offers, Comment, Comments};
