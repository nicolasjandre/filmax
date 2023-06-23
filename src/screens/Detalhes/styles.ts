import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15141F",
  },
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    padding: 16,
    paddingTop: 30,
    paddingBottom: 0,
  },
  text: {
    color: "#ffffff",
  },
  title: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0.48,
  },
  image: {
    width: "100%",
    height: 257,
    resizeMode: "cover",
  },
  similarImage: {
    width: 100,
    height: 150,
    marginHorizontal: 5,
  },
  similarTitle: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#FFFF",
  },
});
