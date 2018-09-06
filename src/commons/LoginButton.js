import React from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Image } from "react-native";

const LoginButton = () => (
  <TouchableOpacity>
    <Box
      dir="row"
      shadow={1}
      bg="green"
      w="80%"
      self="center"
      p="xxs"
      align="center"
      radius="xxs"
    >
      <Box mr="sm">
        <Box bg="white" h={32} w={32} radius="xxs" center>
          <Text>G</Text>
        </Box>
      </Box>

      <Box>
        <Text size="md" color="white">
          Continue with Google
        </Text>
      </Box>
    </Box>
  </TouchableOpacity>
);

export default LoginButton;
