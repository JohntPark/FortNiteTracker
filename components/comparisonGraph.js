// import React from "react";
// import { LineChart, YAxis, XAxis, Grid } from "react-native-svg-charts";
// import { View, Text, StyleSheet } from "react-native";
// import {Circle } from 'react-native-svg'


//NEED TO WORK ON THIS, BUT COMPARISON GRAPH
// class ComparisonGraph extends React.PureComponent {
//   render() {
//     const data = this.props.comparisonGraph;
//     const data1 = this.props.comparisonGraph1;

//     // => ARRAY OF NUMBERS
//     let killsArr = this.props.comparisonGraph.map(k => k.kills);
//     let killsArr1 = this.props.comparisonGraph1.map(a => a.kills);
//     console.log('KillArr:', killsArr)
//     console.log('KillArr1:',killsArr1)
//     let higherKills;
//     if(Math.max.apply(null, killsArr) > Math.max.apply(null, killsArr1)) {
//       higherKills = killsArr
//     } else {
//       higherKills = killsArr1
//     }
//     console.log('higher kills',higherKills)
//     const contentInset = { top: 20, bottom: 30 };

//     return (
//       <View
//         style={{
//           height: 200,
//           width: 370,
//           marginLeft: 15,
//           backgroundColor: "white",
//           opacity: 0.6
//         }}
//       >
//         <Text> Recent Matches (Kills)</Text>
//         <View
//           style={{
//             paddingLeft: 10,
//             height: 200,
//             width: 350,
//             flexDirection: "row"
//           }}
//         >
//           <YAxis
//             data={higherKills}
//             contentInset={contentInset}
//             svg={{
//               fill: "black",
//               fontSize: 10
//             }}
//             numberOfTicks={10}
//             formatLabel={value => `${value}`}
//           />
//           <View style={{ flex: 1, marginLeft: 16 }}>
//             <LineChart
//               style={{ flex: 1 }}
//               data={killsArr}
//               svg={{ stroke: "darkblue" }}
//               contentInset={contentInset}
//             >
//               <Grid />
//             </LineChart>

//             <LineChart
//               style={StyleSheet.absoluteFill}
//               data={killsArr1}
//               svg={{ stroke: "darkmagenta" }}
//               contentInset={contentInset}
//             >
//             </LineChart>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// export default ComparisonGraph;
