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
  readTime: string;
  views: number;
  likes: number;
  isBreaking?: boolean;
  featuredCreatorId?: string;
}

export interface ContentCreator {
  id: string;
  name: string;
  handle: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Multi-Platform';
  category: 'Tech & Culture' | 'Pop Culture & Critique' | 'Celebrity & Entertainment' | 'Travel & Heritage' | 'Music & Radio' | 'Comedy & Lifestyle' | 'Dance & Viral';
  status: 'Established' | 'Breakthrough';
  subscribers: string;
  avatar: string;
  coverImage: string;
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
    youtubeSubscribers?: string;
    twitterFollowers?: string;
    linkedinFollowers?: string;
    engagementRate: string;
  };
  socialLinks: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
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
