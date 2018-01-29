import HomeScreen from "./src/HomeScreen/index.js";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return <HomeScreen />;
  }
}


