
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

import AddNewPlayer from './AddNewPlayer';

export default function EnterPlayers({navigation}) {
    return (
      <View  style={styles.screen}>
        <View style = {styles.card}>
          <AddNewPlayer/>
        </View>
          <View>
            <Button onPress={() => navigation.navigate('MainGame')} title="Start Game!"/>
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    marginVertical: 60,
    paddingHorizontal: 120,
  }
})
