export default async function ProductDetails({
  params,
}: {
  params: Promise<any>;
}) {
  const productId = (await params).productId;
  console.log('params', await params);
  return (
    <div>
      <h1>Products Details {productId}</h1>
    </div>
  );
}
