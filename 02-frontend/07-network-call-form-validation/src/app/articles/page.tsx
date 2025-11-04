interface IArticle {
  objectId: string;
  title: string;
}

export default async function ArticlesPage() {
  const response = await fetch(
    "https://adeptbox-us.backendless.app/api/data/articles/",
    { method: "GET" }
  );
  const data = await response.json();

  console.log(data);

  return (
    <main>
      <h1>Articles Page</h1>
      {data.map((article: IArticle) => (
        <div key={article.objectId}>
          <h2>{article.title}</h2>
          <a>Read more...</a>
        </div>
      ))}
    </main>
  );
}
