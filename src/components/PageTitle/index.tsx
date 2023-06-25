import { Text } from "react-native";
import { styles } from "./styles";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};
