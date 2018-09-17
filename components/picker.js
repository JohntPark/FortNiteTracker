import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Picker, Image } from 'react-native';


const Picker = props => {
    return (
          <Picker 
          itemStyle={{color: 'black', height: 44}}
          style={{ width: 90, height: 44, backgroundColor: 'white', paddingTop: 0, marginBottom: 30 }}
          selectedValue={props.selectedValue}
          onValueChange={(itemValue, itemIndex) => this.setState({platform: itemValue})}
          >
            <Picker.Item label="PS4" value="psn"/>
            <Picker.Item label="XBOX" value="xbl"/>
            <Picker.Item label="PC" value="pc"/>
          </Picker>
    )
};
export default Picker;


// USE LATER IF NEED BE