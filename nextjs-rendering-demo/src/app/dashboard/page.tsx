"use client";
import { useState } from "react";
export default function Dashboard() {
  const [name, setName] = useState("");
  console.log('Dashboard client component')
  return (
    <div>
      <h1>Dashboard</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
    </div>
  );
}
