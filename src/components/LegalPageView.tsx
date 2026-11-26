import React from 'react';
import { ArrowLeft, ShieldCheck, FileText, BookOpen } from 'lucide-react';
import { handleSpaLinkClick } from '../utils/navigation';

export type LegalPageType = 'privacy' | 'terms' | 'editorial';

interface LegalPageViewProps {
  page: LegalPageType;
  onBack: () => void;
}

const LEGAL_PAGES: Record<
  LegalPageType,
  {
    eyebrow: string;
    title: string;
    updated: string;
    lead: string;
    sections: Array<{ heading: string; body: string[] }>;
  }
> = {
  privacy: {
    eyebrow: 'Legal & Reader Trust',
    title: 'Privacy Policy',
    updated: 'Last Updated: November 26, 2026',
    lead: 'GhPulse News Network ("GhPulse", "we", "our") respects the privacy of readers, content creators, and partners visiting ghpulse.space. This Privacy Policy outlines how information is collected, used, and safeguarded across our newsroom and creator directory.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you browse GhPulse, read articles, or explore creator profiles, we do not require account registration. We may collect standard non-personally identifying server telemetry such as browser type, device category, referral source, and pages viewed to maintain site reliability and measure editorial reach.',
          'If you voluntarily subscribe to the GhPulse Inner Circle newsletter or submit a reader comment, we process only the email address or display details you actively provide.'
        ]
      },
      {
        heading: '2. How We Use Information',
        body: [
          'Newsletter email addresses are used strictly to deliver morning news briefings, creator highlights, and major Ghanaian tech and cultural dispatches. You may opt out at any time.',
          'Aggregated readership insights help our Accra editorial desk improve coverage across Politics, Business, Tech, Entertainment, Sports, and Lifestyle beats.'
        ]
      },
      {
        heading: '3. Third-Party Links & Embedded Profiles',
        body: [
          'GhPulse links to verified creator channels (such as YouTube, TikTok, Instagram, X, and personal websites) as well as primary Ghanaian news sources. Clicking an external link takes you to a third-party service governed by its own privacy policy.'
        ]
      },
      {
        heading: '4. Data Protection & Contact',
        body: [
          'We align our data-handling practices with Ghana’s Data Protection Act, 2012 (Act 843) and international web privacy standards. We never sell reader email lists or personal information to third-party data brokers.',
          'For privacy inquiries, creator profile updates, or removal requests, contact our Accra newsroom desk via editorial@ghpulse.space.'
        ]
      }
    ]
  },
  terms: {
    eyebrow: 'Platform Governance',
    title: 'Terms of Service',
    updated: 'Last Updated: November 26, 2026',
    lead: 'By accessing or using GhPulse (ghpulse.space), you agree to abide by these Terms of Service and all applicable laws of the Republic of Ghana.',
    sections: [
      {
        heading: '1. Editorial Content & Intellectual Property',
        body: [
          'All original reporting, editorial syntheses, page layouts, branding assets, and directory compilations published on GhPulse are protected by copyright and intellectual property laws. Quoted statements, press appearances, and source attributions remain the property of their respective media houses and public figures.',
          'Readers may share direct links to GhPulse articles, creator profiles, and event coverage on social platforms with proper attribution to GhPulse.'
        ]
      },
      {
        heading: '2. Reader Comments & Community Polls',
        body: [
          'Participants in reader discussions and Ghana Public Opinion Hub polls agree to engage constructively. Defamatory remarks, hate speech, spam, impersonation, or unlawful solicitations are strictly prohibited and may be removed without notice.'
        ]
      },
      {
        heading: '3. Accuracy & External Sources',
        body: [
          'While our editorial team works diligently to verify facts, dates, policy announcements, and creator metrics from primary Ghanaian outlets and official filings, GhPulse provides general informational reporting rather than legal, financial, or immigration advice. Readers should verify time-sensitive regulatory notices directly with relevant authorities.'
        ]
      },
      {
        heading: '4. Updates to These Terms',
        body: [
          'GhPulse may revise these Terms of Service as new features, press hubs, or community tools launch. Continued use of the platform following published updates constitutes acceptance of the revised terms.'
        ]
      }
    ]
  },
  editorial: {
    eyebrow: 'Newsroom Standards',
    title: 'Editorial Guidelines',
    updated: 'Last Updated: November 26, 2026',
    lead: 'GhPulse is committed to independent, accurate, and transparent journalism covering Ghana’s public affairs, economy, technology ecosystem, sports, and digital creator economy.',
    sections: [
      {
        heading: '1. Verification & Primary Attribution',
        body: [
          'Every news report published on GhPulse is grounded in verifiable reporting from primary Ghanaian institutions, court rulings, parliamentary proceedings, press statements, and established newsrooms including Graphic Online, MyJoyOnline, Citi Newsroom, Business & Financial Times, Tech Labari, Pulse Ghana, and GhanaFA.org.',
          'Where conflicting details emerge in breaking coverage, our editors refrain from publishing unverified claims and note official confirmations clearly.'
        ]
      },
      {
        heading: '2. Creator Directory Verification',
        body: [
          'Profiles in the GhPulse Creators Hub document public figures’ verified handles, audience reach, awards, brand partnerships, and speaking appearances. Creator statistics are periodically audited against public platform profiles and official creator disclosures.'
        ]
      },
      {
        heading: '3. Fairness, Right of Reply & Corrections',
        body: [
          'In legal, parliamentary, and public-interest disputes, GhPulse presents allegations accurately as allegations, records formal pleas and ministerial clarifications, and upholds the presumption of innocence.',
          'If a factual error is identified in any article, creator profile, or event summary, our Accra bureau issues prompt, transparent corrections upon verification.'
        ]
      },
      {
        heading: '4. Editorial Independence',
        body: [
          'Commercial partnerships, event sponsorships, or featured product showcases never dictate our independent news reporting. Product launches, press recaps, and industry spotlights are clearly labeled so readers can always distinguish news reporting from directory profiles and press coverage.'
        ]
      }
    ]
  }
};

export const LegalPageView: React.FC<LegalPageViewProps> = ({ page, onBack }) => {
  const data = LEGAL_PAGES[page];

  const renderIcon = () => {
    if (page === 'privacy') return <ShieldCheck className="w-5 h-5 text-red-700" />;
    if (page === 'terms') return <FileText className="w-5 h-5 text-red-700" />;
    return <BookOpen className="w-5 h-5 text-red-700" />;
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in duration-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => {
            handleSpaLinkClick(e, '/');
            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
              onBack();
            }
          }}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-red-700 bg-white border border-slate-200 px-4 py-2 rounded shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to GhPulse Home</span>
        </a>

        <div className="flex items-center space-x-2 text-xs font-semibold">
          <a
            href="/privacy"
            onClick={(e) => handleSpaLinkClick(e, '/privacy')}
            className={`px-3 py-1.5 rounded border transition ${
              page === 'privacy'
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            onClick={(e) => handleSpaLinkClick(e, '/terms')}
            className={`px-3 py-1.5 rounded border transition ${
              page === 'terms'
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </a>
          <a
            href="/editorial-guidelines"
            onClick={(e) => handleSpaLinkClick(e, '/editorial-guidelines')}
            className={`px-3 py-1.5 rounded border transition ${
              page === 'editorial'
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            Editorial Guidelines
          </a>
        </div>
      </div>

      <article className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-12 space-y-8">
        <header className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-red-700">
            {renderIcon()}
            <span>{data.eyebrow}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {data.title}
          </h1>
          <p className="text-xs font-semibold text-slate-500">{data.updated}</p>
          <p className="text-base text-slate-700 leading-relaxed pt-2">{data.lead}</p>
        </header>

        <div className="space-y-8">
          {data.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-slate-900">{section.heading}</h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <footer className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <span>GhPulse News Network • Accra, Ghana</span>
          <span>Accredited Digital Media &amp; Creator Directory</span>
        </footer>
      </article>
    </div>
  );
};
