"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingLines from "@/components/FloatingLines";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
      }}
    >
      <FloatingLines />
      {/* BACKGROUND breathing effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/Home/hero-bg.webp" // optional bg image
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 px-6 py-20">
        {/* LEFT: Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Top Stats */}
          <div className="flex gap-6 mb-6">
            <div className="bg-white/10 px-6 py-4 rounded-xl text-center">
              <p className="text-2xl font-bold">20</p>
              <p className="text-sm">Years</p>
            </div>
            <div className="bg-white/10 px-6 py-4 rounded-xl text-center">
              <p className="text-2xl font-bold">$1.85B</p>
              <p className="text-sm">Closed</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Your <span className="text-cyan-400">Revenue Engine</span> <br />
            Starts Here.
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            AI-powered digital marketing, web development, lead generation and
            appointment setting tailored for US B2B companies.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#001731] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
              Schedule a Strategy Call
            </button>
          </div>

          {/* Extra Stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <p className="text-2xl font-bold">3,000</p>
              <p className="text-sm text-gray-300">Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$1850M+</p>
              <p className="text-sm text-gray-300">Revenue Generated</p>
            </div>
            <div>
              <p className="text-2xl font-bold">20</p>
              <p className="text-sm text-gray-300">Years</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Floating Card with fade-in delay */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }} // 👈 fade-in after left side
          className="flex justify-center items-center"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 max-w-md"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/Home/hero-business-team.webp"
              alt="Digital Growth"
              width={500}
              height={400}
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
              <h3 className="font-semibold">Digital Growth</h3>
              <p className="text-sm text-gray-300">
                Accelerate your business with AI-powered solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
