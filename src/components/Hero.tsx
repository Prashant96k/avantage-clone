'use client';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-700 to-indigo-600 animate-gradient-x"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Business Solutions for Modern Companies
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-sky-100">
          We help businesses grow faster with digital transformation, strategy, and operations excellence.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block rounded-lg bg-white text-sky-700 px-6 py-3 text-lg font-semibold hover:bg-slate-100"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}
