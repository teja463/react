import { ClientComponent } from "@/components/ClientComponent";
import { ServerComponent } from "@/components/ServerComponent";

export default function Interleaving() {
  console.log("interleaving rendered");
  return (
    <div>
      <h1>Interleaving</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
