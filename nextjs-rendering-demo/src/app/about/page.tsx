import { cookies } from "next/headers";

export default async function About() {
  console.log('About server component')
  const cookieStore = await cookies();
  console.log('theme', cookieStore.get('theme'));
  
  return (
    <div>
      About {new Date().toLocaleTimeString()}
    </div>
  );
}
