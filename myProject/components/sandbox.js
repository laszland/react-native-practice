import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: {
    flex: 3,
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: {
    flex: 4,
    backgroundColor: 'skyblue',
    padding: 40
  }
});