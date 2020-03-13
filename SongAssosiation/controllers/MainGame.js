import React, {Component, useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, PanResponder,
Animated, Dimensions} from 'react-native';

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


const SWIPETHRESH = Dimensions.get('window').width * .3


export default function MainGame({navigation}) {
  const [count, setCount] = useState(5);
  const [pos, setPos] = useState(new Animated.ValueXY())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [wordList, setWordList] = useState(words)
  const last = wordList[0]
  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: Animated.event([null, {
      dx  : pos.current.x,
      dy  : pos.current.y
    }])

  }), [])

  const rotation = pos.x.interpolate({
    inputRange: [-width /2, 0 ,width/2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp'
  })
  
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
    else if (i < 25){
      return(
        <Animated.View key={i} style={style.card}>
          <Card word={word} />
        </Animated.View>
      )
    }
  }).reverse()
    return (
        <SafeAreaView style={style.container}>
          <View style={style.header}>
            <Text>CountDown</Text>
          </View>
          <View style={style.count}>
            <Text style={style.count}>{count}</Text>
          </View>
          <View>
            <Animated.View {...panResponder.panHandlers} style={[pos.current.getLayout(), style.ball]}>
              <Card word={word[0]} />
            </Animated.View>
          </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  header: {
    flex: 1
  },
  count: {
    color: 'black',
    fontSize: 50,
  },
  card: {
    backgroundColor: 'blue',
    position: 'absolute',
    flex: 1,
    width: w,
    height: height- 120,
    marginLeft: 16,
  },
  ball: {
    height: 80,
    width: 80,
    borderColor: 'black',
    borderRadius: 40,
    borderWidth: 40,

  },
})
