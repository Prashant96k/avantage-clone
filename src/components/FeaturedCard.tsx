type DataItem = {
  icon: 'strategy' | 'growth' | string;
  title: string;
  desc: string;
  points: string[];
  tags?: string[];
};

interface Props {
  item: DataItem;
}

export default function FeaturedCard({ item }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 mb-4 text-sky-700 font-bold text-lg">
        {item.icon === 'strategy' ? 'S' : 'G'}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
      <ul className="mt-4 list-disc list-inside text-slate-500 text-sm space-y-1">
        {item.points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
