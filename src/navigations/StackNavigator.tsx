import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import LoginScreen from '../screens/auth/login/LoginScreen.tsx';

// tabs
import BottomTab from './TabNavigation.tsx';

export type RootStackParamList = {
  LoginScreen: undefined;
  BottomTab: undefined;
  // Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="BottomTab">
      {/* tabs */}
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />

      {/* static screens */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{}} />

      {/* dynamic screens */}
    </Stack.Navigator>
  );
}
