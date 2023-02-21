import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen component={SignupScreen} name="Signup" />
        <Stack.Screen component={LoginScreen} name="Login" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
