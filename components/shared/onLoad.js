import React, {Component} from 'react';
import {View, Image} from 'react-native';
import onloadStyle from './styles/onloadStyle'

class OnLoad extends Component {
    state = { 
        loaded: false
     }
    render() {
        //If the page needs time to render, the image of the character will display on bottom of screen
        const {
            placeholderColor,
            style,
            source
        }  = this.props
        return ( 
            <View style={onloadStyle.container}>
                <Image style={onloadStyle.renderedImage} onLoad={this._onLoad}/>
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

 
export default OnLoad;