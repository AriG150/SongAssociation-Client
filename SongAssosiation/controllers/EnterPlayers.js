
import React, {useState, Component} from 'react';
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

let index = 0;

export default function EnterPlayers({navigation, route}) {
  const [listPlayers, setListPlayers] = React.useState([])
  const { test } = route.params;

    const handleInput = (e) => {
      console.log('hit')
      var player = new Player(index, e.nativeEvent.text)
      var tempPlayer = [...listPlayers, player]
      setListPlayers(tempPlayer)
      index += 1
      this.textInput.clear()
      console.log(listPlayers)
    }

  class Player {
    constructor (key, name) {
      this.index = index;
      this.name = name;
      this.score = 0
    }
  }

  const mappedPlayers = listPlayers.map((player, i) => {
    if(listPlayers.length) {
      return (
        <View>
          <TextInput
            style={styles.input}
            key={i}
            value={player.name}
            onSubmitEditing={e => handleInput(e)}
            />
        </View>
      )
    }
  })

    return (
      <View  style={styles.screen}>
        <View style = {styles.card}>
          <View>
            <Text style = {styles.instruction}> Enter Player Names: </Text>
            <Text style = {styles.instruction}> {route.params?.test} </Text>
            {mappedPlayers}
            <TextInput
              style = {styles.input}
              placeholder="Enter Player Name"
              onSubmitEditing={e => handleInput(e)}
              clearButtonMode="always"
              ref={input => { this.textInput = input }}
              />
          </View>
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
  },
  instruction: {
    fontSize: 20,
    width: 180,
    height: 40
  },
  input: {
    padding: 15,
    margin: 10,
    width: 170,
    fontSize: 20,
    borderRadius: 30,
    backgroundColor: '#b1d1e6',
    justifyContent: 'center'
  }
})
