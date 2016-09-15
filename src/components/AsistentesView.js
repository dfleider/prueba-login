'use strict'

import React, {Component} from 'react';
import {View,
      Text,
      StyleSheet
    } from 'react-native'

class AsistentesView extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}> Soy el componente Asistentes</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 25
  }
})
module.exports = AsistentesView;
