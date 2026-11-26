import React, { useState } from 'react';
import { EventPressItem } from '../types';
import { Calendar, MapPin, Mic, ArrowRight, Radio, Sparkles } from 'lucide-react';
import { handleSpaLinkClick } from '../utils/navigation';
import { SafeImage } from './SafeImage';

interface EventsPressHubProps {
  events: EventPressItem[];
  searchQuery?: string;
  onSelectEvent: (event: EventPressItem) => void;
}

const EVENT_TYPES = ['All', 'Summit & Conference', 'Podcast & Radio', 'Press Appearance'] as const;

export const EventsPressHub: React.FC<EventsPressHubProps> = ({
  events,
  searchQuery = '',
  onSelectEvent,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const q = searchQuery.trim().toLowerCase();

  const filteredEvents = events.filter((item) => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSearch =
      q === '' ||
      item.title.toLowerCase().includes(q) ||
      item.outletOrEvent.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      (item.featuredCreatorName && item.featuredCreatorName.toLowerCase().includes(q)) ||
      item.topicTags.some((tag) => tag.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  const getTypeIcon = (type: EventPressItem['type']) => {
    switch (type) {
      case 'Podcast & Radio':
        return <Radio className="w-3.5 h-3.5" />;
      case 'Summit & Conference':
        return <Sparkles className="w-3.5 h-3.5" />;
      default:
        return <Mic className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-8 py-4 animate-in fade-in duration-200">
      {/* Editorial Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
        <span className="text-xs font-bold text-red-700 uppercase tracking-widest">
          Speaking Engagements, Media & Summits
        </span>
        <h1 className="text-3xl font-serif font-bold text-slate-900 mt-1">
          Events & Press Coverage
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
          Dedicated coverage of Ghanaian creators and tech founders on national radio, industry panels, and digital wealth summits. Select any appearance to open its standalone press page.
        </p>
      </div>

      {/* Type Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg border border-slate-200">
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-2">Format:</span>
          {EVENT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3.5 py-1.5 rounded text-xs font-medium whitespace-nowrap transition ${
                selectedType === type
                  ? 'bg-red-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {type === 'All' ? 'All Events & Press' : type}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-500 font-medium">
          Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'feature' : 'features'}
        </span>
      </div>

      {/* Events & Press Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-sm font-medium">
            No events or press features found matching "{searchQuery}".
          </p>
          <button
            onClick={() => setSelectedType('All')}
            className="mt-4 px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((item) => (
            <a
              key={item.id}
              href={`/event/${item.id}`}
              onClick={(e) => {
                handleSpaLinkClick(e, `/event/${item.id}`);
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                  onSelectEvent(item);
                }
              }}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                  <div className="absolute top-3 left-3 inline-flex items-center space-x-1.5 bg-red-700 text-white px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wide shadow">
                    {getTypeIcon(item.type)}
                    <span>{item.type}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm truncate">
                      {item.outletOrEvent}
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm shrink-0 ml-2">
                      {item.dateLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-red-700" />
                      <span>{item.dateLabel}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-xl text-slate-900 group-hover:text-red-700 transition leading-snug">
                    {item.title}
                  </h2>

                  {item.episodeOrSession && (
                    <p className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded">
                      {item.episodeOrSession}
                    </p>
                  )}

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.topicTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {item.featuredCreatorName ? `Featuring ${item.featuredCreatorName}` : 'GhPulse Press Desk'}
                </span>
                <span className="text-xs font-bold text-red-700 inline-flex items-center space-x-1 group-hover:translate-x-1 transition">
                  <span>Read Full Coverage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
