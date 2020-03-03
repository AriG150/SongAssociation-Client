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

export default function EnterPlayers({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>EnterPlayers</Text>
        <View>
          <Button onPress={() => navigation.navigate('CountDown')} title="Play!"/>
        </View>
      </View>
    )
}
