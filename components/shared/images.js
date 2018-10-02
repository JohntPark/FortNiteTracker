import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import imageStyle from './styles/imagestyle';


const Images = props => {
    //Icons displayed in HomePage and ComparisonPage
    return ( 
        <View>
        <View style={imageStyle.imagesFormat}>
        <Image source={require('../../Images/epicgames-logo.png')} style={[imageStyle.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../../Images/twitter-logo.png')} style={[imageStyle.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../../Images/snapchat-logo.png')} style={[imageStyle.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../../Images/twitch-logo.png')} style={[imageStyle.miniIcon, {marginTop: 26}]}/>
        <Image source={require('../../Images/instagram-logo.png')} style={[imageStyle.miniIcon, {marginTop: 26}]}/>
        </View>
        </View>
     );
    }


export default Images;