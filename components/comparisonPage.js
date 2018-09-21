import React from "react";
import { View, TextInput, Text, StyleSheet, ImageBackground, Picker, Image } from "react-native";
import Button from "./button";
import HomePage from "./homePage";
import App from "../App";
import axios from 'axios';
import Images from './images';
import APIKey from '../config';

class ComparisonPage extends React.Component {
    state = { 
        platform: 'pc',
        username1: '',
        username2: '',
        badEntry: false,
        isLoading: false
       }

       static navigationOptions = {
        header: null
    }
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
      }

       onPersonOneChange = e => {
           this.setState({
                username1: e
           })
       }

       onPersonTwoChange = e => {
           this.setState({
               username2: e
           })
       }

       characterSearch = () => {
        this.setState({
            isLoading: true
        }, () => {
        let promises = [ 
            axios.get(`https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username1}`,
                {
                    headers: {
                        'TRN-Api-Key': APIKey
                    }
                }
            ),
            axios.get(`https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username2}`,
                {
                    headers: {
                        'TRN-Api-Key': APIKey
                    }
                }
            ),
            
        ];
        if (this.state.username1.length < 3 || this.state.username2.length < 3) {
            this.setState({
                badEntry: true,
                isLoading: false
            });
            return;
        }

        Promise.all(promises)
            .then(res => { 

                // if a player is not found, the server passes 'Player Not Found' 
                // as a message in 'data.error'
                if (res[0].data.error || res[1].data.error ) {
                    console.log('Player Not Found')
                    this.setState({
                        badEntry: true,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        username: ''
                    }, () => {
                    this.props.navigation.navigate('CharacterComparison', { 
                        comparisonStats: res[0].data.stats, 
                        header: res[0].data.epicUserHandle,
                        comparisonStats1: res[1].data.stats,
                        header1: res[1].data.epicUserHandle,
                        comparisonGraph: res[0].data.recentMatches,
                        comparisonGraph1: res[1].data.recentMatches
                    })
                    })
                }
            })
            .catch(error => {
                console.log(error);
            });
        })     
    }

    characterComparisonButton = e => {
        e.preventDefault();

        this.characterSearch();
    }




    render() { 
        return ( 
            <View style={styles.container}>
             <ImageBackground source={require('../Images/ironman.jpg')} style={styles.backgroundImage}>
                    <View style={styles.mainInputBox}>
                    <Text style={styles.compareStyle}> Compare Two Players</Text>
                    <Text style={styles.platform}> Choose your platform</Text>
                    <Picker 
                        itemStyle={styles.pickerItemStyle}
                        style={styles.pickerStyle}
                        selectedValue={this.state.platform}
                        onValueChange={(itemValue, itemIndex) => this.setState({platform: itemValue})}
                        >
                        <Picker.Item label="PC" value="pc"/>
                        <Picker.Item label="PS4" value="psn"/>
                        <Picker.Item label="XBOX" value="xbl"/>
                    </Picker>
                    <Text style={styles.playerText1}> Name the First Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonOneChange(e)} value={this.state.username1} style={styles.textInput}/>  
                    <Text style={styles.playerText2}> Name the Second Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonTwoChange(e)} value={this.state.username2} style={styles.textInput2}/>  
                    { 
                        this.state.badEntry && 
                        <Text style={styles.recheckCharacter}> Please check your platform or user names</Text>
                    }
                    
                    <Button onPress={this.characterComparisonButton} text="Compare" style={styles.compareButton} textStyle={styles.compareButtonText}/>
                    </View>

                    <View style={styles.container2}>
                    <View style>
                        <Text style={styles.singleStatsText}> See your Stats?</Text>
                        <Button text="Single Stats" onPress={this.navigateToHome} style={styles.footerButton} textStyle={styles.footerButtonText}/>
                    </View>
                    {this.state.isLoading && <Image source={ require('../Images/dancing.gif')} style={{height: 180, alignItems: 'center', width: 210, flex: 1, marginBottom: 100}}/>}
                    <View style = {{marginTop: 41, marginRight: -27}}>
                    <Images/>
                    </View>
                    </View>
                </ImageBackground>
            </View>
         );
        }
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    backgroundImage: {
        height: window.height,
        width: window.width,
        flex: 1,
        backgroundColor: 'transparent',
    },
    mainInputBox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 530,
      paddingRight: 10,
      opacity: .74,
      width: '100%',
      backgroundColor: 'white',
      marginTop: 105,
      marginBottom: 35,
      paddingBottom: 20,
      borderColor: 'blue',
      borderWidth: 1   
    },
    compareStyle: {
      color: 'black', 
      fontSize: 26, 
      fontWeight: 'bold', 
      marginTop: 20, 
      paddingBottom: 15
    },
    platform: {
      color: 'black', 
      fontSize: 25, 
      paddingBottom: 5
    },
    pickerItemStyle: {
      color: 'white', 
      height: 44, 
      fontWeight: 'bold', 
      backgroundColor: 'black', 
      opacity: .75,
      fontFamily: 'Papyrus'
    },
    pickerStyle: {
      width: 85, 
      height: 44,  
      paddingTop: 0, 
      marginBottom: 5
    },
    playerText1: {
      color: 'darkblue', 
      fontSize: 22, 
      paddingBottom: 0,
      fontFamily: 'Zapfino',
      fontWeight: 'bold'
    },
    playerText2: {
      color: 'darkmagenta', 
      fontSize: 20, 
      paddingBottom: 0,
      fontFamily: 'Zapfino',
      fontWeight: 'bold'
    },
    textInput: {
      height: 50,
      fontWeight: 'bold',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'black',
      color: 'black',
      marginTop: 0,
      marginBottom: 11,
      fontFamily: 'ChalkboardSE-Bold'
    },
    textInput2: {
      height: 50,
      fontWeight: 'bold',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'black',
      color: 'black',
      marginTop: 5,
      marginBottom: 0,
      paddingBottom: 0,
      fontFamily: 'ChalkboardSE-Bold'
    },
    recheckCharacter: {
      color: '#ff0000', 
      fontWeight: 'bold', 
      fontSize: 14, 
      paddingBottom: 5, 
      paddingTop: 12
    },
    compareButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 115,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 2
    },
    compareButtonText: {
        color: 'blue', 
        fontWeight: 'bold', 
        fontSize: 15
    },
    container2: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: -40,
      marginRight: 30
    },
    singleStatsText: {
      color: 'white', 
      fontSize: 14, 
      paddingBottom: 5,
      marginTop: 40 
    //   marginRight: 158
    },
    footerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 35,
      width: 115,
      borderRadius: 15,
      backgroundColor: 'white',
      opacity: .8,
    //   marginBottom: 100,
    },
    footerButtonText: {
      color: 'green', 
      fontWeight: 'bold', 
      fontSize: 15
    }
  });
export default ComparisonPage;