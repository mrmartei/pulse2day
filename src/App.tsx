import React, { useState, useEffect } from 'react';
import { NEWS_ARTICLES, CONTENT_CREATORS, INITIAL_POLL, BREAKING_NEWS } from './data/mockData';
import { NewsArticle, ContentCreator } from './types';
import { Navbar } from './components/Navbar';
import { NewsFeed } from './components/NewsFeed';
import { CreatorsHub } from './components/CreatorsHub';
import { PollsSection } from './components/PollsSection';
import { ArticleDetailView } from './components/ArticleDetailView';
import { CreatorDetailView } from './components/CreatorDetailView';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'news' | 'creators' | 'polls'>('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [breakingIndex, setBreakingIndex] = useState(0);

  // Parse current URL hash for path routing
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash || '#/news');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/news';
      setCurrentPath(hash);
      if (hash === '#/creators' || hash.startsWith('#/creator/')) {
        setActiveTab('creators');
      } else if (hash === '#/polls') {
        setActiveTab('polls');
      } else {
        setActiveTab('news');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/news';
    } else {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Rotate breaking news ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setBreakingIndex(prev => (prev + 1) % BREAKING_NEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const bookmarkedArticles = NEWS_ARTICLES.filter(a => bookmarkedIds.includes(a.id));

  // Determine current view from hash
  const isArticleRoute = currentPath.startsWith('#/article/');
  const isCreatorRoute = currentPath.startsWith('#/creator/');

  const articleId = isArticleRoute ? currentPath.replace('#/article/', '') : null;
  const creatorId = isCreatorRoute ? currentPath.replace('#/creator/', '') : null;

  const selectedArticle = NEWS_ARTICLES.find(a => a.id === articleId) || null;
  const selectedCreator = CONTENT_CREATORS.find(c => c.id === creatorId || (creatorId === 'tech-in-twi' && c.id === 'selorm-tech')) || null;

  const handleSelectArticle = (article: NewsArticle) => {
    window.location.hash = `#/article/${article.id}`;
  };

  const handleSelectCreator = (creator: ContentCreator) => {
    window.location.hash = `#/creator/${creator.id}`;
  };

  const handleReturnHome = (tab: 'news' | 'creators' | 'polls' = 'news') => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-red-700 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => handleReturnHome(tab)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkedCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Breaking News Ticker Bar */}
      <div className="bg-red-700 text-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
          <div className="flex items-center space-x-3 overflow-hidden">
            <span className="bg-red-900 px-2.5 py-0.5 rounded uppercase tracking-wider font-bold shrink-0 text-red-100">
              Breaking News
            </span>
            <p className="truncate text-red-50 font-sans">
              {BREAKING_NEWS[breakingIndex]}
            </p>
          </div>
          <button 
            onClick={() => handleReturnHome('news')}
            className="hidden md:block underline hover:text-red-200 transition shrink-0 ml-4 font-bold"
          >
            Full Updates →
          </button>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        {isArticleRoute && selectedArticle ? (
          <ArticleDetailView
            article={selectedArticle}
            allArticles={NEWS_ARTICLES}
            onBack={() => handleReturnHome('news')}
            isBookmarked={bookmarkedIds.includes(selectedArticle.id)}
            onToggleBookmark={handleToggleBookmark}
            onSelectArticle={handleSelectArticle}
          />
        ) : isCreatorRoute && selectedCreator ? (
          <CreatorDetailView
            creator={selectedCreator}
            onBack={() => handleReturnHome('creators')}
          />
        ) : (
          <>
            {(currentPath === '#/news' || currentPath === '' || currentPath === '#/') && (
              <>
                {/* Editorial Lead Banner */}
                <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-red-700"></span>
                      <span className="text-xs font-bold text-red-700 uppercase tracking-widest">Accra Bureau • Verified Journalism</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
                      Independent Reporting & National Updates
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Delivering accurate news coverage across politics, economics, technology, and culture from Ghana's most trusted media houses.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-xs space-y-2 w-full md:w-72">
                    <div className="font-bold text-slate-800 uppercase tracking-wide">Today's Briefing</div>
                    <p className="text-slate-600 leading-normal">Markets steady in Accra as BoG maintains policy rate at 14.0%. Tech summit opens in Airport Residential Area.</p>
                  </div>
                </div>

                {/* News Articles Feed */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-xl font-serif font-bold text-slate-900">Latest Headlines</h3>
                    <span className="text-xs text-slate-500 font-medium">Updated 5 mins ago</span>
                  </div>

                  <NewsFeed
                    articles={NEWS_ARTICLES}
                    searchQuery={searchQuery}
                    bookmarkedIds={bookmarkedIds}
                    onToggleBookmark={handleToggleBookmark}
                    onSelectArticle={handleSelectArticle}
                  />
                </div>

                {/* Poll of the Day */}
                <PollsSection poll={INITIAL_POLL} />
              </>
            )}

            {currentPath === '#/creators' && (
              <CreatorsHub
                creators={CONTENT_CREATORS}
                searchQuery={searchQuery}
                onSelectCreator={handleSelectCreator}
              />
            )}

            {currentPath === '#/polls' && (
              <div className="space-y-6 py-6">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <h2 className="text-3xl font-serif font-bold text-slate-900">Ghana Public Opinion Hub</h2>
                  <p className="text-sm text-slate-600">Cast your vote on pressing national topics, economic policies, and cultural matters.</p>
                </div>
                <PollsSection poll={INITIAL_POLL} />
              </div>
            )}
          </>
        )}
      </main>

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        onRemoveBookmark={handleToggleBookmark}
        onSelectArticle={handleSelectArticle}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
