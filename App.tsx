import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

const App = () => {
  const generateNumber = () => Math.floor(Math.random() * 100) + 1;

  const [number, setNumber] = useState(generateNumber());
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const checkGuess = () => {
    const guess = parseInt(input);
    if (!guess) return;
    setCount(count + 1);
    if (guess < number) setMessage('Too low');
    else if (guess > number) setMessage('Too high');
    else setMessage('Correct!');
    setInput('');
  };

  const resetGame = () => {
    setNumber(generateNumber());
    setInput('');
    setMessage('');
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mystery Number</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <TouchableHighlight style={styles.button} onPress={checkGuess}>
        <Text style={styles.buttonText}>Guess</Text>
      </TouchableHighlight>
      <Text>{message}</Text>
      <Text>Guesses: {count}</Text>
      <TouchableHighlight style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;

