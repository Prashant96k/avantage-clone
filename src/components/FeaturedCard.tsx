'use client';

import React from 'react';
import Image from 'next/image';

type DataItem = {
  icon: string;
  title: string;
  desc: string;
  points: string[];
  query?: string; // for highlighting
};

interface Props {
  item: DataItem;
}

export default function FeaturedCard({ item }: Props) {
  const highlightText = (text: string) => {
    if (!item.query) return text;
    const regex = new RegExp(`(${item.query})`, 'gi');
    return text.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="text-blue-600 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6 flex flex-col h-full">
      {/* Icon */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <Image
          src={item.icon}
          alt={item.title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {highlightText(item.title)}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{highlightText(item.desc)}</p>

      {/* Bullet Points */}
      <ul className="text-gray-500 text-sm list-disc list-inside space-y-1">
        {item.points.map((point, idx) => (
          <li key={idx}>{highlightText(point)}</li>
        ))}
      </ul>
    </div>
  );
}
