import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native'

class OnLoad extends Component {
    state = { 
        loaded: false
     }
    render() {
        const {
            placeholderColor,
            style,
            source
        }  = this.props
        return ( 
            <View style={styles.container}>
                <Image style={styles.renderedImage} onLoad={this._onLoad}/>
                {
                    !this.state.loaded && <Image srouce={require('../Images/dancing.gif')}/>
                }
            </View>
         );
    }
    _onLoad = () => {
        this.setState({
            loaded: true
        })
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "black"
      },
    renderedImage: {
        height: 300,
        width: 300
    }


})
 
export default OnLoad;