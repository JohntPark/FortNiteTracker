import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomePage from './components/homePage';

export default class App extends React.Component {
  state = {
  page: 'HOME_PAGE'
  }

  changeScreen = page => {
    this.setState({page: page});
  }


  pickScreen = page => {
    switch(page) {
      case 'HOME_PAGE':
        return (
          <HomePage
            changeScreen={this.changeScreen}
          />
        )
      default:
        return <Text> BAD PAGE</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
       {this.pickScreen(this.state.page)}
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
});