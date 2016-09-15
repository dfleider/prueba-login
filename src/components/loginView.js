'use strict'

//Instalar la libreria de Firebaste
//npm install firebase --save

import React, {Component} from 'react';
import {View,
      Text,
      Image,
      TouchableHighlight,
      Alert,
      TextInput,
      StyleSheet
    } from 'react-native'

import Button from './button';
import Header from './../header';
import styles from './../common-styles.js';
import * as firebase from 'firebase';

//var firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyDGR_cs2X8wAnnM2wpBb7VSuGrUzrgLrnw",
  authDomain: "meetgreet-935bf.firebaseapp.com",
  databaseURL: "https://meetgreet-935bf.firebaseio.com",
  storageBucket: "meetgreet-935bf.appspot.com",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

class loginView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loaded: true
    }
  }

  render(){
    return(
    <Image source = {{uri: 'https://adrianinitiative.files.wordpress.com/2015/11/event-3.jpg'}} >

        <Header text="Acceso Administrador" loaded={this.state.loaded} marginTop='30' height='30'/>
        <View style={styles.body} backgroundColor='#ffffff'>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <Button
            text="Loginn"
            onpress={this.onLogin.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />
          </View>
    </Image>

    )
  }

  login(){

    this.setState({
      loaded: false
    });

    firebaseApp.$authWithPassword({
      "email": this.state.email,
      "password": this.state.password
    }, (error, user_data) => {

      this.setState({
        loaded: true
      });

      if(error){
        alert('Login Failed. Please try again');
      }else{
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: account
        });
      }
    });


  }

  onLogin(){
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    )
  }

  aceptar(){
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })
  }
  cancelar(){
    console.log('Login cancelado')
  }

}



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height:null,
    alignItems: 'center',
  },
  title:{
    marginTop:30,
    fontSize:35,
    marginBottom:10,
    backgroundColor: 'rgba(52,52,52,0)',
    textAlign: 'center',
    color:'black'
  },
  boton:{
    width:300,
    height: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 9,
    borderWidth: 1
  },
  textoBoton:{
    color: 'white'
  }*/
  /*title:{
    marginTop: 100,
    fontSize: 25,
    backgroundColor: 'rgba(0,0,0,0)'
  }*/
//})

module.exports = loginView;
