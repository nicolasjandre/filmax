import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    position: "absolute",
    zIndex: 99,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15141F90",
  },
  modalContent: {
    width: "90%",
    height: 300,
    backgroundColor: "#15141F",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    padding: 5,
    top: 0,
    right: 0,
  },
  text: {
    color: "#ffffff",
    marginBottom: 40,
    fontSize: 18,
  },
});
