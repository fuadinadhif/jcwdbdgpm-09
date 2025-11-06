import ArticleList from "@/components/article-list";
import MainWrapper from "@/components/main-wrapper";

export default async function Articles() {
  const response = await fetch(`${process.env.API_BASE}/data/articles`);
  const data = await response.json();

  return (
    <MainWrapper>
      <h2 className="title">Articles Page</h2>
      <ArticleList data={data} />
    </MainWrapper>
  );
}
