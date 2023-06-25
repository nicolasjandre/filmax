import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === "android" ? "13%" : "20%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
  },

  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#211F30",
    marginBottom: 20,
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#FFFFFF",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#FFF",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  loginText: {
    color: "#000000",
    fontSize: 17,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  signUpText: {
    color: "#C4C4C4",
    paddingRight: 5,
  },
  signUpButtom: {
    color: "#f00707",
    fontWeight: "bold",
  },
  text: {},
  conta: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
