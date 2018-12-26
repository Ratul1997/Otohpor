import React from 'react'
import { Text, View, StyleSheet, Alert, Dimensions, TouchableOpacity, Linking } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'
import RNAndroidInstalledApps from 'react-native-android-installed-apps';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import SendIntentAndroid from 'react-native-send-intent'
import Modal from 'react-native-modalbox'
import FlatList from './FlatLists'
import { CheckBox } from 'react-native-elements'



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


export default class InstalledAppPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            isOpen: false,
            apps: [],
            checked: false,
            appList: []
        };
    }

    handleOnpress = () => {
        this.setState({ isOpen: true })
        RNAndroidInstalledApps.getApps()
            .then(apps => {
                this.setState({
                    apps: apps
                })

            })
            .catch(error => {
                alert(error);
            });
    }
    isCheckedArray() {
        let size = this.state.apps.length;
        let arr = new Array(size).fill(false)
        return arr;
    }
    _onItemPressed(item) {

        let arr = this.state.appList
        arr = arr.concat(this._list.sendData())

        console.log(arr)

        this.setState({ isOpen: false, appList: arr })
    }
    render() {
        console.log(this.state.appList)
        return (
            <View style={style.mainView}>
                <Button onPress={this.handleOnpress}>Please Select</Button>

                <Modal isOpen={this.state.isOpen} onClosed={() => this.setState({ isOpen: false })} style={[style.modal, style.modal4]} position={"center"} backButtonClose={true} swipeToClose={false}>
                    {(this.state.apps.length != 0) ? <FlatList data={this.state.apps} isChecked={this.isCheckedArray()}
                        ref={ref => (this._list = ref)}
                    /> : <Text></Text>}
                    <Button style={{ height: 50, width: 50 }} onPress={this._onItemPressed.bind(this)}>Done</Button>
                </Modal>

                <View style={style.viewOfApp}>
                    {(this.state.appList.length != 0) ? <FlatList data={this.state.appList} horizontal /> : <Text></Text>}
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
    },
    modal4: {
        height: height - 200,
        width: width - 100
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    viewOfApp: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'stretch'
    }

})