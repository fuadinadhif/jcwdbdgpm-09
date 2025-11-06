"use client";

import ArticleDeleteButton from "./article-delete-button";
import Image from "next/image";
import { useState } from "react";

interface IArticle {
  objectId: string;
  image: string;
  title: string;
  content: string;
}

export default function ArticleData({ article }: { article: IArticle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave() {
    setIsSaving(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/data/articles/${article.objectId}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update article");
      }

      alert("Article updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating article");
    } finally {
      setIsEditing(false);
      setIsSaving(false);
    }
  }

  return (
    <>
      <div className="flex gap-2 mb-4">
        <ArticleDeleteButton article={article} />
        {isEditing ? (
          <div>
            <button
              className="bg-yellow-300 py-1 px-2 text-black hover:bg-yellow-500"
              onClick={() => {
                setIsEditing(false);
                setTitle(article.title);
                setContent(article.content);
              }}
            >
              Cancel
            </button>
            <button
              className={`${
                isSaving ? "bg-green-100" : "bg-green-300"
              } py-1 px-2 text-black hover:bg-green-500`}
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-300 py-1 px-2 text-black hover:bg-blue-500"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      <div className="relative h-82 w-full mb-8">
        <Image
          src={article?.image}
          alt="Alternative text image"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {isEditing ? (
        <>
          <input
            type="text"
            className="font-bold text-xl mb-4 border border-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full max-w-[500px] border border-white"
            rows={10}
          ></textarea>
        </>
      ) : (
        <>
          <h3 className="font-bold text-xl mb-4">{title}</h3>
          <p className="w-full max-w-[500px]">{content}</p>
        </>
      )}
    </>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Conditional rendering: Merender element tergantung kondisi {true ? <p>Dhika</p> : <p>Akmal</p>}
