import React from "react";
import { serverUtil } from "@/utils/server-utils";
import { ImageSlider } from "@/components/ImageSlider";

export default async function ServerRoute() {
  const u = serverUtil();
  console.log('u', u);
  return (
    <div>
      Server Route
      <ImageSlider />
    </div>
  )
}

