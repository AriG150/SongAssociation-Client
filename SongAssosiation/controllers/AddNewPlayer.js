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

  // var newField;
  const handlePress = (e) => {
    console.log('handle press')
    console.log(listPlayers)
    return (
      <FlatList 
        data={listPlayers}
        renderItem={ ({item}) => (
          <ListItem 
            name = {`${item}`}
            /> 
          // <TextInput 
          //   placeholder="Enter Player Name"
          //   onSubmitEditing={e => handleInput(e)}
          //   />
        ) }
      />
    )
  }
  
  //runs after users presses enter on input field
  const handleInput = (e) => {
    var player = new Player(index, e.nativeEvent.text)
    var tempPlayer = [...listPlayers, player]
    setListPlayers(tempPlayer)
    index += 1
    console.log(listPlayers)
  }

//conditional rendering depending on how many players are signed up
  var mappedPlayers;
  if(!listPlayers.length ){
    mappedPlayers = (
      <View>
        <Text> Enter Player Name </Text>
        <TextInput 
          // style={styles.input}
          placeholder="Enter Player Name"
          onSubmitEditing={e => handleInput(e)} 
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
          <TextInput 
            // style={styles.input}
            placeholder="Enter Player Name"
            onSubmitEditing={e => handleInput(e)} 
          />
        {/* <Button title="+" onPress={e => handlePress(e)} > </Button> */}
        <Button title="+" onPress={e => handlePress(e)} > </Button>
      </View>
    )
  }

  
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