import React, { Component } from "react";

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

const AuthNavigator = createStackNavigator({
  Login: {
    getScreen: () => require("./LoginScreen").default
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    getScreen: () => require("./HomeScreen").default
  }
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require("./SplashScreen").default
    },
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Splash"
  }
);

class Navigation extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 2000);
  };

  render() {
    return <AppNavigator />;
  }
}

export default Navigation;
