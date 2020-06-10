import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

type RootStackParamList = {
  SplashScreen: { date: Date };
  SignInScreen: { date: Date };
  SignUpScreen: { date: Date };
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} initialParams={{ date: new Date() }} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} initialParams={{ date: new Date() }} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} initialParams={{ date: new Date() }} />
  </RootStack.Navigator>
);

export default RootStackScreen;
