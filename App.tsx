import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigater from './src/navigations/AuthNavigater';
import DrawerNavigation from './src/navigations/DrawerNavigation';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState<Boolean>(false);
  return (
    <NavigationContainer>
      <AuthNavigater />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
