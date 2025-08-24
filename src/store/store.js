import { configureStore } from '@reduxjs/toolkit';

// 1. Importamos o reducer da nossa fatia de contador
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  // 2. O objeto 'reducer' é onde combinamos todas as nossas fatias.
  // A chave ('counterB') define como esta parte do estado
  // vai se chamar no nosso estado global.
  reducer: {
    counterB: counterReducer,
  },
});