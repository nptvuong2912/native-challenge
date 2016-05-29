/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

 var React = require('react');
 var ReactNative = require('react-native');
 var Item = require('./item');
 var {
   Image,
   ListView,
   TouchableHighlight,
   StyleSheet,
   RecyclerViewBackedScrollView,
   Text,
   View,
   NavigatorIOS,
   ActionSheetIOS,
 } = ReactNative;

 var THUMB_URLS = [
   require('./Thumbnails/p1.jpg'),
 ];

 var BUTTONS = [
   'Details',
   'Save',
   'Share',
   'Delete',
   'Cancel'
 ];
 var DESTRUCTIVE_INDEX = 3;
 var CANCEL_INDEX = 4;

var List = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Do not mess with me', 'i am not hungry', 'not funny', 'example', 'Hehehee', 'native' ]),
      clicked: 'Options',
    };
  },

  _renderRow: function(rowData) {
    var imgSource = THUMB_URLS[0];
    return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={imgSource} />
      <View style={styles.rightContainer}>
        <Text style={styles.text} onPress={() => this._rowPressed(rowData.guid)}>
          {rowData}
        </Text>
        <Text onPress={this.showActionSheet.bind(this)} style={styles.button}>
          {this.state.clicked}
        </Text>
      </View>
    </View>
    );
  },

  _renderHeader: function() {
    return (<View style={styles.sectionDivider}>
      <Text style={styles.headingText}>My list</Text>
      </View>);
  },

  //Show more details about the place when pressed
  _rowPressed: function () {
    var property = ['Do not mess with me', 'i am not hungry', 'not funny', 'example', 'Hehehee', 'native']

    this.props.navigator.push({
      title: "Detail",
      component: Item,
      passProps: {property: property}
    });
  },

  showActionSheet: function() {

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        tintColor: 'blue',
      },

      (buttonIndex) => {
        this.setState({ clicked: 'Clicked' });
      }
    );
  },

  render: function() {
    return (
        <ListView dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader} />

    );
  }

});

var styles = StyleSheet.create({

  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 5,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  rightContainer: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#48BBEC',
  }
});

module.exports = List;
