import {StyleSheet} from 'react-native';

const characterSearchStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "black"
    },
    backgroundImage: {
      height: window.height,
      width: '100%',
      flex: 1,
      paddingBottom: 50
    },
    statBox: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    },
    dancingGif: {
      height: 100,
      width: 100,
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    dataStyling: {
      backgroundColor: "#ffffff",
      opacity: 0.75,
      borderColor: "blue",
      borderWidth: 1,
      width: 350,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10
    },
    mapStyle: {
      justifyContent: "center",
      alignItems: "center"
    },
    statType: {
      color: "red",
      fontWeight: "bold",
      fontSize: 20
    },
    
  });

  export default characterSearchStyle;