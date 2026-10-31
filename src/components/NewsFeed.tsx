import React, { useState } from 'react';
import { NewsArticle, Category } from '../types';
import { Clock, Eye, ThumbsUp, Bookmark, Sparkles, Share2, ArrowRight, MessageSquare, Check } from 'lucide-react';

interface NewsFeedProps {
  articles: NewsArticle[];
  searchQuery: string;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

const CATEGORIES: Category[] = ['All', 'Politics', 'Business', 'Tech', 'Entertainment', 'Sports', 'Lifestyle'];

export const NewsFeed: React.FC<NewsFeedProps> = ({
  articles,
  searchQuery,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedChannel, setSelectedChannel] = useState<string>('All');

  const channels = ['All', ...Array.from(new Set(articles.map(a => a.channel)))];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesChannel = selectedChannel === 'All' || art.channel === selectedChannel;
    const matchesSearch = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesChannel && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="space-y-6">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-slate-500">Channel:</span>
          <select
            value={selectedChannel}
            onChange={(e) => setSelectedChannel(e.target.value)}
            className="bg-slate-100 border border-slate-200 text-slate-800 text-sm rounded-xl px-3 py-1.5 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            {channels.map(ch => (
              <option key={ch} value={ch}>{ch === 'All' ? 'All Channels' : ch}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-base font-medium">No articles found matching your criteria.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSelectedChannel('All'); }}
            className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Featured Top Article */}
          {featuredArticle && selectedCategory === 'All' && selectedChannel === 'All' && !searchQuery && (
            <div 
              onClick={() => onSelectArticle(featuredArticle)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
            >
              <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow">
                  {featuredArticle.category}
                </div>
              </div>
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="text-red-600 font-bold">{featuredArticle.channel}</span>
                    <span>{featuredArticle.publishedAt}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-red-600 transition leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5" /><span>{featuredArticle.readTime}</span></span>
                    <span className="flex items-center space-x-1"><Eye className="w-3.5 h-3.5" /><span>{featuredArticle.views.toLocaleString()}</span></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggleBookmark(featuredArticle.id); }}
                      className={`p-2 rounded-full border transition ${bookmarkedIds.includes(featuredArticle.id) ? 'bg-red-50 border-red-200 text-red-600' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                      title="Bookmark Article"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-red-600 flex items-center space-x-1 group-hover:translate-x-1 transition">
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' && selectedChannel === 'All' && !searchQuery ? remainingArticles : filteredArticles).map(article => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-red-600">{article.channel}</span>
                      <span>{article.publishedAt}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-red-600 transition leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5" /><span>{article.readTime}</span></span>
                    <span className="flex items-center space-x-1"><ThumbsUp className="w-3.5 h-3.5" /><span>{article.likes}</span></span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleBookmark(article.id); }}
                    className={`p-1.5 rounded-full border transition ${bookmarkedIds.includes(article.id) ? 'bg-red-50 border-red-200 text-red-600' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
