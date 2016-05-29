
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  image: {
    width: 400,
    height: 300
  },
});

var imgSource = require('./Thumbnails/p1.jpg');

class Item extends Component {


  render() {
    var property = this.props.property;

    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={imgSource} />

        <Text>{property}</Text>

      </View>
    );
  }
}

module.exports = Item;
