import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

class EnterPlayers extends Component {
  _titleButton() {
    alert('button')
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>EnterPlayers</Text>
        <View>
          <Button onPress={this._titleButton} title="Enter"/>
        </View>
      </View>
    )
  }
}

export default EnterPlayers;
