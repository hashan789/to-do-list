"use client";
import { NavLink } from "./components/NavBar";


export default function Home() {
  return (
    <div>
      <div className="">
        You are welcome!
      </div>
      <NavLink href={"/pages/Home"}>Go to the Home</NavLink>
    </div>
  );
}
