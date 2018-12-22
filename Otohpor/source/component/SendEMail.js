import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,ScrollView } from 'react-native';
import Header from '../common/Header'
import UserInput from './UserInput'
import WallPaper from './WallPaper';
import Button from 'react-native-button';
import SubmitButton from './SubimtButton'
export default class SendEmail extends React.Component {

    constructor(props) {

        super(props)

        this.state={
            sendEmailTo:'',
            massage:'',
            subject:'',
            sender:''
        }
    }

    render() {
        return (
            <WallPaper  style={style.mainview}>
                <Header name='Send Email' />
                
                <ScrollView containerStyle={style.containerView} style={style.view}>

                    <UserInput
                        placeholder="TO: "
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        sendemail
                        onChangeText={(text)=>this.setState({sendEmailTo: text})}
         
                    />
                    <UserInput
                        placeholder="SUBJECT: "
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        sendemail
                        onChangeText={(text)=>this.setState({subject: text})}
         
                    />
                    <UserInput
                        placeholder="FROM: "
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        sendemail
                        onChangeText={(text)=>this.setState({sender: text})}
                    />

                    <UserInput
                        placeholder="Type Message Here: "
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        multiline={true}
                        sendemail
                        onChangeText={(text)=>this.setState({massage: text})}
         

                    />
                </ScrollView>

                <SubmitButton
                buttonName="Send"/>
            </WallPaper>
        )
    }
}
const style = StyleSheet.create({
    mainview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'red'
    },
    containerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
        flex: 4,
        flexDirection: 'column',
        marginTop: 15,
    }
})