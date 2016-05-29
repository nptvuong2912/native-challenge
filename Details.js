
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  comment: {
    margin: 15,

  },
  TextInput: {
    height: 29,
    borderWidth: 0.5,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#656565',
    flex: 1,
    fontSize: 13,
    padding: 4,
    marginRight: 5,
    marginTop: 3,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 7,
    //alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class WithLabel extends Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

   Pressed() {
     (text) => {
       this.setState ({ comment: 'Your comment: ' + text});
     }
   }

  render() {
    var property = this.props.property;
    var stats = property.bedroom_number + ' bed ' + property.property_type;
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
        ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];


    //TO-DO: Add an action when submitted comment

    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>£{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
        <Text style={styles.description}>{this.state.comment}</Text>

        <View style={styles.comment}>
          <WithLabel label="Provide your feedback: ">
              <TextInput style={styles.TextInput}
                autoCorrect={true}
                placeholder='Your comment...'
              />
          </WithLabel>
          <TouchableHighlight style={styles.button} onPress={this.Pressed.bind(this)}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = Details;
