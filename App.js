import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomePage from './components/homePage';
import CharacterSearch from './components/characterSearch';

export default class App extends React.Component {
  state = {
  page: 'HOME_PAGE',
  user: {}
  }

  userSelected = user => {
    this.setState({
      user: user,
      page: 'USER_STATS'
    })
  }

  changeScreen = page => {
    this.setState({page: page});
    console.log(page)
  }


    // updateUserInfo

  pickScreen = page => {
    switch(page) {
      case 'HOME_PAGE':
        return (
          <HomePage
          userSelected={this.userSelected}
            changeScreen={this.changeScreen}
            />
          )
          case 'USER_STATS':
          return (
            <CharacterSearch 
            user={this.state.user}
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