import React from 'react'
import { View, StyleSheet } from 'react-native'
import WallPaper from './WallPaper';
import UserInput from './UserInput';
import Form from './Form';
import Logo from './Logo';
import SubmitButton from './SubimtButton';
import {Actions} from 'react-native-router-flux'

export default class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <WallPaper>
                <Logo />
                <View style={style.shortinput}>
                    <UserInput
                        placeholder="First Name"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        shortname={true}
                    />
                    <UserInput
                        placeholder="Last Name"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        keyboardType='default'
                        shortname={true}
                    />
                </View>
                <UserInput
                    placeholder="Enter Email Address"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    keyboardType='email-address'
                />
                <UserInput
                    placeholder="Create Username"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    keyboardType='default'
                    autoFocus={true}
                />
                <UserInput
                    placeholder="Create Password"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <UserInput
                    placeholder="Confirm Password"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                />
                
                <SubmitButton
                    buttonName='Create Account'
                    onPress={()=> Actions.confirmation_code()}
                />
            </WallPaper>

        )
    }
}
const style = StyleSheet.create({
    shortinput: {
        flexDirection: 'row',
        margin: 10
    }
})