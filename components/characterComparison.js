import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, ImageBackground } from "react-native";
// import ComparisonGraph from './comparisonGraph'


//Images rendered for the background
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
    require("../Images/2018-fortnite-art.jpg")
]

//Stats labeled for each record
const generateName = tag => {
    switch (tag) {
        case 'p2':
            return 'Solo Records';
        case 'p10':
            return 'Duo Records'
        case 'p9':
            return 'Squad Records'
        case 'curr_p2':
            return 'Current Season Solo'
        case 'curr_p10':
            return 'Current Season Dual'
        case 'curr_p9':
            return 'Current Season Squad'
        default:
            return 'Not Available'
    }
}


const ComparisonInfo = props => {

    let stats = props.stats;
    let person2_stats = props.person2_stats;

    let titles = Object.keys(stats)
    let person2_titles = Object.keys(person2_stats)

    


  return (
    <View style={styles.container}>
    <ImageBackground source={images[Math.floor(Math.random() * 10)]} style={styles.backgroundImage}>
    <ScrollView>
    <View style={styles.statBox}>
    <View style={{flexDirection: 'row'}}>
    
    <Image style={styles.dancingGif} source={require(`../Images/dancinggif2.gif`)}/>
    <Image style={styles.dancingGif} source={require(`../Images/dancing.gif`)}/>
    <Image style={styles.dancingGif} source={require(`../Images/dance3.gif`)}/>
    
    </View>
    <View style={{ flexDirection: 'row',}}>
        <View style={styles.dataStyling}>
        <Text style={styles.personName1}>{props.person1_name}</Text>
        {    
            Object.values(stats).map((x, i) => (
                <View style={{paddingBottom: 10}} key={i}>
                    <Text style={styles.statType}>{generateName(titles[i])}</Text>
                    <Text style={styles.gameNumbers}># of Kills: {x.kills.displayValue}</Text>
                    <Text style={styles.gameNumbers}># of Matches: {x.matches.displayValue}</Text>
                    <Text style={styles.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </View>
            ))
        }
        </View>
        <View style={styles.dataStyling}>
        <Text style={styles.personName2}>{props.person2_name}</Text>
        {
            Object.values(person2_stats).map((x, i) => (
                <View style={{paddingBottom: 10}} key={i}>
                    <Text style={styles.statType}>{generateName(person2_titles[i])}</Text>
                    <Text style={styles.gameNumbers}># of Kills: {x.kills.displayValue}</Text>
                    <Text style={styles.gameNumbers}># of Matches: {x.matches.displayValue}</Text>
                    <Text style={styles.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </View>
            ))
        }
        </View>
        </View>
    </View>
    {/* //Add comparison graph here */}
    {/* <ComparisonGraph comparisonGraph={props.comparisonGraph} comparisonGraph1={props.comparisonGraph1}/> */}
    </ScrollView>
    </ImageBackground>
    </View>
  );
};

class CharacterSearch extends React.Component {
    static navigationOptions = ({ navigation }) => {
        // This is for the top header
        return {
            title: `Who is Better?`,
        headerStyle: {
            backgroundColor: 'teal'
        },
        headerTintColor: 'white'
        }
        titleStyle: {
            fontFamily: 'Noteworthy'
        }
    };

        //  ${navigation.getParam('header', 'Person 1' )} vs. ${navigation.getParam('header1', 'Person 2' )}

    render() { 
        let stats = this.props.navigation.getParam('comparisonStats', {});
        let person2_stats = this.props.navigation.getParam('comparisonStats1', {});
        let person1_name = this.props.navigation.getParam('header', {});
        let person2_name = this.props.navigation.getParam('header1', {});
        // let comparisonGraph = this.props.navigation.getParam('comparisonGraph', {});
        // let comparisonGraph1 = this.props.navigation.getParam('comparisonGraph1', {})
        return (
            <ComparisonInfo 
                stats={stats} 
                person1_name={person1_name}
                person2_stats={person2_stats}
                person2_name={person2_name}
                // comparisonGraph={comparisonGraph}
                // comparisonGraph1={comparisonGraph1}
            />
        )
    }
}
 

const styles = StyleSheet.create({
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

export default CharacterSearch;
