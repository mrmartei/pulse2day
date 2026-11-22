import React from 'react';
import { Bookmark, Search, CloudSun, Menu, X } from 'lucide-react';
import { handleSpaLinkClick } from '../utils/navigation';

interface NavbarProps {
  activeTab: 'news' | 'creators' | 'events' | 'polls';
  setActiveTab: (tab: 'news' | 'creators' | 'events' | 'polls') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bookmarkedCount: number;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  bookmarkedCount,
  onOpenBookmarks
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: Array<{ tab: 'news' | 'creators' | 'events' | 'polls'; href: string; label: string }> = [
    { tab: 'news', href: '/', label: 'Latest News' },
    { tab: 'creators', href: '/creators', label: 'Creators Hub' },
    { tab: 'events', href: '/events', label: 'Events & Press' },
    { tab: 'polls', href: '/polls', label: 'Community Polls' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white">
      {/* Top utility bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-slate-300 border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5 font-medium text-amber-400">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>ACCRA DESK</span>
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:flex items-center space-x-1 text-slate-300">
            <CloudSun className="w-3.5 h-3.5 text-amber-400" />
            <span>Accra 32°C • Partly Cloudy</span>
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400 font-mono">
            {new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenBookmarks}
            className="flex items-center space-x-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition text-xs font-medium"
          >
            <Bookmark className="w-3.5 h-3.5 text-red-500" />
            <span>Saved Stories ({bookmarkedCount})</span>
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Brand Logo Link */}
          <a
            href="/"
            onClick={(e) => handleSpaLinkClick(e, '/')}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <img
              src="/ghpulse-logo.jpg"
              alt="GhPulse Logo"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover shadow-sm border border-amber-400/60 bg-slate-950 shrink-0"
            />
            <div>
              <span className="font-serif font-bold text-xl tracking-tight text-white leading-none block">
                GhPulse
              </span>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-sans mt-0.5">
                Ghana's Tech, Creator & Cultural Heartbeat
              </p>
            </div>
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-1 bg-slate-800 p-1 rounded border border-slate-700">
            {navItems.map((item) => (
              <a
                key={item.tab}
                href={item.href}
                onClick={(e) => handleSpaLinkClick(e, item.href)}
                className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                  activeTab === item.tab ? 'bg-red-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const pathname = window.location.pathname;
              if (
                pathname.startsWith('/article/') ||
                pathname.startsWith('/creator/') ||
                pathname.startsWith('/event/')
              ) {
                setActiveTab(
                  activeTab === 'creators'
                    ? 'creators'
                    : activeTab === 'events'
                    ? 'events'
                    : 'news'
                );
              }
            }}
            className="relative hidden lg:block w-72"
          >
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search news, creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-9 pr-8 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-600 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </form>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search news, creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-9 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-600"
            />
          </div>
          {navItems.map((item) => (
            <a
              key={item.tab}
              href={item.href}
              onClick={(e) => {
                handleSpaLinkClick(e, item.href);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded font-medium ${
                activeTab === item.tab ? 'bg-red-700 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
