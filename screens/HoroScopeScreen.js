import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HoroScopeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50,
          fontSize: 25,
          fontFamily: 'candara',
        }}>
        Know what astrology and the planets have in store for people born under Aries sign. Astrology reveals the effect of planets on Aries today.
        </Text>
      </View>
    )
  }
}