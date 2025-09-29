'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-gray-900/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48 text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Delivering <span className="text-sky-400">Measurable Results</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-200">
          Transform your business with strategy, technology, and operations that drive growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition"
          >
            Talk to an Expert
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
