import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import characterSearchStyle from './styles/charactersearchstyle';
// THIS IS FOR THE CHARACTER SEARCH AFTER THE HOMEPAGE!

const HeaderImages = props => {



    return ( 
        <View style={{ flexDirection: "row" }}>
            <Image 
            style={characterSearchStyle.dancingGif}
            source={require(`../../Images/dancinggif.gif`)}
            />
            <Image
            style={characterSearchStyle.dancingGif}
            source={require(`../../Images/dancing.gif`)}
            />
            <Image
            style={characterSearchStyle.dancingGif}
            source={require(`../../Images/dance3.gif`)}
            />
        </View>
     );
    }


export default HeaderImages;

