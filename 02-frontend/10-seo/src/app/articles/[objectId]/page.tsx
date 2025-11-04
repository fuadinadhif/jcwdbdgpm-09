"use client";

import MainWrapper from "@/components/main-wrapper";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  params: Promise<{ objectId: string }>;
}

async function getArticleData(props: IProps) {
  const { objectId } = await props.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/data/articles/${objectId}`
  );
  const data = await response.json();

  return data;
}

// export async function generateMetadata(props: IProps) {
//   const data = await getArticleData(props);
//   return { title: data.title };
// }

async function handleDelete(objectId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/data/articles/${objectId}`,
    { method: "DELETE" }
  );

  if (response.ok) {
    alert("Article has been deleted!");
  } else {
    alert("Failed to delete article");
  }
}

export default function ArticleDetails(props: IProps) {
  const [article, setArticle] = useState<null | {
    objectId: string;
    image: string;
    title: string;
    content: string;
  }>(null);

  useEffect(() => {
    async function getArticle() {
      const data = await getArticleData(props);
      setArticle(data);
    }

    getArticle();
  }, []);

  if (!article) {
    return (
      <MainWrapper>
        <h2>Article Not Found</h2>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <div className="flex gap-2 mb-4">
        <button
          className="bg-red-300 py-1 px-2 text-black hover:bg-red-500"
          onClick={() => handleDelete(article?.objectId)}
        >
          Delete
        </button>
        <button className="bg-blue-300 py-1 px-2 text-black hover:bg-blue-500">
          Update
        </button>
      </div>
      <div className="relative h-82 w-full mb-8">
        <Image
          src={article?.image}
          alt="Alternative text image"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <h3 className="font-bold text-xl mb-4">{article?.title}</h3>
      <p className="w-full max-w-[500px]">{article?.content}</p>
    </MainWrapper>
  );
}
