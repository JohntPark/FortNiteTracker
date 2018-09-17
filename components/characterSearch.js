import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import Button from "./button";
import HomePage from "./homePage";
import App from "../App";


const generateName = tag => {
    switch (tag) {
        case 'p2':
            return 'Solo Records';
        case 'p10':
            return 'Duo Records'
        case 'p9':
            return 'Squad Records'
        case 'curr_p2':
            return 'Current Season Solo Records'
        case 'curr_p10':
            return 'Current Season Dual Records'
        case 'curr_p9':
            return 'Current Season Squad Records'
        default:
            return 'Not Available'
    }
}


const CharacterInfo = props => {

    let stats = props.stats;

    let titles = Object.keys(stats)

    


  return (
    <View style={styles.container}>
    <Image style={{height: 100, width: 100, justifyContent: 'flex-start', alignItems: 'flex-start'}} source={require(`../Images/fortnite-dance.gif`)}/>
        {
            Object.values(stats).map((x, i) => (
                <React.Fragment key={i}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{generateName(titles[i])}</Text>
                    <Text style={{color: 'white'}}>Score: {x.score.displayValue}</Text>
                    <Text style={{color: 'white'}}># of Matches:{x.matches.displayValue}</Text>
                    <Text style={{color: 'white'}}># of Kills:{x.kills.displayValue}</Text>
                    <Text style={{color: 'white'}}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </React.Fragment>
            ))
        }
    </View>
  );
};

class CharacterSearch extends React.Component {
    static navigationOptions = ({ navigation }) => {
        
        return {
            title: `${navigation.getParam('header', 'info')}'s stats`
        };
    };


    render() { 
        let stats = this.props.navigation.getParam('fortniteStats', {});
        return <CharacterInfo stats={stats} />;
    }
}
 

const styles = StyleSheet.create({
  userBox: {
    width: 300,
    height: 50,
    borderColor: "red",
    borderWidth: 1
  },
  title: {
    fontSize: 50,
    marginTop: 40,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  button: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 100,
    borderRadius: 10
  },
  navigationButton: {
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    height: 35,
    width: 120,
    borderRadius: 5
  },
  buttonText: {
    color: "white"
  }
});

export default CharacterSearch;
