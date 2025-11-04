export default async function ArticleDetails(props: {
  params: Promise<{ objectId: string }>;
}) {
  const { objectId } = await props.params;
  console.log(objectId);

  const response = await fetch(
    `https://adeptbox-us.backendless.app/api/data/articles/${objectId}`,
    { method: "GET" }
  );
  const data = await response.json();

  console.log(data);

  return (
    <main>
      <h2>{data.title}</h2>
    </main>
  );
}
