import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(210, 210, 210, 0.6)",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(210, 210, 210, 0.5)",
    alignItems: "center",
    paddingHorizontal: 14,
  },
});
