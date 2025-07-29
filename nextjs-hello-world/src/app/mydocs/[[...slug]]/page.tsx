export default async function Docs(props){
  const {slug} = await props.params;

  if(slug?.length ===2){
    return <h1>Viewing docs for Feature {slug[0]} and Product {slug[1]}</h1>
  }else if(slug?.length ===1 ){
    return <h1>Viewing docs for Feature {slug[0]}</h1>
  }
  return <h1>Docs</h1>
}