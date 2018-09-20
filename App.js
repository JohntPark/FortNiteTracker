import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomePage from './components/homePage';
import CharacterSearch from './components/characterSearch';
import ComparisonPage from './components/comparisonPage';
import CharacterComparison from './components/characterComparison'
import CharacterSearchRecentMatches from './components/characterSearchRecentMatches';
// import ComparisonGraph from './components/comparisonGraph'

const RootStack = createStackNavigator(
    {
        Home: HomePage,
        CharacterPage: CharacterSearch,
        ComparisonPage: ComparisonPage,
        CharacterComparison: CharacterComparison,
        CharacterGraphSolo: CharacterSearchRecentMatches,
        // ComparisonGraph: ComparisonGraph
    },
    {
        initialRouteName: 'Home'
    }
)

const App = () => (
    <RootStack />
)

export default App;