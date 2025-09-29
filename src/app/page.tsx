'use client';

import Hero from '../components/Hero';
import FeaturedCard from '../components/FeaturedCard';
import Footer from '../components/Footer';
import { useState, useMemo } from 'react';

type DataItem = {
  icon: string;
  title: string;
  desc: string;
  points: string[];
};

const DATA: DataItem[] = [
  {
    icon: '/icons/strategy.png',
    title: 'Corporate Strategy',
    desc: 'Define your vision, identify growth levers, and align teams around measurable outcomes.',
    points: ['Vision & OKRs', 'Operating Model', 'Cost Optimization', 'M&A Readiness'],
  },
  {
    icon: '/icons/digital.png',
    title: 'Digital Transformation',
    desc: 'Upgrade capabilities, processes and platforms to deliver modern customer experiences.',
    points: ['Roadmaps', 'Platform Modernization', 'AI/Automation', 'Change Management'],
  },
  {
    icon: '/icons/market.png',
    title: 'Market Research',
    desc: 'Actionable insights on markets, competitors, pricing and customer needs.',
    points: ['TAM/SAM/SOM', 'Competitive Intel', 'Pricing Studies', 'Voice of Customer'],
  },
  {
    icon: '/icons/gtm.png',
    title: 'Go-To-Market',
    desc: 'Positioning, messaging and channel strategy to accelerate revenue.',
    points: ['ICP & Segmentation', 'Messaging', 'Channel Mix', 'Sales Enablement'],
  },
  {
    icon: '/icons/operations.png',
    title: 'Operations Excellence',
    desc: 'Lean processes and KPIs that improve efficiency and service quality.',
    points: ['Process Re-engineering', 'SOPs', 'KPI Dashboards', 'Training'],
  },
  {
    icon: '/icons/risk.png',
    title: 'Risk & Compliance',
    desc: 'Identify, evaluate and mitigate risks while staying audit-ready.',
    points: ['Risk Framework', 'Regulatory Mapping', 'Controls', 'Audit Prep'],
  },
];

export default function Page() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA;
    return DATA.filter(item =>
      [item.title, item.desc, ...item.points].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Search Bar */}
<div className="relative z-10 max-w-3xl mx-auto mt-8 mb-12">
  <div className="relative">
    {/* Search Icon */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    </div>

    {/* Input */}
    <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search services (e.g. market, ai, strategy)..."
      className="w-full p-4 pl-10 rounded-2xl shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white placeholder-gray-400 transition duration-300 hover:shadow-xl"
    />
  </div>
</div>



      {/* Result Count */}
      {query && (
        <p className="text-center text-gray-600 mb-6">
          Showing <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for "<span className="text-sky-600">{query}</span>"
        </p>
      )}

      {/* Featured Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item, idx) => (
          <FeaturedCard key={idx} item={{ ...item, query }} />
        ))}
      </section>

      {/* No Results */}
      {results.length === 0 && (
        <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No results found.
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
