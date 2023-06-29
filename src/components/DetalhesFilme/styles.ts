import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: "#515151",
    paddingBottom: 16,
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
});
