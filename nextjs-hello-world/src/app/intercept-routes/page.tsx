import Link from "next/link";

export default function InterceptingRoutes() {
  return (
    <div>
      <h2>Intercepting Routes</h2>
      <Link className="underline block" href="/intercept-routes/f1">F1</Link>
      <Link className="underline block" href="/intercept-routes/f2">F2</Link>
    </div>
  );
}
