import 'react-native-gesture-handler';
import React, {useState} from 'react';
import MainScreen from './src/screens/MainScreen/MainScreen';
import {Provider} from 'react-redux';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
