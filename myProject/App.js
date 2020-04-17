import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const  [people, setPeople] = useState([
    { name: 'Vaszja', key: 1 },
    { name: 'Rozi', key: 2 },
    { name: 'Pupucsek', key: 3 },
    { name: 'Pintyoke', key: 4 },
    { name: 'Hugyosjozsi', key: 5 },
    { name: 'Topike', key: 6 },
  ])

  return (
    <View style={styles.container}>

      <ScrollView>
        { people.map(item => (
            <View>
              <Text style={styles.item} key={item.key}> {item.name} </Text>
            </View>
          )) }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
