import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products"
}

export default function Products() {
  return (
    <>
      <h2 className="text-3xl mb-4">Products</h2>
      <div className="flex flex-col">
        <Link className="underline p-2 " href="/products/1">
          Product 1
        </Link>
        <Link className="underline p-2 " href="/products/2">
          Product 2
        </Link>
        <Link className="underline p-2 " href="/products/3">
          Product 3
        </Link>
      </div>
    </>
  );
}
