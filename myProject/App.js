import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const  [name, setName] = useState('Vaszja');
  const [age, setAge] = useState(33);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        //multiline // allows to add multiple line to the textinput e.g. like a blogpost
        style={styles.input} 
        placeholder='e.g. JohnDoe'
        onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input} 
          placeholder='e.g. 55'
          onChangeText={(val) => setAge(val)}/>
      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
