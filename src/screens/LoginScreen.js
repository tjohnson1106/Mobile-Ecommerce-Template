import React, { Component } from "react";
import { Alert } from "react-native";

import { Box } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";
import LoginButton from "../commons/LoginButton";

class LoginScreen extends Component {
  state = {};

  onGooglePress = () => {
    Alert.alert("Google Press");
  };

  onFacebookPress = () => {
    Alert.alert("Facebook Press");
  };

  render() {
    return (
      <Box f={1} center>
        <Box f={1}>
          <OnboardingLogo />
        </Box>

        <Box f={0.9} w={1}>
          <LoginButton type="google" onPress={this.onGooglePress}>
            Continue with Google
          </LoginButton>
          <LoginButton type="facebook" onPress={this.onFacebookPress}>
            Continue with Facebook
          </LoginButton>
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;
