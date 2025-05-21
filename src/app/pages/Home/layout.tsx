import NavBar, { NavLink } from '@/app/components/NavBar';
import React from 'react'

export default function Homelayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <NavBar>
            <NavLink href={"/pages/Home"}>Home</NavLink>
            <NavLink href={"/pages/Home/about"}>About</NavLink>
            <NavLink href={"/pages/Home/store"}>Store</NavLink>
        </NavBar>
        <div className="">
            {children}
        </div>
    </div>
  )
}
