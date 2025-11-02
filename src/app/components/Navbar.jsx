'use client'

import Image from "next/image";

export default function Home() {
  return (
   <nav className=" py-2">
      <ul className="flex justify-center ">
        <li><a href="#"  className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Home</a></li>
        <li><a href="#"  className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">About</a></li>
        <li><a href="#"  className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Contact us</a></li>
        <li><a href="#"  className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Blogs</a></li>
        <li><a href="#"  className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">How it works</a></li>
      </ul>
   </nav>
  );
}
