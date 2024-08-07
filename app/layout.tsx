import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Home, MessageSquareCode, User } from "lucide-react";
import { FloatingNav } from "@/components/core/navbar";
import Sidebar from "@/components/core/mobile-navbar";
import LenisScroll from "@/components/core/LenisScroll";
import Footer from "@/components/core/footer";

const inter = Nunito({ subsets: ["latin"],weight:['1000','900','800','700','600','500','400','300','200'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Portfolio",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Products",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Why Us",
      link: "/contact",
      icon: (
        <MessageSquareCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageSquareCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>
          <LenisScroll />
            <div className="hidden md:flex">
              <FloatingNav navItems={navItems} />
            </div>
          <Sidebar/>          
          <main className="h-full w-full">
            {children}
          </main>
          <Footer/>
        </body>
    </html>
  );
}
