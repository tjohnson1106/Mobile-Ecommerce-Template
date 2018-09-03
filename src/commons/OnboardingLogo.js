import React from "react";
import { Box, Text } from "react-native-design-utility";

import { images } from "../constants/images";

// 09032018 design logo view component

const OnboardingLogo = () => (
  <Box center>
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

export default OnboardingLogo;
