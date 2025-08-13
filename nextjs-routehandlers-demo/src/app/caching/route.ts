export const dynamic = "force-static";
export const revalidate = 10;

export async function GET(){
  const date = new Date().toLocaleTimeString();
  return Response.json({time: date});
}