"use client";
import { motion } from "framer-motion";

type T = { name: string; role: string; text: string };
const testimonials: T[] = [
  // paste exact testimonials if authorized
  { name: "John Doe", role: "CEO", text: "…" },
  { name: "Jane Smith", role: "CMO", text: "…" },
  { name: "Alex Lee", role: "Founder", text: "…" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }} viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">“{t.text}”</p>
              <h3 className="font-semibold">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
