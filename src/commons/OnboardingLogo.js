import React from "react";
import { Image } from "react-native";
import { Box, Text } from "react-native-design-utility";

import { images } from "../constants/images";

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Box mb="sm">
      <Text size="xxl">
        In
        <Text size="xxl" color="green">
          Store
        </Text>
      </Text>
    </Box>
    <Text size="sm">Commerce Made Easy</Text>
  </Box>
);

export default OnboardingLogo;
