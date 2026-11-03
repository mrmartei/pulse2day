import React, { useState } from 'react';
import { NewsArticle, Comment } from '../types';
import { Clock, Eye, ThumbsUp, Bookmark, Share2, MessageSquare, ArrowLeft, ArrowRight, Check, Send, ExternalLink } from 'lucide-react';

interface ArticleDetailViewProps {
  article: NewsArticle;
  allArticles: NewsArticle[];
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  allArticles,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle
}) => {
  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);

  React.useEffect(() => {
    setLikes(article.likes);
    setHasLiked(false);
  }, [article.id, article.likes]);
  const [comments, setComments] = useState<Comment[]>([
    { id: '1', author: 'Kofi Mensah', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80', content: 'Plexlink is such a needed innovation in Ghana! Paper cards always get lost. Big congrats to Mr Martei.', timestamp: '45 mins ago', likes: 22 },
    { id: '2', author: 'Akosua Serwaa', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', content: 'Tapped my first Plexlink card at the tech conference in Accra today. Instant contact saved directly to my phone.', timestamp: '20 mins ago', likes: 16 }
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

  const relatedArticles = allArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

  // Helper function to render text with markdown links [anchor text](url)
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

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in duration-200">
      {/* Back button and action bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-red-700 bg-white border border-slate-200 px-4 py-2 rounded shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News Feed</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`p-2 rounded border transition ${isBookmarked ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            title="Bookmark"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopyLink}
            className="p-2 bg-white hover:bg-slate-50 rounded border border-slate-200 text-slate-700 transition"
            title="Share Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-12 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-semibold text-slate-500">{article.channel}</span>
            {article.isBreaking && (
              <span className="bg-red-100 text-red-800 text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                Breaking Tech Story
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
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
              <span className="flex items-center space-x-1"><Eye className="w-3.5 h-3.5" /><span>{article.views.toLocaleString()} views</span></span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded overflow-hidden bg-slate-100 border border-slate-200 relative group">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[11px] font-sans px-3 py-1 rounded backdrop-blur-sm">
            Photo: {article.featuredCreatorId === 'mr-martei' ? 'Plexlink Smart NFC Card & Link-in-Bio Digital Identity' : `${article.category} Report • ${article.channel}`}
          </div>
        </div>

        {/* Founder / Featured Creator Spotlight Callout Box if applicable */}
        {article.featuredCreatorId === 'mr-martei' && (
          <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans">
            <div className="flex items-center space-x-4">
              <img
                src="https://yt3.googleusercontent.com/iPDGhDeG-UIGsF8WZlGQBBLWcax4l7UKMdpvFYyome9gABUSAe2F4owxEhxD47GkEW1A_cEq=s900-c-k-c0x00ffffff-no-rj"
                alt="Mr Martei"
                className="w-14 h-14 rounded-full border-2 border-red-600 object-cover shadow"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                    Product Founder Spotlight
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mt-0.5">Mr Martei (Justice Martei Mamah)</h3>
                <p className="text-xs text-slate-600">Software Engineer • Founder of Plexlink • Tech Creator</p>
              </div>
            </div>
            <a
              href="#/creator/mr-martei"
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded transition shadow-sm inline-flex items-center space-x-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>View Mr Martei's Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Full Article Content with Link Parsing & In-Body Image */}
        <div className="text-slate-800 text-base md:text-lg leading-relaxed space-y-6 font-serif">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <React.Fragment key={`p-block-${idx}`}>
              {renderFormattedParagraph(paragraph, idx)}
              {idx === 1 && article.articleBodyImage && (
                <div className="my-8 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 font-sans shadow-sm">
                  <img
                    src={article.articleBodyImage}
                    alt={article.articleBodyCaption || article.title}
                    className="w-full max-h-[480px] object-cover"
                  />
                  {article.articleBodyCaption && (
                    <div className="p-3 bg-slate-100 text-xs text-slate-600 border-t border-slate-200 font-sans flex items-center justify-between">
                      <span>{article.articleBodyCaption}</span>
                      <span className="text-[10px] uppercase font-bold text-red-700">Photo Report</span>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
          {/* Fallback if article has fewer than 2 paragraphs but has an articleBodyImage */}
          {article.content.split('\n\n').length <= 1 && article.articleBodyImage && (
            <div className="my-8 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 font-sans shadow-sm">
              <img
                src={article.articleBodyImage}
                alt={article.articleBodyCaption || article.title}
                className="w-full max-h-[480px] object-cover"
              />
              {article.articleBodyCaption && (
                <div className="p-3 bg-slate-100 text-xs text-slate-600 border-t border-slate-200 font-sans">
                  {article.articleBodyCaption}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Reaction Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded text-sm font-semibold transition ${hasLiked ? 'bg-red-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{likes} Helpful Votes</span>
          </button>
          <div className="text-xs text-slate-400 font-sans">
            Ghana Pulse Editorial {article.category} Desk • Accra
          </div>
        </div>

        {/* Comments Section */}
        <div className="pt-8 border-t border-slate-200 space-y-6 font-sans">
          <h3 className="font-bold text-lg text-slate-900 flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-red-700" />
            <span>Reader Discussion ({comments.length})</span>
          </h3>

          <form onSubmit={handleAddComment} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add your perspective on this tech launch..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-700"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded text-sm font-medium transition flex items-center space-x-1"
            >
              <Send className="w-4 h-4" />
              <span>Post</span>
            </button>
          </form>

          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <img src={comment.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-bold text-xs text-slate-900">{comment.author}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{comment.timestamp}</span>
                </div>
                <p className="text-xs text-slate-700 pl-10.5 leading-relaxed">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Related Stories */}
      {relatedArticles.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="font-serif font-bold text-xl text-slate-900">Related Tech Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map(rel => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-red-700 uppercase">{rel.channel}</span>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-700 transition line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 pt-3 mt-3 border-t border-slate-100">{rel.publishedAt}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
