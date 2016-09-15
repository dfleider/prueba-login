/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

let NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    if(route.name=='Login' || route.name== 'Dashboard'){
      return null
    }

    return(
      <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
        if(index>0){
          navigator.pop();
        }
      }}>
      <Text style = {{marginTop:10, marginLeft: 20, color: '#007AFF'}}>Atras</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route){
    return null;
  },
  Title: function(route,navigator, index){
      if(route.name=='Login' || route.name== 'Dashboard'){
      return null;
    }
  return(
    <Text style={{marginTop:10, color:'#007AFF'}}>
    {route.name}
    </Text>
    )
  },
};

const Login = require('./src/components/loginView')
const Tabs = require('./src/components/tabs')

class Eproject extends Component {
renderScene(route, navigator){
  switch (route.name){
    case 'Login':
      return(
        <Login {...route.props} navigator = {navigator} route={route} />
      );
      case 'Dashboard':
      return(
        <Tabs  {...route.props} navigator = {navigator} route={route} />
      );

  }
}

  render() {
    return (
      <Navigator style={styles.bar}
      initialRoute={{name: 'Login'}}
      renderScene = {this.renderScene}
      configureScene={(route) =>{
        if(route.sceneConfig){
        return route.sceneConfig;
      }
      return Navigator.SceneConfigs.FloatFromRight
    }}
    navigationBar={
      <Navigator.NavigationBar
      routeMapper={NavigatorBarRouteMapper}/>}
    />
    )
  }
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('Eproject', () => Eproject);
