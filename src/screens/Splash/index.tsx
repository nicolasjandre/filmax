import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { StackParamList } from "../../routes";
import { NavigationProp } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";

interface SplashProps {
  navigation: NavigationProp<StackParamList, "Splash">;
}

export const Splash = ({ navigation }: SplashProps) => {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const { authenticatedUser } = useContext(AuthContext);

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      if (status.didJustFinish) {
        if (authenticatedUser?.email) {
          navigation.navigate("BottomTab", { screen: "Home" });
        } else {
          navigation.navigate("Comecar");
        }
      }
    }

    setLastStatus(() => status);
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../../assets/splash.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
};
