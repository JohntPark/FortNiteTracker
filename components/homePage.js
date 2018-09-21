import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Picker,
  Image
} from "react-native";
import Button from "./button";
import axios from "axios";
import Images from "./images";
import APIKey from "../config";

class HomePage extends React.Component {
  state = {
    platform: "pc",
    username: "",
    badEntry: false,
    isLoading: false
  };

  static navigationOptions = {
    header: null
  };
  navigateToComparison = () => {
    this.props.navigation.navigate("ComparisonPage");
  };

  onUsernameChange = e => {
    this.setState({
      username: e
    });
  };

   onPickerChange = (itemValue, itemIndex) => {
    this.setState({
      platform: itemValue
    })
   }

  getCharacter = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    }, () => {
      axios.get(`https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username}`,
        {
          headers: {
            "TRN-Api-Key": APIKey
          }
        })
        .then(res => {
          if (res.data.error) {
            this.setState({
              badEntry: true,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
              username: ''
            }, () => {
              this.props.navigation.navigate("CharacterPage", {
                fortniteStats: res.data.stats,
                header: res.data.epicUserHandle,
                graphingDataSolo: res.data.recentMatches,
              });
            })
          }
        })
        .catch(err => {
          console.log(err);
        })
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../Images/fortnite-header-wallpaper.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.mainInputBox}>
            <Text style={styles.trackYourStats}> Track your Stats</Text>
            <Text style={styles.platform}> Choose your platform</Text>
            <Picker
              itemStyle={styles.pickerItemStyle}
              style={styles.pickerStyle}
              selectedValue={this.state.platform}
              onValueChange={this.onPickerChange}
            >
              <Picker.Item label="PC" value="pc" />
              <Picker.Item label="PS4" value="psn" />
              <Picker.Item label="XBOX" value="xbl" />
            </Picker>
            <Text style={styles.playerName}> Name the Player!</Text>
            <TextInput
              textAlign="center"
              onChangeText={e => this.onUsernameChange(e)}
              value={this.state.username}
              style={styles.textInput}
            />
            {this.state.badEntry && (
              <Text style={styles.recheckCharacter}>
                {" "}
                Please check your platform or user name
              </Text>
            )}
            <Button
              onPress={this.getCharacter}
              text="Search"
              style={styles.homepageButton}
              textStyle={styles.homePageTextStyle}
            />
            {this.state.isLoading && <Image source={ require('../Images/dancing.gif')} style={{height: 200, width: 200}}/>}
          </View>
          <View style={styles.container2}>
            <View>
              <Text style={styles.compareText}> Want to compare?</Text>
              <Button
                text="Compare!"
                onPress={this.navigateToComparison}
                style={styles.compareButton}
                textStyle={styles.compareStyle}
                />
                
                
            </View>
            <View>
              <Images />
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
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  backgroundImage: {
    height: window.height,
    width: window.width,
    flex: 1
  },
  mainInputBox: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 450,
    width: '100%',
    opacity: .8,
    backgroundColor: 'grey',
    marginTop: 160,
    paddingBottom: 30,
    marginBottom: 40,
    paddingTop: 0,
    borderWidth: 1  
  },
  trackYourStats: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 40,
    paddingBottom: 25
  },
  platform: {
    color: "white",
    fontSize: 28,
    paddingBottom: 15
  },
  pickerItemStyle: {
    color: "black",
    backgroundColor: 'white',
    opacity: .75,
    height: 44,
    fontWeight: "bold",
    fontFamily: 'Papyrus'
  },
  pickerStyle: {
    width: 85,
    height: 44,
    paddingTop: 0,
    marginBottom: 15
  },
  playerName: {
    color: "blue",
    fontSize: 24,
    fontFamily: 'Zapfino',
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: "transparent",
    height: 40,
    width: 240,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    color: "black",
    marginTop: 0,
    fontFamily: 'AmericanTypewriter-Bold'
  },
  recheckCharacter: {
    color: "#ff0000", 
    fontWeight: 'bold', 
    fontSize: 18, 
    paddingBottom: 2, 
    paddingTop: 15
  },
  homepageButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 120,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 15
  },
  homePageTextStyle: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 15
  },
  container2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 38
  },
  compareText: {
    color: "white",
    fontSize: 14,
    paddingBottom: 5,
    marginRight: 140
  },
  compareButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 115,
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 100,
    opacity: .8
  },
  compareStyle: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15
  }
});

export default HomePage;
