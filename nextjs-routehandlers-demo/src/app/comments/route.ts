import { NextRequest } from "next/server";
import { Comments } from "./data";

export async function GET(request: NextRequest){
  const {searchParams} = request.nextUrl;
  const query = searchParams.get('query') || '';
  console.log('query');
  const filtered = Comments.filter(c => c.comment.includes(query))
  return Response.json(filtered);
}

export async function POST(request: Request){
  const data = await request.json();
  data.id = Comments.length + 1;
  Comments.push(data);
  return Response.json(data);
}