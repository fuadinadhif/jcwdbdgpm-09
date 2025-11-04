"use client";

import { useEffect, useState } from "react";

export default function CreatePage() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
  });

  useEffect(() => {
    const draft = sessionStorage.getItem("articleDraft");
    if (draft) setFormData(JSON.parse(draft));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("articleDraft", JSON.stringify(formData));
  }, [formData]);

  return (
    <main className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <h2 className="uppercase font-bold text-xl mb-5">
        Create New Article: 0
      </h2>
      <form>
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

        <button type="submit" className="border border-white w-full">
          Publish
        </button>
      </form>
    </main>
  );
}
