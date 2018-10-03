import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import characterComparisonStyle from './styles/charactercomparisonstyle';

// THIS IS FOR THE PAGE THAT COMPARES BOTH PLAYERS
const HeaderImages = props => {

    return ( 
        <View style={{flexDirection: 'row'}}>
    
        <Image style={characterComparisonStyle.dancingGif} 
        source={require(`../../Images/dancinggif2.gif`)}
        />
        <Image 
        style={characterComparisonStyle.dancingGif} 
        source={require(`../../Images/dancing.gif`)}
        />
        <Image 
        style={characterComparisonStyle.dancingGif} 
        source={require(`../../Images/dance3.gif`)}
        />
        </View>
     );
    }


export default HeaderImages;

