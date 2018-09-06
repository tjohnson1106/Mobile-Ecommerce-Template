import React from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Image } from "react-native";

const bgColor = type => {
  switch (type) {
    case "google":
      return "googleBlue";

    case "facebook":
      return "facebookBlue";

    default:
      return "white";
  }
};

const LoginButton = ({ children, type }) => (
  <TouchableOpacity>
    <Box
      dir="row"
      shadow={1}
      bg={bgColor(type)}
      w="80%"
      self="center"
      p="xxs"
      align="center"
      radius="xxs"
      mb="sm"
    >
      <Box mr="sm">
        <Box bg="white" h={32} w={32} radius="xxs" center>
          <Text>G</Text>
        </Box>
      </Box>

      <Box>
        <Text size="md" color="white">
          {children}
        </Text>
      </Box>
    </Box>
  </TouchableOpacity>
);

export default LoginButton;
