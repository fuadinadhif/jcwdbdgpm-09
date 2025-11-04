import MainWrapper from "@/components/main-wrapper";
import Image from "next/image";
import Link from "next/link";

export default async function Articles() {
  const response = await fetch(`${process.env.API_BASE}/data/articles`);
  const data = await response.json();

  return (
    <MainWrapper>
      <h2 className="uppercase font-bold text-2xl mb-6">Articles Page</h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map(
          (element: { objectId: string; image: string; title: string }) => {
            return (
              <article key={element.objectId}>
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src={element.image}
                    alt="Alternative text image"
                    fill
                  />
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
          }
        )}
      </div>
    </MainWrapper>
  );
}
