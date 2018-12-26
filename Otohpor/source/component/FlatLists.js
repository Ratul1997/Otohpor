import React from 'react';
import { Image, StyleSheet, Alert, AppRegistry, ActivityIndicator, Text, View, FlatList } from 'react-native';
import { List, CheckBox, Icon, ListItem, Avatar, TouchableHighlight } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import SendIntentAndroid from 'react-native-send-intent'

const base64Icon = 'data:image/png;base64,'
class Flatlists extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.isChecked,
            selectedLists: []
        }
        this.sendData = this.sendData.bind(this);
    }

    arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    isIconCheckedOrNot = (item, index) => {
        let isChecked = [...this.state.checked];
        isChecked[index] = !isChecked[index];
        if (isChecked[index]) {
            this.state.selectedLists.push(item);
        } else if (!isChecked.includes(item)) {
            this.setState({
                selectedLists: this.arrayRemove(this.state.selectedLists, item),
                checked: [...isChecked, item]
            })
        }
        this.setState({ checked: isChecked.filter(a => a !== item) });
    }

    sendData = () => {
        console.log(this.state.selectedLists)
        return this.state.selectedLists
    }

    onItemPress = (item, index) => {
        console.log(index)
        //SendIntentAndroid.openApp(item.packageName).then((wasOpened) => {});
    }
    render() {

        if (this.props.horizontal) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
                        <List containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0, marginTop: 0 }}>
                            <FlatList
                                data={this.props.data}
                                keyExtractor={(x, i) => i.toString()}

                                renderItem={({ item, index }) =>
                                    <ListItem
                                        hideChevron
                                        avatar={
                                            <Image style={{ width: 50, height: 50 }} source={{ uri: base64Icon + item.icon }} />
                                        }
                                        onPress={() => SendIntentAndroid.openApp(item.packageName).then((wasOpened) => { })}
                                    />}
                            ></FlatList>
                        </List>
                    </View>

                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
                    <List>
                        <FlatList
                            data={this.props.data}
                            keyExtractor={(x, i) => i.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <ListItem
                                        avatar={
                                            <Image style={{ width: 50, height: 50 }} source={{ uri: base64Icon + item.icon }} />
                                        }
                                        rightIcon={
                                            <CheckBox
                                                onPress={() => this.isIconCheckedOrNot(item, index)}
                                                checked={this.state.checked[index]}
                                            />
                                        }
                                        onPress={() => console.log(index)}
                                    />
                                )
                            }}
                        >

                        </FlatList>
                    </List>
                </View>

            </View>
        );
    }
}

export default Flatlists;

const style = StyleSheet.create({

    textview: {
        fontSize: 20,
        padding: 10
    },
    separate: {
        height: 1,
        width: '84%',
        backgroundColor: '#CED0CE',
        marginLeft: '16%'
    },
    activityindicator: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#CED0CE'
    }
})
/*
                                    <TouchableWithoutFeedback style={{ alignSelf: 'auto', justifyContent: 'space-around', flex: 1, margin: 5 }}>

                                        <Image style={{ width: 50, height: 50 }} source={{ uri: base64Icon + item.icon }} />

                                        <Text style={{ margin: 5 }}>{item.appName}</Text>
                                    </TouchableWithoutFeedback>

*/