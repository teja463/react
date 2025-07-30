export default async function Data({params}) {
  const da= await params;
  return <h1>Data {da.data}</h1>;
}