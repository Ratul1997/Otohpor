import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

export default class UserInput extends Component {
  render() {
    
    if(this.props.sendemail){
      return (
        <View style={styles.inputWrapper}>
          <TextInput
            style={(!this.props.multiline)?styles.input2:styles.input3}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            keyboardType={this.props.keyboardType}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            autoFocus={this.props.autoFocus}
            multiline={this.props.multiline}
            textAlignVertical={'top'}
            onChangeText={this.props.onChangeText}
          />
        </View>

      )
    }
    if (!this.props.source) {
      return (
        <View style={styles.inputWrapper}>
          <TextInput
            style={(this.props.shortname)?styles.inputshort:styles.input2}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            keyboardType={this.props.keyboardType}
            placeholderTextColor="#C7C7A2"
            underlineColorAndroid="transparent"
            autoFocus={this.props.autoFocus}
            multiline={this.props.multiline}
            onChangeText={this.props.onChangeText}
         
          />
        </View>

      )
    }
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          keyboardType={this.props.keyboardType}
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          onChangeText={this.props.onChangeText}
          multiline={this.props.multiline}

        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  input2: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 15,
    borderRadius: 20,
    color: 'black',
  },

  input3: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 150,
    marginHorizontal: 20,
    paddingLeft: 15,
    borderRadius: 20,
    color: 'black',
  },
  inputshort: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH/ 2.5,
    height: 40,
    marginHorizontal: 10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    margin: 5
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});