"use client";

import { useState, useContext } from "react";
import { CounterContext } from "@/contexts/counter-context";

export default function HomePage() {
  const counter = useContext(CounterContext);

  return (
    <main className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <p className="text-2xl font-bold mb-6">Count: {counter.counter}</p>

      <div className="flex gap-2 text-black">
        <button className="p-2 bg-red-300" onClick={counter?.decrement}>
          Decrement
        </button>
        <button className="p-2 bg-green-300" onClick={counter?.increment}>
          Increment
        </button>
      </div>

      <NestedComponent />
    </main>
  );
}

function NestedComponent() {
  return (
    <div className="max-w-[500px] border border-white p-2 mt-8">
      <h3 className="font-bold">Nested Component</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias.
      </p>

      <DeeplyNestedComponent />
    </div>
  );
}

function DeeplyNestedComponent() {
  const counter = useContext(CounterContext);

  console.log(counter);

  return (
    <div className="max-w-[500px] border border-white p-2">
      <h4 className="font-bold">Deeply Nested Component</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora
        reiciendis aliquam maxime similique aut fugiat nesciunt repudiandae hic
        quis. Counter: {counter.counter}
      </p>
    </div>
  );
}
