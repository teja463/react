import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Notifications(){
  return <Card>
    <div>Notifications</div>
    <Link className="underline" href="/parallel-routes/archived">View Archived Notifications</Link>
    </Card>
}