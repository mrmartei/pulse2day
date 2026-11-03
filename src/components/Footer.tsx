import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-16 pt-12 pb-8">
      {subscribed && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white text-xs md:text-sm font-semibold px-5 py-3 rounded-lg shadow-xl border border-emerald-500 animate-in fade-in slide-in-from-bottom duration-300 flex items-center space-x-2">
          <span>✓</span>
          <span>Subscribed! Welcome to the Ghana Pulse Inner Circle.</span>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded">
              <span className="text-white font-serif font-bold text-sm">GP</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-wide uppercase block leading-none">Ghana Pulse</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">Ghana's Tech, Creator & Cultural Heartbeat</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Your premier nationwide digital news network and content creators directory. Providing verified journalism, business reporting, and cultural updates from Accra to Tamale.
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
          <h4 className="font-bold text-xs text-white mb-4 uppercase tracking-wider">Join the Inner Circle</h4>
          <p className="text-xs text-slate-400 font-sans">Get top headlines, tech breakdowns, and creator highlights delivered to your inbox every morning.</p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                placeholder="Your email address"
                className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-600 flex-1"
              />
              <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded text-xs font-bold transition">
                Subscribe
              </button>
            </div>
            {errorMsg && (
              <p className="text-[11px] text-red-400 font-sans">{errorMsg}</p>
            )}
            {subscribed && (
              <p className="text-[11px] text-emerald-400 font-sans font-medium">Subscribed! Welcome to the Ghana Pulse Inner Circle.</p>
            )}
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
