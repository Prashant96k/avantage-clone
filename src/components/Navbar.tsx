"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-2xl font-bold tracking-wide">L4RG</Link>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
