import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

let index = 0;

export default function AddNewPlayer () {
  const [listPlayers, setListPlayers] = React.useState([])
  // const [currentPlayer, setCurrentPlayer] = React.useState("")

// Class to create the Players information. Stored in ListPlayer through 'handleInput'

    const handleInput = (e) => {
      var player = new Player(index, e.nativeEvent.text)
      var tempPlayer = [...listPlayers, player]
      setListPlayers(tempPlayer)
      index += 1
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
            key={i}
            style={styles.input}
            value={player.name}
            onSubmitEditing={e => handleInput(e)}
          />
        </View>
      )
    }
  })

  return (
    <View
      style={styles.input}
    >
      <Text> Enter Player Names </Text>

      {mappedPlayers}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Player Name"
          onSubmitEditing={e => handleInput(e)}
          clearButtonMode="always"

        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ebebeb",
    width: 100,
    height: 50
  }
})
