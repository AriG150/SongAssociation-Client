
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Button,
  Modal
} from 'react-native';

let index = 0;

export default function EnterPlayers({navigation}) {
  //Array of players information (index, name, score)
  const [listPlayers, setListPlayers] = React.useState([])
  const [finalPlayer, setFinalPlayer] = React.useState("")
  const [modalOpen, setModalOpen] = React.useState(false)


  //Handling the input: creating a new Player class, saving it to state 
    const handleInput = (e) => {
      console.log('hit')
      var player = new Player(index, e.nativeEvent.text)
      var tempPlayer = [...listPlayers, player]
      setListPlayers(tempPlayer)
      index += 1
      this.textInput.clear()
      console.log(listPlayers)
    }

    const handleFinalInput = (e) => {
      var player = new Player (index, e.nativeEvent.text)
      setFinalPlayer(player)
      var lastTempPlayer = [...listPlayers, player]
      setListPlayers(lastTempPlayer)
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
            onBlur={Keyboard.dismiss}
            />
        </View>
      )
    }
  })


  let conditionalReturn = () => {
    // if there is a final player, Start Game button appears and input field dissapears
      if(finalPlayer){
        return (
          <View>   
            {mappedPlayers} 
            <Button onPress={() => navigation.navigate('MainGame', {players: listPlayers})} title="Start Game!"/>
          </View>
        )
      }
      else{
        // if there is no final player, 'finalize players' button shown
        return (
          <View>
            {mappedPlayers} 
            <TextInput
              style = {styles.input}
              placeholder="Enter Player Name"
              onSubmitEditing={e => handleInput(e)}
              clearButtonMode="always"
              ref={input => { this.textInput = input }}
              />
            <Button onPress={e => {handleFinalInput(e); setModalOpen(true)}} title="finalize players"/>
          </View>
        )
      }
  }
  
    

    return (
      <View  style={styles.screen}>
        <View style = {styles.card}>
          <View>
            <Text style = {styles.instruction}> Enter Player Names: </Text>
          </View>
          <Modal visible={modalOpen}>
            <View style={styles.modalContent}>
              <Text> Modal is Open </Text>
            </View>
          </Modal>
          {conditionalReturn()}
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
