import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ArchivedNotifications(){
  return <Card>
    <div>Archived Notifications</div>
    <Link className="underline" href="/parallel-routes">View Default Notifications</Link>
    </Card>
}