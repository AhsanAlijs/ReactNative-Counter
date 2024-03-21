import { React, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
    // console.log('hello', number);
  };
  const sub = () => {
    setNumber(number - 1);
    // console.log('hello', number);
  };

  return (
    <>
      <Text style={styles.head}>React Native Counter</Text>
      <View style={styles.container}>
        <View style={styles.mainCont}>
          <Button style={styles.button} onPress={add} title="Add" />
          <Text style={styles.text}>{number}</Text>
          <Button onPress={sub} title="Sub" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
  },
  head: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30,
  },
  mainCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
 
});

export default App;
