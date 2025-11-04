export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(""), 10000);
  });

  return (
    <main className="min-h-screen grid place-items-center">
      <h2>About Page</h2>
    </main>
  );
}
