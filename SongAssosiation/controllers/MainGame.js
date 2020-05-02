import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, PanResponder,
Animated, Dimensions, Image} from 'react-native';

const { width, height } = Dimensions.get("window");
const w = width - 32
const {Value} = Animated

import Card from './Card'

let words = ['love', 'night', 'sweet', 'shoe', 'dream', 'work', 'back',
'phone', 'one', 'beauty', 'late', 'good', 'go', 'forever', 'rainbow', 'dance', 'dangerous', 'baby',
'queen', 'hair', 'light', 'heart', 'honey', 'bills', 'broke', 'name', 'crazy', 'woman', 'deep', 'again', 'world',
'girl', 'fire', 'lady', 'best', 'lost', 'all', 'real', 'burn', 'somebody', 'run', 'sorry', 'pretty', 'war', 'stay', 'slow', 'world',
'song', 'ring', 'cream', 'care', 'have', 'need', 'hold', 'god', 'deep', 'together',
'imagine', 'freedom', 'man', 'boy', 'you', 'kiss', 'hey']


export default class MainGame extends Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-width/2, 0, width/2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy})
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: width+100, y: gestureState.dy}
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({ x:0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring( this.position, {
            toValue: { x: -width -100, y: gestureState.dy}
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
    
  }

  renderCards = () => {
    return words.map((word, i) => {
      if (i < this.state.currentIndex) {
          return null
        }
      else if (i === this.state.currentIndex) {
        return (
          <Animated.View key={i}
            {...this.PanResponder.panHandlers}
            style={
              [this.rotateAndTranslate,
              style.card,
              {backgroundColor: 'black'}
            ]}>
            <Card word={word} />
          </Animated.View>
        )
      }
      else {
        return(
          <Animated.View key={i} style={style.card}>
            <Card word={word} />
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly'
  },
  header: {
  },
  count: {
    color: 'red',
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
