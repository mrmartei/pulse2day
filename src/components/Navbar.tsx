import React from 'react';
import { Bookmark, Search, CloudSun, Menu, X, Newspaper } from 'lucide-react';

interface NavbarProps {
  activeTab: 'news' | 'creators' | 'polls';
  setActiveTab: (tab: 'news' | 'creators' | 'polls') => void;
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
          {/* Actual professional logo */}
          <div 
            onClick={() => setActiveTab('news')} 
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-red-700 flex items-center justify-center rounded shadow-sm border border-red-600">
              <span className="text-white font-serif font-bold text-xl tracking-tighter">GP</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg tracking-wide text-white uppercase leading-none">
                Ghana Pulse
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-sans mt-0.5">Established 2026 • Verified News</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1 bg-slate-800 p-1 rounded border border-slate-700">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                activeTab === 'news' ? 'bg-red-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('creators')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                activeTab === 'creators' ? 'bg-red-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Creators Hub
            </button>
            <button
              onClick={() => setActiveTab('polls')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                activeTab === 'polls' ? 'bg-red-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Community Polls
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative hidden lg:block w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search news, creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-9 pr-4 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-600 transition"
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
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
          <button
            onClick={() => { setActiveTab('news'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2 rounded font-medium ${activeTab === 'news' ? 'bg-red-700 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Latest News
          </button>
          <button
            onClick={() => { setActiveTab('creators'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2 rounded font-medium ${activeTab === 'creators' ? 'bg-red-700 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Creators Hub
          </button>
          <button
            onClick={() => { setActiveTab('polls'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2 rounded font-medium ${activeTab === 'polls' ? 'bg-red-700 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Community Polls
          </button>
        </div>
      )}
    </header>
  );
};
