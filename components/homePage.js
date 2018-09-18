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
      username: 'Nylonvision',
      badEntry: false,
      isLoading: false
     }

     static navigationOptions = {
         header: null
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

            console.log(res)

            // let { stats, ...rest } = res.data;

            this.props.navigation.navigate('CharacterPage', { fortniteStats: res.data.stats, header: res.data.epicUserHandle })
            // this.props.changeScreen('USER_STATS');

            // this.setState({
            //     platform: res.data.platformName,
            //     username: res.data.epicUserHandle,
            //     badEntry: true
            // })
        })

    }

  render() { 
    return ( 
      <View style={styles.container}>
      <ImageBackground source={require('../Images/fortnite-header-wallpaper.png')} style={styles.backgroundImage}>
        <View style={styles.mainInputBox}>
        <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 80, paddingBottom: 25}}> Track your Stats</Text>
        <Text style={{color: 'white', fontSize: 28, paddingBottom: 5}}> Choose your platform</Text>
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
        <Text style={{color: 'white', fontSize: 28, paddingBottom: 5}}> Name the Player!</Text>
        <TextInput textAlign='center' onChangeText={(e)=>this.onUsernameChange(e)} value={this.state.username} style={styles.textInput}/>  
        <Button onPress={this.getCharacter}  text="Let's Get It!" style={styles.homepageButton} textStyle={{color: 'blue', fontWeight: 'bold', fontSize: 15}}/>
        </View>
        <View style={styles.container2}>
        <View>
        <Text style={{color: 'white', fontSize: 12, paddingBottom: 5, marginRight: 0}}> Want to compare two players?</Text>
        <Button text="Compare!" style={styles.footerButton} textStyle={{color: 'green', fontWeight: 'bold', fontSize: 15}}/>
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
    flex: 1
  },
  backgroundImage: {
    height: 400,
    width: 400,
    flex: 1
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
    width: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 100,
    marginLeft: 25
  },
  container2: {
      justifyContent: 'space-around',
      flexDirection: 'row'
  }
});

export default HomePage;