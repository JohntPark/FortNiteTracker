import {StyleSheet} from 'react-native';

const homepageStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fff"
    },
    backgroundImage: {
      height: window.height,
      width: window.width,
      flex: 1,
    },
    mainInputBox: {
      alignItems: "center",
      justifyContent: "flex-start",
      height: 450,
      width: '100%',
      opacity: .8,
      backgroundColor: 'grey',
      marginTop: 180,
      paddingBottom: 30,
      marginBottom: 80,
      paddingTop: 0,
      borderWidth: 1  
    },
    trackYourStats: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
      marginTop: 40,
      paddingBottom: 25
    },
    platform: {
      color: "white",
      fontSize: 28,
      paddingBottom: 15
    },
    pickerItemStyle: {
      color: "black",
      backgroundColor: 'white',
      opacity: .75,
      height: 44,
      fontWeight: "bold",
      fontFamily: 'Papyrus'
    },
    pickerStyle: {
      width: 85,
      height: 44,
      paddingTop: 0,
      marginBottom: 15
    },
    playerName: {
      color: "blue",
      fontSize: 24,
      fontFamily: 'Zapfino',
      fontWeight: 'bold'
    },
    textInput: {
      backgroundColor: "transparent",
      height: 40,
      width: 240,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "white",
      color: "black",
      marginTop: 0,
      fontFamily: 'AmericanTypewriter-Bold'
    },
    recheckCharacter: {
      color: "#ff0000", 
      fontWeight: 'bold', 
      fontSize: 18, 
      paddingBottom: 2, 
      paddingTop: 15
    },
    homepageButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 35,
      width: 120,
      borderRadius: 15,
      backgroundColor: "white",
      marginTop: 15
    },
    homePageTextStyle: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 15
    },
    container2: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginRight: 3
    },
    compareText: {
      color: "white",
      fontSize: 14,
      paddingBottom: 5,
      marginRight: 140
    },
    compareButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 35,
      width: 115,
      borderRadius: 15,
      backgroundColor: "white",
      marginBottom: 100,
      opacity: .8
    },
    compareStyle: {
      color: "orange",
      fontWeight: "bold",
      fontSize: 15
    },
    renderingImage: {
      height: 200, 
      width: 200
    }
  });

  export default homepageStyle