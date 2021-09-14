import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class TopNewsScreen extends React.Component {
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
            fontSize: 15,
          }}>
          1. <br />
          Resolution Reintroduced In US Congress To Award Country's Highest
          Civilian Honour To Mahatma Gandhi <br />
          Here's the link to know more about it 👇🏻 <br />
          https://www.ndtv.com/india-news/resolution-reintroduced-in-us-congress-to-award-countrys-highest-civilian-honour-to-mahatma-gandhi-2510088{' '}
          <br />
          <br />
          2. <br /> Top US Senators, Astronaut Sunita Williams Greet Indians On
          75th Independence Day! <br />
          Here's the link to know more about it 👇🏻 <br />
          https://www.ndtv.com/india-news/top-us-senators-astronaut-sunita-williams-greet-indians-on-75th-independence-day-2510087
        </Text>
      </View>
    );
  }
}
