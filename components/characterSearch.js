import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Button from "./button";
import HomePage from "./homePage";
import App from "../App";


const images = [
    require('../Images/thanos-fortnite.jpg'),
    require('../Images/omega-skin.png'),
    require('../Images/search.png'),
    require('../Images/fortnite-image.jpg'),
    require('../Images/raven2.jpeg'),
    require('../Images/battle.jpg'),
    require('../Images/raven-fortnite.jpg'),
    require('../Images/hello.jpg'),
    require('../Images/fortnite-wallpaper2.jpg'),
]

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
    <ImageBackground source={images[Math.floor(Math.random() * 9)]} style={styles.backgroundImage}>
    <ScrollView>
    <View style={styles.statBox}>
    <View style={{flexDirection: 'row'}}>
    
    <Image style={{height: 100, width: 100, justifyContent: 'flex-start', alignItems: 'flex-start'}} source={require(`../Images/dance2.gif`)}/>
    <Image style={{height: 100, width: 100, justifyContent: 'flex-start', alignItems: 'flex-start'}} source={require(`../Images/dancing.gif`)}/>
    <Image style={{height: 100, width: 100, justifyContent: 'flex-start', alignItems: 'flex-start'}} source={require(`../Images/dance3.gif`)}/>
    
    </View>
        <View style={{flexDirection: 'row'}}>
            <View style={styles.dataStyling}>
        {
            Object.values(stats).map((x, i) => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <React.Fragment key={i}>
                    <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20,}}>{generateName(titles[i])}</Text>
                    <Text style={{color: 'black',}}># of Kills:{x.kills.displayValue}</Text>
                    <Text style={{color: 'black'}}># of Matches:{x.matches.displayValue}</Text>
                    <Text style={{color: 'black'}}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </React.Fragment>
                </View>
            ))
        }
            </View>
        </View>
    </View>
    </ScrollView>
    </ImageBackground>
    </View>
  );
};

class CharacterSearch extends React.Component {
    static navigationOptions = ({ navigation }) => {
        
        return {
            title: `${navigation.getParam('header', 'info')}'s stats`,
            headerStyle: {
                backgroundColor: 'teal'
            },
            headerTintColor: 'white'
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
  statBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "black"
  },
  backgroundImage: {
    height: 400,
    width: 400,
    flex: 1,
  },
  dataStyling: {
    backgroundColor: '#ffffff',
    opacity: 0.75,  
    borderColor: 'blue',
    borderWidth: 1,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10
    }
});

export default CharacterSearch;
