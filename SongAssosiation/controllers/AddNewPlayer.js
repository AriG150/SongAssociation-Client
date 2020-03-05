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
  const [currentPlayer, setCurrentPlayer] = React.useState('')
  
  const handlePress = (e) => {
    console.log('hit')
    return (<Text> Work? </Text>)
  }

  const handleInput = (input) => {
    setCurrentPlayer(input)
    console.log('current player: ',currentPlayer)
    setListPlayers(listPlayers.push(input))
    // listPlayers.push(currentPlayer)
    console.log('listplayer: ', listPlayers)
  }


  var mappedPlayers;
  if(listPlayers.length === 0 ){
    mappedPlayers =
    <View>
      <Text> Hello World 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter Player Name"
        onChangeText={input => handleInput(input)} 
      />
    </View>
  } else{
    mappedPlayers = 
    console.log("hit");
    <Button title="+" onPress={handlePress} > </Button>
  }

  
  return (
    <View>
      {mappedPlayers}
      {/* {listPlayers} */}
      <Text> 
      {currentPlayer}

      </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "blue",
    width: 100,
    height: 50
  }
})