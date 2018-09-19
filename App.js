import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomePage from './components/homePage';
import CharacterSearch from './components/characterSearch';
import ComparisonPage from './components/comparisonPage';
import CharacterComparison from './components/characterComparison'

const RootStack = createStackNavigator(
    {
        Home: HomePage,
        CharacterPage: CharacterSearch,
        ComparisonPage: ComparisonPage,
        CharacterComparison: CharacterComparison
    },
    {
        initialRouteName: 'Home'
    }
)

const App = () => (
    <RootStack />
)

export default App;