import React, { useState } from 'react';
import { PollQuestion } from '../types';
import { BarChart3, CheckCircle2, Award } from 'lucide-react';

interface PollsSectionProps {
  poll: PollQuestion;
}

export const PollsSection: React.FC<PollsSectionProps> = ({ poll }) => {
  const [currentPoll, setCurrentPoll] = useState<PollQuestion>(poll);
  const [votedOption, setVotedOption] = useState<string | null>(null);

  const handleVote = (optionId: string) => {
    if (votedOption) return;
    const updatedOptions = currentPoll.options.map(opt => 
      opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
    );
    setCurrentPoll({
      ...currentPoll,
      options: updatedOptions,
      totalVotes: currentPoll.totalVotes + 1
    });
    setVotedOption(optionId);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-3xl mx-auto my-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Community Pulse</span>
          <h3 className="text-xl font-black text-slate-900">Ghana Poll of the Day</h3>
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-base font-bold text-slate-800 leading-snug">
          {currentPoll.question}
        </h4>

        <div className="space-y-3">
          {currentPoll.options.map(option => {
            const percentage = Math.round((option.votes / currentPoll.totalVotes) * 100) || 0;
            const isSelected = votedOption === option.id;

            return (
              <div
                key={option.id}
                onClick={() => handleVote(option.id)}
                className={`relative overflow-hidden p-4 rounded-2xl border transition cursor-pointer ${
                  isSelected 
                    ? 'border-red-600 bg-red-50/50' 
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {/* Background vote progress bar */}
                {votedOption && (
                  <div
                    className="absolute inset-y-0 left-0 bg-red-100/60 transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  ></div>
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-red-600 bg-red-600 text-white' : 'border-slate-400'}`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{option.text}</span>
                  </div>
                  {votedOption && (
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      {percentage}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>Total Votes: <strong className="text-slate-800">{currentPoll.totalVotes.toLocaleString()}</strong></span>
          <span>{votedOption ? 'Thank you for voting!' : 'Click any option to cast your vote'}</span>
        </div>
      </div>
    </div>
  );
};
