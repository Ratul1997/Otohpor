
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import spinner from '../images/loading.gif';
import Signup from './Signup';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class SubmitButton extends Component {
  constructor() {
    super();

  }


  render() {
    if(!this.props.mainPage){
      return(
        <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
        >
          <Text style={styles.text}>{this.props.buttonName}</Text>
        </TouchableOpacity>
      </View>
      )
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
        >
          <Text style={styles.text}>{this.props.buttonName}</Text>
        </TouchableOpacity>
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 30
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A23B6C',
    height: MARGIN,
    borderRadius: 20,
    width: 150,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});