import { Image } from "react-native";
import { styles } from "./styles";

export const Logo = () => {
  return <Image style={styles.logo} source={require("../../assets/images/logo/FilMAX.png")} />;
};
