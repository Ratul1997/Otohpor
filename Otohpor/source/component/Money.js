import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from '../common/Header';
import Button from 'react-native-button'
import SubmitButton from './SubimtButton';
import { Actions } from 'react-native-router-flux';
export default class Money extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.mainView}>

            <Text>I am Money</Text>
            </View>

        )
    }
}
const style=StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignSelf: 'stretch',
        backgroundColor:'white'
    }
})