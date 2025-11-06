import MainWrapper from "@/components/main-wrapper";
import ArticleData from "@/components/article-data";

interface IProps {
  params: Promise<{ objectId: string }>;
}

async function getArticleData(objectId: string) {
  const response = await fetch(
    `${process.env.API_BASE}/data/articles/${objectId}`
  );
  const data = await response.json();

  return data;
}

export async function generateMetadata(props: IProps) {
  const { objectId } = await props.params;
  const data = await getArticleData(objectId);
  return { title: data.title };
}

export default async function ArticleDetails(props: IProps) {
  const { objectId } = await props.params;
  const article = await getArticleData(objectId);

  if (!article) {
    return (
      <MainWrapper>
        <h2>Article Not Found</h2>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <ArticleData article={article}/>
    </MainWrapper>
  );
}
