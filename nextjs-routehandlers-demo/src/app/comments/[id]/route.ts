import { Comments } from "../data"

export async function GET(request: Request, { params } : any) {
  const { id } = await params;
  const comment = Comments.find(c => c.id == id);
  if (comment) {
    return Response.json(comment);
  } else {

    return new Response("Comment not found");
  }
}

export async function PATCH(request: Request, { params } : any) {
  const { id } = await params;
  const body = await request.json();
  const comment = Comments.find(c => c.id == id);
  if (comment) {
    comment.comment = body.comment;

    return Response.json(comment);
  } else {

    return new Response("Comment not found");
  }
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = await params;
  const index = Comments.findIndex(c => c.id == id);
  if(index === -1){
    return new Response("Comment not found with id " + id);
  }
  const comment = Comments[index];
  Comments.splice(index, 1);
  return Response.json(comment);
}