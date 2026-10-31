import React from 'react';
import { ContentCreator } from '../types';
import { ArrowLeft, Award, TrendingUp, ExternalLink, Share2, Check } from 'lucide-react';

interface CreatorDetailViewProps {
  creator: ContentCreator;
  onBack: () => void;
}

export const CreatorDetailView: React.FC<CreatorDetailViewProps> = ({ creator, onBack }) => {
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
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-red-700 bg-white border border-slate-200 px-4 py-2 rounded shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Creators Directory</span>
        </button>

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
      <article className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden p-6 md:p-12 space-y-8">
        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              Creator Profile • {creator.category}
            </span>
            <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${creator.status === 'Breakthrough' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-100 text-slate-700'}`}>
              {creator.status} Star
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 pt-2">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-24 h-24 rounded-full border-4 border-slate-100 object-cover shadow-md"
            />
            <div className="space-y-1">
              <h1 className="text-3xl font-serif font-bold text-slate-900">
                {creator.name}
              </h1>
              <p className="text-sm font-semibold text-slate-600">Handle: <span className="text-red-700">{creator.handle}</span> • Primary Platform: <strong>{creator.platform}</strong></p>
              <p className="text-xs text-slate-500">Total Audience Reach: <strong>{creator.subscribers}</strong></p>
            </div>
          </div>
        </div>

        {/* Featured Product Banner for Mr Martei */}
        {creator.id === 'mr-martei' && (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans shadow-sm border border-slate-700">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                Featured Innovation & Product Launch
              </span>
              <h3 className="font-bold text-base text-white">Founder & Creator of Plexlink</h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Plexlink is a link-in-bio tool, digital contact card sharing, and networking platform with custom NFC products for easy, contactless contact sharing.
              </p>
            </div>
            <a
              href="#/article/art-plexlink"
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
          <h3 className="font-serif font-bold text-lg text-slate-900">{creator.award.title}</h3>
          <p className="text-sm text-slate-700 leading-relaxed font-sans">
            {creator.award.description}
          </p>
        </div>

        {/* Profile Article Body */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-xl text-slate-900">About {creator.name}</h3>
          <p className="text-slate-800 text-base md:text-lg leading-relaxed font-serif">
            {creator.profileArticle}
          </p>
          <p className="text-slate-700 text-base leading-relaxed font-serif">
            {creator.bio}
          </p>
        </div>

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
                <span className="text-[10px] uppercase font-bold text-slate-400">Instagram Followers</span>
                <div className="text-lg font-bold text-slate-900 font-mono">{creator.stats.instagramFollowers}</div>
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
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Engagement Rate</span>
              <div className="text-lg font-bold text-emerald-600 font-mono flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>{creator.stats.engagementRate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <span className="text-xs text-slate-500 font-sans">Ghana Pulse Creator Profiles • Accra</span>
          <div className="flex items-center space-x-3">
            {creator.socialLinks.instagram && (
              <a href={creator.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.tiktok && (
              <a href={creator.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.youtube && (
              <a href={creator.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {creator.socialLinks.twitter && (
              <a href={creator.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold transition flex items-center space-x-1">
                <span>X (Twitter)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
