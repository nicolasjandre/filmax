import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15141F",
  },
  filmeInformationContainer: {
    flex: 1,
    backgroundColor: "#15141F",
    padding: 16,
    paddingBottom: 0,
  },
  image: {
    width: "100%",
    height: 257,
    resizeMode: "cover",
  },
  text: {
    color: "#ffffff",
  },
  title: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0.48,
    marginTop: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});
