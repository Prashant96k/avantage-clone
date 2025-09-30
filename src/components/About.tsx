"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {/* Paste exact About copy here */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {/* Exact authorized text goes here */}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src="/images/about.jpg" alt="About" className="rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
