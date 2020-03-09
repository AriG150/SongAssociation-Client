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
        <View>
          <Text>Enter Players</Text>
          <View>
            <Button onPress={() => navigation.navigate('MainGame')} title="Play!"/>
          </View>
        </View>
    )
}
