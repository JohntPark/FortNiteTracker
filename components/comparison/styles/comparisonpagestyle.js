import { StyleSheet } from 'react-native';

const comparisonPageStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fff"
    },
    backgroundImage: {
      height: window.height,
      width: "100%",
      flex: 1,
      backgroundColor: "transparent"
    },
    mainInputBox: {
      alignItems: "center",
      justifyContent: "center",
      height: window.height,
      paddingRight: 10,
      opacity: 0.74,
      width: "100%",
      backgroundColor: "white",
      marginTop: 130,
      marginBottom: 50,
      paddingBottom: 20,
      borderColor: "blue",
      borderWidth: 1
    },
    compareStyle: {
      color: "black",
      fontSize: 26,
      fontWeight: "bold",
      marginTop: 20,
      paddingBottom: 15
    },
    platform: {
      color: "black",
      fontSize: 25,
      paddingBottom: 5
    },
    pickerItemStyle: {
      color: "white",
      height: 44,
      fontWeight: "bold",
      backgroundColor: "black",
      opacity: 0.75,
      fontFamily: "Papyrus"
    },
    pickerStyle: {
      width: 85,
      height: 44,
      paddingTop: 0,
      marginBottom: 5
    },
    playerText1: {
      color: "darkblue",
      fontSize: 22,
      paddingBottom: 0,
      fontFamily: "Zapfino",
      fontWeight: "bold"
    },
    playerText2: {
      color: "darkmagenta",
      fontSize: 20,
      paddingBottom: 0,
      fontFamily: "Zapfino",
      fontWeight: "bold"
    },
    textInput: {
      height: 50,
      fontWeight: "bold",
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "black",
      color: "black",
      marginTop: 0,
      marginBottom: 11,
      fontFamily: "ChalkboardSE-Bold"
    },
    textInput2: {
      height: 50,
      fontWeight: "bold",
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "black",
      color: "black",
      marginTop: 5,
      marginBottom: 0,
      paddingBottom: 0,
      fontFamily: "ChalkboardSE-Bold"
    },
    recheckCharacter: {
      color: "#ff0000",
      fontWeight: "bold",
      fontSize: 14,
      paddingBottom: 5,
      paddingTop: 12
    },
    compareButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 35,
      width: 115,
      borderRadius: 15,
      backgroundColor: "white",
      marginTop: 15,
      borderColor: "black",
      borderWidth: 2
    },
    compareButtonText: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 15
    },
    container2: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: -40,
      marginRight: 30
    },
    singleStatsText: {
      color: "white",
      fontSize: 14,
      paddingBottom: 5,
      marginTop: 40
      //   marginRight: 158
    },
    footerButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 35,
      width: 115,
      borderRadius: 15,
      backgroundColor: "white",
      opacity: 0.8
      //   marginBottom: 100,
    },
    footerButtonText: {
      color: "green",
      fontWeight: "bold",
      fontSize: 15
    },
    renderingImage: {
      height: 180,
      alignItems: "center",
      width: 210,
      flex: 1,
      marginBottom: 100
    },
  });

  export default comparisonPageStyle;