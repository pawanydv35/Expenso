import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Children } from "react";
import "./globals.css";

export const metadata = {
  title: "Expenso",
  description: "Expenso is a simple and powerful expense tracker web app that helps you manage your daily spending, set budgets, and track savings effortlessly. Stay in control of your finances with clear insights and reports.",
};

export default function RootLayout({Children}) {
  return (
    <html lang="en">
      <body>
        <Navbar />  
          <Sidebar />
        {Children}
      </body>
    </html>
  );
}
