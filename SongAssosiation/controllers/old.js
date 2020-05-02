import React, {Component, useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, PanResponder,
Animated, Dimensions} from 'react-native';
import { NavigationEvents } from 'react-navigation'

const { width, height } = Dimensions.get("window");
const w = width - 32
const {Value} = Animated


import Card from './Card'


let word = 'hi'

let words = ['love', 'night', 'sweet', 'shoe', 'dream', 'work', 'back',
'phone', 'one', 'beauty', 'late', 'good', 'go', 'forever', 'rainbow', 'dance', 'dangerous', 'baby',
'queen', 'hair', 'light', 'heart', 'honey', 'bills', 'broke', 'name', 'crazy', 'woman', 'deep', 'again', 'world',
'girl', 'fire', 'lady', 'best', 'lost', 'all', 'real', 'burn', 'somebody', 'run', 'sorry', 'pretty', 'war', 'stay', 'slow', 'world',
'song', 'ring', 'cream', 'care', 'have', 'need', 'hold', 'god', 'deep', 'together',
'imagine', 'freedom', 'man', 'boy', 'you', 'kiss', 'hey']


export default function MainGame({navigation}) {
  //STATE FOR MAINGAME
  const [count, setCount] = useState(5);
  const [pos, setPos] = useState(new Animated.ValueXY())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [wordList, setWordList] = useState(words)
  const last = wordList[0]

//CUSTOM HOOKS

  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: Animated.event([null, {
      dx  : pos.x,
      dy  : pos.y
    }]),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(pos, {
          toValue: { x:width + 100, y:gestureState.dy}
        }).start(() => {
          setCurrentIndex(currentIndex + 1), () => {
            setPos({ x:0, y:0})
          }
        })
      }
      else if (gestureState.dx < -120) {
        Animated.spring(pos, {
          toValue: {x:-width -100, y:gestureState.dy}
        }).start(() => {
          setCurrentIndex(currentIndex +1), () => {
            setPos({ x:0, y:0 })
          }
        })
      }
      else {
        Animated.spring(pos, {
           toValue: { x: 0, y: 0 },
           friction: 4
           }).start()
      }
    }

  }), [])

  const rotation = pos.x.interpolate({
    inputRange: [-width /2, 0 ,width/2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp'
  })

  const cards = wordList.map((word, i) => {
    if (i < currentIndex) {
        return null
      }
    if (i === currentIndex) {
      return (
        <Animated.View key={i}
          {...panResponder.panHandlers}
          style={[ pos.getLayout(),
            {transform: [{rotate:rotation}]},
            style.card,
            {backgroundColor: 'black'}
          ]}>
          <Card word={word} />
        </Animated.View>
      )
    }
    else if (i < 3){
      return(
        <Animated.View key={i} style={style.card}>
          <Card word={word} />
        </Animated.View>
      )
    }
  }).reverse()

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
    else {
      setCount('Game Over')
    }
  })

    return (
        <SafeAreaView style={style.container}>
          <View style={style.header}>
            <Text>CountDown</Text>
          </View>
          <View>
            {cards}
          </View>
          <View style={style.count}>
            <Text style={style.count}>{count}</Text>
          </View>

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly'
  },
  header: {
  },
  count: {
    color: 'black',
    fontSize: 50
  },
  card: {
    color: 'white',
    backgroundColor: 'blue',
    position: 'absolute',
    width: w,
    height: height- 120,
    marginLeft: 16,
    borderRadius: 10,
  },
})
