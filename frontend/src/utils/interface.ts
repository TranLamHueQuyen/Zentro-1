import {RouteProp} from '@react-navigation/native';
import {RootStackParams} from './type';
import {StackNavigationProp} from '@react-navigation/stack';

export interface StoryBarProps {
  navigation: any;
}
export interface HomeProps {
  navigation: any;
}
export interface ProfileProps {
  navigation: any;
}
export interface OnboardingProps {
  navigation: any;
}
export interface StoriesProps {
  route: any;
  navigation: any;
}
export interface FeaturedProps {
  navigation: StackNavigationProp<RootStackParams, 'HomeScreen'>;
}
export interface Featured {
  route: RouteProp<RootStackParams, 'EstateDetail'>;
  navigation: StackNavigationProp<RootStackParams, 'EstateDetail'>;
}

export interface ReviewProps {
  navigation: any;
  estate: EstateItems;
}
export interface ReviewDetail {
  route: RouteProp<RootStackParams, 'ReviewDetails'>;
}
export interface EstateItems {
  _id: string;
  name: string;
  address: {
    name: string;
    house_number: number;
    road: string;
    quarter: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  email: string;
  price: {
    rent: number;
    buy: number;
  };
  rating_star: number;
  images: Array<string>;
  user: string;
}

export interface ReviewItems {
  id: number;
  name: string;
  avatar: any;
  address: string;
  phone: string;
  email: string;
  reviews: {
    content: string;
    images: any;
    star_rating: number;
  };
}

export interface UserData {
  _id: string;
  avatar: string;
  email: string;
  full_name: string;
  mobile: number;
  address: object;
}

export interface EstateDetailProps {
  address: {
    name: string;
    house_number: number;
    road: string;
    quarter: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  price: {
    rent: number;
  };
  property: {
    bedroom: number;
    bathroom: number;
  };
  images: Array<string>;
  _id: string;
  name: string;
  user: {
    avatar: string;
    _id: string;
    full_name: string;
    address: {
      road: string;
      quarter: string;
      city: string;
      country: string;
      lat: number;
      lng: number;
    };
  };
}
