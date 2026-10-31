import { NewsArticle, ContentCreator, PollQuestion } from '../types';

export const BREAKING_NEWS = [
  "Plexlink officially launches in Ghana: Founder Mr Martei debuts smart NFC networking & link-in-bio platform for professionals.",
  "Bank of Ghana maintains Monetary Policy Rate at 29% citing stabilization in core inflation.",
  "Black Stars commence rigorous training in Kumasi ahead of crucial AFCON qualifiers.",
  "Accra Tech Summit 2026 brings together over 150 West African founders and creator-economy leaders."
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'art-plexlink',
    title: 'Plexlink Launches in Ghana: Founder Mr Martei Unveils Smart NFC Networking & Link-in-Bio Platform',
    summary: 'Built and founded by Ghanaian tech creator and software engineer Mr Martei, Plexlink introduces a next-generation link-in-bio and digital contact card sharing platform with custom NFC products for instant, frictionless networking.',
    content: `ACCRA, GHANA — In an era where traditional paper business cards are rapidly becoming obsolete, Ghanaian tech creator and software engineer [Mr Martei](#/creator/mr-martei) has officially launched Plexlink, an all-in-one link-in-bio tool and smart contact sharing networking platform tailored for the modern African creator, entrepreneur, and business professional.

Unlike traditional internet service providers or fiber utilities, Plexlink operates at the cutting edge of personal branding and professional networking. The platform combines a customizable, high-speed digital link-in-bio profile with sleek physical NFC (Near Field Communication) smart cards, tags, and wristbands. With a single tap of a Plexlink NFC product against any modern smartphone, users can instantly share their contact card (vCard), social media links, portfolio showcases, WhatsApp messaging channel, and mobile money payment details—without requiring the recipient to download any external app.

"Networking in Ghana and across Africa has historically relied on paper cards that get lost, thrown away, or quickly outdated," explained founder and lead architect [Mr Martei](#/creator/mr-martei) during the launch in Accra. "We built Plexlink from the ground up to empower African creatives, corporate executives, and startup founders with an intelligent digital identity. Whenever your phone number, social handle, or portfolio changes, your Plexlink NFC card automatically serves the updated details in real-time."

Key features of the newly debuted Plexlink platform include:
• Smart Link-in-Bio: A lightning-fast, mobile-optimized microsite that aggregates all digital touchpoints into one cohesive brand destination.
• Direct Contact Sharing (vCard): One-tap contact saving that directly downloads full contact info into the recipient's phone address book.
• Custom NFC Hardware: Premium matte black, bamboo, and metal NFC smart cards embedded with secure contactless chips.
• Live Analytics & Lead Capture: Comprehensive analytics on profile views, click-through rates, and lead capture forms that connect directly with CRM systems.

Early beta testers among Ghanaian tech creators, real estate agencies in Airport Residential Area, and fintech founders have praised Plexlink for dramatically simplifying networking at conferences and casual meetings alike. With its formal launch in Ghana, Plexlink is poised to set a new standard for digital identity and contactless professional networking across West Africa.`,
    category: 'Tech',
    channel: 'Citi TV',
    author: 'Efua Mensah',
    publishedAt: '30 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 18500,
    likes: 1640,
    isBreaking: true,
    featuredCreatorId: 'mr-martei'
  },
  {
    id: 'art-1',
    title: 'Bank of Ghana Keeps Policy Rate Steady at 29% as Cedi Stabilizes Against Major Currencies',
    summary: 'The Monetary Policy Committee has opted to hold the rate steady, highlighting improving foreign exchange reserves and moderating food inflation across regional markets.',
    content: `The Bank of Ghana (BoG) has announced the decision of its Monetary Policy Committee (MPC) to maintain the policy rate at 29 percent. Governor Dr. Ernest Addison noted during the press briefing in Accra that recent fiscal consolidation measures and robust cocoa export receipts have provided strong cushioning for the Ghana Cedi.

Financial analysts across the country have reacted positively to the decision, noting that borrowing costs remain supportive of local manufacturing while curbing speculative forex demand. Commercial banks are expected to adjust lending rates progressively over the upcoming quarter.

Furthermore, foreign direct investment into Ghana's non-traditional export sector rose by 14% year-on-year, signaling renewed investor confidence in the macroeconomic stability program currently underway.`,
    category: 'Business',
    channel: 'JoyNews',
    author: 'Kwame Agyeman',
    publishedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 12450,
    likes: 890
  },
  {
    id: 'art-2',
    title: 'Silicon Accra: How Ghanaian Developers & Creators are Leading the AI Revolution in West Africa',
    summary: 'From agritech drones in Kumasi to fintech hubs in Airport Residential Area, young Ghanaian developers and creators are building world-class AI models tailored for local languages.',
    content: `Ghana’s tech ecosystem is undergoing an unprecedented boom. Venture capital inflows into Ghanaian tech startups hit a new high in Q3 2026, driven by breakthroughs in AI-powered financial inclusion, localized digital tooling, and agricultural logistics.

At the forefront are engineering graduates from KNUST and Ashesi University who are training large language models in Twi, Ga, and Ewe to bridge the digital divide for rural traders and farmers. Industry leaders predict Ghana is well on its way to becoming the premier tech sandbox of West Africa.`,
    category: 'Tech',
    channel: 'Citi TV',
    author: 'Efua Mensah',
    publishedAt: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    views: 9800,
    likes: 1120
  },
  {
    id: 'art-3',
    title: 'AFCON Qualifiers: Otto Addo Unveils 26-Man Squad for Double-Header Clash',
    summary: 'Captain Thomas Partey returns to lead the Black Stars squad alongside in-form strikers Mohammed Kudus and Antoine Semenyo for next week\'s decisive encounter.',
    content: `Head Coach Otto Addo has released the much-anticipated 26-man Black Stars squad for the upcoming Africa Cup of Nations qualifiers. The squad blends experienced campaigners with exciting young talents from the Ghana Premier League.

Fans in Accra and Kumasi have flooded social media with reactions, expressing optimism about the team's attacking depth. Training sessions open to the public at the Baba Yara Sports Stadium are scheduled to begin on Wednesday morning.`,
    category: 'Sports',
    channel: 'TV3 Ghana',
    author: 'Yaw Ampofo',
    publishedAt: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 18900,
    likes: 2450
  },
  {
    id: 'art-4',
    title: 'Inside the Creative Surge: Why Ghanaian Fashion & Music are Dominating Global Runways',
    summary: 'From Paris Fashion Week showcases featuring Kente fusions to Billboard Hot 100 charting Afrobeats artists, Ghana\'s cultural capital has never been higher.',
    content: `Ghanaian creativity is having a profound global moment. Designers working out of Jamestown and Osu are redefining luxury fashion with sustainable local textiles, while producers in East Legon are crafting the freshest sounds in modern music.

International collaborators are flocking to Accra for recording camps and fashion exhibitions, cementing the city as Africa's creative capital. Local artisans report a 40% surge in export orders over the past year.`,
    category: 'Entertainment',
    channel: 'UTV Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: '7 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 15600,
    likes: 1890
  },
  {
    id: 'art-5',
    title: 'National Electoral Commission Announces Readiness for Biometric Verification Upgrades',
    summary: 'EC Chairperson Jean Mensa assures political parties that state-of-the-art verification terminals will ensure transparent and seamless polling across all 275 constituencies.',
    content: `The Electoral Commission of Ghana has briefed stakeholders on its comprehensive roadmap for upcoming electoral exercises. The briefing highlighted rigorous stress testing of biometric verification devices and enhanced cybersecurity protocols designed in collaboration with local tech experts.

Representatives from major political parties attended the demonstration at the EC headquarters, praising the transparency of the preparation process.`,
    category: 'Politics',
    channel: 'GHOne TV',
    author: 'Kofi Boateng',
    publishedAt: '9 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 11200,
    likes: 740
  },
  {
    id: 'art-cybersecurity',
    title: 'National Cyber Security Authority Inaugurates AI Threat Monitoring Center to Shield Ghana\'s Mobile Money & Fintech Hubs',
    summary: 'Ghana\'s CSA has deployed a 24/7 automated threat intelligence hub leveraging machine learning to proactively protect over 20 million active mobile money wallets and financial APIs.',
    content: `ACCRA — In response to escalating global cyber threats targeting digital banking corridors, the Cyber Security Authority (CSA) of Ghana has officially commissioned its National Automated Threat Intelligence & Defense Center in Ridge, Accra.

The state-of-the-art facility integrates advanced AI detection algorithms trained on local transaction patterns to intercept phishing networks, unauthorized SIM swap attempts, and coordinated DDoS attacks aimed at commercial banks and telecom operators.

Speaking at the inauguration ceremony, the Director-General of the CSA emphasized that with Ghana processing over GH¢2 trillion in annual digital transactions, robust cyber defenses are essential for safeguarding economic stability. "Our financial sector is one of Africa\'s most advanced mobile money ecosystems. This AI-powered center guarantees real-time telemetry sharing across all licensed fintechs and commercial banks," he noted.

Local tech security researchers and digital rights groups have lauded the initiative, highlighting that early incident reporting protocols will bolster user confidence in cross-border digital commerce.`,
    category: 'Tech',
    channel: 'JoyNews',
    author: 'Kojo Antwi',
    publishedAt: '45 mins ago',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 11400,
    likes: 940
  },
  {
    id: 'art-ev-ghana',
    title: 'Electric Vehicles on the Rise in Accra as Clean-Tech Fleets and Solar Corridors Expand Rapidly',
    summary: 'Commercial ride-hailing operators and delivery networks across Greater Accra are rapidly deploying electric two-wheelers and solar-powered charging corridors, cutting fuel costs by up to 60%.',
    content: `A quiet green transportation revolution is transforming the streets of Accra. Driven by volatile global fuel prices and falling battery costs, Ghanaian clean-tech startups and transport cooperatives have deployed over 1,500 electric motorbikes and light commercial vans across the capital over the past six months.

Along the busy Spintex Road and Airport Residential Area, solar-backed battery swapping stations allow delivery couriers and commuters to swap depleted batteries for fully charged units in under 90 seconds.

Operators report dramatic operational savings, with fuel and maintenance costs dropping by nearly 60% compared to internal combustion engines. The Ministry of Transport confirmed that draft legislation offering tax incentives and duty exemptions for knocked-down EV assembly kits has been forwarded to Parliament, setting Ghana on course to become a regional manufacturing hub for electric two-wheelers.`,
    category: 'Tech',
    channel: 'Citi TV',
    author: 'Efua Mensah',
    publishedAt: '4 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 13200,
    likes: 1150
  },
  {
    id: 'art-ai-institute',
    title: 'University of Ghana Launches Pan-African AI Research Facility in Partnership with Global Tech Giants',
    summary: 'The Legon campus unveils a modern artificial intelligence laboratory equipped with high-performance computing clusters to train 10,000 African data scientists over the next three years.',
    content: `LEGON, ACCRA — The University of Ghana has inaugurated the West African Center for Advanced Machine Learning and Artificial Intelligence Research at its main campus in Legon.

Funded through a public-private partnership with global technology corporations and African philanthropic institutions, the center houses dedicated GPU compute clusters designed to train foundational AI models on African languages, health diagnostics, and climatological predictive mapping.

Vice-Chancellor Prof. Nana Aba Appiah Amfo noted during the ribbon-cutting ceremony that the facility will democratize access to world-class machine learning resources for students, researchers, and local developers. "Our goal is not merely to consume artificial intelligence built elsewhere, but to engineer homegrown intelligent systems that solve malaria eradication, crop yield optimization, and financial inclusion for our continent," she remarked.

The institute will offer fully funded master's and doctoral fellowships, alongside industry hackathons and accelerator programs for local software engineers.`,
    category: 'Tech',
    channel: 'GHOne TV',
    author: 'Dr. Selassie Mensah',
    publishedAt: '6 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 9450,
    likes: 870
  },
  {
    id: 'art-5g-trials',
    title: 'Telecel Ghana & MTN Conclude Dual-Network 5G Field Trials in Accra with 1.2 Gbps Speeds',
    summary: 'The National Communications Authority oversees landmark field tests achieving low latency and multi-gigabit throughput across ridge, Cantonments, and Tema Industrial Area.',
    content: `ACCRA — The rollout of fifth-generation (5G) telecommunications infrastructure in Ghana has taken a decisive step forward following the successful completion of dual-network field trials conducted jointly by MTN Ghana and Telecel Ghana under the supervision of the National Communications Authority (NCA).

Engineers conducting drive tests across Cantonments, Osu, and Tema reported sustained downlink speeds exceeding 1.2 Gigabits per second with latency below 9 milliseconds. The high bandwidth and ultra-low latency are slated to enable smart port automation at Tema Harbor, remote medical surgeries, and high-fidelity video broadcasts across the country.

The NCA confirmed that commercial spectrum allocations are finalized, with consumer 5G data packages expected to launch in key urban metropolitan centers before the end of the year.`,
    category: 'Tech',
    channel: 'JoyNews',
    author: 'Kwame Agyeman',
    publishedAt: '8 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 16300,
    likes: 1420
  },
  {
    id: 'art-cocoa-processing',
    title: 'Ghana Commissions $60M State-of-the-Art Cocoa Processing Plant in Tema to Double Value-Added Exports',
    summary: 'The new facility in the Tema Free Zones enclave will convert 50,000 metric tonnes of raw cocoa beans annually into high-grade confectionery butter, liquor, and gourmet chocolates.',
    content: `TEMA — In a decisive push toward industrial value addition, the Government of Ghana and consortium partners have officially commissioned a $60 million cocoa processing complex in the Tema Free Zones enclave.

Historically, Ghana has exported the bulk of its cocoa crop in raw bean form, capturing only a fraction of the global $130 billion chocolate confectionery market. The newly unveiled plant will process over 50,000 metric tonnes of cocoa beans annually into premium cocoa butter, baking powder, and artisanal confectionery for export to European and Asian markets.

Speaking to stakeholders, trade officials emphasized that local processing will generate over 1,200 direct manufacturing jobs and shield cocoa farmers from global commodity price swings. Several domestic chocolate brands are already partnering with the plant to scale up retail distribution across West Africa.`,
    category: 'Business',
    channel: 'TV3 Ghana',
    author: 'Samuel Baidoo',
    publishedAt: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 14800,
    likes: 1320
  },
  {
    id: 'art-afcfta-digital',
    title: 'AfCFTA Secretariat in Accra Reports 35% Surge in Cross-Border Digital Services and Payments',
    summary: 'The Pan-African Payment and Settlement System (PAPSS) sees exponential uptake as Ghanaian businesses trade frictionlessly with counterparts in Nigeria, Kenya, and Rwanda.',
    content: `ACCRA — The African Continental Free Trade Area (AfCFTA) Secretariat, headquartered in central Accra, has reported a record 35% year-on-year surge in cross-border digital service transactions processed through the Pan-African Payment and Settlement System (PAPSS).

The breakthrough system eliminates the need for African traders to convert local currencies into US dollars or euros when conducting cross-border commerce. Ghanaian software developers, textile designers, and agricultural aggregators are now settling invoices with commercial partners across East and Southern Africa in Ghanaian Cedis instantly.

Trade economists at the University of Ghana praise the platform for cutting exchange conversion fees by an estimated $5 billion annually across the continent, unlocking immense growth for small-and-medium enterprises.`,
    category: 'Business',
    channel: 'Citi TV',
    author: 'Abena Osei-Bonsu',
    publishedAt: '10 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 8900,
    likes: 780
  },
  {
    id: 'art-motorway',
    title: 'Accra-Tema Motorway Redevelopment Project Hits 70% Completion with 10-Lane Modern Expressway',
    summary: 'Major engineering progress on the country’s busiest commercial transit corridor promises to eliminate chronic commuter gridlock and link maritime cargo seamlessly to northern trade corridors.',
    content: `GREATER ACCRA — The Ministry of Roads and Highways has announced that the comprehensive redevelopment and expansion of the 19.5-kilometer Accra-Tema Motorway has achieved 70% structural completion.

The project transforms the historic two-lane dual carriage concrete roadway built in the 1960s into a modern 10-lane expressway featuring reinforced concrete pavements, grade-separated flyovers at Ashaiman and Klagon, and automated intelligent toll collection plazas.

Project engineers confirmed that all major bridge structures spanning the railway crossings are now fully erected, with final asphalt wearing courses scheduled to commence next month. Commuters and freight haulage operators who have endured prolonged delays praised the pace of construction, which is tracking two months ahead of schedule.`,
    category: 'Politics',
    channel: 'JoyNews',
    author: 'Kojo Asante',
    publishedAt: '7 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 21500,
    likes: 2100
  },
  {
    id: 'art-premier-league',
    title: 'Ghana Premier League: Medeama SC Clinches Thrilling 2-1 Win to Regain Top Spot on Standings',
    summary: 'A dramatic 92nd-minute header at Akoon Park sends Tarkwa supporters into delirium as the reigning champions secure three vital points in the heated title chase.',
    content: `TARKWA — Medeama Sporting Club reclaimed pole position in the Ghana Premier League on Sunday afternoon following a pulsating 2-1 victory over title rivals Samartex FC before a raucous capacity crowd at Akoon Park.

After an evenly contested first half that ended scoreless, Medeama broke the deadlock in the 58th minute through a sublime 25-yard curling free kick by midfield maestro Kwasi Donsu. Samartex struck back with a headed equalizer ten minutes later, setting up an intense final period.

In the second minute of stoppage time, substitute forward Derrick Fordjour outjumped two defenders to nod home a pin-point cross from the left wing, sending the home bench into wild celebrations. The result moves Medeama two points clear at the summit with six rounds remaining in the 2026 campaign.`,
    category: 'Sports',
    channel: 'TV3 Ghana',
    author: 'Yaw Ampofo',
    publishedAt: '11 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 17200,
    likes: 1850
  }
];

export const CONTENT_CREATORS: ContentCreator[] = [
  {
    id: 'mr-martei',
    name: 'Mr Martei (Justice Martei)',
    handle: '@mrmartei',
    platform: 'Multi-Platform',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '125K+ Network Followers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    bio: 'Founder of Plexlink, software engineer, and prominent Ghanaian tech creator known for building innovative digital identity products, link-in-bio systems, and tech breakdown content.',
    award: {
      title: 'Digital Product Founder & Tech Innovator of the Year',
      year: '2025',
      description: 'Awarded by Ghana Digital Innovation Awards for pioneering Plexlink, bringing smart NFC contactless networking and link-in-bio solutions to African professionals.'
    },
    profileArticle: `Justice Martei, widely recognized online as Mr Martei, is a standout Ghanaian software engineer, tech creator, and entrepreneur. He is the visionary founder of Plexlink—a breakthrough link-in-bio tool and contactless digital business card platform powered by custom NFC hardware.

Frustrated by the environmental waste and high friction of traditional paper business cards at African conferences and networking gatherings, Mr Martei designed and engineered Plexlink to let professionals share comprehensive contact cards, portfolios, and social profiles with a single tap of an NFC card on any smartphone.

Beyond product engineering, Mr Martei is an influential digital voice in the Ghanaian technology landscape, publishing practical breakdowns of modern web technologies, gadget architectures, and digital monetization strategies for emerging African creators and software developers.`,
    stats: {
      youtubeSubscribers: '42K',
      twitterFollowers: '38K',
      instagramFollowers: '45K',
      engagementRate: '12.8%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@mrmartei',
      twitter: 'https://twitter.com/mrmartei',
      instagram: 'https://instagram.com/mrmartei'
    }
  },
  {
    id: 'delppy',
    name: 'Delppy (Bright Delali)',
    handle: '@delppy_',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '85K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    bio: 'Respected Ghanaian tech YouTuber and gadget reviewer renowned for thorough smartphone reviews, audio gear testing, desk setups, and buying guides.',
    award: {
      title: 'Consumer Tech Reviewer of the Year',
      year: '2025',
      description: 'Conferred at the Accra Digital Media Awards for honest, unbiased consumer electronics testing and smartphone buying guides in Ghana.'
    },
    profileArticle: `Bright Delali, known across social media as Delppy, has built one of Ghana’s most reliable consumer electronics review channels. From flagships by Apple, Samsung, and Google to budget-friendly Android devices from Tecno and Infinix, Delppy delivers real-world performance tests tailored to Ghanaian connectivity and power realities.

His calm, detail-oriented presentation style and transparent buying advice have made him the go-to resource for anyone in Accra or Kumasi looking to upgrade their smartphone, laptop, or desk setup.`,
    stats: {
      youtubeSubscribers: '85K',
      instagramFollowers: '52K',
      tiktokFollowers: '68K',
      engagementRate: '9.6%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@delppy_',
      instagram: 'https://instagram.com/delppy_'
    }
  },
  {
    id: 'rick-aqua',
    name: 'Rick Aqua (Patrick Aqua)',
    handle: '@rickaqua',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '195K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    bio: 'Celebrated Ghanaian tech reviewer and video creator known for cinematic B-roll, smartphone camera shootouts, Apple ecosystem deep dives, and wearable tech.',
    award: {
      title: 'Cinematic Tech Storyteller of the Year',
      year: '2025',
      description: 'Awarded by Ghana Tech Content Summit for elevating video production values and visual storytelling in African technology media.'
    },
    profileArticle: `Patrick Aqua, popularly known as Rick Aqua, has redefined technology review videography in West Africa. With ultra-crisp cinematography, creative lighting, and engaging sound design, Rick Aqua produces tech reviews that rival the best international creators.

His channel covers comprehensive smartphone shootouts, real-world camera testing, daily-driver tech essentials, and smart home appliances, demonstrating how premium technology integrates into modern African lifestyle.`,
    stats: {
      youtubeSubscribers: '195K',
      instagramFollowers: '78K',
      tiktokFollowers: '125K',
      engagementRate: '11.4%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@rickaqua',
      twitter: 'https://twitter.com/rickaqua',
      instagram: 'https://instagram.com/rickaqua'
    }
  },
  {
    id: 'dessy-ocean',
    name: 'Dessy Ocean (Desmond Ocean)',
    handle: '@dessyocean',
    platform: 'TikTok',
    category: 'Tech & Culture',
    status: 'Breakthrough',
    subscribers: '310K Followers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    bio: 'Dynamic Ghanaian tech content creator famous on TikTok and Instagram for fast-paced smartphone hidden features, iOS & Android tips, and AI productivity tricks.',
    award: {
      title: 'Short-Form Tech Educator of the Year',
      year: '2026',
      description: 'Presented by West Africa Creator Guild for making smartphone productivity and software tricks universally accessible to youth.'
    },
    profileArticle: `Desmond Ocean, recognized as Dessy Ocean, has unlocked viral success through short-form educational tech content. By distilling complex software features, hidden smartphone settings, and artificial intelligence prompts into engaging 60-second reels, Dessy has amassed over 300,000 followers across TikTok and Instagram.

His bite-sized tutorials frequently trend on Ghanaian social media, providing everyday smartphone users with immediate value and digital literacy.`,
    stats: {
      tiktokFollowers: '310K',
      instagramFollowers: '110K',
      engagementRate: '14.2%'
    },
    socialLinks: {
      tiktok: 'https://tiktok.com/@dessyocean',
      instagram: 'https://instagram.com/dessyocean'
    }
  },
  {
    id: 'wazz',
    name: 'Wazz (Kwabena Wazz)',
    handle: '@wazz_tech',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '95K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    bio: 'Ghana’s leading PC building and custom hardware creator, specializing in high-performance desktop rigs, thermal benchmarks, and gaming hardware.',
    award: {
      title: 'Hardware Specialist & PC Modder Award',
      year: '2025',
      description: 'Awarded by Accra Gaming & Hardware Community for pioneering custom gaming PC build tutorials in Ghana.'
    },
    profileArticle: `Kwabena Wazz has carved out a unique and indispensable niche in Ghana’s digital landscape as a master PC builder and hardware diagnostic expert. Through detailed build logs, component compatibility guides, and troubleshooting videos, Wazz teaches African gamers, 3D artists, and software engineers how to assemble and optimize their own high-performance workstations.`,
    stats: {
      youtubeSubscribers: '95K',
      twitterFollowers: '62K',
      engagementRate: '10.3%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@wazz_tech',
      twitter: 'https://twitter.com/wazz_tech'
    }
  },
  {
    id: 'clifford-scott',
    name: 'Clifford Scott',
    handle: '@cliffordscott',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '120K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    bio: 'Tech educator and digital opportunities creator providing practical software guides, online monetization tutorials, and gadget insights.',
    award: {
      title: 'Tech Education Creator of the Year',
      year: '2025',
      description: 'Conferred by Ghana EdTech Network for accessible digital skills tutorials and software guidance.'
    },
    profileArticle: `Clifford Scott has empowered tens of thousands of young Ghanaians to navigate digital tools and internet monetization opportunities. His approachable tutorials break down software applications, digital banking tools, web navigation, and gadget purchasing advice with precision and clarity.`,
    stats: {
      youtubeSubscribers: '120K',
      twitterFollowers: '58K',
      engagementRate: '9.8%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@cliffordscott',
      twitter: 'https://twitter.com/cliffordscott'
    }
  },
  {
    id: 'selorm-tech',
    name: 'Selorm Tech',
    handle: '@selormtech',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Breakthrough',
    subscribers: '58K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    bio: 'Breakthrough tech reviewer who champions accessible tech analysis in both Twi and English, focusing on everyday mobile technology.',
    award: {
      title: 'Indigenous Language Tech Advocate',
      year: '2026',
      description: 'Recognized at Ghana Silicon Summit for pioneering hardware reviews and digital safety tutorials in local Ghanaian dialects.'
    },
    profileArticle: `Selorm Tech has created a refreshing wave in Ghana's tech creator community by delivering tech reviews that seamlessly incorporate local Ghanaian idioms and Twi language explanations. This inclusive approach ensures that digital product knowledge is not confined to English speakers, expanding tech literacy across Ghana.`,
    stats: {
      youtubeSubscribers: '58K',
      tiktokFollowers: '85K',
      engagementRate: '13.7%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@selormtech',
      twitter: 'https://twitter.com/selormtech'
    }
  },
  {
    id: 'kalyjay',
    name: 'Kalyjay (Gyimah Emmanuel Koffie)',
    handle: '@KalyJay',
    platform: 'Multi-Platform',
    category: 'Pop Culture & Critique',
    status: 'Established',
    subscribers: '1.2M Followers on X',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    bio: 'Ghana’s leading digital influencer and social media campaigner, initiator of the historic #FixTheCountry advocacy movement, and top culture voice on X (Twitter).',
    award: {
      title: 'Digital Campaigner & Cultural Voice of the Decade',
      year: '2025',
      description: 'Conferred by Ghana Social Media & Digital Honours for championing youth civic participation and digital advocacy.'
    },
    profileArticle: `Gyimah Emmanuel Koffie, universally celebrated as Kalyjay, is a defining figure in modern Ghanaian digital culture. As the key initiator of the landmark #FixTheCountry social movement, Kalyjay mobilized millions of young Ghanaians to demand governance accountability, youth employment, and systemic reforms.

Beyond activism, his nightly Twitter Spaces and viral culture commentary serve as the town hall of Ghanaian youth discourse, connecting entertainment stars, politicians, and everyday citizens.`,
    stats: {
      twitterFollowers: '1.2M',
      instagramFollowers: '480K',
      engagementRate: '15.4%'
    },
    socialLinks: {
      twitter: 'https://twitter.com/KalyJay',
      instagram: 'https://instagram.com/kalyjay'
    }
  },
  {
    id: 'asantewaa',
    name: 'Asantewaa (Martina Dwamena)',
    handle: '@iam_asantewaa_',
    platform: 'TikTok',
    category: 'Dance & Viral',
    status: 'Established',
    subscribers: '3.4M Followers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    bio: 'Ghana’s premier TikTok superstar, certified nurse, actress, and brand ambassador famous for viral dance routines, comedy skits, and lifestyle elegance.',
    award: {
      title: 'TikTok Influencer of the Year',
      year: '2025',
      description: 'Awarded by Ghana Entertainment Awards for unmatched engagement and brand collaborations.'
    },
    profileArticle: `Martina Dwamena, known to millions as Asantewaa, transitioned from a professional career in nursing to become Ghana’s undisputed queen of TikTok. Her seamless blend of relatable Ghanaian family sketches, infectious dance challenges, and brand ambassadorships has set industry standards for female digital creators across West Africa.`,
    stats: {
      tiktokFollowers: '3.4M',
      instagramFollowers: '1.9M',
      engagementRate: '9.8%'
    },
    socialLinks: {
      tiktok: 'https://tiktok.com/@iam_asantewaa_',
      instagram: 'https://instagram.com/iam_asantewaa_'
    }
  },
  {
    id: 'endurance-grand',
    name: 'Endurance Grand (Endurance Dedzo)',
    handle: '@endurancegrand',
    platform: 'TikTok',
    category: 'Dance & Viral',
    status: 'Established',
    subscribers: '4.1M Followers',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    bio: 'Lead dancer with DWP Academy, international choreographer, and TikTok icon renowned for introducing Ghanaian street dance routines to the global stage.',
    award: {
      title: 'African Dancer & Choreographer of the Year',
      year: '2025',
      description: 'Conferred by Africa Dance Honours for championing African choreography on global concert stages and digital media.'
    },
    profileArticle: `Endurance Dzigbordi Dedzo, affectionately known as Endurance Grand, represents the vanguard of modern African choreography. Operating through DWP Academy in Accra, her viral TikTok routines set the dance trends for songs by global superstars including Davido, Burna Boy, and Stonebwoy.`,
    stats: {
      tiktokFollowers: '4.1M',
      instagramFollowers: '1.7M',
      engagementRate: '11.8%'
    },
    socialLinks: {
      tiktok: 'https://tiktok.com/@endurancegrand',
      instagram: 'https://instagram.com/endurancegrand'
    }
  },
  {
    id: 'official-starter',
    name: 'Official Starter (Ernest Kemevor)',
    handle: '@officialstarter_',
    platform: 'TikTok',
    category: 'Comedy & Lifestyle',
    status: 'Established',
    subscribers: '2.4M Followers',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    bio: 'Beloved viral creator and dancer famous for dancing joyfully alongside market women at Makola Market, bringing Ghanaian street culture to global acclaim.',
    award: {
      title: 'Cultural Ambassador & Joy Creator Award',
      year: '2025',
      description: 'Presented by Ghana Tourism Authority for celebrating Ghanaian informal market culture and radiating authentic joy to global audiences.'
    },
    profileArticle: `Ernest Kemevor, widely adored as Official Starter, touched the world with a singularly wholesome creative concept: dancing alongside everyday Ghanaian market mothers and traders at Makola Market and Kejetia. His viral videos have received praise from international artists, daytime talk shows, and cultural institutions worldwide.`,
    stats: {
      tiktokFollowers: '2.4M',
      instagramFollowers: '1.1M',
      engagementRate: '12.5%'
    },
    socialLinks: {
      tiktok: 'https://tiktok.com/@officialstarter_',
      instagram: 'https://instagram.com/officialstarter_'
    }
  },
  {
    id: 'wode-maya',
    name: 'Wode Maya (Kobina Ackon)',
    handle: '@wodemaya',
    platform: 'YouTube',
    category: 'Travel & Heritage',
    status: 'Established',
    subscribers: '1.6M Subscribers',
    avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=1200&q=80',
    bio: 'Pioneering Pan-African YouTuber highlighting positive development, real estate, culture, and entrepreneurial successes across the African continent.',
    award: {
      title: 'Pan-African Tourism & Storyteller Award',
      year: '2024',
      description: 'Awarded by African Union Diaspora Directorate for shifting global perceptions and championing intra-African tourism.'
    },
    profileArticle: `Kobina Ackon, universally known as Wode Maya, is one of the most transformative independent documentarians on the African continent. With a motto of "Africa to the World," his channel showcases thriving businesses, luxury real estate, and cultural heritage, dispelling negative stereotypes.`,
    stats: {
      youtubeSubscribers: '1.6M',
      instagramFollowers: '680K',
      engagementRate: '8.4%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@wodemaya',
      twitter: 'https://twitter.com/wodemaya'
    }
  },
  {
    id: 'kwadwo-sheldon',
    name: 'Kwadwo Sheldon (Bernard Kwadwo Amoafo)',
    handle: '@kwadwosheldon',
    platform: 'YouTube',
    category: 'Pop Culture & Critique',
    status: 'Established',
    subscribers: '680K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    bio: 'Founder of Kwadwo Sheldon Studios, digital satirist, and social commentator famous for "Yawa of the Day" and uncompromising media critique.',
    award: {
      title: 'Digital Media Satirist of the Year',
      year: '2025',
      description: 'Awarded by Ghana Bloggers Association for pioneering fearless digital critique and building a full-scale digital broadcasting studio.'
    },
    profileArticle: `Bernard Kwadwo Amoafo, known as Kwadwo Sheldon, is a powerhouse in Ghanaian online entertainment. Through flagship shows like "Yawa of the Day" and celebrity interview formats, Sheldon holds politicians, musicians, and public figures accountable while building one of the nation's premier digital production studios.`,
    stats: {
      youtubeSubscribers: '680K',
      twitterFollowers: '850K',
      engagementRate: '10.8%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@kwadwosheldon',
      twitter: 'https://twitter.com/kwadwosheldon'
    }
  },
  {
    id: 'sdk-dele',
    name: 'SDK Dele (Sadik Sulley)',
    handle: '@sdkdele',
    platform: 'Multi-Platform',
    category: 'Comedy & Lifestyle',
    status: 'Established',
    subscribers: '1.1M Followers',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    bio: 'Renowned Ghanaian comedian, actor, and creator of the viral "SDK Food Tour" showcasing authentic local Ghanaian street cuisine.',
    award: {
      title: 'Comedic Creator & Food Culture Icon',
      year: '2025',
      description: 'Conferred by Ghana Comedy Guild for timeless family humor and spotlighting indigenous Ghanaian street gastronomy.'
    },
    profileArticle: `Sadik Sulley, widely recognized as SDK Dele, has endeared himself to multiple generations of Ghanaians. From his iconic skits depicting typical Ghanaian parent-child dynamics to his wildly popular "SDK Food Tour" that champions local chop bars and street food vendors, SDK continues to be a cornerstone of wholesome Ghanaian entertainment.`,
    stats: {
      youtubeSubscribers: '480K',
      instagramFollowers: '1.1M',
      tiktokFollowers: '1.3M',
      engagementRate: '11.5%'
    },
    socialLinks: {
      youtube: 'https://youtube.com/@sdkdele',
      instagram: 'https://instagram.com/sdkdele'
    }
  }
];

export const INITIAL_POLL: PollQuestion = {
  id: 'poll-1',
  question: 'Which Ghanaian tech tool or digital innovation will have the greatest impact on professional networking in 2026?',
  options: [
    { id: 'opt-1', text: 'Plexlink (Smart NFC Cards & Link-in-Bio)', votes: 2450 },
    { id: 'opt-2', text: 'Mobile Money Interoperability & Payments', votes: 1120 },
    { id: 'opt-3', text: 'Local Language AI Models & Tools', votes: 980 },
    { id: 'opt-4', text: 'Virtual Business Expos & Networking', votes: 410 }
  ],
  totalVotes: 4960
};
