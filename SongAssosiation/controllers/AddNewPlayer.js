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
  
  // const handlePress = (e) => {
  //   console.log('hit')
  //   return (<Text> Work? </Text>)
  // }

  const handleInput = (e) => {
    setCurrentPlayer(e.nativeEvent.text)
    console.log(e.nativeEvent.text) //123
    setListPlayers(listPlayers.push(e.nativeEvent.text))
    console.log(listPlayers)
    // listPlayers.push(currentPlayer)
    // console.log('listplayer: ', listPlayers)
  }


  var mappedPlayers;
  mappedPlayers = (
      <View>
        <Text> Hello World </Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Player Name"
          onSubmitEditing={e => handleInput(e)} 
        />
      </View>
    )


  // if(listPlayers.length === 0 ){
  //   mappedPlayers = (
  //   <View>
  //     <Text> Hello World 
  //     </Text>
  //     <TextInput 
  //       style={styles.input}
  //       placeholder="Enter Player Name"
  //       onSubmitEditing={input => handleInput(input)} 
  //     />
  //   </View>
  //   )
  // } else{
  //   mappedPlayers = 
  //   console.log("hit");
  //   <Button title="+" onPress={handlePress} > </Button>
  // }

  
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