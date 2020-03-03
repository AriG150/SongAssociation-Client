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

export default function EnterPlayers({navigation}) {
  const [value, onChangeText] = React.useState('Player Name')
    return (
      <View  style = {styles.container}>
        <TextInput 
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Text>EnterPlayers</Text>
        <View>
          <Button onPress={() => navigation.navigate('CountDown')} title="Play!"/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    backgroundColor: "red",
    width: 100,
    height: 50
  }
})
