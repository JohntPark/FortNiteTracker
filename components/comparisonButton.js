import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ComparisonButton = props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <Text style={props.textStyle}>{props.text}</Text>
  </TouchableOpacity>
);

export default ComparisonButton;