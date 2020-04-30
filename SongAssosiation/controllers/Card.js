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
          <View>
            <Text>{props.word}</Text>
          </View>
        </View>
    )
}
