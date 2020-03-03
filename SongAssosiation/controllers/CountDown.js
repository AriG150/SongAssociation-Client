import React, {Component, useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PanResponder,
  Animated
} from 'react-native';

export default function CountDown({navigation}) {
  const [count, setCount] = useState(5);
  const[gameOver, setGameOver] = useState('')
  const[currentWord, setWord] = useState('Party')
  _panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
  })

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
    else {
      setGameOver('Game Over')
    }
  })
    return (
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>CountDown</Text>
          <View>
            <Text>{count}</Text>
            <Text>{currentWord}</Text>
            <Text>{gameOver}</Text>
          </View>
        </View>
      </ScrollView>
    )
}

