export default async function ImageViewer({params}){

  const {id} = await params;
  return <div>
    <img src={`https://picsum.photos/id/${id}/800`} />
  </div>
}