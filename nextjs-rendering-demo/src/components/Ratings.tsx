export async function Ratings() {
  await new Promise((resolve) => {
    setTimeout(() => resolve("done"), 4000);
  });

  return <div>Ratings</div>;
}
