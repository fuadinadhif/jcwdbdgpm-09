"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IData {
  objectId: string;
  image: string;
  title: string;
}

export default function ArticleList(props: { data: IData[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState(props.data);

  useEffect(() => {
    const delay = setTimeout(() => {
      async function fetchArticles() {
        try {
          const whereClause = `title LIKE '%25${encodeURIComponent(
            searchQuery
          )}%25'`;
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/data/articles?where=${whereClause}`
          );
          const data = await response.json();
          setArticles(data);
        } catch (error) {
          console.error(`Error fetching articles: ${error}`);
        }
      }

      fetchArticles();
    }, 500);

    return () => clearTimeout(delay)
  }, [searchQuery]);

  return (
    <>
      <input
        type="text"
        placeholder="Search articles..."
        className="mb-6"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((element: IData) => {
          return (
            <article key={element.objectId}>
              <div className="relative w-full h-32 mb-2">
                <Image src={element.image} alt="Alternative text image" fill />
              </div>
              <h3>{element.title}</h3>
              <Link
                href={`/articles/${element.objectId}`}
                className="border border-white p-1 mt-4"
              >
                Read more
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}
