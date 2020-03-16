
import React from 'react';
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

    const handleInput = (e) => {
      console.log(listPlayers)
      var player = new Player(index, e.nativeEvent.text)
      var tempPlayer = [...listPlayers, player]
      setListPlayers(tempPlayer)
      index += 1
      this.textInput.clear()
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
    <View>
      <Text style = {styles.instruction}> Enter Player Names: </Text>
      {mappedPlayers}
      <TextInput
        style = {styles.input}
        placeholder="Enter Player Name"
        onSubmitEditing={e => handleInput(e)}
        clearButtonMode="always"
        //passing function to the ref prop, function receives DOM input, pass to arrow function, and then stick to variable called textInput which is equal to input tag
        ref={input => { this.textInput = input }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
