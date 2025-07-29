import { notFound } from "next/navigation";

export default async function Review({params} : {}) {

  const {productId, reviewId} = await params;
  
  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  );
}
