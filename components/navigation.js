import React from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/App.js';
import myMoods from './components/myMoods.js';


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    myMoods: {
      screen: myMoods,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class navigation extends React.Component {
  render() {
    return <RootStack />;
  }
}
