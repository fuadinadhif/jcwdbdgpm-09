"use client";

import { createContext, useState } from "react";

// 1. Create the context (global state)
export const CounterContext = createContext<null | {
  counter: number;
  increment: () => void;
  decrement: () => void;
}>(null);

// 2. Create the provider (a component)
export function CounterProvider(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
}
