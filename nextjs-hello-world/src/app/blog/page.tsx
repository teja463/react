import Link from "next/link";

export default async function Blog(params: any) {
  const searchParams = await params.searchParams;
  console.log("searchParams", searchParams);
  return (
    <div>
      <h1>My Blog in {searchParams.lang || "en"}</h1>
      <p>
        <Link className="underline" href={`/blog?lang=fr`}>
          Read it in french
        </Link>
      </p>
      <p>
        <Link className="underline" href={`/blog?lang=de`}>
          Read it in German
        </Link>
      </p>
    </div>
  );
}
