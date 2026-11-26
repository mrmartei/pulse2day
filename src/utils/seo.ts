import { NEWS_ARTICLES, CONTENT_CREATORS, EVENTS_PRESS, INITIAL_POLL } from '../data/mockData';
import { ContentCreator, NewsArticle, EventPressItem } from '../types';

export const DEFAULT_SITE_URL = 'https://pulse2day.vercel.app';
const SITE_NAME = 'GhPulse';
const DEFAULT_TITLE = "GhPulse - Ghana's Tech, Creator & Cultural Heartbeat";
const DEFAULT_DESCRIPTION =
  "Ghana's premier digital news network and content creators directory covering nationwide tech, creators, business, events, and cultural developments.";
const DEFAULT_OG_IMAGE_PATH = '/ghpulse-social-preview.jpg';
const LOGO_IMAGE_PATH = '/icon-512x512.png';

export interface RouteSeoData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article' | 'profile';
  ogImage: string;
  robots: string;
  jsonLd: Record<string, unknown>;
  bodyHtml: string;
  statusCode: number;
}

export function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

export function normalizeRoutePath(rawPath: string): string {
  if (!rawPath) return '/';
  let cleaned = rawPath.split('?')[0].split('#')[0].trim();
  if (!cleaned.startsWith('/')) cleaned = `/${cleaned}`;
  if (cleaned.length > 1) {
    cleaned = cleaned.replace(/\/+$/, '');
  }
  return cleaned || '/';
}

export function resolveCreatorBySlug(slug: string): ContentCreator | undefined {
  return CONTENT_CREATORS.find(
    (c) => c.id === slug || (slug === 'tech-in-twi' && c.id === 'selorm-tech')
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toAbsoluteUrl(assetOrUrl: string | undefined, baseUrl: string): string {
  const cleanBase = stripTrailingSlash(baseUrl);
  if (!assetOrUrl) return `${cleanBase}${DEFAULT_OG_IMAGE_PATH}`;
  if (/^https?:\/\//i.test(assetOrUrl)) return assetOrUrl;
  const cleanAsset = assetOrUrl.startsWith('/') ? assetOrUrl : `/${assetOrUrl}`;
  return `${cleanBase}${cleanAsset}`;
}

function buildPublisherSchema(baseUrl: string): Record<string, unknown> {
  const cleanBase = stripTrailingSlash(baseUrl);
  return {
    '@type': 'NewsMediaOrganization',
    name: SITE_NAME,
    url: `${cleanBase}/`,
    logo: {
      '@type': 'ImageObject',
      url: toAbsoluteUrl(LOGO_IMAGE_PATH, cleanBase),
      width: 512,
      height: 512,
    },
  };
}

function markdownParagraphsToHtml(content: string): string {
  return content
    .split('\n\n')
    .map((paragraph) => {
      const escaped = escapeHtml(paragraph);
      const linked = escaped.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        (_match, text: string, href: string) => {
          const cleanHref = href.startsWith('#/') ? href.slice(1) : href;
          const isExternal = /^https?:\/\//i.test(cleanHref);
          return isExternal
            ? `<a href="${cleanHref}" target="_blank" rel="noopener noreferrer">${text}</a>`
            : `<a href="${cleanHref}">${text}</a>`;
        }
      );
      return `<p>${linked}</p>`;
    })
    .join('\n');
}

function renderSiteNavHtml(): string {
  return `<header>
    <nav aria-label="Main navigation">
      <a href="/">GhPulse</a>
      <a href="/news">Latest News</a>
      <a href="/creators">Creators Hub</a>
      <a href="/events">Events &amp; Press</a>
      <a href="/polls">Community Polls</a>
    </nav>
  </header>`;
}

function formatCreatorLabel(creator: ContentCreator): string {
  if (!creator.realName || creator.name.toLowerCase().includes(creator.realName.toLowerCase())) {
    return creator.name;
  }
  return `${creator.name} (${creator.realName})`;
}

function trimMetaDescription(text: string, maxLen = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).replace(/[.,;:\-–]+$/, '')}…`;
}

function renderCreatorDirectoryLinksHtml(excludeId?: string): string {
  const items = CONTENT_CREATORS.filter((c) => c.id !== excludeId)
    .map(
      (c) =>
        `<li><a href="/creator/${escapeHtml(c.id)}">${escapeHtml(formatCreatorLabel(c))} — ${escapeHtml(c.handle)}</a></li>`
    )
    .join('');
  return `<section aria-label="Ghana Content Creators Directory">
    <h2>Ghana Content Creators Directory</h2>
    <ul>${items}</ul>
  </section>`;
}

function buildCreatorSeo(creator: ContentCreator, baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/creator/${creator.id}`;
  const ogImage = toAbsoluteUrl(creator.bannerImage || creator.avatar, cleanBase);
  const displayName = formatCreatorLabel(creator);
  const title = `${displayName} — ${creator.handle} | GhPulse`;
  const description = trimMetaDescription(
    `${displayName} (${creator.handle}) — ${creator.category} creator in Ghana (${creator.subscribers}). ${creator.bio}`,
    160
  );

  const sameAsLinks = [
    creator.socialLinks.website,
    creator.socialLinks.tiktok,
    creator.socialLinks.instagram,
    creator.socialLinks.youtube,
    creator.socialLinks.twitter,
    creator.socialLinks.threads,
  ].filter((link): link is string => Boolean(link));

  const relatedPress = EVENTS_PRESS.filter((e) => e.featuredCreatorId === creator.id);
  const relatedArticles = NEWS_ARTICLES.filter(
    (a) =>
      a.featuredCreatorId === creator.id ||
      a.content.includes(`/creator/${creator.id}`) ||
      a.content.includes(`#/creator/${creator.id}`)
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${canonicalUrl}#profilepage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${cleanBase}/`,
        },
        publisher: buildPublisherSchema(cleanBase),
        mainEntity: {
          '@type': 'Person',
          '@id': `${canonicalUrl}#person`,
          name: creator.realName,
          alternateName: [creator.name, creator.handle],
          description: creator.bio,
          image: toAbsoluteUrl(creator.avatar, cleanBase),
          jobTitle:
            creator.id === 'mr-martei'
              ? 'Founder & CEO of Lumen Studios, Founder of Plexlink, Software Engineer & Tech Content Creator'
              : `Digital Content Creator (${creator.category})`,
          nationality: 'Ghanaian',
          award: `${creator.award.title} (${creator.award.year})`,
          url: canonicalUrl,
          sameAs: sameAsLinks,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'GhPulse', item: `${cleanBase}/` },
          { '@type': 'ListItem', position: 2, name: 'Creators Hub', item: `${cleanBase}/creators` },
          { '@type': 'ListItem', position: 3, name: creator.name, item: canonicalUrl },
        ],
      },
    ],
  };

  const statItems = [
    creator.stats.tiktokFollowers ? `<li>TikTok Followers: ${escapeHtml(creator.stats.tiktokFollowers)}</li>` : '',
    creator.stats.instagramFollowers
      ? `<li>${creator.id === 'mr-martei' ? 'Instagram (Primary @mr.marteii)' : 'Instagram Followers'}: ${escapeHtml(creator.stats.instagramFollowers)}</li>`
      : '',
    creator.stats.secondaryInstagramFollowers
      ? `<li>Instagram (Secondary @mr.martei): ${escapeHtml(creator.stats.secondaryInstagramFollowers)}</li>`
      : '',
    creator.stats.youtubeSubscribers ? `<li>YouTube Subscribers: ${escapeHtml(creator.stats.youtubeSubscribers)}</li>` : '',
    creator.stats.twitterFollowers ? `<li>X (Twitter) Followers: ${escapeHtml(creator.stats.twitterFollowers)}</li>` : '',
    creator.stats.snapchatFollowers ? `<li>Snapchat Followers: ${escapeHtml(creator.stats.snapchatFollowers)}</li>` : '',
    creator.stats.facebookFollowers ? `<li>Facebook: ${escapeHtml(creator.stats.facebookFollowers)}</li>` : '',
    creator.stats.threadsFollowers ? `<li>Threads: ${escapeHtml(creator.stats.threadsFollowers)}</li>` : '',
    creator.stats.pinterestFollowers ? `<li>Pinterest: ${escapeHtml(creator.stats.pinterestFollowers)}</li>` : '',
    `<li>Engagement Rate: ${escapeHtml(creator.stats.engagementRate)}</li>`,
  ]
    .filter(Boolean)
    .join('');

  const socialHtml = sameAsLinks
    .map((url) => `<li><a href="${escapeHtml(url)}" rel="me noopener noreferrer">${escapeHtml(url)}</a></li>`)
    .join('');

  const brandPartnersHtml =
    creator.brandPartners && creator.brandPartners.length > 0
      ? `<section><h2>Verified Brand Partners</h2><ul>${creator.brandPartners
          .map((p) => `<li>${escapeHtml(p)}</li>`)
          .join('')}</ul></section>`
      : '';

  const pressHtml =
    relatedPress.length > 0
      ? `<section><h2>Events, Summits &amp; Press Appearances</h2><ul>${relatedPress
          .map(
            (ev) =>
              `<li><a href="/event/${escapeHtml(ev.id)}">${escapeHtml(ev.title)}</a> — ${escapeHtml(ev.outletOrEvent)} (${escapeHtml(ev.dateLabel)})</li>`
          )
          .join('')}</ul></section>`
      : '';

  const articlesHtml =
    relatedArticles.length > 0
      ? `<section><h2>Featured Stories on GhPulse</h2><ul>${relatedArticles
          .map(
            (art) =>
              `<li><a href="/article/${escapeHtml(art.id)}">${escapeHtml(art.title)}</a></li>`
          )
          .join('')}</ul></section>`
      : '';

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <article>
      <h1>${escapeHtml(creator.name)}</h1>
      <p>Real Name: ${escapeHtml(creator.realName)} | Handle: ${escapeHtml(creator.handle)} | Category: ${escapeHtml(creator.category)} | Primary Platform: ${escapeHtml(creator.platform)} | Reach: ${escapeHtml(creator.subscribers)}</p>
      <img src="${escapeHtml(toAbsoluteUrl(creator.avatar, cleanBase))}" alt="${escapeHtml(creator.name)}" />
      <section>
        <h2>Official Industry Award (${escapeHtml(creator.award.year)})</h2>
        <h3>${escapeHtml(creator.award.title)}</h3>
        <p>${escapeHtml(creator.award.description)}</p>
      </section>
      <section>
        <h2>Profile &amp; Career Journey: ${escapeHtml(creator.name)}</h2>
        <p>${escapeHtml(creator.profileArticle)}</p>
        <p>${escapeHtml(creator.bio)}</p>
      </section>
      <section>
        <h2>Social Platforms &amp; Metrics</h2>
        <ul>${statItems}</ul>
      </section>
      ${brandPartnersHtml}
      ${pressHtml}
      ${articlesHtml}
      <section>
        <h2>Official Social Channels</h2>
        <ul>${socialHtml}</ul>
      </section>
    </article>
    ${renderCreatorDirectoryLinksHtml(creator.id)}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'profile',
    ogImage,
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildArticleSeo(article: NewsArticle, baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/article/${article.id}`;
  const ogImage = toAbsoluteUrl(article.imageUrl, cleanBase);
  const title = `${article.title} — GhPulse`;
  const description = article.summary;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        headline: article.title,
        description: article.summary,
        image: [ogImage],
        articleSection: article.category,
        author: {
          '@type': 'Person',
          name: article.author,
        },
        publisher: buildPublisherSchema(cleanBase),
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'GhPulse', item: `${cleanBase}/` },
          { '@type': 'ListItem', position: 2, name: article.category, item: `${cleanBase}/news` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
        ],
      },
    ],
  };

  const featuredCreatorLink = article.featuredCreatorId
    ? (() => {
        const c = resolveCreatorBySlug(article.featuredCreatorId);
        return c
          ? `<p>Featured Creator: <a href="/creator/${escapeHtml(c.id)}">${escapeHtml(c.name)} (${escapeHtml(c.realName)})</a></p>`
          : '';
      })()
    : '';

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <article>
      <h1>${escapeHtml(article.title)}</h1>
      <p>By ${escapeHtml(article.author)} | ${escapeHtml(article.channel)} | ${escapeHtml(article.category)} | ${escapeHtml(article.readTime)}</p>
      <img src="${escapeHtml(ogImage)}" alt="${escapeHtml(article.title)}" />
      <p>${escapeHtml(article.summary)}</p>
      ${featuredCreatorLink}
      ${markdownParagraphsToHtml(article.content)}
    </article>
    ${renderCreatorDirectoryLinksHtml()}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'article',
    ogImage,
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildEventSeo(item: EventPressItem, baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/event/${item.id}`;
  const ogImage = toAbsoluteUrl(item.imageUrl, cleanBase);
  const title = `${item.title} — GhPulse Events & Press`;
  const description = item.summary;
  const featuredCreator = item.featuredCreatorId
    ? resolveCreatorBySlug(item.featuredCreatorId)
    : undefined;

  const mainSchema =
    item.type === 'Summit & Conference'
      ? {
          '@type': 'Event',
          name: item.outletOrEvent,
          description: item.summary,
          startDate: item.isoDate,
          image: [ogImage],
          location: {
            '@type': 'Place',
            name: item.location,
          },
          performer: featuredCreator
            ? {
                '@type': 'Person',
                name: featuredCreator.realName,
                alternateName: [featuredCreator.name, featuredCreator.handle],
                url: `${cleanBase}/creator/${featuredCreator.id}`,
              }
            : undefined,
          organizer: {
            '@type': 'Organization',
            name: item.outletOrEvent,
          },
          url: canonicalUrl,
        }
      : {
          '@type': 'NewsArticle',
          headline: item.title,
          description: item.summary,
          datePublished: item.isoDate,
          image: [ogImage],
          about: featuredCreator
            ? {
                '@type': 'Person',
                name: featuredCreator.realName,
                alternateName: [featuredCreator.name, featuredCreator.handle],
                url: `${cleanBase}/creator/${featuredCreator.id}`,
              }
            : undefined,
          publisher: buildPublisherSchema(cleanBase),
          url: canonicalUrl,
        };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      mainSchema,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'GhPulse', item: `${cleanBase}/` },
          { '@type': 'ListItem', position: 2, name: 'Events & Press', item: `${cleanBase}/events` },
          { '@type': 'ListItem', position: 3, name: item.title, item: canonicalUrl },
        ],
      },
    ],
  };

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <article>
      <h1>${escapeHtml(item.title)}</h1>
      <p>${escapeHtml(item.type)} | ${escapeHtml(item.outletOrEvent)} | ${escapeHtml(item.dateLabel)} | ${escapeHtml(item.location)}</p>
      ${item.episodeOrSession ? `<p>${escapeHtml(item.episodeOrSession)}</p>` : ''}
      <img src="${escapeHtml(ogImage)}" alt="${escapeHtml(item.title)}" />
      ${
        featuredCreator
          ? `<p>Featured Guest: <a href="/creator/${escapeHtml(featuredCreator.id)}">${escapeHtml(featuredCreator.name)} (${escapeHtml(featuredCreator.realName)})</a></p>`
          : ''
      }
      ${markdownParagraphsToHtml(item.content)}
      <section>
        <h2>Key Takeaways</h2>
        <ul>${item.keyTakeaways.map((k) => `<li>${escapeHtml(k)}</li>`).join('')}</ul>
      </section>
    </article>
    ${renderCreatorDirectoryLinksHtml()}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'article',
    ogImage,
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildCreatorsHubSeo(baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/creators`;
  const title = 'Ghana Content Creators Directory & Profiles — GhPulse';
  const description =
    "Explore verified profiles, reach metrics, awards, and stories of Ghana's top digital content creators across TikTok, Instagram, and YouTube on GhPulse.";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: CONTENT_CREATORS.length,
      itemListElement: CONTENT_CREATORS.map((creator, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: formatCreatorLabel(creator),
        url: `${cleanBase}/creator/${creator.id}`,
      })),
    },
  };

  const cardsHtml = CONTENT_CREATORS.map(
    (c) => `<article>
      <h2><a href="/creator/${escapeHtml(c.id)}">${escapeHtml(formatCreatorLabel(c))}</a></h2>
      <p>${escapeHtml(c.handle)} | ${escapeHtml(c.category)} | ${escapeHtml(c.subscribers)} | ${escapeHtml(c.award.title)} (${escapeHtml(c.award.year)})</p>
      <p>${escapeHtml(c.bio)}</p>
    </article>`
  ).join('\n');

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <h1>Ghana Content Creators &amp; Award Winners</h1>
    <p>${escapeHtml(description)}</p>
    ${cardsHtml}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH, cleanBase),
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildEventsHubSeo(baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/events`;
  const title = 'Events, Summits & Press Coverage — GhPulse';
  const description =
    'Dedicated coverage of Ghanaian creators and tech founders on national radio, industry summits, and press spotlights on GhPulse.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: EVENTS_PRESS.length,
      itemListElement: EVENTS_PRESS.map((ev, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: ev.title,
        url: `${cleanBase}/event/${ev.id}`,
      })),
    },
  };

  const listHtml = EVENTS_PRESS.map(
    (ev) => `<article>
      <h2><a href="/event/${escapeHtml(ev.id)}">${escapeHtml(ev.title)}</a></h2>
      <p>${escapeHtml(ev.outletOrEvent)} | ${escapeHtml(ev.dateLabel)} | ${escapeHtml(ev.location)}</p>
      <p>${escapeHtml(ev.summary)}</p>
    </article>`
  ).join('\n');

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <h1>Events &amp; Press Coverage</h1>
    <p>${escapeHtml(description)}</p>
    ${listHtml}
    ${renderCreatorDirectoryLinksHtml()}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH, cleanBase),
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildPollsSeo(baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/polls`;
  const title = 'Ghana Public Opinion & Community Polls — GhPulse';
  const description =
    'Cast your vote on pressing Ghanaian national topics, economic policies, technology, and cultural conversations on GhPulse.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
  };

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <h1>Ghana Public Opinion Hub</h1>
    <h2>${escapeHtml(INITIAL_POLL.question)}</h2>
    <ul>${INITIAL_POLL.options.map((o) => `<li>${escapeHtml(o.text)}</li>`).join('')}</ul>
    ${renderCreatorDirectoryLinksHtml()}
  </main>`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH, cleanBase),
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

function buildHomeSeo(baseUrl: string): RouteSeoData {
  const cleanBase = stripTrailingSlash(baseUrl);
  const canonicalUrl = `${cleanBase}/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...buildPublisherSchema(cleanBase),
        alternateName: 'GhPulse News Network',
        description: DEFAULT_DESCRIPTION,
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: canonicalUrl,
      },
      {
        '@type': 'ItemList',
        name: 'Featured Ghanaian Content Creators',
        itemListElement: CONTENT_CREATORS.map((creator, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: creator.name,
          url: `${cleanBase}/creator/${creator.id}`,
        })),
      },
    ],
  };

  const headlinesHtml = NEWS_ARTICLES.map(
    (art) => `<article>
      <h2><a href="/article/${escapeHtml(art.id)}">${escapeHtml(art.title)}</a></h2>
      <p>${escapeHtml(art.summary)}</p>
    </article>`
  ).join('\n');

  const eventsHtml = EVENTS_PRESS.map(
    (ev) => `<li><a href="/event/${escapeHtml(ev.id)}">${escapeHtml(ev.title)}</a></li>`
  ).join('');

  const bodyHtml = `${renderSiteNavHtml()}
  <main>
    <h1>GhPulse — Ghana's Tech, Creator &amp; Cultural Heartbeat</h1>
    <p>${escapeHtml(DEFAULT_DESCRIPTION)}</p>
    <section>
      <h2>Latest Headlines</h2>
      ${headlinesHtml}
    </section>
    ${renderCreatorDirectoryLinksHtml()}
    <section>
      <h2>Events &amp; Press</h2>
      <ul>${eventsHtml}</ul>
    </section>
  </main>`;

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalUrl,
    ogType: 'website',
    ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH, cleanBase),
    robots: 'index, follow, max-image-preview:large',
    jsonLd,
    bodyHtml,
    statusCode: 200,
  };
}

export function getSeoForPath(pathname: string, baseUrl: string = DEFAULT_SITE_URL): RouteSeoData {
  const normalized = normalizeRoutePath(pathname);

  if (normalized.startsWith('/creator/')) {
    const slug = decodeURIComponent(normalized.slice('/creator/'.length));
    const creator = resolveCreatorBySlug(slug);
    if (creator) return buildCreatorSeo(creator, baseUrl);
  }

  if (normalized.startsWith('/article/')) {
    const slug = decodeURIComponent(normalized.slice('/article/'.length));
    const article = NEWS_ARTICLES.find((a) => a.id === slug);
    if (article) return buildArticleSeo(article, baseUrl);
  }

  if (normalized.startsWith('/event/')) {
    const slug = decodeURIComponent(normalized.slice('/event/'.length));
    const eventItem = EVENTS_PRESS.find((e) => e.id === slug);
    if (eventItem) return buildEventSeo(eventItem, baseUrl);
  }

  if (normalized === '/creators') {
    return buildCreatorsHubSeo(baseUrl);
  }

  if (normalized === '/events' || normalized === '/press') {
    return buildEventsHubSeo(baseUrl);
  }

  if (normalized === '/polls') {
    return buildPollsSeo(baseUrl);
  }

  return buildHomeSeo(baseUrl);
}

export function injectSeoIntoHtml(
  htmlTemplate: string,
  pathname: string,
  baseUrl: string = DEFAULT_SITE_URL
): string {
  const seo = getSeoForPath(pathname, baseUrl);
  const safeTitle = escapeHtml(seo.title);
  const safeDesc = escapeHtml(seo.description);
  const safeCanonical = escapeHtml(seo.canonicalUrl);
  const safeOgImage = escapeHtml(seo.ogImage);
  const safeRobots = escapeHtml(seo.robots);
  const jsonLdString = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c');

  const seoTags = `<title>${safeTitle}</title>
    <meta name="description" content="${safeDesc}" />
    <meta name="robots" content="${safeRobots}" />
    <link rel="canonical" href="${safeCanonical}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:type" content="${seo.ogType}" />
    <meta property="og:url" content="${safeCanonical}" />
    <meta property="og:image" content="${safeOgImage}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${safeOgImage}" />
    <script id="ghpulse-route-jsonld" type="application/ld+json">${jsonLdString}</script>`;

  let html = htmlTemplate;

  // Remove existing SEO tags so there are never duplicates
  html = html.replace(/<title>[\s\S]*?<\/title>/gi, '');
  html = html.replace(/<meta\s+name="(?:description|robots|twitter:[^"]+)"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*\/?>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
  html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Insert freshly built SEO tags right after viewport meta (or before </head>)
  if (/<meta\s+name="viewport"[^>]*\/?>/i.test(html)) {
    html = html.replace(/(<meta\s+name="viewport"[^>]*\/?>)/i, `$1\n    ${seoTags}`);
  } else {
    html = html.replace('</head>', `    ${seoTags}\n  </head>`);
  }

  // Inject pre-rendered crawlable semantic HTML inside #root (replaced automatically when React mounts)
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${seo.bodyHtml}</div>`
  );

  return html;
}

export function buildSitemapXml(baseUrl: string = DEFAULT_SITE_URL): string {
  const cleanBase = stripTrailingSlash(baseUrl);
  const today = new Date().toISOString().split('T')[0];

  const entries: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [
    { loc: `${cleanBase}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
    { loc: `${cleanBase}/creators`, lastmod: today, changefreq: 'daily', priority: '0.95' },
    ...CONTENT_CREATORS.map((creator) => ({
      loc: `${cleanBase}/creator/${creator.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    { loc: `${cleanBase}/events`, lastmod: today, changefreq: 'weekly', priority: '0.85' },
    ...EVENTS_PRESS.map((ev) => ({
      loc: `${cleanBase}/event/${ev.id}`,
      lastmod: ev.isoDate || today,
      changefreq: 'monthly',
      priority: '0.85',
    })),
    ...NEWS_ARTICLES.map((art) => ({
      loc: `${cleanBase}/article/${art.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8',
    })),
    { loc: `${cleanBase}/polls`, lastmod: today, changefreq: 'weekly', priority: '0.6' },
  ];

  const urlNodes = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeHtml(entry.loc)}</loc>
    <lastmod>${escapeHtml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;
}

export function buildRobotsTxt(baseUrl: string = DEFAULT_SITE_URL): string {
  const cleanBase = stripTrailingSlash(baseUrl);
  return `User-agent: *
Allow: /

Sitemap: ${cleanBase}/sitemap.xml
`;
}

export function getAllPrerenderPaths(): string[] {
  return [
    '/',
    '/news',
    '/creators',
    '/events',
    '/press',
    '/polls',
    ...CONTENT_CREATORS.map((c) => `/creator/${c.id}`),
    '/creator/tech-in-twi',
    ...NEWS_ARTICLES.map((a) => `/article/${a.id}`),
    ...EVENTS_PRESS.map((e) => `/event/${e.id}`),
  ];
}

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function applyClientSeo(pathname: string): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  const origin =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? DEFAULT_SITE_URL
      : window.location.origin;

  const seo = getSeoForPath(pathname, origin);
  document.title = seo.title;

  upsertMetaTag('name', 'description', seo.description);
  upsertMetaTag('name', 'robots', seo.robots);
  upsertMetaTag('property', 'og:title', seo.title);
  upsertMetaTag('property', 'og:description', seo.description);
  upsertMetaTag('property', 'og:type', seo.ogType);
  upsertMetaTag('property', 'og:url', seo.canonicalUrl);
  upsertMetaTag('property', 'og:image', seo.ogImage);
  upsertMetaTag('property', 'og:site_name', SITE_NAME);
  upsertMetaTag('name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('name', 'twitter:title', seo.title);
  upsertMetaTag('name', 'twitter:description', seo.description);
  upsertMetaTag('name', 'twitter:image', seo.ogImage);

  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonicalUrl);

  // Replace managed JSON-LD script cleanly
  document.head
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((node) => node.remove());

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'ghpulse-route-jsonld';
  script.text = JSON.stringify(seo.jsonLd);
  document.head.appendChild(script);
}
