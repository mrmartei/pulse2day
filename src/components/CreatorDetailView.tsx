import React from 'react';
import { ContentCreator, EventPressItem } from '../types';
import { ArrowLeft, Award, TrendingUp, ExternalLink, Share2, Check, Calendar, Mic } from 'lucide-react';
import { handleSpaLinkClick } from '../utils/navigation';
import { SafeImage } from './SafeImage';

interface CreatorDetailViewProps {
  creator: ContentCreator;
  pressEvents?: EventPressItem[];
  onBack: () => void;
}

export const CreatorDetailView: React.FC<CreatorDetailViewProps> = ({ creator, pressEvents = [], onBack }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in duration-200">
      {/* Back button and share */}
      <div className="flex items-center justify-between">
        <a
          href="/creators"
          onClick={(e) => {
            handleSpaLinkClick(e, '/creators');
            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
              onBack();
            }
          }}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-red-700 bg-white border border-slate-200 px-4 py-2 rounded shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Creators Directory</span>
        </a>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center space-x-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded shadow-sm text-xs font-semibold transition"
          title="Share Creator Profile"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? 'Link Copied' : 'Share Profile'}</span>
        </button>
      </div>

      {/* Creator Profile Article */}
      <article className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {/* Top Hero Banner */}
        <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-900">
          <SafeImage
            src={creator.bannerImage || creator.coverImage}
            alt={`${creator.name} banner`}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-black/20"></div>
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow">
              {creator.category}
            </span>
            <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide shadow ${creator.status === 'Breakthrough' ? 'bg-amber-500 text-white' : 'bg-slate-900/90 text-white border border-slate-700'}`}>
              {creator.status} Star
            </span>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16 md:-mt-20 relative z-10">
            <SafeImage
              src={creator.avatar}
              alt={creator.name}
              loading="eager"
              isAvatar
              fallbackLabel={creator.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover shadow-lg bg-slate-800 shrink-0"
            />
            <div className="space-y-1 pb-1">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                {creator.name}
              </h1>
              <p className="text-sm font-semibold text-slate-600">
                Real Name: <span className="text-slate-900 font-bold">{creator.realName}</span> • Handle: <span className="text-red-700">{creator.handle}</span>
              </p>
              <p className="text-xs text-slate-500">
                Primary Platform: <strong>{creator.platform}</strong> • Verified Network Reach: <strong className="text-slate-800">{creator.subscribers}</strong>
              </p>
            </div>
          </div>

          {/* Featured Product Banner for Mr Martei */}
          {creator.id === 'mr-martei' && (
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans shadow-sm border border-slate-700">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                  Featured Innovation & Studio Leadership
                </span>
                <h3 className="font-bold text-base text-white">Founder & CEO of Lumen Studios • Founder of Plexlink</h3>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Lumen Studios builds creative digital products & media, while Plexlink offers link-in-bio profiles, digital contact sharing, and custom NFC cards (GHS 300 / GHS 450).
                </p>
              </div>
              <a
                href="/article/art-plexlink"
                onClick={(e) => handleSpaLinkClick(e, '/article/art-plexlink')}
                className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded transition shadow-sm inline-flex items-center space-x-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                <span>Read Plexlink Launch Story →</span>
              </a>
            </div>
          )}

          {/* Niche Award Showcase Box */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 p-6 rounded-lg space-y-2">
            <div className="flex items-center space-x-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Official Industry Award ({creator.award.year})</span>
            </div>
            <h2 className="font-serif font-bold text-lg text-slate-900">{creator.award.title}</h2>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {creator.award.description}
            </p>
          </div>

          {/* Profile Article Body */}
          <div className="space-y-6">
            <h2 className="font-serif font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
              Profile & Career Journey: {creator.name}
            </h2>
            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-serif">
              {creator.profileArticle}
            </p>

            {/* Embedded In-Action / Article Body Image */}
            {creator.articleBodyImage && (
              <div className="my-6 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <SafeImage
                  src={creator.articleBodyImage}
                  alt={`${creator.name} feature photo`}
                  className="w-full max-h-[480px] object-cover"
                />
                <div className="p-3 bg-slate-100 text-xs text-slate-600 font-sans border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <span>Spotlight Photo: {creator.name} ({creator.realName}) — {creator.category}</span>
                  <span className="font-semibold text-red-700">{creator.handle}</span>
                </div>
              </div>
            )}

            <p className="text-slate-700 text-base leading-relaxed font-serif">
              {creator.bio}
            </p>
          </div>

          {/* Press & Speaking Appearances */}
          {pressEvents.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="font-serif font-bold text-xl text-slate-900 flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-red-700" />
                  <span>Events, Summits & Press Appearances</span>
                </h2>
                <a
                  href="/events"
                  onClick={(e) => handleSpaLinkClick(e, '/events')}
                  className="text-xs font-bold text-red-700 hover:underline"
                >
                  View All Events & Press →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pressEvents.map((ev) => (
                  <a
                    key={ev.id}
                    href={`/event/${ev.id}`}
                    onClick={(e) => handleSpaLinkClick(e, `/event/${ev.id}`)}
                    className="bg-slate-50 hover:bg-red-50/40 border border-slate-200 hover:border-red-200 rounded-lg p-4 transition flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-red-700 uppercase tracking-wide">{ev.outletOrEvent}</span>
                        <span className="text-slate-500 inline-flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{ev.dateLabel}</span>
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-sm text-slate-900 group-hover:text-red-700 transition leading-snug">
                        {ev.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {ev.summary}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-red-700 mt-3 pt-2 border-t border-slate-200/70 inline-block group-hover:underline">
                      Open Press Feature →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

        {/* Audience Statistics & Social Platforms */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h3 className="font-serif font-bold text-xl text-slate-900">Social Platforms & Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
            {creator.stats.tiktokFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">TikTok Followers</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.tiktokFollowers}</div>
              </div>
            )}
            {creator.stats.instagramFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  {creator.id === 'mr-martei' ? 'Instagram (Primary @mr.marteii)' : 'Instagram Followers'}
                </span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.instagramFollowers}</div>
              </div>
            )}
            {creator.stats.secondaryInstagramFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Instagram (2nd @mr.martei)</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.secondaryInstagramFollowers}</div>
              </div>
            )}
            {creator.stats.youtubeSubscribers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">YouTube Subs</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.youtubeSubscribers}</div>
              </div>
            )}
            {creator.stats.twitterFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">X (Twitter) Followers</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.twitterFollowers}</div>
              </div>
            )}
            {creator.stats.snapchatFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Snapchat Followers</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.snapchatFollowers}</div>
              </div>
            )}
            {creator.stats.facebookFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Facebook</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.facebookFollowers}</div>
              </div>
            )}
            {creator.stats.threadsFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Threads</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.threadsFollowers}</div>
              </div>
            )}
            {creator.stats.pinterestFollowers && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Pinterest</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.pinterestFollowers}</div>
              </div>
            )}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Engagement Rate</span>
              <div className="text-lg font-bold text-emerald-600 font-mono flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>{creator.stats.engagementRate}</span>
              </div>
            </div>
          </div>

          {creator.brandPartners && creator.brandPartners.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2.5">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                Verified Local & International Brand Partners
              </span>
              <div className="flex flex-wrap gap-2">
                {creator.brandPartners.map((partner) => (
                  <span
                    key={partner}
                    className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded shadow-2xs"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <span className="text-xs text-slate-500 font-sans">GhPulse Creator Profiles • Accra</span>
          <div className="flex flex-wrap items-center gap-2">
            {creator.socialLinks.website && (
              <a href={creator.socialLinks.website} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.instagram && (
              <a href={creator.socialLinks.instagram} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.tiktok && (
              <a href={creator.socialLinks.tiktok} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.youtube && (
              <a href={creator.socialLinks.youtube} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.twitter && (
              <a href={creator.socialLinks.twitter} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>X (Twitter)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.threads && (
              <a href={creator.socialLinks.threads} target="_blank" rel="me noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>Threads</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  </div>
);
};
