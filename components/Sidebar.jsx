"use client";

import { BarChart3, List, Clock, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Transactions", href: "/transactions", icon: List },
  { name: "Budgets", href: "/budgets", icon: Clock },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-56 bg-white border-r flex flex-col py-6">
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <item.icon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
