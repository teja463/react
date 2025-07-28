export default async function Reviews({ params }) {
  const productId = (await params).productId;
  console.log("params", await params);
  return (
    <div>
      <h1>Reviews for {productId}</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
    </div>
  );
}
