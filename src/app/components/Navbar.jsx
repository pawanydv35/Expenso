'use client'

import Image from "next/image";

export default function Home() {
  return (
   <nav className=" py-2">
      <ul className="flex justify-center ">
        <li className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Home</li>
        <li className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">About</li>
        <li className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Contact us</li>
        <li className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">Blogs</li>
        <li className="mx-5 hover:bg-green-300 hover:text-black rounded px-1">How it's work</li>
      </ul>
   </nav>
  );
}
