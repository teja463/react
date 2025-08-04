export default function ErrorDemo(){
  
  const num = Math.floor(Math.random() * 2);
  if(num === 1){
    throw new Error("Simulating error")
  }

  return <div>
    <h1>Refresh multiple times to see Error page</h1>
  </div>
}