"use client";

import { useRouter } from "next/navigation";

export default function ArticleDeleteButton(props: {
  article: { objectId: string };
}) {
  const router = useRouter();

  async function handleDelete(objectId: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/data/articles/${objectId}`,
      { method: "DELETE" }
    );

    if (response.ok) {
      alert("Article has been deleted!");
      router.push("/articles");
    } else {
      alert("Failed to delete article");
    }
  }

  return (
    <button
      className="bg-red-300 py-1 px-2 text-black hover:bg-red-500"
      onClick={() => handleDelete(props.article?.objectId)}
    >
      Delete
    </button>
  );
}
