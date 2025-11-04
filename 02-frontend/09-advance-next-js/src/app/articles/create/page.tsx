"use client";

import { LoadingSpinningWheel } from "@/components/loading-spin-wheel";
import React, { useEffect, useState } from "react";

export default function CreatePage() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const draft = sessionStorage.getItem("articleDraft");
    if (draft) setFormData(JSON.parse(draft));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("articleDraft", JSON.stringify(formData));
  }, [formData]);

  async function handleSubmit(event: React.FormEvent) {
    setIsLoading(true);

    try {
      event.preventDefault();

      await fetch("https://adeptbox-us.backendless.app/api/data/articles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="uppercase font-bold text-xl mb-5">Create New Article</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="grid grid-cols-[100px_auto]">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Breaking News..."
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>

        {/* Image */}
        <div className="grid grid-cols-[100px_auto]">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            placeholder="https://image-dummy.com"
            value={formData.image}
            onChange={(event) =>
              setFormData({ ...formData, image: event.target.value })
            }
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-[100px_auto]">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Once upon time..."
            value={formData.content}
            onChange={(event) =>
              setFormData({ ...formData, content: event.target.value })
            }
          ></textarea>
        </div>

        <button
          type="submit"
          className={`${
            isLoading ? "bg-slate-300 text-black" : "bg-black text-white"
          } border border-white w-full`}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinningWheel /> : null}
          Publish
        </button>
      </form>
    </main>
  );
}
