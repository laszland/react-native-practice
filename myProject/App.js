import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'

export default function App() {
 
  const [todos, setTodos] = useState([
    { text: 'buy milk', key: 1},
    { text: 'eat good', key: 2},
    { text: 'be awesome', key: 3},
  ])

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header/>
      <View style={styles.content}>
        {/* TODO FORM */}
        <View style={styles.list}>
          {/* ACTUAL FLATLIST */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
