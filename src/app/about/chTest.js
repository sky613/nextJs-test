export default async function chTest() {
  const res = await fetch("http://127.0.0.1:8000/api/account/test/", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log("data", data);
  return (
    <main>
      <h1>Home</h1>
      <p>{data.test}</p>
    </main>
  );
}
