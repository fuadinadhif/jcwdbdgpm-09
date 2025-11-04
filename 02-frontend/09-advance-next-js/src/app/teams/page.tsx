import { LoadingSpinningWheel } from "@/components/loading-spin-wheel";
import React from "react";

export default function Teams() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2>Teams Page</h2>
      <React.Suspense fallback={<LoadingSpinningWheel />}>
        <TeamList />
      </React.Suspense>
    </main>
  );
}

async function TeamList() {
  await new Promise((resolve) => setTimeout(() => resolve(""), 5000));

  return (
    <ol>
      <li>Andi Purbaya</li>
      <li>Joko Sugiono</li>
      <li>Prabowonto</li>
      <li>Anis Baswedan</li>
    </ol>
  );
}
