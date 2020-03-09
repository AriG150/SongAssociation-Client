import React, {Component} from 'react';
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

export default function AddNewPlayer () {
  const [listPlayers, setListPlayers] = React.useState([])
  const [currentPlayer, setCurrentPlayer] = React.useState("")
  
  const handlePress = (e) => {
    console.log('handle press')
    return (<Text> Work? </Text>)
  }

  const handleInput = (e) => {
    setCurrentPlayer(e.nativeEvent.text)
    setListPlayers(e.nativeEvent.text)
    // setListPlayers(listPlayers.push(e.nativeEvent.text))
    console.log('List players: ',listPlayers)
  }

  var button;
  button = (
    <Button title="+" onPress={handlePress} > </Button>
  )

  var mappedPlayers;
  if(!listPlayers.length ){
    mappedPlayers = (
      <View>
        <Text> Enter Player Name </Text>
        <TextInput 
          style={styles.input}
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
            style={styles.input}
            placeholder="Enter Player Name"
            onSubmitEditing={e => handleInput(e)} 
          />
        {button}
      </View>
    )
  }

  
  return (
    <View>
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