import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigater from '../../navigations/AuthNavigater';
import { ToastMessage } from '../../components';


const MainScreen = () => {
  return (
    <NavigationContainer>
      <AuthNavigater />
      <ToastMessage />
    </NavigationContainer>
  );
};

export default MainScreen;
