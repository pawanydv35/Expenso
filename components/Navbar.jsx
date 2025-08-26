import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-b-xl">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
          e
        </div>
        <span className="text-lg font-semibold">Expenso</span>
      </div>

      {/* Middle Section: Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/features" className="text-gray-700 hover:text-blue-600">
          Features
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
      </div>

      {/* Right Section: Button */}
      <Link
        href="/get-started"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </nav>
  );
}
