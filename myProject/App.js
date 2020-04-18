import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

export default function App() {
 
  const [todos, setTodos] = useState([
    { text: 'buy milk', key: 1},
    { text: 'eat good', key: 2},
    { text: 'be awesome', key: 3},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header/>
      <View style={styles.content}>
        {/* TODO FORM */}
        <AddTodo/>
        <View style={styles.list}>
          {/* ACTUAL FLATLIST */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
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
