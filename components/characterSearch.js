import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import Button from "./button";
import HomePage from "./homePage";
import App from "../App";

const CharacterSearch = props => {
    console.log(props.user.accountId);
    let titles = Object.keys(props.user.stats)
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "white" }}>{props.user.epicUserHandle}</Text>
      <Text style={{ color: "white" }}>Single Player Mode:</Text>
        <Text style={{color: 'white'}}>Score: {props.user.stats.p2.score.displayValue}</Text>
        <Text style={{color: 'white'}}># of Matches:{props.user.stats.p2.matches.displayValue}</Text>
        <Text style={{color: 'white'}}># of Kills:{props.user.stats.p2.kills.displayValue}</Text>
        <Text style={{color: 'white'}}>Kills/Game Ratio: {props.user.stats.p2.kpg.displayValue}</Text>
      <Text style={{ color: "white" }}>Dual Player Mode:</Text>
        <Text style={{color: 'white'}}>Score: {props.user.stats.p10.score.displayValue}</Text>
        <Text style={{color: 'white'}}># of Matches:{props.user.stats.p10.matches.displayValue}</Text>
        <Text style={{color: 'white'}}># of Kills:{props.user.stats.p10.kills.displayValue}</Text>
        <Text style={{color: 'white'}}>Kills/Game Ratio: {props.user.stats.p10.kpg.displayValue}</Text> */}
        {
            props.user.stats && Object.values(props.user.stats).map((x, i) => (
                <React.Fragment key={i}>

                    <Text style={{color: 'white'}}>{titles[i]}</Text>
                    <Text style={{color: 'white'}}>Score: {x.score.displayValue}</Text>
                    <Text style={{color: 'white'}}># of Matches:{x.matches.displayValue}</Text>
                    <Text style={{color: 'white'}}># of Kills:{x.kills.displayValue}</Text>
                    <Text style={{color: 'white'}}>Kills/Game Ratio: {x.kpg.displayValue}</Text>
                </React.Fragment>
            ))
        }
    </View>
  );
};

const styles = StyleSheet.create({
  userBox: {
    width: 300,
    height: 50,
    borderColor: "red",
    borderWidth: 1
  },
  title: {
    fontSize: 50,
    marginTop: 40,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  button: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 100,
    borderRadius: 10
  },
  navigationButton: {
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    height: 35,
    width: 120,
    borderRadius: 5
  },
  buttonText: {
    color: "white"
  }
});

export default CharacterSearch;
