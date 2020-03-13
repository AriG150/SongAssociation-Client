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
    flex: 1,
    flexDirection: 'row'
  }
})
