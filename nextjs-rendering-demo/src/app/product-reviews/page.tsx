import { Ratings } from "@/components/Ratings";
import { Reviews } from "@/components/Reviews";
import { Suspense } from "react";

export default async function Products() {
  return (
    <div>
      <h2>Product Reviews</h2>
      <Suspense fallback={<h2>Loading Reviews...</h2>}>
        <Reviews />
      </Suspense>
      <Suspense fallback={<h2>Loading Ratings...</h2>}>
        <Ratings />
      </Suspense>
    </div>
  );
}
