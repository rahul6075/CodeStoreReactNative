import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  SignupScreen,
  LoginScreen,
  UserVerifyScreen,
  AddUpdateProfile,
  CreateProjectScreen,
  UpdateBusinessProfile
} from '../screens';

import {RootStackParamList} from './types';
import DrawerNavigation from './DrawerNavigation';
import { StackScreenHeader } from '../components';


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
      <RootStack.Screen
        component={AddUpdateProfile}
        name="AddupdateProfile"
        options={{ 
          header() {
              return <StackScreenHeader title={'Create Profile'} />
          },
       }}
      />
      <RootStack.Screen
        component={UpdateBusinessProfile}
        name="UpdateBusinessProfile"
        options={{ 
          header() {
              return <StackScreenHeader title={'Update Company Profile'} />
          },
       }}
      />
      <RootStack.Screen
        component={CreateProjectScreen}
        name="CreateProject"
        options={{ 
           header() {
               return <StackScreenHeader title={'Create Project'} />
           },
        }}
      />
    </RootStack.Navigator>
  );
};

export default AuthNavigater;
