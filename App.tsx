import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import UserVerifyScreen from './src/screens/UserVerifyScreen/UserVerifyScreen';


export type RootStackParamList = {
  Home: undefined;
  Login:  undefined;
  Signup: undefined;
  Verify: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
          component={HomeScreen}
          name="Home"
          options={{headerShown: false}}
        />
        <RootStack.Screen component={SignupScreen} name="Signup" 
         options={{headerShown: false}}
         
        />
        <RootStack.Screen component={LoginScreen} name="Login"  options={{headerShown: false}} />
        <RootStack.Screen component={UserVerifyScreen} name="Verify"  options={{headerShown: false}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
