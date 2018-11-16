import React, {Component} from 'react';
import {StyleSheet, ImageBackground, Dimensions, Text} from 'react-native';

const heightofScreen= Dimensions.get('window').height
const widthofScreen = Dimensions.get('window').width

import bgSrc from '../images/backgroundimage.jpg'

export default class WallPaper extends Component {
  render() {
    return (
      
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 3,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    justifyContent:'center'
  }
});
