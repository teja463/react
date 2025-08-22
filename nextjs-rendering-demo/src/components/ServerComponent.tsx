import fs from "fs";
import { ClientComponent } from "./ClientComponent";
export async function ServerComponent() {
  const data = fs.readFileSync("src/components/Ratings.tsx", "utf-8");
  console.log('file data', data)
  console.log("Server component rendered");
  return (
    <div>
      <h1>Server Component</h1>
    </div>
  );
}
