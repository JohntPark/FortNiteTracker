import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


//Button for Search for solo player
const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <Text style={props.textStyle}>{props.text}</Text>
  </TouchableOpacity>
);

export default Button;