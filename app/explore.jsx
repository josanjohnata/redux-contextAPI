import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CounterProvider } from '../src/contexts/CounterContext';
import { CounterA } from '../src/components/CounterA';

export default function TabTwoScreen() {
  return (
    // 2. Usando o Provider para "abraçar" os componentes
    <CounterProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          
          {/* Como CounterA está DENTRO de CounterProvider,
            ele agora tem acesso a tudo que o contexto fornece.
          */}
          <CounterA />

        </View>
      </SafeAreaView>
    </CounterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
