/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/Home';

export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer/>
    );
  }
}
const AppNavigator = createStackNavigator({
    // Login:{
    //     screen: LoginScreen
    // }
    Login: LoginScreen,
    Home: HomeScreen
});


const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
