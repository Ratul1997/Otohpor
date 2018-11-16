import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import Header from '../common/Header';
import Button from 'react-native-button'
import SubmitButton from './SubimtButton';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements'

const height= Dimensions.get('window').height
const width=Dimensions.get('screen').width

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.mainview}>
                <Header source={true} />
                <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    containerStyle={{ backgroundColor: '#104964', borderWidth: 0 }}
                    inputStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', color: 'black' }}
                    placeholder='Type Here...'
                    placeholderTextColor='black'
                />
                <View style={style.viewContainer}>
                    <ScrollView style={style.scrollviewContainer}>
                        <SubmitButton buttonName='Ok' onPress={() => Actions.profile_work()} />
                    </ScrollView>
                    
                    <TouchableOpacity style={style.addButton} onPress={()=>console.log('ok')}>
                        <Text style={style.text}>+</Text>
                    </TouchableOpacity>

                </View>

            </View>

        )

    }
}
const style = StyleSheet.create({
    mainview: {
        flex: 1
    },
    text:{
        fontSize:50,
        alignSelf:'center',
        color:'white',
        justifyContent:'center',
        paddingBottom:17
    },
    scrollviewContainer: {
        flex: 1,
        zIndex: 5,
    },
    viewContainer:{
        flex:1,
        position:'relative',
        backgroundColor:'white'
        
    },
    addButton: {
        backgroundColor: '#104964',
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 100,
        marginTop: height/1.6,
        zIndex: 1000,
        position:'absolute',
        justifyContent:'flex-end',
        marginLeft: width-120
    }
})