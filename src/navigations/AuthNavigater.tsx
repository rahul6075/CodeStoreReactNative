import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import UserVerifyScreen from '../screens/UserVerifyScreen/UserVerifyScreen';
import { RootStackParamList } from './types';
import DrawerNavigation from './DrawerNavigation';


const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthNavigater = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          component={HomeScreen}
          name="Home"
          options={{headerShown: false}}
        />
        <RootStack.Screen
          component={SignupScreen}
          name="Signup"
          options={{headerShown: false}}
        />
        <RootStack.Screen
          component={LoginScreen}
          name="Login"
          options={{headerShown: false}}
        />
        <RootStack.Screen
          component={UserVerifyScreen}
          name="Verify"
          options={{headerShown: false}}
        />
        <RootStack.Screen
          component={DrawerNavigation}
          name="Profile"
          options={{headerShown: false}}
        />

      </RootStack.Navigator>
  )
}

export default AuthNavigater