import React, { Component } from "react";
import {
  UtilityThemeProvider,
  Box,
  Text
} from "react-native-design-utility";

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
        <Box f={1} center>
          <Text>E-Commerce</Text>
        </Box>
      </UtilityThemeProvider>
    );
  }
}
