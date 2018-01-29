

import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

import  BikeScreen from '../BikeScreen/BikeScreen.js'
import  RoutesScreen from '../RoutesScreen/RoutesScreen.js'
import  ProfileScreen from '../ProfileScreen/ProfileScreen.js'
export default (HomeScreen = TabNavigator(
  {
    Bike: { screen: BikeScreen },
    Routes: { screen: RoutesScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Bike")}
            >
              <Icon name="ios-at" />
              <Text>Bike</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Routes")}
            >
              <Icon name="navigate" />
              <Text>Routes</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
