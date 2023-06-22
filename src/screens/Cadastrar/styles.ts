import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    padding: 16,
    paddingTop: 30,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  },
  text: {
    color: "#ffffff",
  },
    filMAX:{
      marginTop: Platform.OS === 'android' ? '13%' : '20%',
      marginButtom: Platform.OS === 'android' ? '13%' : '15%'
    }
  
});
