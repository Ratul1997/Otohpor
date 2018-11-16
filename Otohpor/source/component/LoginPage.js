
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, ScrollView, TextInput } from 'react-native';

import WallPaper from '../component/WallPaper'
import Form from '../component/Form'
import Logo from './Logo';
import Signup from './Signup';
import SubmitButton from './SubimtButton';
import { Actions } from 'react-native-router-flux';
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            emailaddress: ''
        }
    }
    render() {
        return (
            <View style={style.mainview}>
                <WallPaper>
                <StatusBar barStyle='light-content' backgroundColor="#104964"/>
                    <ScrollView contentContainerStyle={style.mainview}>
                        <Logo />
                        <View style={style.form}>

                            <Form />

                        </View>
                        <View style={style.submitButton}>

                            <SubmitButton
                            buttonName='LOGIN' mainPage={true} onPress={()=>Actions.home()}/>
                        </View>

                    </ScrollView>
                </WallPaper>
            </View>

        );
    }
}

const style = StyleSheet.create({
    mainview: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    logo: {
        backgroundColor: "white",
        flex: 1
    },
    form: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButton: {
        flex: 3,
        margin: 20
    }
})