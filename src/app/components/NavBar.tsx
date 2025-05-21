import Link from "next/link";
import { ComponentProps, ReactNode } from "react";


export default function NavBar({ children } : { children : ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function NavLink(props : ComponentProps<typeof Link>) {
  return (
    <Link {...props}/>
  )
}

