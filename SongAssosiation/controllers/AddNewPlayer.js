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
      console.log("butts")
    }

  class Player {
    constructor (key, name) {
      this.index = index;
      this.name = name;
      this.score = 0
    }
  }

  var mappedPlayers;
  if(!listPlayers.length ){
    mappedPlayers = (
      <View>
        <Text> Enter Player Name </Text>
        <TextInput 
          // style={styles.input}
          placeholder="Enter Player Name"
          onSubmitEditing={e => handleInput(e)} 
          // onSubmitEditing={}
        />
      </View>
    )
  } 
  else if (listPlayers.length >= 1) {
    mappedPlayers = (
      <View>
        <Text> Enter Player Names </Text>
          <TextInput 
            // style={styles.input}
            placeholder="Enter Player Name"
            onSubmitEditing={e => handleInput(e)} 
          />
        <Button title="+" onPress={e => handlePress(e)} > </Button>
      </View>
    )
  }

  
  return (
    <View 
      style={styles.input}
    >
      {mappedPlayers}
      {/* {newField} */}
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