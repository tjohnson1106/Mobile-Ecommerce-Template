import React from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { images } from "../constants/images";
import { theme } from "../constants/theme";

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

const LoginButton = ({ children, type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
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
        <Box
          bg="white"
          h={32}
          w={32}
          radius="xxs"
          center
          style={{ position: "relative" }}
        >
          {type === "google" && (
            <Image source={images.googleColorIcon} />
          )}
          {type === "facebook" && (
            <FontAwesome
              name="facebook"
              color={theme.color.facebookBlue}
              size={28}
              style={{ position: "absolute", right: 6, bottom: 0 }}
            />
          )}
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
