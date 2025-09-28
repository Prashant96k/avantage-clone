'use client';

import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FeaturedCard from '../components/FeaturedCard';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Footer from '../components/Footer';
import { useState, useMemo } from 'react';

type DataItem = {
  icon: 'strategy' | 'growth' | string;
  title: string;
  desc: string;
  points: string[];
  tags?: string[];
};

const DATA: DataItem[] = [
  {
    icon: 'strategy',
    title: 'Corporate Strategy',
    desc: 'Define your vision, identify growth levers, and align teams around measurable outcomes.',
    points: ['Vision & OKRs', 'Operating Model', 'Cost Optimization', 'M&A Readiness'],
    tags: ['strategy', 'corporate', 'vision', 'okrs', 'operations'],
  },
  {
    icon: 'growth',
    title: 'Digital Transformation',
    desc: 'Upgrade capabilities, processes and platforms to deliver modern customer experiences.',
    points: ['Roadmaps', 'Platform Modernization', 'AI/Automation', 'Change Management'],
    tags: ['digital', 'transformation', 'ai', 'automation', 'modernization'],
  },
  {
    icon: 'strategy',
    title: 'Market Research',
    desc: 'Actionable insights on markets, competitors, pricing and customer needs.',
    points: ['TAM/SAM/SOM', 'Competitive Intel', 'Pricing Studies', 'Voice of Customer'],
    tags: ['market', 'research', 'pricing', 'competition', 'customer'],
  },
  {
    icon: 'growth',
    title: 'Go-To-Market',
    desc: 'Positioning, messaging and channel strategy to accelerate revenue.',
    points: ['ICP & Segmentation', 'Messaging', 'Channel Mix', 'Sales Enablement'],
    tags: ['gtm', 'revenue', 'sales', 'marketing', 'positioning'],
  },
  {
    icon: 'strategy',
    title: 'Operations Excellence',
    desc: 'Lean processes and KPIs that improve efficiency and service quality.',
    points: ['Process Re-engineering', 'SOPs', 'KPI Dashboards', 'Training'],
    tags: ['operations', 'process', 'lean', 'kpi', 'efficiency'],
  },
  {
    icon: 'growth',
    title: 'Risk & Compliance',
    desc: 'Identify, evaluate and mitigate risks while staying audit-ready.',
    points: ['Risk Framework', 'Regulatory Mapping', 'Controls', 'Audit Prep'],
    tags: ['risk', 'compliance', 'security', 'regulatory'],
  },
];

export default function Page() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA;
    return DATA.filter(item =>
      [item.title, item.desc, ...(item.tags || []), ...(item.points || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <Hero />

      {/* Search Bar */}
      <div className="relative -mt-10 mb-6">
        <SearchBar onSearch={setQuery} />
      </div>

      {/* Featured Carousel */}
      <section id="services" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">Our Services</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                Expertise that delivers <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">measurable results</span>
              </h2>
            </div>
            <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800">
              View all
            </a>
          </div>

          <div className="mt-8">
            <FeaturedCarousel items={results} />
          </div>

          {results.length === 0 && (
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
              No results. Try another keyword.
            </div>
          )}
        </div>
      </section>

      
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: 'Avg ROI', v: '4.2x' },
              { k: 'Client NPS', v: '71' },
              { k: 'On-time Delivery', v: '98%' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl ring-1 ring-slate-900/10 bg-slate-50 p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-slate-900">{s.v}</div>
                <div className="mt-1 text-sm text-slate-600">{s.k}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-sky-600 text-white p-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to accelerate growth?</h3>
              <p className="text-sm text-white/90">Get a tailored plan in 48 hours.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/20">
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
