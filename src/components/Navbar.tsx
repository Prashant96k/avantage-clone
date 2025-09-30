"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Home, User, Settings, Package, DollarSign, Mail } from "lucide-react"; // icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#001731]/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-[#001731] via-[#00426F] to-[#0D76B1]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // save logo in public/logo.png
            alt="L4RG Logo"
            width={45}
            height={45}
          />
          <span className="font-bold text-2xl tracking-wide">L4RG</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <Home size={18} /> <Link href="/">Home</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <User size={18} /> <Link href="/about">About Us</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <Settings size={18} /> <Link href="/process">Process</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <Package size={18} /> <Link href="/services">Services</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <DollarSign size={18} /> <Link href="/pricing">Pricing</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-cyan-400 transition">
            <Mail size={18} /> <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
