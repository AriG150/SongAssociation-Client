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
import { useNavigation } from '@react-navigation/native';


export default function Title({navigation}) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Song Assosiation</Text>
        <View>
          <Button onPress={() => navigation.navigate('EnterPlayers')} title="Enter"/>
        </View>
      </View>
    )
}
