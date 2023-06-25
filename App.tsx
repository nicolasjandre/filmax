import "react-native-gesture-handler";
import { MainNavigator } from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#15141F" translucent={false} />
      <MainNavigator />
    </>
  );
}
