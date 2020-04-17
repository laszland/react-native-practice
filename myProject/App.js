import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const  [people, setPeople] = useState([
    { name: 'Vaszja', id: 1 },
    { name: 'Rozi', id: 2 },
    { name: 'Pupucsek', id: 3 },
    { name: 'Pintyoke', id: 4 },
    { name: 'Hugyosjozsi', id: 5 },
    { name: 'Topike', id: 6 },
    { name: 'Makekosz', id: 7 }
  ])

  return (
    <View style={styles.container}>
      
      <FlatList
        //numColumns={2} => it creates a gridlike appearence 
        keyExtractor={ item => item.id }
        data={people}
        renderItem={ ({ item }) => (
          <Text style={styles.item} key={item.key}> {item.name} </Text>
        )}
      />

      {/* <ScrollView>
        { people.map(item => (
            <View>
              <Text style={styles.item} key={item.key}> {item.name} </Text>
            </View>
          )) }
      </ScrollView> */}

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
