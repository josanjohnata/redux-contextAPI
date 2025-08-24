import React, { createContext, useState } from "react";

// 1. A Criação
// Estamos definindo a "forma" dos dados que serão compartilhados.
// O valor inicial (null aqui) é usado se um componente tentar
// consumir o contexto sem um Provider por perto.
export const CounterContext = createContext(null);

// 2. O Provedor
export const CounterProvider = ({ children }) => {
  // Usamos o useEstate para criar a memória interna do nosso contador
  const [count, setCount] = useState(0);
  
  // Criamos as funções que vão alterar essa memória
  const increment = () => {
    setCount(currentCount => currentCount + 1);
  };

  const decrement = () => {
    setCount(currentCount => currentCount - 1);
  };

  // O `value` é o dado que estamos efetivamente compartilhando.
  // Qualquer componente dentro do Provider poderá acessar 'count',
  // 'increment' e 'decrement'.
  const value = { count, increment, decrement };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};
