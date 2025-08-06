"use client";
import { useRouter } from "next/navigation";
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function handleClick() {
    router.back();  
  }

  return (
    <div className="fixed z-10 top-0 left-0 shadow bg-slate-400/60 w-full h-full" onClick={handleClick}>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

      {children}
      </div>
    </div>
  );
}
