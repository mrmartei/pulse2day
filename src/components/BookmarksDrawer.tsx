import React from 'react';
import { NewsArticle } from '../types';
import { Bookmark, X, ArrowRight, Trash2 } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: NewsArticle[];
  onRemoveBookmark: (id: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  onRemoveBookmark,
  onSelectArticle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="bg-slate-900 text-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-slate-800 animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="font-extrabold text-lg">Saved Stories ({bookmarkedArticles.length})</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-2">
              <Bookmark className="w-8 h-8 mx-auto text-slate-700" />
              <p className="text-sm font-medium">No saved stories yet.</p>
              <p className="text-xs text-slate-600">Click the bookmark icon on any article to save it for later reading.</p>
            </div>
          ) : (
            bookmarkedArticles.map(article => (
              <div
                key={article.id}
                onClick={() => { onSelectArticle(article); onClose(); }}
                className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 hover:border-red-500/50 transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-red-400 font-bold">{article.channel}</span>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-red-400 transition leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-700/60 text-xs">
                  <span className="text-slate-400">{article.publishedAt}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); onRemoveBookmark(article.id); }}
                    className="text-slate-400 hover:text-red-400 p-1 transition"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
