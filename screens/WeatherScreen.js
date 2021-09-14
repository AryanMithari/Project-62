import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WeatherScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Text
          style={{
            marginTop: 75,
            marginLeft: 50,
            marginRight: 50,
            fontFamily: 'candara',
          }}>
          {' '}
          Mumbai Today: <br />
          35°
          <br />
          Sunrise <br />
          06:19
          <br />
          Sunsent <br />
          19:07
          <br />
          High/Low
          <br />
          29°/26°
          <br />
          Wind
          <br />
          11 km/h
          <br />
          Humidity
          <br />
          83%
          <br />
          Dew Point
          <br />
          26°
          <br />
          Pressure
          <br />
          1007.5 mb
          <br />
          UV Index
          <br />
          7 of 10
          <br />
          Visibility
          <br />
          3.22 km
          <br />
          Moon Phase
          <br />
          Waxing Crescent
          <br />
        </Text>
      </View>
    );
  }
}
