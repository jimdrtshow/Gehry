export default async function Page() {
  let apiUrl = process.env.NEXT_API_URL;
  let data = await fetch(`${apiUrl}api/admin`);
  let names = await data.json();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-black pt-20">Bonjour {names.name}</h1>
    </div>
  );
}
