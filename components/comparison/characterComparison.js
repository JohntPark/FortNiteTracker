import React from "react";
import { View, ScrollView, Text, Image, ImageBackground } from "react-native";
import characterComparisonStyle from "./styles/charactercomparisonstyle";
import HeaderImages from "./headerImages";


//Images rendered for the background
const images = [
    require('../../Images/thanos-fortnite.jpg'),
    require('../../Images/omega-skin.png'),
    require('../../Images/search.png'),
    require('../../Images/fortnite-image.jpg'),
    require('../../Images/raven2.jpeg'),
    require('../../Images/battle.jpg'),
    require('../../Images/raven-fortnite.jpg'),
    require('../../Images/hello.jpg'),
    require('../../Images/fortnite-wallpaper2.jpg'),
    require("../../Images/2018-fortnite-art.jpg")
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
    <View style={characterComparisonStyle.container}>
    <ImageBackground source={images[Math.floor(Math.random() * 10)]} style={characterComparisonStyle.backgroundImage}>
    <ScrollView>
    <View style={characterComparisonStyle.statBox}>
        <HeaderImages/>
    <View style={{ flexDirection: 'row',}}>
        <View style={characterComparisonStyle.dataStyling}>
        <Text style={characterComparisonStyle.personName1}>{props.person1_name}</Text>
        {    
            Object.values(stats).map((x, i) => (
                <View style={{paddingBottom: 10}} key={i}>
                    <Text style={characterComparisonStyle.statType}>{generateName(titles[i])}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}># of Kills: {x.kills.displayValue}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}># of Matches: {x.matches.displayValue}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </View>
            ))
        }
        </View>
        <View style={characterComparisonStyle.dataStyling}>
        <Text style={characterComparisonStyle.personName2}>{props.person2_name}</Text>
        {
            Object.values(person2_stats).map((x, i) => (
                <View style={{paddingBottom: 10}} key={i}>
                    <Text style={characterComparisonStyle.statType}>{generateName(person2_titles[i])}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}># of Kills: {x.kills.displayValue}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}># of Matches: {x.matches.displayValue}</Text>
                    <Text style={characterComparisonStyle.gameNumbers}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
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
 


export default CharacterSearch;
