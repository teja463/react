export async function generateStaticParams(){
  return [{id:"1"}, {id:"2"}, {id:"3"}]
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      Product Details for <b>{id} {new Date().toLocaleTimeString()}</b>
    </div>
  );
}
