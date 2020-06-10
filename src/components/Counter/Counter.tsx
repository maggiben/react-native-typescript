import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { IMainStore, MainStore } from '../../store/main.store';
const { useContext } = React;

const Counter: React.FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext<IMainStore>(MainStore);
  const increment = () => {
    dispatch({
      type: 'setCounter',
      counter: state.counter + 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: 'setCounter',
      counter: state.counter - 1,
    });
  };
  return (
    <View style={styles.container}>
      <Text>{state.counter}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
