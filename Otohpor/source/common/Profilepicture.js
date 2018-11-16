import React from 'react'
import {Text, Image} from 'react-native'
import {Avatar} from 'react-native-elements'
import prflpic from '../images/profile_pic.jpg'
export default class Profilepicture extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Avatar
                large
                rounded
                source={prflpic}
                style={{justifyContent: 'center', flex:1, alignSelf:'center'}  }
            />

        )
    }
}