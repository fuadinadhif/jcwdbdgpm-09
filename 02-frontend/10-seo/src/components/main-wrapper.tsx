import React from "react";

export default function MainWrapper(props: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      {props.children}
    </main>
  );
}
