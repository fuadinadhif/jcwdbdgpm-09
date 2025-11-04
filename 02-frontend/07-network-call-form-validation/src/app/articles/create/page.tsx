"use client";

import React, { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Menghalangi event untuk mereload halaman

    const response = await fetch(
      "https://adeptbox-us.backendless.app/api/data/articles",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          image: image,
          content: content,
        }),
      }
    );

    if (response.ok) {
      alert("Succesfully added new article!");
    }

    setTitle("");
    setImage("");
    setContent("");
  }

  return (
    <main>
      <h1>Create Article Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Article image url..."
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <textarea
          placeholder="Article content..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
