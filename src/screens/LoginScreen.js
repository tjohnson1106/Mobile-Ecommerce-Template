import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default LoginScreen;
