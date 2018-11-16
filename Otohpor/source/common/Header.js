import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Logo from '../component/Logo';
import Profilepicture from './Profilepicture';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from 'react-native-button'
const height = Dimensions.get('window').height
const weidht = Dimensions.get('window').width
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.source) {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{this.props.name}</Text>
          {this.commonView}
        </View>
      )
    }
    return (
      <View style={styles.viewStyle}>
        {this.props.source ? <MaterialIcons
          name="notifications" color="white" size={25} backgroundColor="black"
        /> : ""}
        {this.props.source ? <Profilepicture /> :
          <Text style={styles.textStyle}>{this.props.name}</Text>}
        {this.props.source ? <MaterialIcons
          name="more" color="white" size={25} backgroundColor="black"
        />
          : ""}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#104964',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height / 9,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: height / 25,
    color: 'white'
  }
});
