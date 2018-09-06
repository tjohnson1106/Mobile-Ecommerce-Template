import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "react-native-design-utility";

import OnboardingLogo from "../commons/OnboardingLogo";
import LoginButton from "../commons/LoginButton";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center>
        <Box f={1}>
          <OnboardingLogo />
        </Box>

        <Box f={0.9} w={1}>
          <LoginButton>Continue with Google</LoginButton>
          <LoginButton>Continue with Facebook</LoginButton>
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;
