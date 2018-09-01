import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import {
  UtilityThemeProvider,
  Box
} from "react-native-design-utility";

import Navigation from "./src/screens";
import { images } from "./src/constants/images";
import { cacheImages } from "./src/util/cacheImages";

export default class App extends Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = this.cacheImages(Object.values(images));

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      );
    }

    return (
      <UtilityThemeProvider>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
