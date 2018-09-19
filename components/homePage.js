import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Picker, Image } from 'react-native';
import Button from './button';
import axios from 'axios';
import App from '../app';
import Images from './images';
import APIKey from '../config';

class HomePage extends React.Component {
    state = { 
      platform: 'pc',
      username: '',
      badEntry: false,
     }

     static navigationOptions = {
         header: null
     }
     navigateToComparison = () => {
       this.props.navigation.navigate('ComparisonPage')
     }

     onUsernameChange = e => {
       this.setState({
         username: e
       })
     }

    getCharacter = e => {
        e.preventDefault()
        axios.get(
            `https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username}`,
            {headers: {
                'TRN-Api-Key': APIKey
            }}
        )
        .then(res=> {

          if (res.data.error) {
            this.setState({
              badEntry: true
            })
            return;
          }
            this.props.navigation.navigate('CharacterPage', { fortniteStats: res.data.stats, header: res.data.epicUserHandle })
        })
    }


  render() { 
    return ( 
      <View style={styles.container}>
      <ImageBackground source={require('../Images/fortnite-header-wallpaper.png')} style={styles.backgroundImage}>
        <View style={styles.mainInputBox}>
        <Text style={styles.trackYourStats}> Track your Stats</Text>
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
        <Text style={styles.playerName}> Name the Player!</Text>
        <TextInput textAlign='center' onChangeText={(e)=>this.onUsernameChange(e)} value={this.state.username} style={styles.textInput}/>  
        { 
          this.state.badEntry && 
          <Text style={{color: 'red', fontSize: 18, paddingBottom: 5}}> Please check your platform or user names</Text>
        }
        <Button onPress={this.getCharacter}  text="Search" style={styles.homepageButton} textStyle={styles.homePageTextStyle}/>
        </View>
        <View style={styles.container2}>
        <View>
        <Text style={styles.compareText}> Want to compare?</Text>
        <Button text="Compare!" onPress={this.navigateToComparison} style={styles.compareButton} textStyle={styles.compareStyle}/>
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
  backgroundImage: {
    height: 400,
    width: 400,
    flex: 1
  },
  mainInputBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 20
  },
  trackYourStats: {
    color: 'white', 
    fontSize: 40, 
    fontWeight: 'bold', 
    marginTop: 80, 
    paddingBottom: 25
  },
  platform: {
    color: 'white', 
    fontSize: 28, 
    paddingBottom: 5
  },
  pickerItemStyle: {
    color: 'white', 
    height: 44, 
    fontWeight: 'bold'
  },
  pickerStyle: {
    width: 85, 
    height: 44,  
    paddingTop: 0, 
    marginBottom: 30
  },
  playerName: {
    color: 'white', 
    fontSize: 28, 
    paddingBottom: 5
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
  homePageTextStyle: {
    color: 'blue', 
    fontWeight: 'bold', 
    fontSize: 15
  },
  container2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 35
  },
  compareText: {
    color: 'white', 
    fontSize: 12, 
    paddingBottom: 5, 
    marginRight: 0
  },
  compareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 110,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 100,
  },
  compareStyle: {
    color: 'orange', 
    fontWeight: 'bold', 
    fontSize: 15
  },
});

export default HomePage;