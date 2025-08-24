// src/components/CounterB.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Importamos as actions que criamos no nosso slice
import { increment, decrement } from '../store/slices/counterSlice';

export const CounterB = () => {
  // useSelector: Acessa o estado global (store) e retorna o que precisamos.
  // O `state.counterB.value` corresponde exatamente à estrutura
  // que definimos no nosso `store.js`.
  const count = useSelector((state) => state.counterB.value);

  // useDispatch: Nos dá a função para despachar ações.
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Contador B (Redux): {count}</Text>
      {/* Ao clicar, despachamos a ação 'increment' que importamos */}
      <View style={{ marginBottom: 8 }}>
        <Button title="+1 (Redux)" onPress={() => dispatch(increment())} />
      </View>
      
      {/* Ao clicar, despachamos a ação 'decrement' */}
      <Button title="-1 (Redux)" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20, // Apenas para dar um espaço entre os contadores
    }
})
