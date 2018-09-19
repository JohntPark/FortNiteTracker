import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, ImageBackground } from "react-native";



const images = [
    require('../Images/thanos-fortnite.jpg'),
    require('../Images/omega-skin.png'),
    require('../Images/search.png'),
    require('../Images/fortnite-image.jpg'),
    require('../Images/raven2.jpeg'),
    require('../Images/battle.jpg'),
    require('../Images/raven-fortnite.jpg'),
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
    <ImageBackground source={images[Math.floor(Math.random() * 9)]} style={styles.backgroundImage}>
    <ScrollView>
    <View style={styles.statBox}>
    <View style={{flexDirection: 'row'}}>
    
    <Image style={styles.dancingGif} source={require(`../Images/dance2.gif`)}/>
    <Image style={styles.dancingGif} source={require(`../Images/dancing.gif`)}/>
    <Image style={styles.dancingGif} source={require(`../Images/dance3.gif`)}/>
    
    </View>
    <View style={{ flexDirection: 'row',}}>
        <View style={styles.dataStyling}>
        <Text style={styles.personName}>{props.person1_name}</Text>
        {    
            Object.values(stats).map((x, i) => (
                <View style={{paddingBottom: 10}}>
                <React.Fragment key={i}>
                    <Text style={styles.statType}>{generateName(titles[i])}</Text>
                    <Text style={styles.gameNumbers}># of Kills:{x.kills.displayValue}</Text>
                    <Text style={styles.gameNumbers}># of Matches:{x.matches.displayValue}</Text>
                    <Text style={styles.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </React.Fragment>
                </View>
            ))
        }
        </View>
        <View style={styles.dataStyling}>
        <Text style={styles.personName}>{props.person2_name}</Text>
        {
            Object.values(person2_stats).map((x, i) => (
                <View style={{paddingBottom: 10}}>
                <React.Fragment key={i}>
                    <Text style={styles.statType}>{generateName(person2_titles[i])}</Text>
                    <Text style={styles.gameNumbers}># of Kills:{x.kills.displayValue}</Text>
                    <Text style={styles.gameNumbers}># of Matches:{x.matches.displayValue}</Text>
                    <Text style={styles.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
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
            title: `Let's Compare`,
        headerStyle: {
            backgroundColor: 'teal'
        },
        headerTintColor: 'white'
        }
    };

        //  ${navigation.getParam('header', 'Person 1' )} vs. ${navigation.getParam('header1', 'Person 2' )}

    render() { 
        let stats = this.props.navigation.getParam('comparisonStats', {});
        let person2_stats = this.props.navigation.getParam('comparisonStats1', {});
        let person1_name = this.props.navigation.getParam('header', {});
        let person2_name = this.props.navigation.getParam('header1', {});
        return (
            <ComparisonInfo 
                stats={stats} 
                person1_name={person1_name}
                person2_stats={person2_stats}
                person2_name={person2_name}
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
    height: 400,
    width: 400,
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
    width: 185,
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    },
  personName: {
    color: 'blue', 
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
