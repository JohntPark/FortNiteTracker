import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Picker,
  Image
} from "react-native";
import Button from "./button";
import axios from "axios";
import Images from "../shared/images";
import APIKey from "../../config";
import homepageStyle from './styles/homepageStyle'

class HomePage extends React.Component {
  // Initial state
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
  helper = (res) => ({
    fortniteStats: res.data.stats,
    header: res.data.epicUserHandle,
    graphingDataSolo: res.data.recentMatches
  })

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
      //Grabs data for the character chosen
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
            // Reset data when going back
            this.setState({
              isLoading: false,
              badEntry: false,
              username: ''
            }, 
            () => {
              this.props.navigation.navigate("CharacterPage", this.helper(res))
              }
          );
          }
        })
        .catch(err => {
          console.log(err);
        })
    })
  };

  render() {
    return (
      <View style={homepageStyle.container}>
        <ImageBackground
          source={require("../../Images/fortnite-header-wallpaper.png")}
          style={homepageStyle.backgroundImage}
        >
          <View style={homepageStyle.mainInputBox}>
            <Text style={homepageStyle.trackYourStats}> Track your Stats</Text>
            <Text style={homepageStyle.platform}> Choose your platform</Text>
            <Picker
              itemStyle={homepageStyle.pickerItemStyle}
              style={homepageStyle.pickerStyle}
              selectedValue={this.state.platform}
              onValueChange={this.onPickerChange}
            >
              <Picker.Item label="PC" value="pc" />
              <Picker.Item label="PS4" value="psn" />
              <Picker.Item label="XBOX" value="xbl" />
            </Picker>
            <Text style={homepageStyle.playerName}> Name the Player!</Text>
            <TextInput
              textAlign="center"
              onChangeText={this.onUsernameChange}
              value={this.state.username}
              style={homepageStyle.textInput}
            />
            {/* This checks for a correct entry */}
            {this.state.badEntry && (
              <Text style={homepageStyle.recheckCharacter}>
                {" "}
                Please check your platform or user name
              </Text>
            )}
            <Button
              onPress={this.getCharacter}
              text="Search"
              style={homepageStyle.homepageButton}
              textStyle={homepageStyle.homePageTextStyle}
            />
            {this.state.isLoading && <Image source={ require('../../Images/dancing.gif')} style={{height: 200, width: 200}}/>}
          </View>
          <View style={homepageStyle.container2}>
            <View>
              <Text style={homepageStyle.compareText}> Want to compare?</Text>
              <Button
                text="Compare!"
                onPress={this.navigateToComparison}
                style={homepageStyle.compareButton}
                textStyle={homepageStyle.compareStyle}
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

export default HomePage;
