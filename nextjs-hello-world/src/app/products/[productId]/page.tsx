import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<any>;
}) {
  const productId = (await params).productId;
  console.log('params', await params);
  if(parseInt(productId) > 10){
    return notFound();
  }
  return (
    <div>
      <h1>Products Details for {productId}</h1>
    </div>
  );
}
