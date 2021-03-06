import React from 'react'
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { View, Text, } from 'react-native'

class CharacterSearchRecentMatches extends React.PureComponent {

    render() {

        const data = this.props.soloGraph;
        console.log(data)


        // => ARRAY OF NUMBERS
        let killsArr = this.props.soloGraph.map(k => k.kills);
        console.log(killsArr);
        

        const contentInset = { top: 20, bottom: 30 }
        return (
            //Data for the graphs for the Y Axis
            <View style={{ height: 200, width: '100%', backgroundColor: 'white', opacity: 0.6,}}>
                <Text > Recent Matches (Kills)</Text>
            <View style={{ paddingLeft: 10, height: 200, width: '100%', flexDirection: 'row' }}>
                <YAxis 
                    data={killsArr}
                    contentInset={contentInset}
                    svg={{
                        fill: 'black',
                        fontSize: 10,
                    }}
                    numberOfTicks={8}
                    formatLabel={value => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16, paddingRight: 18 }}
                    data={killsArr}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}>
                    <Grid />
                </LineChart>
                ))
                }
                </View>
            </View>
        )
    }

}

export default CharacterSearchRecentMatches;