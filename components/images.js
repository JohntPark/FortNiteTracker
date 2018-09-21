import React from 'react';
import {Image, View, StyleSheet} from 'react-native'


const Images = props => {
    return ( 
        <View>
        <View style={styles.imagesFormat}>
        <Image source={require('../Images/epicgames-logo.png')} style={[styles.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../Images/twitter-logo.png')} style={[styles.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../Images/snapchat-logo.png')} style={[styles.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../Images/twitch-logo.png')} style={[styles.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../Images/instagram-logo.png')} style={[styles.miniIcon, {marginTop: 26}]}/>
        </View>
        </View>
     );
    }
 
const styles = StyleSheet.create({
    miniIcon: {
        height: 22,
        width: 22,
        marginTop: 66,
        backgroundColor: 'transparent',
    },
    imagesFormat: {
        flexDirection: 'row'
    }
})

export default Images;