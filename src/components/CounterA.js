import React, { useContext } from "react";
import { View, Text, Button } from 'react-native';
import { CounterContext } from "../contexts/CounterContext";

export const CounterA = () => {
  // 3. O Consumo
  // O hook useContext recebe o molde (CounterContext) e nos retorna
  // o valor que foi passado pelo Provider mais próximo.
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <View>
      <Text style={{ marginBottom: 8 }}>Contador A (Context): {count}</Text>
      <View style={{ marginBottom: 8 }}>
        <Button title="+1 (Context)" onPress={increment} />
      </View>
      <Button title="-1 (Context)" onPress={decrement} />
    </View>
  );
};
