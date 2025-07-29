"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName?.split("/")?.[2];

  return (
    <div>
      <h2>Product {productId} Not Found</h2>
    </div>
  );
}
