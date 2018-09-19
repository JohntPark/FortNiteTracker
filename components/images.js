import React from 'react';
import {Image, View, StyleSheet} from 'react-native'


const Images = props => {
    return ( 
        <View>
        <View style={styles.imagesFormat}>
        <Image source={require('../Images/epicgames-logo.png')} style={styles.miniIcon}/>
        <Image source={require('../Images/twitter-logo.png')} style={styles.miniIcon}/>
        <Image source={require('../Images/snapchat-logo.png')} style={styles.miniIcon}/>
        <Image source={require('../Images/twitch-logo.png')} style={styles.miniIcon}/>
        <Image source={require('../Images/instagram-logo.png')} style={styles.miniIcon}/>
        </View>
        </View>
     );
    }
 
const styles = StyleSheet.create({
    miniIcon: {
        height: 20,
        width: 20,
        marginTop: 28,
        backgroundColor: 'transparent',
    },
    imagesFormat: {
        flexDirection: 'row'
    }
})

export default Images;