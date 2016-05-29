/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

 var React = require('react');
 var ReactNative = require('react-native');
 var {
   Image,
   ListView,
   TouchableHighlight,
   StyleSheet,
   RecyclerViewBackedScrollView,
   Text,
   View,
 } = ReactNative;

 var THUMB_URLS = [
   require('./Thumbnails/p1.jpg'),
 ];

var List = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['a', 'b', 'cc', 'example', '1232', 'native' ,'live your life', 'Dont argue with dummies' ]),
    };
  },

  _renderRow: function(rowData) {
    var imgSource = THUMB_URLS[0];
    return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={imgSource} />
      <View style={styles.rightContainer}>
        <Text style={styles.text}>
          {rowData}
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
});

module.exports = List;
