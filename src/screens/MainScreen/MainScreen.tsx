import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigater from '../../navigations/AuthNavigater';


const MainScreen = () => {
  return (
    <NavigationContainer>
      <AuthNavigater />
    </NavigationContainer>
  );
};

export default MainScreen;
