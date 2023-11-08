import {RouteProp} from '@react-navigation/native';
import {RootStackParams} from './type';
import {StackNavigationProp} from '@react-navigation/stack';

export interface StoryBarProps {
  navigation: any;
}
export interface HomeProps {
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
export interface EstateItems {
  id: number;
  name: string;
  avatar: any;
  address: string;
  phone: string;
  email: string;
  assets: {
    images: any;
    name: string;
    location: string;
    star_rating: number;
    price: number;
    bathroom: number;
    bedroom: number;
    floors: number;
    time: string;
    favorite: boolean;
  };
}
