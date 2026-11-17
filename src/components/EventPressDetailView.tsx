import React, { useEffect, useState } from 'react';
import { EventPressItem, ContentCreator } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Share2,
  Check,
  CheckCircle2,
  ExternalLink,
  Mic,
  Radio,
  Sparkles,
} from 'lucide-react';

interface EventPressDetailViewProps {
  item: EventPressItem;
  allEvents: EventPressItem[];
  creators: ContentCreator[];
  onBack: () => void;
  onSelectEvent: (item: EventPressItem) => void;
}

export const EventPressDetailView: React.FC<EventPressDetailViewProps> = ({
  item,
  allEvents,
  creators,
  onBack,
  onSelectEvent,
}) => {
  const [copied, setCopied] = useState(false);

  const featuredCreator = item.featuredCreatorId
    ? creators.find((c) => c.id === item.featuredCreatorId)
    : undefined;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${item.title} — GhPulse Events & Press`;

    const structuredData =
      item.type === 'Summit & Conference'
        ? {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: item.outletOrEvent,
            description: item.summary,
            startDate: item.isoDate,
            location: {
              '@type': 'Place',
              name: item.location,
            },
            performer: featuredCreator
              ? {
                  '@type': 'Person',
                  name: featuredCreator.realName,
                  alternateName: [featuredCreator.name, featuredCreator.handle],
                }
              : undefined,
            organizer: {
              '@type': 'Organization',
              name: item.outletOrEvent,
            },
            url: window.location.href,
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: item.title,
            description: item.summary,
            datePublished: item.isoDate,
            image: [item.imageUrl],
            about: featuredCreator
              ? {
                  '@type': 'Person',
                  name: featuredCreator.realName,
                  alternateName: [featuredCreator.name, featuredCreator.handle],
                }
              : undefined,
            publisher: {
              '@type': 'NewsMediaOrganization',
              name: 'GhPulse',
            },
            url: window.location.href,
          };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ghpulse-event-jsonld';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute('content', item.summary);
    }

    return () => {
      document.title = previousTitle;
      const existing = document.getElementById('ghpulse-event-jsonld');
      if (existing) existing.remove();
      if (metaDesc && previousDesc) {
        metaDesc.setAttribute('content', previousDesc);
      }
    };
  }, [item, featuredCreator]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFormattedParagraph = (paragraph: string, pIndex: number) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(paragraph)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        elements.push(paragraph.substring(lastIndex, matchIndex));
      }
      const anchorText = match[1];
      const href = match[2];

      elements.push(
        <a
          key={`link-${pIndex}-${matchIndex}`}
          href={href}
          className="text-red-700 font-bold underline hover:text-red-800 transition inline-flex items-center space-x-0.5 bg-red-50 px-1 py-0.5 rounded border border-red-200/60"
        >
          <span>{anchorText}</span>
          <ExternalLink className="w-3 h-3 ml-0.5 inline" />
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < paragraph.length) {
      elements.push(paragraph.substring(lastIndex));
    }

    return (
      <p key={`p-${pIndex}`} className="leading-relaxed">
        {elements}
      </p>
    );
  };

  const relatedEvents = allEvents.filter((e) => e.id !== item.id).slice(0, 3);

  const renderTypeBadgeIcon = () => {
    if (item.type === 'Podcast & Radio') return <Radio className="w-3.5 h-3.5" />;
    if (item.type === 'Summit & Conference') return <Sparkles className="w-3.5 h-3.5" />;
    return <Mic className="w-3.5 h-3.5" />;
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in duration-200">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-red-700 bg-white border border-slate-200 px-4 py-2 rounded shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events & Press</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center space-x-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded shadow-sm text-xs font-semibold transition"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? 'Link Copied' : 'Share Coverage'}</span>
        </button>
      </div>

      {/* Main Press / Event Feature */}
      <article className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-12 space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5">
              {renderTypeBadgeIcon()}
              <span>{item.type}</span>
            </span>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
              {item.outletOrEvent}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {item.title}
          </h1>

          {item.episodeOrSession && (
            <p className="text-sm font-semibold text-amber-900 bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg">
              {item.episodeOrSession}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 border-b border-slate-200 pb-4">
            <span className="inline-flex items-center space-x-1.5 font-medium">
              <Calendar className="w-4 h-4 text-red-700" />
              <span>{item.dateLabel}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center space-x-1.5 font-medium">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>{item.location}</span>
            </span>
          </div>
        </div>

        {/* Hero Photo */}
        <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-200 relative">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[11px] font-sans px-3 py-1 rounded backdrop-blur-sm">
            {item.outletOrEvent} • {item.dateLabel}
          </div>
        </div>

        {/* Featured Speaker / Creator Callout */}
        {featuredCreator && (
          <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans">
            <div className="flex items-center space-x-4">
              <img
                src={featuredCreator.avatar}
                alt={featuredCreator.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full border-2 border-red-600 object-cover shadow shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                  Featured Guest & Speaker
                </span>
                <h3 className="font-bold text-slate-900 text-base mt-0.5">{featuredCreator.name}</h3>
                <p className="text-xs text-slate-600">
                  {featuredCreator.handle} • {featuredCreator.category}
                </p>
              </div>
            </div>
            <a
              href={`#/creator/${featuredCreator.id}`}
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded transition shadow-sm inline-flex items-center space-x-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>View Creator Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Editorial Body */}
        <div className="text-slate-800 text-base md:text-lg leading-relaxed space-y-6 font-serif">
          {item.content.split('\n\n').map((paragraph, idx) => renderFormattedParagraph(paragraph, idx))}
        </div>

        {/* Key Takeaways Box */}
        {item.keyTakeaways.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Key Session Takeaways & Highlights
            </h3>
            <ul className="space-y-2.5">
              {item.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start space-x-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags & Footer Attribution */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {item.topicTags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-400 font-sans">
            GhPulse Events & Press Desk • Accra
          </span>
        </div>
      </article>

      {/* More Events & Press */}
      {relatedEvents.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="font-serif font-bold text-xl text-slate-900">More Events & Press Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedEvents.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectEvent(rel)}
                className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-red-700 uppercase">{rel.outletOrEvent}</span>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-700 transition line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 pt-3 mt-3 border-t border-slate-100">
                  {rel.dateLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
