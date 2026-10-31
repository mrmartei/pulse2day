import React, { useState } from 'react';
import { NewsArticle, Comment } from '../types';
import { Clock, Eye, ThumbsUp, Bookmark, Share2, MessageSquare, X, Check } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  if (!article) return null;

  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    { id: '1', author: 'Kofi Mensah', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80', content: 'This is a very insightful report. Thanks Ghana Pulse for keeping us updated!', timestamp: '1 hour ago', likes: 14 },
    { id: '2', author: 'Akosua Serwaa', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', content: 'Indeed. The developments in our tech and business sectors are very promising.', timestamp: '30 mins ago', likes: 8 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => [
      {
        id: Date.now().toString(),
        author: 'You (Reader)',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      },
      ...prev
    ]);
    setNewComment('');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header bar */}
        <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="bg-red-700 text-white px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-semibold text-slate-500">{article.channel}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 rounded border transition ${isBookmarked ? 'bg-red-50 border-red-200 text-red-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="p-2 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-600 transition"
              title="Share Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-700 transition font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article content */}
        <div className="p-6 md:p-8 space-y-6 flex-1">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-4">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-slate-800">By {article.author}</span>
                <span>•</span>
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5" /><span>{article.readTime}</span></span>
                <span className="flex items-center space-x-1"><Eye className="w-3.5 h-3.5" /><span>{article.views.toLocaleString()}</span></span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded overflow-hidden bg-slate-100 border border-slate-200">
            <img src={article.imageUrl} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Full Article Body */}
          <div className="text-slate-800 text-base leading-relaxed space-y-4 font-serif">
            {article.content}
          </div>

          {/* Reaction Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded text-sm font-semibold transition ${hasLiked ? 'bg-red-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{likes} Helpful Votes</span>
            </button>
            <div className="text-xs text-slate-400 font-sans">
              Ghana Pulse Editorial Desk
            </div>
          </div>

          {/* Comments Section */}
          <div className="pt-6 border-t border-slate-200 space-y-6 font-sans">
            <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-red-700" />
              <span>Reader Discussion ({comments.length})</span>
            </h3>

            <form onSubmit={handleAddComment} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Add a public comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-700"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-sm font-medium transition"
              >
                Post
              </button>
            </form>

            <div className="space-y-4">
              {comments.map(comment => (
                <div key={comment.id} className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img src={comment.avatar} alt="" className="w-7 h-7 rounded-full object-cover" />
                      <span className="font-bold text-xs text-slate-900">{comment.author}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-700 pl-9 leading-relaxed">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
