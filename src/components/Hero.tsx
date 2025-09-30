"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" src="/videos/hero-bg.mp4" />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
      >
        {/* Replace with the exact L4RG hero headline/strapline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">We Grow Brands</h1>
        <p className="mt-4 text-lg md:text-2xl">Digital. Creative. Impactful.</p>
      </motion.div>
    </section>
  );
}
