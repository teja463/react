export default function About() {
  console.log('About server component')
  return (
    <div>
      About {new Date().toLocaleTimeString()}
    </div>
  );
}
