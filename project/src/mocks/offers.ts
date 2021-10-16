import {Offers} from '../types/types';

const offers: Offers = [
  {
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host:
      {
        avatarUrl: 'img/avatar.svg',
        isPro: true,
        name: 'Sofia',
      },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10},
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    description: 'A quiet cozy and picturesque that hides behind Amsterdam',
    goods: ['Heating', 'Kitchen', 'Washing machine'],
    host:
      {
        avatarUrl: 'img/avatar-angelina.jpg',
        isPro: true,
        name: 'Angelina',
      },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10},
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 210,
    rating: 5,
    title: 'Luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    description: 'A quiet cozy and picturesque that hides behind Cologne',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host:
      {
        avatarUrl: 'img/avatar-max.jpg',
        isPro: false,
        name: 'Max',
      },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10},
      name: 'Cologne',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    id: 3,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 235,
    rating: 2.9,
    title: 'House at great location',
    type: 'house',
  },
  {
    bedrooms: 1,
    description: 'Behind Cologne',
    goods: ['Heating', 'Kitchen'],
    host:
      {
        avatarUrl: 'img/avatar.svg',
        isPro: false,
        name: 'Anna',
      },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10},
      name: 'Cologne',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    id: 4,
    images: ['img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    maxAdults: 1,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 3,
    title: 'Room at quiet place',
    type: 'room',
  },
];

export {offers};
