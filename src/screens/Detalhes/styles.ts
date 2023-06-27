import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15141F",
  },
  imageContainer: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    transform: [{ translateX: 50 }, { translateY: -240 }],
    zIndex: 9999,
    backgroundColor: "red",
    padding: 20,
  },
  backButtonImage: {
    width: 25,
    height: 25,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -25 }, { translateY: -150 }],
  },
  playButtonImage: {
    width: 50,
    height: 50,
  },
  container: {
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: "#515151",
    paddingBottom: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#515151",
    paddingBottom: 16,
  },
  detailsRow: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
  },
  detailsText: {
    color: "#ffffff",
    marginRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  subTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  genreBadge: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginRight: 4,
    marginBottom: 4,
    color: "#ffffff",
    borderRadius: 15,
  },
  plotTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 16,
  },
  plotText: {
    color: "#ffffff",
    marginTop: 8,
  },
  readMore: {
    color: "#ffffff",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  similarTitleSection: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 16,
    paddingTop: 16,
  },
  similarImage: {
    width: 142,
    height: 106,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  similarTitle: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#FFFF",
    marginBottom: 16,
  },
});
