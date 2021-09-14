import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50,
          fontFamily:'candara',
          fontSize:25,
        }}>
       Teacher: What's the best thing about Switzerland? <br/>
       Student: I don't know teacher but, the flag is a big plus. 🤣
        </Text>
         
      </View>
    )
  }
}