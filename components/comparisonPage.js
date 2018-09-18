import React from "react";
import { View, TextInput, ScrollView, Text, Image, StyleSheet, ImageBackground, Picker } from "react-native";
import Button from "./button";
import HomePage from "./homePage";
import App from "../App";
import axios from 'axios';
import Images from './images';
import APIKey from '../config';

class ComparisonPage extends React.Component {
    state = { 
        platform: 'pc',
        username1: 'nylonvision',
        username2: 'ninja',
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

       getPerson1 = () => {
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
            )
        ];

        Promise.all(promises)
            .then(res => { 
                console.log(res);
                this.props.navigation.navigate('CharacterComparison', { 
                    comparisonStats: res[0].data.stats, 
                    header: res[0].data.epicUserHandle,
                    comparisonStats1: res[1].data.stats,
                    header1: res[1].data.epicUserHandle
                })
            })
    }

    characterComparisonButton = e => {
        e.preventDefault();

        this.getPerson1();
    }




    render() { 
        return ( 
            <View style={styles.container}>
             <ImageBackground source={require('../Images/comparison.png')} style={styles.backgroundImage}>
                    <View style={styles.mainInputBox}>
                    <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 80, paddingBottom: 25}}> Compare two players</Text>
                    <Text style={{color: 'white', fontSize: 25, paddingBottom: 5}}> Choose your platform</Text>
                    <Picker 
                        itemStyle={{color: 'white', height: 44, fontWeight: 'bold'}}
                        style={{ width: 85, height: 44,  paddingTop: 0, marginBottom: 30 }}
                        selectedValue={this.state.platform}
                        onValueChange={(itemValue, itemIndex) => this.setState({platform: itemValue})}
                        >
                        <Picker.Item label="PC" value="pc"/>
                        <Picker.Item label="PS4" value="psn"/>
                        <Picker.Item label="XBOX" value="xbl"/>
                    </Picker>
                    <Text style={{color: 'white', fontSize: 28, paddingBottom: 5}}> Name the First Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonOneChange(e)} value={this.state.username1} style={styles.textInput}/>  
                    <Text style={{color: 'white', fontSize: 28, paddingBottom: 5}}> Name the Second Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonTwoChange(e)} value={this.state.username2} style={styles.textInput}/>  
                    <Button onPress={this.characterComparisonButton} text="Let's Get It!" style={styles.homepageButton} textStyle={{color: 'blue', fontWeight: 'bold', fontSize: 15}}/>
                    </View>
                    <View style={styles.container2}>
                    <View>
                        <Text style={{color: 'white', fontSize: 12, paddingBottom: 5, marginRight: 0, marginLeft: 5}}> See your Stats?</Text>
                        <Button text="Single Stats" onPress={this.navigateToHome} style={styles.footerButton} textStyle={{color: 'green', fontWeight: 'bold', fontSize: 15}}/>
                    </View>
                    <View>
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
    mainInputBox: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginRight: 20
    },
    backgroundImage: {
      height: 400,
      width: 400,
      flex: 1,
      marginRight: 100
    },

    textInput: {
      backgroundColor: 'transparent',
      height: 40,
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'white',
      color: 'white',
      marginTop: 10
    },
    homepageButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 120,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 15
    },
    footerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 35,
      width: 115,
      borderRadius: 15,
      backgroundColor: 'white',
      marginBottom: 100,
    },
    container2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 35
    }
  });
export default ComparisonPage;