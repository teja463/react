import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props) {
  const params = await props.params;
  console.log("params product", params.productId);
  return {
    title: `Product ${params.productId}`,
  };
}
export default async function ProductDetails({
  params,
}: {
  params: Promise<any>;
}) {
  const productId = (await params).productId;
  console.log("params", await params);
  if (parseInt(productId) > 10) {
    return notFound();
  }
  return (
    <div>
      <h1>Products Details for {productId}</h1>
      <Link className="underline p-2" href={`/products/${productId}/reviews`}>
        Click here for reviews
      </Link>
    </div>
  );
}
