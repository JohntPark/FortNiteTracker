import { StyleSheet } from 'react-native'

const characterComparisonStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: "black"
    },
    backgroundImage: {
      height: window.height,
      width: '100%',
      flex: 1,
    },
    statBox: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, 
    },
    dancingGif: {
      height: 100, 
      width: 100,
      justifyContent: 'flex-start', 
      alignItems: 'flex-start'
    },
    dataStyling: {
      backgroundColor: '#ffffff',
      opacity: 0.75,  
      borderColor: 'blue',
      borderWidth: 1,
      width: '47%',
      alignItems: 'flex-start',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      },
    personName1: {
      color: 'darkblue', 
      fontWeight: 'bold', 
      fontSize: 21, 
      paddingBottom: 8
    },
    personName2: {
      color: 'darkmagenta', 
      fontWeight: 'bold', 
      fontSize: 21, 
      paddingBottom: 8
    },
    statType : {
      color: 'red', 
      fontWeight: 'bold', 
      fontSize: 15
    },
    gameNumbers: {
      color: 'black', 
      fontSize: 12, 
      fontFamily: 'Helvetica'
    }
  
  });
  export default characterComparisonStyle