import React from 'react'
import { View, StyleSheet,Text ,Dimensions} from 'react-native'
import WallPaper from './WallPaper';
import Header from '../common/Header';
import UserInput from './UserInput';
import SubmitButton from './SubimtButton';
import {Actions} from 'react-native-router-flux'

const height = Dimensions.get('window').height
const weidht = Dimensions.get('window').width


export default class Confirmation extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.mainview}>
                <Header
                    name="Othopor" source={false} />
                <WallPaper>
                    <View style={style.inputCode}>
                        <Text style={style.text} adjustsFontSizeToFit> There has sent a code to your email</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={style.text2}>Enter Code : </Text>
                        <UserInput
                            placeholder="Type Here"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            keyboardType='default'
                            shortname={true}
                        />
                        </View>
                    </View>
                    <SubmitButton
                        buttonName='Confirm'
                        onPress={()=>Actions.profile_picture()}
                    />
                </WallPaper>
            </View>


        )
    }
}
const style = StyleSheet.create({
    mainview: {
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        color: 'white',
        marginBottom: 15
    },

    text2:{
        fontSize: 25,
        color: 'white',
        marginBottom: 20,
        paddingLeft: 15,
        paddingTop:9
    },
    inputCode:{
        margin: 15,
        justifyContent:'space-between',
        padding:15,
        alignSelf:'center',
        paddingTop: height/25
    }
})