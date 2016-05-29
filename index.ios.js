/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   NavigatorIOS,
 } from 'react-native';


/*class HelloWorld extends Component {
  render() {
    return (
        <Text style= {styles.text}> 'Hello World!' </Text>
      );
  }
} */

var search= require('./search')

/*
* render the first page of the app
* User type in TextInput to search for a location of their choice
*/

class firstProject extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'House Finder',
          component: search,
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('firstProject', () => firstProject);
