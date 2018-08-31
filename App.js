import React, { Component } from "react";
import { UtilityThemeProvider } from "react-native-design-utility";

import Navigation from "./src/screens";

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
