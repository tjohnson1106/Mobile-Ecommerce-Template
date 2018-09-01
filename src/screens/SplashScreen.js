import React, { Component } from "react";
import { Image } from "react-native";
import { Box, Text } from "react-native-design-utility";

import { images } from "../constant/images";

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    // setTimeout(() => {
    //   this.props.navigation.navigate("Auth");
    // }, 2000);
  };
  render() {
    return (
      <Box f={1} center>
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Text size="xxl">
          In
          <Text size="xxl" color="green">
            Store
          </Text>
        </Text>
      </Box>
    );
  }
}

export default SplashScreen;
