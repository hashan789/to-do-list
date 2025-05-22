import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";


export default function NavBar({ children } : { children : ReactNode }) {
  return (
    <div className={cn("w-full h-10 p-5 flex justify-end items-center gap-4 text-lg shadow-black bg-black text-white")}>
      {children}
    </div>
  )
}

export function NavLink(props : ComponentProps<typeof Link>) {
  return (
    <Link {...props}/>
  )
}

