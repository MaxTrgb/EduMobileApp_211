import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import LoginScreen from '../screens/auth/login/LoginScreen.tsx';
import RegisterScreen from '../screens/auth/register/RegisterScreen.tsx';
import LoginWithMailScreen from '../screens/auth/login/LoginWithMailScreen.tsx';

// tabs
export type RootStackParamList = {
  LoginScreen: undefined;
  Register: undefined;
  LoginWithMailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* static screens */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="LoginWithMailScreen" component={LoginWithMailScreen} />
      </Stack.Navigator>
  );
}
