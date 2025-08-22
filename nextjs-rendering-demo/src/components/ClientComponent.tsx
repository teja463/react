"use client";
import { ReactNode, useState } from "react";
import { ServerComponent } from "@/components/ServerComponent";
export function ClientComponent({children} : {children: ReactNode}){
  const [name, setName] = useState('Test');
  console.log('Client component rendered')
    return (
    <div>
      <h1>Client Component {name}</h1>
      {children}
    </div>
  );
}