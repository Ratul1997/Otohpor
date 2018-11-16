import React, {Component} from 'react';
import {StyleSheet, View, Text,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={()=>Actions.create_account()}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:15,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});