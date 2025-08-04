import Link from "next/link";

export default async function Reviews({ params }) {
  const productId = (await params).productId;
  console.log("params", await params);
  return (
    <div>
      <h1>Reviews for Product {productId}</h1>
      <div className="flex flex-col">
        <Link
          className="underline p-2 "
          href={`/products/${productId}/reviews/1`}
        >
          Review 1
        </Link>
        <Link
          className="underline p-2 "
          href={`/products/${productId}/reviews/2`}
        >
          Review 2
        </Link>
        <Link
          className="underline p-2 "
          href={`/products/${productId}/reviews/3`}
        >
          Review 3
        </Link>
      </div>
    </div>
  );
}
