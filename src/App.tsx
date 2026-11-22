import React, { useState, useEffect } from 'react';
import { NEWS_ARTICLES, CONTENT_CREATORS, INITIAL_POLL, BREAKING_NEWS, EVENTS_PRESS } from './data/mockData';
import { NewsArticle, ContentCreator, EventPressItem } from './types';
import { Navbar } from './components/Navbar';
import { NewsFeed } from './components/NewsFeed';
import { CreatorsHub } from './components/CreatorsHub';
import { EventsPressHub } from './components/EventsPressHub';
import { EventPressDetailView } from './components/EventPressDetailView';
import { PollsSection } from './components/PollsSection';
import { ArticleDetailView } from './components/ArticleDetailView';
import { CreatorDetailView } from './components/CreatorDetailView';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';
import { applyClientSeo, normalizeRoutePath, resolveCreatorBySlug } from './utils/seo';
import { SPA_NAVIGATE_EVENT, navigateTo, handleSpaLinkClick } from './utils/navigation';

function getInitialRoutePath(): string {
  if (typeof window === 'undefined') return '/';
  // Gracefully upgrade legacy #/... hash URLs to clean crawlable paths
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const cleanFromHash = normalizeRoutePath(window.location.hash.slice(1));
    window.history.replaceState({}, '', cleanFromHash);
    return cleanFromHash;
  }
  return normalizeRoutePath(window.location.pathname);
}

function getTabForPath(pathname: string): 'news' | 'creators' | 'events' | 'polls' {
  if (pathname === '/creators' || pathname.startsWith('/creator/')) return 'creators';
  if (pathname === '/events' || pathname === '/press' || pathname.startsWith('/event/')) return 'events';
  if (pathname === '/polls') return 'polls';
  return 'news';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => getInitialRoutePath());
  const [activeTab, setActiveTab] = useState<'news' | 'creators' | 'events' | 'polls'>(() =>
    getTabForPath(getInitialRoutePath())
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [breakingIndex, setBreakingIndex] = useState(0);

  useEffect(() => {
    const syncRoute = () => {
      let nextPath = normalizeRoutePath(window.location.pathname);
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        nextPath = normalizeRoutePath(window.location.hash.slice(1));
        window.history.replaceState({}, '', nextPath);
      }
      setCurrentPath(nextPath);
      setActiveTab(getTabForPath(nextPath));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener(SPA_NAVIGATE_EVENT, syncRoute);

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener(SPA_NAVIGATE_EVENT, syncRoute);
    };
  }, []);

  // Keep <title>, canonical URL, meta tags, and Schema.org JSON-LD synchronized on every route
  useEffect(() => {
    applyClientSeo(currentPath);
  }, [currentPath]);

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

  // Determine current view from clean path
  const isArticleRoute = currentPath.startsWith('/article/');
  const isCreatorRoute = currentPath.startsWith('/creator/');
  const isEventRoute = currentPath.startsWith('/event/');

  const articleId = isArticleRoute ? decodeURIComponent(currentPath.slice('/article/'.length)) : null;
  const creatorId = isCreatorRoute ? decodeURIComponent(currentPath.slice('/creator/'.length)) : null;
  const eventId = isEventRoute ? decodeURIComponent(currentPath.slice('/event/'.length)) : null;

  const selectedArticle = articleId ? NEWS_ARTICLES.find(a => a.id === articleId) || null : null;
  const selectedCreator = creatorId ? resolveCreatorBySlug(creatorId) || null : null;
  const selectedEvent = eventId ? EVENTS_PRESS.find(e => e.id === eventId) || null : null;

  const handleSelectArticle = (article: NewsArticle) => {
    navigateTo(`/article/${article.id}`);
  };

  const handleSelectCreator = (creator: ContentCreator) => {
    navigateTo(`/creator/${creator.id}`);
  };

  const handleSelectEvent = (eventItem: EventPressItem) => {
    navigateTo(`/event/${eventItem.id}`);
  };

  const handleReturnHome = (tab: 'news' | 'creators' | 'events' | 'polls' = 'news') => {
    setActiveTab(tab);
    navigateTo(tab === 'news' ? '/' : `/${tab}`);
  };

  const isCreatorsHubRoute = currentPath === '/creators';
  const isEventsHubRoute = currentPath === '/events' || currentPath === '/press';
  const isPollsRoute = currentPath === '/polls';
  const isHomeNewsRoute = !isCreatorsHubRoute && !isEventsHubRoute && !isPollsRoute;

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
          <a
            href="/"
            onClick={(e) => handleSpaLinkClick(e, '/')}
            className="hidden md:block underline hover:text-red-200 transition shrink-0 ml-4 font-bold"
          >
            Full Updates →
          </a>
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
            pressEvents={EVENTS_PRESS.filter(e => e.featuredCreatorId === selectedCreator.id)}
            onBack={() => handleReturnHome('creators')}
          />
        ) : isEventRoute && selectedEvent ? (
          <EventPressDetailView
            item={selectedEvent}
            allEvents={EVENTS_PRESS}
            creators={CONTENT_CREATORS}
            onBack={() => handleReturnHome('events')}
            onSelectEvent={handleSelectEvent}
          />
        ) : (
          <>
            {isHomeNewsRoute && (
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

            {isCreatorsHubRoute && (
              <CreatorsHub
                creators={CONTENT_CREATORS}
                searchQuery={searchQuery}
                onSelectCreator={handleSelectCreator}
              />
            )}

            {isEventsHubRoute && (
              <EventsPressHub
                events={EVENTS_PRESS}
                searchQuery={searchQuery}
                onSelectEvent={handleSelectEvent}
              />
            )}

            {isPollsRoute && (
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
