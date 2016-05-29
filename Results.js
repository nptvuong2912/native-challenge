'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  ActionSheetIOS,
  UIManager,
} from 'react-native';

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  button: {
    marginBottom: 10,
    fontWeight: '500',
  }
});

var Details = require ('./Details')

var BUTTONS = [
  'Details',
  'Save',
  'Share',
  'Delete',
  'Cancel'
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

/*
* Display ListView of the search results
*/

class Results extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings),
      clicked: 'Options'
    };
  }

  /*getInitialState() {
    return {
      clicked: 'none',
    };
  } */

  /* More functionality Options for user
  * TO-DO's:
  * 'Details' -> More details either when the user press the row or select 'Details'
  * 'Save' -> Save the place for viewing labelContainer
  * 'Share' -> Share with friends via email
  * 'Delete' -> Discard the row and replace it with another options
  * 'Cancel' -> Cancel action
  */
  showActionSheet() {

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        tintColor: 'blue',
      },

      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  }

  //Display each row with info from query, including thumbnails, price, short description and Options button
  renderRow(rowData, sectionID, rowID) {
    var price = rowData.price_formatted.split(' ')[0];

    //TO-DO: perform the action instead of just changing the status of this.state.clicked

    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
            <View  style={styles.textContainer}>
              <Text style={styles.price}>£{price}</Text>
              <Text style={styles.title}
                    numberOfLines={1}>{rowData.title}</Text>

              <Text onPress={this.showActionSheet.bind(this)} style={styles.button}>
                {this.state.clicked}
              </Text>
            </View>
          </View>

          <View style={styles.separator}/>
          </View>
      </TouchableHighlight>
    );
  }

  //Show more details about the place when pressed
  rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: "Property",
      component: Details,
      passProps: {property: property}
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

}

module.exports = Results;
