'use client';

import FeaturedCard from './FeaturedCard';

interface DataItem {
  icon: 'strategy' | 'growth' | string;
  title: string;
  desc: string;
  points: string[];
  tags?: string[];
}

interface Props {
  items: DataItem[];
}

export default function FeaturedCarousel({ items }: Props) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-6 px-4 min-w-max">
        {items.map((item, idx) => (
          <div key={idx} className="w-[300px] flex-shrink-0">
            <FeaturedCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
