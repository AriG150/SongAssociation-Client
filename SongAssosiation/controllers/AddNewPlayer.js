import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

let index = 0;

export default function AddNewPlayer () {
  const [listPlayers, setListPlayers] = React.useState([])
  const [currentPlayer, setCurrentPlayer] = React.useState("")

  var newField;
  const handlePress = (e) => {
    console.log('handle press')
    console.log(listPlayers)
    return (
      newField = (
        <Text> Please show up </Text>
      )
    )
  }

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
