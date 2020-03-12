import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

export default function Card(props) {
    return (
        <View>
          <View style={style.card}>
            <Text>{props.word}</Text>
          </View>
        </View>
    )
}

const style = StyleSheet.create({
  card: {
    backgroundColor: 'blue',
    position: 'absolute',
    flex: 1,
    marginLeft: 16,
  },
})
