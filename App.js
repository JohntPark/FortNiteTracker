import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomePage from './components/solo/homePage';
import CharacterSearch from './components/solo/characterSearch';
import ComparisonPage from './components/comparison/comparisonPage';
import CharacterComparison from './components/comparison/characterComparison'
import CharacterSearchRecentMatches from './components/solo/characterSearchRecentMatches';
// import ComparisonGraph from './components/comparisonGraph'


//Navigation for the pages
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