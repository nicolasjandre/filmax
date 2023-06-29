import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    paddingHorizontal: 16,
    paddingBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 36,
  },
  imagePerfil: {
    width: 158,
    height: 158,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 40,
  },
  logoutTouchableOpacity: {
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    color: "#ffffff",
  },
  editarPerfilTouchable: {
    position: "absolute",
    right: 5,
    bottom: 40,
    zIndex: 1,
  },
});
