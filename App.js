import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomePage from './components/homePage';
import CharacterSearch from './components/characterSearch';

const RootStack = createStackNavigator(
    {
        Home: HomePage,
        CharacterPage: CharacterSearch
    },
    {
        initialRouteName: 'Home'
    }
)

const App = () => (
    <RootStack />
)

export default App;