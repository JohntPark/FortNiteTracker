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
            ),
            
        ];

        // console.log('username1:', this.state.username1)
        // console.log('username2:', this.state.username2)

        if (this.state.username1.length < 3 || this.state.username2.length < 3) {
            this.setState({
                badEntry: true
            });
            return;
        }

        Promise.all(promises)
            .then(res => { 
                console.log(res);

                if (res[0].data.error || res[1].data.error ) {
                    console.log('error')
                    this.setState({
                        badEntry: true
                    });
                    return;
                }
                
                this.props.navigation.navigate('CharacterComparison', { 
                    comparisonStats: res[0].data.stats, 
                    header: res[0].data.epicUserHandle,
                    comparisonStats1: res[1].data.stats,
                    header1: res[1].data.epicUserHandle,
                })
            })
            // .catch(error => {
            //     console.log(error);
            // });
            
    }

    characterComparisonButton = e => {
        e.preventDefault();

        this.getPerson1();
    }




    render() { 
        return ( 
            <View style={styles.container}>
             <ImageBackground source={require('../Images/ironman.jpg')} style={styles.backgroundImage}>
                    <View style={styles.mainInputBox}>
                    <Text style={{color: 'black', fontSize: 26, fontWeight: 'bold', marginTop: 70, paddingBottom: 15}}> Compare Two Players</Text>
                    <Text style={{color: 'black', fontSize: 25, paddingBottom: 5}}> Choose your platform</Text>
                    <Picker 
                        itemStyle={{color: 'white', height: 44, fontWeight: 'bold', backgroundColor: 'black', opacity: .75}}
                        style={{ width: 85, height: 44,  paddingTop: 0, marginBottom: 5 }}
                        selectedValue={this.state.platform}
                        onValueChange={(itemValue, itemIndex) => this.setState({platform: itemValue})}
                        >
                        <Picker.Item label="PC" value="pc"/>
                        <Picker.Item label="PS4" value="psn"/>
                        <Picker.Item label="XBOX" value="xbl"/>
                    </Picker>
                    <Text style={{color: 'black', fontSize: 28, paddingBottom: 5}}> Name the First Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonOneChange(e)} value={this.state.username1} style={styles.textInput}/>  
                    <Text style={{color: 'black', fontSize: 28, paddingBottom: 5}}> Name the Second Player!</Text>
                    <TextInput textAlign='center' onChangeText={(e)=>this.onPersonTwoChange(e)} value={this.state.username2} style={styles.textInput2}/>  
                    { 
                        this.state.badEntry && 
                        <Text style={{color: 'red', fontSize: 18, paddingBottom: 5}}> Please check your platform or user names</Text>
                    }
                    
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
      marginRight: 20,
      opacity: .7,
      backgroundColor: 'white',
      marginTop: 170,
      paddingBottom: 50,
      borderColor: 'blue',
      borderWidth: 1
      
    },
    backgroundImage: {
      height: 400,
      width: 400,
      flex: 1,
      marginRight: 100,
      backgroundColor: 'transparent',
    },

    textInput: {
      height: 50,
      fontWeight: 'bold',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'black',
      color: 'black',
      marginTop: 10,
    },
    textInput2: {
      height: 50,
      fontWeight: 'bold',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'black',
      color: 'black',
      marginTop: 10,
      marginBottom: 30,
      paddingBottom: 5
    },
    homepageButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 120,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 2
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