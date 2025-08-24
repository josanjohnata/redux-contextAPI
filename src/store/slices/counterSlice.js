import { createSlice } from "@reduxjs/toolkit";

// Define o estado inicial para esta "fatia" do store
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterB', // Nome da fatia
  initialState, // Estado inicial
  // Reducers: Um mapa de "ações" que podem acentecer
  reducers: {
    // Ação: 'increment'
    increment: (state) => {
      // O Redux Toolkit usa uma biblioteca (Immer) por baixo dos panos
      // que permite escrever código que "parece" mutável, mas que na
      // verdade cria um novo estado de forma segura. É mágico!
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Exportamos as ações para que nossos componentes possam "despachá-las"
export const { increment, decrement } = counterSlice.actions;

// Exportamos o reducer para que nosso store principal possa conhecê-lo
export default counterSlice.reducer;
