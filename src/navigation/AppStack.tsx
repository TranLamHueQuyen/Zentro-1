import Home from '@/screens/Home';
import Onboarding from '@/screens/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = () => {
  const Stack = createStackNavigator();
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
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
