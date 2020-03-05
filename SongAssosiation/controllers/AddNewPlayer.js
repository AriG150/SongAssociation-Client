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
  // const handlePress; 
  const handlePress = (evt) => {
    console.log('hit')
    return (<Text> Work? </Text>)
  }
  
  return (
    <View>
      <Button title="+" onPress={handlePress} > </Button>
    </View>
  )
}