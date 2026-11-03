import React, { useState } from 'react';
import { ContentCreator } from '../types';
import { Users, Award } from 'lucide-react';

interface CreatorsHubProps {
  creators: ContentCreator[];
  onSelectCreator: (creator: ContentCreator) => void;
  searchQuery?: string;
}

export const CreatorsHub: React.FC<CreatorsHubProps> = ({ creators, onSelectCreator, searchQuery = '' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePlatform, setActivePlatform] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(creators.map(c => c.category)))];
  const platforms = ['All', 'TikTok', 'Instagram', 'YouTube', 'Multi-Platform'];
  const statuses = ['All', 'Established', 'Breakthrough'];

  const query = searchQuery.trim().toLowerCase();

  const filteredCreators = creators.filter(c => {
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    const matchesPlatform = activePlatform === 'All' || c.platform === activePlatform;
    const matchesStatus = activeStatus === 'All' || c.status === activeStatus;
    const matchesSearch = query === '' ||
      c.name.toLowerCase().includes(query) ||
      c.handle.toLowerCase().includes(query) ||
      (c.realName && c.realName.toLowerCase().includes(query)) ||
      c.category.toLowerCase().includes(query) ||
      c.bio.toLowerCase().includes(query);
    return matchesCategory && matchesPlatform && matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8 py-4 animate-in fade-in duration-200">
      {/* Editorial Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
        <span className="text-xs font-bold text-red-700 uppercase tracking-widest">Digital Media Directory & Profiles</span>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mt-1">
          Ghana Content Creators & Award Winners
        </h2>
        <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
          Explore established icons and breakthrough digital creators across TikTok, Instagram, and YouTube. Click any creator to read their full profile article, achievements, and niche awards.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg border border-slate-200">
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-2">Status:</span>
          {statuses.map(st => (
            <button
              key={st}
              onClick={() => setActiveStatus(st)}
              className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition ${
                activeStatus === st
                  ? 'bg-red-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {st} Creators
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-500">Platform:</span>
            <select
              value={activePlatform}
              onChange={(e) => setActivePlatform(e.target.value)}
              className="bg-slate-100 border border-slate-200 text-slate-800 text-xs rounded px-3 py-1.5 font-medium focus:outline-none focus:border-red-700"
            >
              {platforms.map(p => (
                <option key={p} value={p}>{p === 'All' ? 'All Platforms' : p}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Creators Grid */}
      {filteredCreators.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-sm font-medium">No creator profiles found matching "{searchQuery}".</p>
          <button 
            onClick={() => { setActiveCategory('All'); setActivePlatform('All'); setActiveStatus('All'); }}
            className="mt-4 px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map(creator => (
            <div
              key={creator.id}
              onClick={() => onSelectCreator(creator)}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Banner Image & Avatar */}
                <div className="relative h-40 bg-slate-900 overflow-hidden">
                  <img
                    src={creator.bannerImage || creator.coverImage}
                    alt={`${creator.name} banner`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-black/30"></div>
                  <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-10">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${creator.status === 'Breakthrough' ? 'bg-amber-500 text-white' : 'bg-slate-900 text-white border border-slate-700'}`}>
                      {creator.status}
                    </span>
                    <span className="bg-white/95 text-slate-900 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      {creator.platform}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center space-x-3 z-10">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-md shrink-0 bg-slate-800"
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-base truncate">
                        {creator.name}
                      </h3>
                      <p className="text-xs text-slate-200 font-medium truncate">{creator.handle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded border border-slate-200">
                      {creator.category}
                    </span>
                    <span className="text-slate-500 font-semibold flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{creator.subscribers}</span>
                    </span>
                  </div>

                  {/* Award Badge preview */}
                  <div className="bg-amber-50 border border-amber-200 p-2.5 rounded flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-xs font-serif font-bold text-amber-900 truncate">
                      {creator.award.title} ({creator.award.year})
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {creator.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Verified Profile Article</span>
                <span className="text-xs font-bold text-red-700 group-hover:underline">
                  Read Profile →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
