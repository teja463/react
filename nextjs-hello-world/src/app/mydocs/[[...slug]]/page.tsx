import Link from "next/link";

export default async function Docs(props: any) {
  console.log("docs child");
  const { slug } = await props.params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for Feature {slug[0]} and Product {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for Feature {slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs</h1>
      <Link className="underline" href="/mydocs/test/232">Docs Inner</Link>
    </div>
  );
}
