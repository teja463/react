export async function Reviews(){
  await new Promise((resolve) => {
    setTimeout(() => resolve('done'), 2000);
  });
  return <div>Reviews</div>
}