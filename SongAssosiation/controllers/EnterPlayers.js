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
  // const [value, onChangeText] = React.useState('Player Name')
  const [playerName, setPlayerName] = React.useState('')

  // handleTextInput = (text) => {
  //   setPlayerName('')
  // }

    return (
      <View  style = {styles.screen}>
        <View style = {styles.containerStyle}> 
          <TextInput 
            style={styles.input}
            name="Player Name"
            onChangeText={text => setPlayerName(text)}
            value={playerName}
            
          />
          <Text> Player Name: {playerName} </Text>
          {/* <Button onPress={() => }/> */}
        </View>
          <Text>EnterPlayers</Text>
          <View>
            <Button onPress={() => navigation.navigate('CountDown')} title="Play!"/>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1, 
    // justifyContent: 'center', 
    // alignItems: 'center'
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 0,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    alignItems: 'center'
  },
  input: {
    backgroundColor: "red",
    width: 100,
    height: 50
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 60,
    // marginHorizontal: 50,
    paddingHorizontal: 120,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
  }
})
