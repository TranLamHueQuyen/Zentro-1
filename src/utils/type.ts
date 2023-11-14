import {EstateItems, ReviewItems} from './interface';

export type RootStackParams = {
  Login: any;
  HomeScreen: any;
  OnBoarding: any;
  OptionLogin: any;
  Register: any;
  Location: any;
  Stories: any;
  EstateDetail: {estate: EstateItems};
  ReviewDetails: {estate: EstateItems; review: [ReviewItems]};
};
