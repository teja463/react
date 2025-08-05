import { Card } from "@/components/ui/card";

export default async function Analytics(){
  await new Promise((resolve) => {
    setTimeout(() => {resolve('done')}, 2000)
  })
  return <Card>Analytics</Card>
}