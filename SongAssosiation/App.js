/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator} from '@react-navigation/stack'
import Title from './controllers/Title'
import EnterPlayers from './controllers/EnterPlayers'
import CountDown from './controllers/CountDown'



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="EnterPlayers" component={EnterPlayers} />
        <Stack.Screen name="CountDown" component={CountDown} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
