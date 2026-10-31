import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded">
              <span className="text-white font-serif font-bold text-sm">GP</span>
            </div>
            <span className="font-serif font-bold text-lg tracking-wide uppercase">Ghana Pulse</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Your premier digital news network and content creators directory for Ghana. Providing verified journalism, business reporting, and cultural updates.
          </p>
          <div className="text-xs text-emerald-400 font-semibold flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Accredited Ghanaian Media Network</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs text-white mb-4 uppercase tracking-wider">News Desks</h4>
          <ul className="space-y-2 text-xs text-slate-400 font-sans">
            <li><span className="hover:text-white transition cursor-pointer">Politics & Governance</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Business & Economy</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Technology & Startups</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Sports & AFCON</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Entertainment & Arts</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs text-white mb-4 uppercase tracking-wider">Featured Creators</h4>
          <ul className="space-y-2 text-xs text-slate-400 font-sans">
            <li><a href="#/creator/mr-martei" className="hover:text-white transition">Mr Martei (Plexlink)</a></li>
            <li><a href="#/creator/delppy" className="hover:text-white transition">Delppy</a></li>
            <li><a href="#/creator/rick-aqua" className="hover:text-white transition">Rick Aqua</a></li>
            <li><a href="#/creator/dessy-ocean" className="hover:text-white transition">Dessy Ocean</a></li>
            <li><a href="#/creator/kalyjay" className="hover:text-white transition">Kalyjay</a></li>
            <li><a href="#/creators" className="text-red-400 hover:text-red-300 font-semibold transition">View All Creators →</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-xs text-white mb-4 uppercase tracking-wider">Daily Newsletter</h4>
          <p className="text-xs text-slate-400 font-sans">Get the top headlines and creator highlights delivered to your inbox every morning.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully to Ghana Pulse Daily!'); }} className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-600 flex-1"
            />
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded text-xs font-bold transition">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans">
        <p>© 2026 Ghana Pulse News Network. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          <span>•</span>
          <span className="hover:text-slate-400 cursor-pointer">Editorial Guidelines</span>
        </div>
      </div>
    </footer>
  );
};
