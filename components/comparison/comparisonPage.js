import React from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Picker,
  Image
} from "react-native";
import Button from "../solo/button";
import axios from "axios";
import Images from "../shared/images";
import APIKey from "../../config";
import comparisonPageStyle from './styles/comparisonpagestyle';

class ComparisonPage extends React.Component {
  // Initial state
  state = {
    platform: "pc",
    username1: "",
    username2: "",
    badEntry: false,
    isLoading: false
  };

  static navigationOptions = {
    header: null
  };
  navigateToHome = () => {
    this.props.navigation.navigate("Home");
  };

  onPersonOneChange = e => {
    this.setState({
      username1: e
    });
  };

  onPersonTwoChange = e => {
    this.setState({
      username2: e
    });
  };

  helper = (res) => ({
    comparisonStats: res[0].data.stats,
    header: res[0].data.epicUserHandle,
    comparisonStats1: res[1].data.stats,
    header1: res[1].data.epicUserHandle,
    comparisonGraph: res[0].data.recentMatches,
    comparisonGraph1: res[1].data.recentMatches
  })

  characterSearch = () => {
    let config = {
      headers: {
        "TRN-Api-Key": APIKey
      }
    }

    this.setState(
      {
        isLoading: true
      },
      () => {
        let promises = [
          // This part is grabbing the info for API call for both players
          axios.get(`https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username1}`, config),
          axios.get(`https://api.fortnitetracker.com/v1/profile/${this.state.platform}/${this.state.username2}`, config)
        ];
        if (
          //Automatically returns error if string length is less than 3
          this.state.username1.length < 3 ||
          this.state.username2.length < 3
        ) {
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
            if (res[0].data.error || res[1].data.error) {
              console.log("Player Not Found");
              this.setState({
                badEntry: true,
                isLoading: false
              });
            } else {
              this.setState(
                {
                  //When going back, it resets the page back to initial state
                  isLoading: false,
                  username1: "",
                  username2: ""
                },
                () => {
                  // Grabbing all data for the Comparisons
                  this.props.navigation.navigate("CharacterComparison", this.helper(res));
                }
              );
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  };

  characterComparisonButton = e => {
    e.preventDefault();

    this.characterSearch();
  };

  render() {
    return (
      <View style={comparisonPageStyle.container}>
        <ImageBackground
          source={require("../../Images/ironman.jpg")}
          style={comparisonPageStyle.backgroundImage}
        >
          <View style={comparisonPageStyle.mainInputBox}>
            <Text style={comparisonPageStyle.compareStyle}> Compare Two Players</Text>
            <Text style={comparisonPageStyle.platform}> Choose your platform</Text>
            <Picker
              itemStyle={comparisonPageStyle.pickerItemStyle}
              style={comparisonPageStyle.pickerStyle}
              selectedValue={this.state.platform}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ platform: itemValue })
              }
            >
              <Picker.Item label="PC" value="pc" />
              <Picker.Item label="PS4" value="psn" />
              <Picker.Item label="XBOX" value="xbl" />
            </Picker>
            <Text style={comparisonPageStyle.playerText1}> Name the First Player!</Text>
            <TextInput
              textAlign="center"
              onChangeText={this.onPersonOneChange}
              value={this.state.username1}
              style={comparisonPageStyle.textInput}
            />
            <Text style={comparisonPageStyle.playerText2}> Name the Second Player!</Text>
            <TextInput
              textAlign="center"
              onChangeText={this.onPersonTwoChange}
              value={this.state.username2}
              style={comparisonPageStyle.textInput2}
            />
            {this.state.badEntry && (
              <Text style={comparisonPageStyle.recheckCharacter}>
                {" "}
                Please check your platform or user names
              </Text>
            )}

            <Button
              onPress={this.characterComparisonButton}
              text="Compare"
              style={comparisonPageStyle.compareButton}
              textStyle={comparisonPageStyle.compareButtonText}
            />
          </View>

          <View style={comparisonPageStyle.container2}>
            <View>
              <Text style={comparisonPageStyle.singleStatsText}> See your Stats?</Text>
              <Button
                text="Single Stats"
                onPress={this.navigateToHome}
                style={comparisonPageStyle.footerButton}
                textStyle={comparisonPageStyle.footerButtonText}
              />
            </View>
            {this.state.isLoading && (
              <Image
                source={require("../../Images/dancing.gif")}
                style={{
                  height: 180,
                  alignItems: "center",
                  width: 210,
                  flex: 1,
                  marginBottom: 100
                }}
              />
            )}
            <View style={{ marginTop: 41, marginRight: -27 }}>
              <Images />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ComparisonPage;
