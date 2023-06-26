import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { StackParamList } from "../../routes/StackNavigator";
import { NavigationProp } from "@react-navigation/native";

interface SplashProps {
  navigation: NavigationProp<StackParamList, "Splash">;
}

export const Splash = ({ navigation }: SplashProps) => {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      if (status.didJustFinish) {
        navigation.navigate("Comecar");
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
