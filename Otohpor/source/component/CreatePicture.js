import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const options = {
    title: 'Choose Profile Picture',
    takePhotoButtonTitle: 'Take Piture',
    chooseFromLibraryButtonTitle: 'Upload Picture From Library',
}

export default class CreatePicture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarSource: null
        }

    }
    
    uploadImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
        return (
            <View style={style.mainView}>
                <View style={style.imageView}>
                    <Image source={this.state.avatarSource} style={style.uploadAvatar} />
                    {this.state.avatarSource === null ?
                        <TouchableOpacity style={style.addButton} onPress={this.uploadImage}>
                            <Text style={style.text}>Upload Image</Text></TouchableOpacity> :
                        <Button style={style.button} containerStyle={style.container} onPress={()=>Actions.home()}> Done </Button>}

                    {this.state.avatarSource === null?
                        <Button style={style.button} containerStyle={style.container} onPress={()=>Actions.home()}> Skip </Button>: <Text></Text>}

                </View>

            </View>
        )
    }
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    uploadAvatar: {
        height: height - height / 2,
        width: width - width / 6,
        borderColor: '#E5E5E5',
        borderWidth: 2,
        borderRadius: 13
    },
    addButton: {
        backgroundColor: '#F3EEEE',
        width: 95,
        height: 35,
        borderColor: 'black',
        borderWidth: .75,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 100,
        marginTop: height / 1.5,
        zIndex: 1000,
        position: 'absolute',
        justifyContent: 'flex-end',
        borderRadius: 12
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'black',
        justifyContent: 'center',
        paddingBottom: 7
    },
    button: {
        color: 'white',
        fontSize: 18
    },
    container: {
        height: 35,
        width: 95,
        marginTop: 15,
        backgroundColor: '#176891',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        zIndex:1000,
    }
})