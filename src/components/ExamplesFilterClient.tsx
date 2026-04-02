'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, X } from 'lucide-react';
import {
  speechCategories,
  exampleSpeeches,
  getAllGroups,
  type ExampleSpeech,
} from '@/data/exampleSpeeches';

const TONES = [
  { value: '', label: 'All Tones' },
  { value: 'funny', label: '😂 Funny' },
  { value: 'heartfelt', label: '💝 Heartfelt' },
  { value: 'balanced', label: '⚖️ Balanced' },
  { value: 'roast', label: '🔥 Roast' },
];

const DURATIONS = [
  { value: '', label: 'Any Length' },
  { value: '1-3', label: '1–3 min' },
  { value: '3-5', label: '3–5 min' },
  { value: '5-8', label: '5–8 min' },
  { value: '8-99', label: '8+ min' },
];

export default function ExamplesFilterClient() {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const groups = getAllGroups();

  const filteredSpeeches = useMemo(() => {
    return exampleSpeeches.filter(s => {
      if (selectedCategory && s.category !== selectedCategory) return false;
      if (selectedGroup) {
        const cat = speechCategories.find(c => c.slug === s.category);
        if (cat && cat.group !== selectedGroup) return false;
      }
      if (selectedTone && s.tone !== selectedTone) return false;
      if (selectedDuration) {
        const [min, max] = selectedDuration.split('-').map(Number);
        if (s.durationMinutes < min || s.durationMinutes > max) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        return (
          s.title.toLowerCase().includes(q) ||
          s.excerpt.toLowerCase().includes(q) ||
          s.weddingRole.toLowerCase().includes(q) ||
          s.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [search, selectedGroup, selectedCategory, selectedTone, selectedDuration]);

  const activeFilterCount = [selectedGroup, selectedCategory, selectedTone, selectedDuration].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedGroup('');
    setSelectedCategory('');
    setSelectedTone('');
    setSelectedDuration('');
    setSearch('');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search + Filter toggle */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8f867e]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search speeches..."
            className="w-full pl-10 pr-4 py-2.5 border border-[#e8e1d8] rounded-lg bg-white text-sm focus:outline-none focus:border-[#da5389] transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors ${
            showFilters || activeFilterCount > 0
              ? 'border-[#da5389] text-[#da5389] bg-[#da5389]/5'
              : 'border-[#e8e1d8] text-[#181615] bg-white hover:border-[#da5389]'
          }`}
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-[#da5389] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="bg-white border border-[#e8e1d8] rounded-xl p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Group */}
          <div>
            <label className="block text-xs font-medium text-[#8f867e] mb-1.5">Speech Group</label>
            <select
              value={selectedGroup}
              onChange={e => { setSelectedGroup(e.target.value); setSelectedCategory(''); }}
              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
            >
              <option value="">All Groups</option>
              {groups.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-[#8f867e] mb-1.5">Speech Type</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
            >
              <option value="">All Types</option>
              {(selectedGroup
                ? speechCategories.filter(c => c.group === selectedGroup)
                : speechCategories
              ).map(c => (
                <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block text-xs font-medium text-[#8f867e] mb-1.5">Tone</label>
            <select
              value={selectedTone}
              onChange={e => setSelectedTone(e.target.value)}
              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
            >
              {TONES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-medium text-[#8f867e] mb-1.5">Duration</label>
            <select
              value={selectedDuration}
              onChange={e => setSelectedDuration(e.target.value)}
              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
            >
              {DURATIONS.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="sm:col-span-2 lg:col-span-4 text-sm text-[#da5389] hover:text-[#c4477a] flex items-center gap-1 justify-center"
            >
              <X className="h-3.5 w-3.5" /> Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[#8f867e]">
          {filteredSpeeches.length} speech{filteredSpeeches.length !== 1 ? 'es' : ''} found
        </p>
      </div>

      {filteredSpeeches.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-[#8f867e] mb-2">No speeches match your filters</p>
          <button onClick={clearFilters} className="text-[#da5389] hover:underline text-sm">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeeches.map(speech => (
            <SpeechCard key={speech.slug} speech={speech} />
          ))}
        </div>
      )}
    </section>
  );
}

function SpeechCard({ speech }: { speech: ExampleSpeech }) {
  const category = speechCategories.find(c => c.slug === speech.category);

  const toneBadge = {
    funny: { label: '😂 Funny', className: 'bg-amber-50 text-amber-700' },
    heartfelt: { label: '💝 Heartfelt', className: 'bg-pink-50 text-pink-700' },
    balanced: { label: '⚖️ Balanced', className: 'bg-blue-50 text-blue-700' },
    roast: { label: '🔥 Roast', className: 'bg-orange-50 text-orange-700' },
  }[speech.tone];

  return (
    <Link
      href={`/examples/${speech.category}/${speech.slug}`}
      className="group bg-white border border-[#e8e1d8] rounded-xl p-5 hover:border-[#da5389] hover:shadow-md transition-all flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#181615] group-hover:text-[#da5389] transition-colors line-clamp-2 leading-tight">
            {speech.title}
          </h3>
          <p className="text-xs text-[#8f867e] mt-1">
            {category?.icon} {category?.name} · by {speech.authorName}
          </p>
        </div>
      </div>

      <p className="text-sm text-[#8f867e] line-clamp-3 mb-4 flex-1">
        {speech.excerpt}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${toneBadge.className}`}>
          {toneBadge.label}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 font-medium flex items-center gap-1">
          <Clock className="h-3 w-3" /> {speech.durationMinutes} min
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 font-medium">
          {speech.wordCount} words
        </span>
      </div>
    </Link>
  );
}
