import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Sandbox from './components/sandbox';

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

  const submitHandler = (text) => {
    
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('OOOPS', 'Todos must be over 3 characters long.', [
        { text: 'Unserstood', onPress: () => console.log('alert closed') }
      ])
    }

  }

  return (
    //<Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed keyboard");
    }}>
      <View style={styles.container}>
        {/* HEADER */}
        <Header/>
        <View style={styles.content}>
          {/* TODO FORM */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            {/* ACTUAL FLATLIST */}
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
