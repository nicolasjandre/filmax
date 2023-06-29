import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { PersonalizedIcon } from "../PlayButtonIcon";
import { styles } from "./styles";

interface BackButtonProps {
  handleNavigateBack: () => void;
}

export const BackButton = ({ handleNavigateBack }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={handleNavigateBack} style={styles.backButton}>
      <PersonalizedIcon focused heightAndWidth={44} children={<AntDesign name="back" size={28} color="#ffffff" />} />
    </TouchableOpacity>
  );
};
