import { ChangeEvent } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <input
        type="text"
        placeholder="Search services..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
    </div>
  );
}
