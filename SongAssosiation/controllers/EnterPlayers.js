
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
  const [finalPlayer, setFinalPlayer] = React.useState()
  const [modalOpen, setModalOpen] = React.useState(false)


  //Handling the input: creating a new Player class, saving it to state 
    const handleInput = (e) => {
      console.log("🐷 handleInput player info", player)
      var player = new Player(index, e.nativeEvent.text)
      var tempPlayer = [...listPlayers, player]
      console.log("🐷 handleInput tempPlayer info", tempPlayer)
      setListPlayers(tempPlayer)
      index += 1
      this.textInput.clear()
      console.log("🐷 listPlayers",listPlayers)
    }

    // ---------------------------
    // Notes from 5.4.2020. To resolve problem identified via the 🚨 I removed handleFinalInput
    // and solved the idex problem. I also identified the reason the "name"  is undefined for the 
    // final player is because they did not press enter. So the whole point of handleFinalInput is null. 
    // Back to the drawing board 
    // ---------------------------
    // const handleFinalInput = (e) => {
    //   //create a new player from the user clicking the 'finalize players' button
    //   var player = new Player (index, e.nativeEvent.text)
    //   console.log(" 🐳 player from input: ", {player})
    //   //setFinalPlayer as that value
    //   setFinalPlayer(player)
    //   //this new variable has the new final player information and the data from listPlayers
    //   var lastTempPlayer = [...listPlayers, player]
    //   console.log(" 🐳 lastTempPlayer: ", {lastTempPlayer})
    //   //final player being added to listPlayers
    //   //🚨 ERROR: name of final player is "undefined" and index is set to '0' because it's
    //   // not being added to the orignal listPlayers in the normal way:
    //   // [{"index": 0, "name": "Adi", "score": 0}, {"index": 1, "name": "Yaron ", "score": 0}, {"index": 2, "name": "Estee ", "score": 0}, {"index": 0, "name": undefined, "score": 0}]

    //   setListPlayers(lastTempPlayer)
    //   console.log(" 🐳 the final version of listPlayers", {listPlayers})
    // }

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

  // const showPlayerNames = () => {
  //   for(let i = 0; i < listPlayers.length; i++){
  //       console.log(listPlayers[i].name)
  //       console.log(listPlayers)
  //       console.log(finalPlayer)
  //   }
  // }

  const modalContent = listPlayers.map((player, i) => {
    return (
      <View>
        <Text> {player.name} </Text>
        
      </View>
    )
  })


  let conditionalReturn = () => {
    // if there is a final player, Start Game button appears and input field dissapears
    // If there is a final player, open modal which shows 
      if(finalPlayer){
        return (
          <Modal visible={modalOpen} animationType="slide" >
            <View style={styles.modalContent}>
              <Text> Modal is Open </Text>
              <Text> Final Player Name: {finalPlayer.name} </Text>
              <Text> Final Player Index to prove their is a problem: {finalPlayer.index} </Text>
              {/* {showPlayerNames()} */}
              {/* {modalContent} */}
              {console.log("🎭", listPlayers)}
                
            </View>
          </Modal>
          // <View>   
          //   {mappedPlayers} 
          //   <Button onPress={() => navigation.navigate('MainGame', {players: listPlayers})} title="Start Game!"/>
          // </View>
        )
      }
      else{
        // if there is no final player, 'finalize players' button shown
        return (
          <View>
            {mappedPlayers} 
            {console.log("🐙", listPlayers)}
            <TextInput
              style = {styles.input}
              placeholder="Enter Player Name"
              onSubmitEditing={e => handleInput(e)}
              clearButtonMode="always"
              ref={input => { this.textInput = input }}
              />
            <Button onPress={e => {handleInput(e); setModalOpen(true)}} title="finalize players"/>
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
