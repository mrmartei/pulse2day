export type Category = 'All' | 'Politics' | 'Business' | 'Tech' | 'Entertainment' | 'Sports' | 'Lifestyle';

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: Category;
  channel: string;
  channelLogo?: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  articleBodyImage?: string;
  articleBodyCaption?: string;
  readTime: string;
  views: number;
  likes: number;
  isBreaking?: boolean;
  featuredCreatorId?: string;
}

export interface ContentCreator {
  id: string;
  name: string;
  realName: string;
  handle: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Multi-Platform';
  category: 'Tech & Culture' | 'Pop Culture & Critique' | 'Celebrity & Entertainment' | 'Travel & Heritage' | 'Music & Radio' | 'Comedy & Lifestyle' | 'Dance & Viral' | 'Culinary & Lifestyle';
  status: 'Established' | 'Breakthrough';
  subscribers: string;
  avatar: string;
  bannerImage: string;
  coverImage?: string;
  articleBodyImage: string;
  bio: string;
  award: {
    title: string;
    year: string;
    description: string;
  };
  profileArticle: string;
  stats: {
    tiktokFollowers?: string;
    instagramFollowers?: string;
    secondaryInstagramFollowers?: string;
    youtubeSubscribers?: string;
    twitterFollowers?: string;
    linkedinFollowers?: string;
    facebookFollowers?: string;
    snapchatFollowers?: string;
    threadsFollowers?: string;
    pinterestFollowers?: string;
    engagementRate: string;
  };
  brandPartners?: string[];
  socialLinks: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    website?: string;
    threads?: string;
  };
}

export interface PollQuestion {
  id: string;
  question: string;
  options: { id: string; text: string; votes: number }[];
  totalVotes: number;
  userVoted?: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface EventPressItem {
  id: string;
  type: 'Press Appearance' | 'Summit & Conference' | 'Podcast & Radio' | 'Industry Spotlight';
  title: string;
  outletOrEvent: string;
  episodeOrSession?: string;
  dateLabel: string;
  isoDate: string;
  location: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
  imageUrl: string;
  featuredCreatorId?: string;
  featuredCreatorName?: string;
  topicTags: string[];
}
