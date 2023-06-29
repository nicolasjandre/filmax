import "react-native-gesture-handler";
import { MainNavigator } from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { preventAutoHideAsync } from "expo-splash-screen";
import { AuthProvider } from "./src/contexts/AuthContext";

preventAutoHideAsync();

const App = () => {
  return (
    <>
      <AuthProvider>
        <StatusBar backgroundColor="#15141F" translucent={false} />
        <MainNavigator />
      </AuthProvider>
    </>
  );
};

export default App;
