import OptionLogin from '@/screens/OptionLogin';
import Onboarding from '@/screens/Onboarding';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '@/screens/Login';
import {RootStackParams} from '@/utils/type';
import Register from '@/screens/Register';
import Location from '@/screens/AccountSetup/Location';
import Stories from '@/screens/Stories';
import TabNavigator from './TabNavigator';
import {observer} from 'mobx-react-lite';
import EstateDetail from '@/components/EstateDetail';
import ReviewDetails from '@/screens/Reviews/ReviewDetails';
import AllReview from '@/screens/Profile/AllReview';
import TabMenu from '@/screens/Profile/TabMenu';
import TransactionDetail from '@/screens/TransactionDetail';
import AddReview from '@/screens/Reviews/AddReview';
import CreateEstate from '@/screens/CreateEstate';
import AddEstateLocation from '@/screens/CreateEstate/AddEstateLocation';
import AddEstateImages from '@/screens/CreateEstate/AddEstateImages';
import AddEstateInfo from '@/screens/CreateEstate/AddEstateInfo';
import Transaction from '@/screens/Transaction';

const AppStack = observer(() => {
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="OnBoarding"
        component={Onboarding}
      />
      <Stack.Screen
        name="OptionLogin"
        component={OptionLogin}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="Stories"
        component={Stories}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="EstateDetail"
        component={EstateDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AllReview"
        component={AllReview}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="TabMenu"
        component={TabMenu}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReview}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CreateEstate"
        component={CreateEstate}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AddEstateLocation"
        component={AddEstateLocation}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AddEstateImages"
        component={AddEstateImages}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AddEstateInfo"
        component={AddEstateInfo}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
});

export default AppStack;
