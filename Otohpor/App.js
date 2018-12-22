import React, { Component } from 'react';
import {  StyleSheet, View, Image, } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux'
import LoginPage from './source/component/LoginPage'
import HomeScreen from './source/component/HomeScreen'
import CreateAccount from './source/component/CreateAccount'
import Confirmation from './source/component/Confirmation'
import Massaging from './source/component/Massaging'
import Task from './source/component/Task'
import Money from './source/component/Money'
import Icon from 'react-native-vector-icons/FontAwesome';
import CreatePicture from './source/component/CreatePicture'
import SendEmail from './source/component/SendEMail'
import ExternalApp from './source/component/ExternalApp';
class TabIcon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Icon name={this.props.iconName} size={18} style={{ color: 'green' }} />
      </View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#104964' }} titleStyle={{ color: "white" }} headerTintColor="white" showLabel={false}>
          <Scene key='login' component={LoginPage} hideNavBar={true} animation='fade' />
          <Scene key='send_email' component={SendEmail} hideNavBar={true} animation='fade' />
          <Scene key= 'open_app' component={ExternalApp} hideNavBar animation='fade' initial/>
          <Scene key='confirmation_code' component={Confirmation} hideNavBar={true} />
          <Scene key='create_account' component={CreateAccount} hideNavBar={true} />
          <Scene key='home' component={HomeScreen} hideNavBar={true} />
          <Scene key='profile_picture' component={CreatePicture} title='Set a profile picture' />

          <Scene key="profile_work" hideNavBar tabs showLabel={false} tabBarPosition='bottom' activeBackgroundColor='white' swipeEnabled showLabel tabBarStyle={{ backgroundColor: '#CCCCCC' }}>
            <Scene key="task"
              title="Task"
              iconName="align-center"
              icon={TabIcon}
              hideNavBar={true}
              component={Task}
            />
            <Scene key="money"
              title="Money"
              iconName="money"
              icon={TabIcon}
              hideNavBar={true}
              component={Money}
            />

            <Scene key="messeging"
              iconName="comment"
              icon={TabIcon}
              hideNavBar={true}
              title="Messeging"
              component={Massaging} />
          </Scene>
        </Scene>

      </Router>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    backgroundColor: 'ghostwhite',
    opacity: 0.98
  },
})