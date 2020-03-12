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
  class Player {
    constructor (key, name) {
      this.index = index;
      this.name = name;
      this.score = 0
    }
  }

  const mappedPlayers = listPlayers.map((player, index) => {
    if(listPlayers.length <= 0) {
      return(
        <View>
          <Text> GobblyGook! </Text>
          <TextInput 
            placeholder = "Input Name of Player"
          />
        </View>
      )
    }
  })

  return (
    <View 
      style={styles.input}
    >
      {mappedPlayers}
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