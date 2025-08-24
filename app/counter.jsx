import { SafeAreaView, StyleSheet, View } from 'react-native';

// --- Imports do Context ---
import { CounterA } from '../src/components/CounterA';
import { CounterProvider } from '../src/contexts/CounterContext';

// --- Imports do Redux ---
import { Provider } from 'react-redux'; // 1. O Provider do Redux
import { store } from '../src/store/store'; // 2. Nosso store
import { CounterB } from '../src/components/CounterB';

export default function Page() {
  return (
    // 3. O Provider do Redux "abraça" tudo
    <Provider store={store}>
      <CounterProvider> {/* 2. Usando o Provider para "abraçar" os componentes */}
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            
            {/* Como CounterA está DENTRO de CounterProvider,
              ele agora tem acesso a tudo que o contexto fornece.
            */}
            <CounterA />
            <CounterB />

          </View>
        </SafeAreaView>
      </CounterProvider>
    </Provider>
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
