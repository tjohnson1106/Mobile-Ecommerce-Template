import { Image } from "react-native";
import { Asset } from "expo";

// receives image
export function cacheImages(images) {
  // check image string if true prefetch
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
