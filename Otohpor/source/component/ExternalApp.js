import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'
import RNAndroidInstalledApps from 'react-native-android-installed-apps';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import SendIntentAndroid from 'react-native-send-intent'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


export default class ExternalApp extends React.Component {
    constructor(props) {
        super(props);


    }
    download = () => {

        let url = 'https://play.google.com/store/apps/details?id=com.pathao.user&hl=en';
        Linking.openURL(url).catch(err => {
            if (err.code === 'EUNSPECIFIED') {
                if (Platform.OS === 'android') {
                    Linking.openURL(
                        url
                    );
                }
            } else {
                throw new Error(`Could not open ${appname}. ${err.toString()}`);
            }
        });
    }
    
    handleOnpress = () => {
        SendIntentAndroid.openApp('com.pathao.user').then((wasOpened) => {
            if(!wasOpened){
                this.download();
            }
        });
    }

    render() {
        return (
            <View style={style.mainView}>
                <Button onPress={this.handleOnpress}>Hi</Button>
            </View>
        )
    }
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})