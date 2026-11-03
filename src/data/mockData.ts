import { NewsArticle, ContentCreator, PollQuestion } from '../types';

export const BREAKING_NEWS = [
  "Plexlink officially launches in Ghana: Founder Mr Martei debuts smart NFC networking & link-in-bio platform with GHS 300 standard cards.",
  "Next-Gen Infraco (NGIC) consortium advances 5G wholesale deployment partnering with Telecel Ghana & Ascend Digital.",
  "Hubtel processes over $2 Billion (GH¢30B+) in merchant transaction volume across Kokomlemle HQ operations.",
  "Zipline Ghana marks 6 autonomous medical drone distribution centers serving rural healthcare with Ghana Health Service."
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'art-plexlink',
    title: 'Plexlink Launches in Ghana: Founder Mr Martei Unveils Smart NFC Networking & Link-in-Bio Platform',
    summary: 'Built and founded by Ghanaian tech creator and developer Mr Martei (Justice Martei Mamah), Plexlink introduces a next-generation link-in-bio and digital contact card sharing platform with custom NFC products for instant, frictionless networking.',
    content: `ACCRA, GHANA — In an era where traditional paper business cards are rapidly becoming obsolete, Ghanaian tech creator and software engineer [Mr Martei](#/creator/mr-martei) (Justice Martei Mamah) has officially launched Plexlink (https://www.plexlink.site/), an all-in-one link-in-bio tool and smart contact sharing networking platform tailored for modern African creators, entrepreneurs, and business professionals.

Unlike traditional internet service providers or fiber utilities, Plexlink operates at the cutting edge of personal branding, smart contact card sharing, and professional networking. The platform combines a customizable, high-speed digital link-in-bio profile with sleek physical NFC (Near Field Communication) smart cards, tags, and stickers. With a single tap of a Plexlink NFC product against any modern smartphone, users can instantly share their contact card (vCard), social media links, portfolio showcases, WhatsApp messaging channel, and mobile money payment details—without requiring the recipient to download any external app.

"Networking in Ghana and across Africa has historically relied on paper cards that get lost, thrown away, or quickly outdated," explained founder and lead developer [Mr Martei](#/creator/mr-martei) during the launch in Accra. "We built Plexlink from the ground up to empower African creatives, corporate executives, and startup founders with an intelligent digital identity. Whenever your phone number, social handle, or portfolio changes, your Plexlink profile automatically updates in real-time."

Verified Product & Pricing Details:
• Standard Plexlink NFC/QR Card: GHS 300 (one-time fee, no monthly subscription required).
• Custom Branded Plexlink Card: GHS 450 (custom corporate logo, branded design, and personalized finish).
• Universal Compatibility: Tap-to-share via NFC or scan via custom QR code, functioning seamlessly on both iOS and Android without an app installation.
• Real-Time Cloud Management: Instantly edit contact information, social links, and custom themes via the Plexlink web dashboard.
• Verified Digital Badges: Integrated credibility indicators and direct analytics tracking for profile impressions and lead captures.

Early beta testers among Ghanaian tech creators, real estate agencies in Airport Residential Area, and fintech founders have praised Plexlink for dramatically simplifying networking at conferences and casual meetings alike. With its formal launch in Ghana, Plexlink is poised to set a new standard for digital identity and contactless professional networking across West Africa.`,
    category: 'Tech',
    channel: 'Channel One TV',
    author: 'Efua Mensah',
    publishedAt: '30 mins ago',
    imageUrl: 'https://i.ibb.co/Z6Dsp6y5/Taplink-mockup.png',
    articleBodyImage: 'https://i.ytimg.com/vi/QZYg94MzPQA/hqdefault.jpg',
    articleBodyCaption: 'Product Demo: Founder Mr Martei demonstrating Plexlink contactless NFC networking & mobile dashboard in action',
    readTime: '4 min read',
    views: 18500,
    likes: 1640,
    isBreaking: true,
    featuredCreatorId: 'mr-martei'
  },
  {
    id: 'art-tech-creators',
    title: 'Top Ghanaian Tech Creators Reshaping the Ecosystem: From Coding Tutorials to NFC Innovation',
    summary: 'Ghanaian tech influencers including Delppy, Rick Aqua, Dessy Ocean, Wazz, Clifford Scott, and Mr Martei are driving mass digital literacy and gadget literacy across West Africa.',
    content: `ACCRA — Ghana's technology ecosystem is experiencing an unprecedented surge in digital content creation, propelled by a dynamic cohort of tech reviewers, hardware testers, and product creators who demystify technology for millions across the continent.

Leading the movement is [Delppy](#/creator/delppy) (Emmanuel Obuobi Fianko, @delppy1_), whose 293.6K TikTok and 231K Instagram followers turn to him for cybersecurity education, real-world smartphone benchmarks, and AI tools. Alongside Delppy is [Wazz](#/creator/wazz) (@onetruewazz, 480K on Instagram and 85.6K on TikTok), with whom he co-hosts the acclaimed YouTube tech show Bytes Unlocked (@BYTESUNLOCKED, 18.3K subscribers).

Visual aesthetics and cinematic production are championed by [Rick Aqua](#/creator/rick-aqua) (Patrick Acquah, @rick_aqua), whose crisp smartphone shootouts reach 162K Instagram followers, 47.2K YouTube subscribers (with over 11.16 million total views), and 23.2K on TikTok. Meanwhile, [Dessy Ocean](#/creator/dessy-ocean) (Desmond Ofori Appiah, @dessy_ocean) commands 293.2K TikTok followers and 156K on Instagram, having been selected by Meta in May 2024 to promote Meta's AI technologies in Ghana.

Younger creators are also making monumental strides: [Clifford Scott](#/creator/clifford-scott) (@cliffordscott_), known as CoolTechie, has built a following of 150K on TikTok and 46.4K on YouTube with student-friendly software guides and desk setup inspiration. Bridging local language gaps, [Kwabena Boateng](#/creator/selorm-tech) of Tech In Twi (@TechInTwi) educates 190,000 YouTube subscribers and 146,000+ Facebook followers in the Twi language.

And proving that creators can also build tangible hardware products, [Mr Martei](#/creator/mr-martei) (Justice Martei Mamah, @mr.martei with 16.2K on Instagram and 8.9K on TikTok) has built and launched Plexlink, Ghana's premier smart NFC business card and link-in-bio platform. Together, these creators are cementing Ghana as West Africa's most vibrant digital storytelling sandbox.`,
    category: 'Tech',
    channel: 'Channel One TV',
    author: 'Efua Mensah',
    publishedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    articleBodyImage: 'https://delppy.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-04-at-09.50.07-2-390x220.jpeg',
    articleBodyCaption: 'Ghana Tech Media: Leading creators and educators gathering to discuss digital transformation and consumer technology in West Africa',
    readTime: '5 min read',
    views: 14200,
    likes: 1250
  },
  {
    id: 'art-1',
    title: 'Telecel Ghana & NGIC Consortium Accelerate Nationwide 5G Shared Wholesale Infrastructure',
    summary: 'Ghana rolls out high-speed 5G via Next-Gen Infraco (NGIC), a shared infrastructure consortium partnering with Ascend Digital, Nokia, Radisys, Tech Mahindra, and Telecel Ghana.',
    content: `ACCRA — Ghana's telecommunications landscape has entered a transformative era as Telecel Ghana, alongside mobile network operators and technology partners, advances commercial deployment on the nation's shared 5G network.

Unlike traditional single-operator spectrum auctions where telecom operators deploy duplicative cell towers, Ghana's national 5G wholesale infrastructure is operated by Next-Gen Infraco (NGIC). The strategic consortium brings together the Government of Ghana, Ascend Digital, K-NET, Radisys, Nokia, Tech Mahindra, AT Ghana, and Telecel Ghana.

By utilizing a shared wholesale model, NGIC enables rapid capital expenditure sharing, ensuring that high-throughput 5G connectivity reaches not only commercial hubs in Accra, Tema, and Kumasi, but also underserved regional districts across Takoradi, Tamale, and Sunyani.

Engineering trials conducted in Ridge and Cantonments demonstrated sustained mobile data speeds exceeding 1 Gbps, providing the digital backbone needed for smart logistics, industrial IoT, telemedicine, and fintech innovation across Ghana.`,
    category: 'Tech',
    channel: 'JoyNews',
    author: 'Kwabena Osei',
    publishedAt: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 16300,
    likes: 1420
  },
  {
    id: 'art-2',
    title: 'Hubtel Crosses $2B in Processed Transaction Volume, Expanding Merchant Operating Ecosystem Across Ghana',
    summary: 'Accra-based fintech pioneer Hubtel records over $2 Billion (GH¢30 Billion+) in annual processed volume, empowering tens of thousands of merchants across food, grocery, and utilities.',
    content: `KOKOMLEMLE, ACCRA — Ghanaian fintech powerhouse Hubtel, founded by Alex Bram and headquartered in Kokomlemle, Accra, has officially surpassed $2 Billion USD (equivalent to over GH¢30 Billion) in processed annual transaction volume across its digital payment and retail operating system.

Licensed as an Enhanced Payment Service Provider by the Bank of Ghana, Hubtel has transformed from an early SMS gateway provider into an essential merchant operating ecosystem. Today, the platform connects thousands of neighborhood retail stores, supermarkets, pharmacies, and food vendors with seamless point-of-sale checkout, mobile money aggregation, and instant on-demand courier delivery.

"Our mission has always been to help Ghanaian businesses find and care for customers," stated CEO Alex Bram. "Reaching the $2 Billion volume threshold demonstrates the resilience of Ghana's digital economy and the trust local merchants place in locally built fintech infrastructure."

Hubtel's proprietary routing technology has reduced transaction failure rates to under 0.5%, making it one of the most reliable payment rails in West Africa.`,
    category: 'Business',
    channel: 'Channel One TV',
    author: 'Samuel Baidoo',
    publishedAt: '4 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 12450,
    likes: 890
  },
  {
    id: 'art-3',
    title: 'Ashesi University AI & Robotics Lab Pioneers Local Language NLP and Agricultural Drone Systems',
    summary: 'Located in Berekuso, Ashesi University under Patrick Awuah expands its robotics and ethical AI laboratory, training models in Twi, Ewe, and Ga while optimizing crop yields.',
    content: `BEREKUSO, EASTERN REGION — Nestled on the scenic hills of Berekuso, Ashesi University has unveiled major research breakthroughs from its Artificial Intelligence and Robotics Laboratory, founded under the leadership of university president Patrick Awuah.

The research center is pioneering ethical AI systems tailored to West African developmental priorities. Key initiatives include training Natural Language Processing (NLP) models capable of understanding and synthesizing local languages—including Twi, Ewe, and Ga—to allow illiterate rural citizens to access banking and healthcare advisories through simple voice interfaces.

Simultaneously, the university's robotics engineering team has deployed autonomous agricultural drone prototypes equipped with multispectral sensors. These drones survey smallholder farms across the Eastern and Central regions, detecting cocoa swollen shoot virus and maize armyworm infestations weeks before visible symptoms appear.

"African universities must build technology that answers African problems," noted Patrick Awuah. "Our students are combining computer vision, ethical machine learning, and embedded hardware to generate tangible economic value for local communities."`,
    category: 'Tech',
    channel: 'GHOne TV',
    author: 'Dr. Selassie Mensah',
    publishedAt: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 9800,
    likes: 1120
  },
  {
    id: 'art-4',
    title: 'AfroFuture Fest at El Wak Stadium Generates Massive Cultural & Economic Windfall for Accra',
    summary: 'Culture Management Group (CMG) co-founder Abdul Abdullah celebrates AfroFuture festival at El Wak Stadium, driving tens of millions of dollars in hospitality and tourism revenue.',
    content: `ACCRA — The transformative cultural and economic impact of AfroFuture (formerly Afrochella) was on full display as tens of thousands of diaspora travelers and local patrons converged on El Wak Stadium in Accra for the premier African music, fashion, and art festival.

Organized by Culture Management Group (CMG) and co-founded by Abdul Abdullah, the multi-day festival has cemented Ghana as the December epicenter of the global African renaissance. In addition to star-studded performances by leading African musical acts, the festival featured food trucks by local culinary creators, runway showcases of artisanal Kente fusions, and an entrepreneurship expo connecting African diaspora angel investors with Ghanaian tech and retail startups.

According to preliminary data from the Ghana Tourism Authority, the festival week generated over $100 million in direct and indirect tourism receipts across hotels, ride-hailing services, restaurants, and local artisan markets in Osu, Jamestown, and Labadi.`,
    category: 'Entertainment',
    channel: 'UTV Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: '6 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 15600,
    likes: 1890
  },
  {
    id: 'art-5',
    title: 'Solar Mini-Grids Power Northern Ghana Agro-Processing Hubs Under National Renewable Master Plan',
    summary: 'Supported by the World Bank, AfDB, and Ghana Renewable Energy Master Plan, solar mini-grids in Northern and Savannah regions boost groundnut, shea butter, and grain processing.',
    content: `TAMALE & SAVANNAH REGION — A sustainable energy revolution is sweeping through northern Ghana. Under the framework of Ghana's Renewable Energy Master Plan (REMP), newly commissioned off-grid solar mini-grids backed by the African Development Bank (AfDB) and the World Bank are powering rural agro-processing cooperatives across the Northern, Savannah, and Upper East regions.

Prior to the rollout, women-led cooperatives in rural enclaves relied on costly diesel generators or manual crushing to produce shea butter and groundnut oil. The new high-capacity solar installations provide dependable 24-hour green electricity to operate mechanized mills, vacuum-packaging units, and cold-storage facilities.

Local cooperative leaders in Bole and Sawla report that reliable solar power has doubled their daily production capacity while cutting processing energy overheads by over 45%, enabling local producers to meet international export certifications for organic shea butter destined for European markets.`,
    category: 'Business',
    channel: 'TV3 Ghana',
    author: 'Kofi Mensah',
    publishedAt: '7 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 11400,
    likes: 940
  },
  {
    id: 'art-6',
    title: 'Accra Startup Ecosystem Expands with MEST Africa, Impact Hub Accra and Stanbic Incubator Leading Growth',
    summary: 'East Legon, Osu, and Airport City solidify their standing as tech epicenters as coworking spaces and venture hubs mentor the next generation of African founders.',
    content: `ACCRA — Ghana's capital city continues to attract international venture capital and entrepreneurial talent, anchored by a cluster of world-class incubator hubs and collaborative workspaces.

In East Legon, MEST Africa (Meltwater Entrepreneurial School of Technology) continues its decade-long legacy of providing full software engineering and business development fellowships to pan-African founders, backing high-growth startups with seed funding and global investor access.

Meanwhile in Osu, Impact Hub Accra fosters grassroots climate and creative innovation, serving as a dynamic convening center for creative entrepreneurs and digital nomads. At Silver Star Tower in Airport City, the Stanbic Incubator, alongside collaborative hubs like Basecamp Initiative and Koko King tech spaces, provides fintech and corporate innovation programs.

Venture analysts highlight that the density of tech talent, stable broadband infrastructure, and investor networking hubs makes Accra one of the top four tech investment destinations in Sub-Saharan Africa.`,
    category: 'Tech',
    channel: 'Channel One TV',
    author: 'Efua Mensah',
    publishedAt: '8 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 13200,
    likes: 1150
  },
  {
    id: 'art-7',
    title: 'Bank of Ghana Tests Offline CBDC: Giesecke+Devrient Partnered eCedi Successfully Piloted in Sefwi Asafo',
    summary: 'The Bank of Ghana and G+D conclude historic retail eCedi offline tests, enabling smartcard and wearable payments in remote Western North communities without internet.',
    content: `SEFWI ASAFO & ACCRA — The Bank of Ghana (BoG) has achieved a global milestone in central bank digital currency (CBDC) innovation through its retail eCedi pilot conducted in partnership with German technology firm Giesecke+Devrient (G+D).

While urban testing in Accra evaluated digital banking wallet interoperability and QR-code merchant checkouts, the landmark phase took place in Sefwi Asafo, a cocoa-farming community in the Western North Region characterized by limited cellular coverage.

Using specialized near-field contactless smartcards and wearable NFC wristbands loaded with cryptographic offline tokens, local market traders, taxi drivers, and farmers conducted consecutive transactions entirely without internet or cellular connectivity. The offline eCedi successfully settled balances upon later synchronization, proving that digital currencies can foster true financial inclusion for unbanked and off-grid populations.`,
    category: 'Business',
    channel: 'JoyNews',
    author: 'Kwame Agyeman',
    publishedAt: '9 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 12450,
    likes: 890
  },
  {
    id: 'art-8',
    title: 'Suame Magazine Artisans & KNUST Brew-Hammond Energy Centre Pioneer Electric Vehicle Conversions',
    summary: 'Engineers from KNUST collaborate with informal mechanics in Kumasi\'s Suame Magazine, retrofitting combustion minibuses into clean electric battery-swapping fleets.',
    content: `KUMASI, ASHANTI REGION — In an extraordinary convergence of academic engineering and informal industrial brilliance, researchers from The Brew-Hammond Energy Centre at KNUST (Kwame Nkrumah University of Science and Technology) have teamed up with veteran automotive artisans at Kumasi's famous Suame Magazine.

Suame Magazine, one of West Africa's largest informal engineering clusters with over 200,000 mechanics and metalworkers, has begun converting retired internal combustion minibuses (trotros) and light trucks into fully electric drivetrains.

Supported by Ghanaian EV pioneers like SolarTaxi and battery-swapping network Kofa, the collaborative initiative designs modular lithium-iron-phosphate (LFP) battery packs suited for Ghanaian terrain. Fleet operators participating in the pilot between Adum and Kejetia report cutting daily fuel and maintenance expenses by nearly 60%, establishing a viable template for homegrown electric vehicle manufacturing.`,
    category: 'Tech',
    channel: 'JoyNews',
    author: 'Kwabena Osei',
    publishedAt: '10 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    views: 14800,
    likes: 1320
  },
  {
    id: 'art-9',
    title: 'Ghana Card Unified Digital Identity: NIA Integration with GRA, SSNIT, and Mobile Banking Surpasses 18 Million Citizens',
    summary: 'The National Identification Authority (NIA) integrates biometric Ghana Cards across the Ghana Revenue Authority (GRA), SSNIT, NHIS, and telecom SIM registers.',
    content: `ACCRA — Ghana's national digital identity transformation has achieved an unprecedented milestone as the National Identification Authority (NIA) announced that more than 18 million verified citizens and permanent residents have been issued the biometric Ghana Card.

Under the government's digital harmonization policy, the Ghana Card's unique personal identification number now acts as the unified Tax Identification Number (TIN) for the Ghana Revenue Authority (GRA), the primary Social Security and National Insurance Trust (SSNIT) identification, and the mandatory verification key for National Health Insurance Scheme (NHIS) linkages.

Commercial banks, fintech operators, and telecommunications companies report that mandatory biometric verification has reduced identity theft, loan application fraud, and SIM-swap scams by more than 75%, providing a solid, fraud-resistant foundation for digital commerce across the nation.`,
    category: 'Politics',
    channel: 'GHOne TV',
    author: 'Kofi Boateng',
    publishedAt: '11 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 11200,
    likes: 740
  },
  {
    id: 'art-10',
    title: 'Autonomous Medical Drone Delivery: Zipline Ghana\'s 6 Centers Partner with GHS Across Rural Enclaves',
    summary: 'Zipline Ghana\'s distribution hubs in Omenako, Mpanya, Vobsi, Sefwi Wiawso, Anum, and Kete Krachi deliver over 1 million emergency vaccines and blood units to remote health clinics.',
    content: `OMENAKO, EASTERN REGION — Medical logistics in Ghana has set a global standard through the collaborative partnership between Zipline Ghana and the Ghana Health Service (GHS). Operating from six strategically located distribution centers across the country—Omenako (Eastern), Mpanya (Ashanti), Vobsi (North East), Sefwi Wiawso (Western North), Anum (Volta/Eastern), and Kete Krachi (Oti)—autonomous delivery drones provide rapid access to emergency medical supplies.

The fleet of electric fixed-wing drones delivers blood products, anti-snake venom, anti-rabies vaccines, and essential pediatric medications to hundreds of remote Community-based Health Planning and Services (CHPS) compounds and island communities along Lake Volta within 30 to 45 minutes of a request.

Working alongside digital telemedicine platforms such as mPharma and Bisa Health, Zipline's round-the-clock aerial supply chain has virtually eliminated stock-outs of critical vaccines in rural health centers, saving thousands of lives and demonstrating the real-world humanitarian power of autonomous aerospace robotics.`,
    category: 'Tech',
    channel: 'TV3 Ghana',
    author: 'Samuel Baidoo',
    publishedAt: '12 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 16800,
    likes: 1540
  },
  {
    id: 'art-11',
    title: 'Ghanaian Afrobeats, Highlife & Asakaa Surge Across Global Streaming: Black Sherif & King Promise Lead Billions of Streams',
    summary: 'Music from Accra and Kumasi dominates global playlists on Spotify, Apple Music, Audiomack, and Boomplay as Ghanaian sounds captivate international audiences.',
    content: `ACCRA & KUMASI — Contemporary Ghanaian music is enjoying an unprecedented golden era on international streaming platforms. Industry reports from Spotify, Apple Music, Audiomack, and Boomplay reveal that streams of Ghanaian music catalog surged by over 68% year-on-year across North America, the UK, and continental Europe.

Leading the charge is BET Award winner Black Sherif, whose genre-bending Highlife-infused drill anthems have crossed hundreds of millions of streams, alongside King Promise, whose global chart-topper "Terminator" ignited viral dance challenges from Lagos to Tokyo.

Meanwhile, artists like Stonebwoy continue to dominate global reggae-dancehall categories, while vocal powerhouses Amaarae and Gyakie push alternative pop and R&B boundaries. In Kumasi, the Asakaa drill movement spearheaded by Life Living Records continues to influence UK and European grime culture, proving the unstoppable creative and commercial vitality of modern Ghanaian youth culture.`,
    category: 'Entertainment',
    channel: 'UTV Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: '13 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 18900,
    likes: 2150
  },
  {
    id: 'art-12',
    title: 'COCOBOD Deploys Cocoa Management System as Agritech Startups Enable EUDR Supply-Chain Traceability',
    summary: 'Ghana Cocoa Board\'s digital CMS mapping platform unites with agritech startups like Farmerline and AgroCenta to guarantee deforestation-free cocoa exports to Europe.',
    content: `TAKORADI & SEFWI WIAWSO — As the European Union Deforestation Regulation (EUDR) takes full effect, the Ghana Cocoa Board (COCOBOD) has completed the nationwide rollout of its Cocoa Management System (CMS), an end-to-end digital database mapping every cocoa farm, farmer identity, and purchasing station in Ghana.

The high-tech system assigns digital IDs to over 800,000 cocoa farmers and utilizes GPS polygon mapping to verify that harvested cocoa is grown strictly on established farmland without encroachment into forest reserves.

Working alongside COCOBOD are innovative Ghanaian agritech pioneers including Farmerline, AgroCenta, Trotro Tractor, and Complete Farmer. These startups deploy mobile apps and satellite imaging that provide farmers with weather advisories, subsidized fertilizer, digital payments, and verifiable chain-of-custody documentation, ensuring Ghanaian cocoa retains its premier position in global chocolate manufacturing.`,
    category: 'Business',
    channel: 'Channel One TV',
    author: 'Kojo Asante',
    publishedAt: '14 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 10800,
    likes: 780
  }
];

export const CONTENT_CREATORS: ContentCreator[] = [
  {
    id: 'mr-martei',
    name: 'Mr Martei (Justice Martei Mamah)',
    realName: 'Justice Martei Mamah',
    handle: '@mr.martei',
    platform: 'Multi-Platform',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '25.3K+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/iPDGhDeG-UIGsF8WZlGQBBLWcax4l7UKMdpvFYyome9gABUSAe2F4owxEhxD47GkEW1A_cEq=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/ta_-_bIYqQc/hqdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/ta_-_bIYqQc/hqdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/Tq2eQiG1It0/hqdefault.jpg',
    bio: 'Justice Martei Mamah, known online as Mr Martei, is a Ghanaian software engineer, tech creator, and the founder of Plexlink (https://www.plexlink.site/), an NFC/QR smart business card and link-in-bio platform in Ghana, creator of the "Paste Here" Figma plugin, and developer at mrmartei.site (~25.3K combined reach across Instagram and TikTok).',
    award: {
      title: 'Digital Product Founder & Tech Innovator of the Year',
      year: '2026',
      description: 'Awarded by Ghana Digital Innovation Awards for pioneering Plexlink, bringing smart NFC contactless networking and link-in-bio solutions to African professionals.'
    },
    profileArticle: `Justice Martei Mamah, known online as Mr Martei, is a Ghanaian software engineer, web developer, tech creator, and founder of Plexlink (https://www.plexlink.site/). With an engaged audience of over 25.3K combined followers across Instagram (@mr.marteii with 16.2K followers), TikTok (@mr.martei with 8.9K followers), and YouTube (146 subscribers, 78 videos), Mr Martei is redefining personal branding and digital utility in West Africa.

Frustrated by the environmental waste and inefficiency of traditional paper business cards at African conferences and networking gatherings, Mr Martei designed and engineered Plexlink to let professionals share comprehensive contact cards, portfolios, and social profiles with a single tap of an NFC card on any smartphone—without requiring an app download.

In addition to Plexlink, Mr Martei developed the widely praised "Paste Here" Figma plugin for designers worldwide and manages creative software projects through his portfolio platform at mrmartei.site. His regular breakdowns of web technologies, gadget architectures, and digital design tools make him one of Ghana's most promising software founders and digital creators.`,
    stats: {
      instagramFollowers: '16.2K',
      tiktokFollowers: '8.9K',
      youtubeSubscribers: '146',
      engagementRate: '12.8%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@mr.martei',
      instagram: 'https://www.instagram.com/mr.marteii/',
      youtube: 'https://www.youtube.com/@mr.martei',
      website: 'https://www.mrmartei.site/'
    }
  },
  {
    id: 'delppy',
    name: 'Delppy (Emmanuel Obuobi Fianko)',
    realName: 'Emmanuel Obuobi Fianko',
    handle: '@delppy1_',
    platform: 'TikTok',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '570K+ Combined Reach',
    avatar: 'https://panafricanaisummit.com/storage/media/eZ0r51k1RsCg4ir5jQ14jyN6yxL35sVTk5YRjTO4.jpg',
    bannerImage: 'https://delppy.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-04-at-09.50.07-2-390x220.jpeg',
    coverImage: 'https://delppy.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-04-at-09.50.07-2-390x220.jpeg',
    articleBodyImage: 'https://diglancers.com/wp-content/uploads/2026/03/7wket4-compressed-300x300.jpg',
    bio: 'Emmanuel Obuobi Fianko (Delppy) is a Ghanaian tech content creator, cybersecurity and AI educator, founder of Delppy.com, speaker at the Pan-African AI Summit, and co-creator of the Bytes Unlocked YouTube channel alongside Wazz.',
    award: {
      title: 'Consumer Tech Reviewer of the Year',
      year: '2025',
      description: 'Conferred at the Accra Digital Media Awards for honest, unbiased consumer electronics testing and smartphone buying guides in Ghana.'
    },
    profileArticle: `Emmanuel Obuobi Fianko, widely known across Africa as Delppy, is a leading Ghanaian technology content creator, cybersecurity educator, AI advocate, and digital strategist. He is the founder of the tech news portal Delppy.com and co-host of the popular Bytes Unlocked YouTube channel alongside Wazz.

Delppy commands a combined reach of over 570K+ tech enthusiasts, including 293.6K followers on his primary TikTok account (@delppy1_) alongside 27.9K on his secondary account (@delppy_), 231K followers on Instagram, and 18.3K subscribers on Bytes Unlocked. A featured speaker at the Pan-African AI Summit, Delppy delivers real-world performance tests and cybersecurity advice tailored to African power and network environments.`,
    stats: {
      tiktokFollowers: '293.6K',
      instagramFollowers: '231K',
      youtubeSubscribers: '18.3K',
      engagementRate: '9.6%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@delppy1_',
      instagram: 'https://www.instagram.com/delppy1_/',
      youtube: 'https://www.youtube.com/@BYTESUNLOCKED',
      website: 'https://delppy.com/'
    }
  },
  {
    id: 'rick-aqua',
    name: 'Rick Aqua (Patrick Acquah)',
    realName: 'Patrick Acquah',
    handle: '@rick_aqua',
    platform: 'Instagram',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '232K+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_meqDECKfl-7dl4Goxuegu3H5oD50VSYVxodINsTSj3SBI=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/Lx3Qx8j_hpw/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/Lx3Qx8j_hpw/maxresdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/aTDdWtwd-s0/maxresdefault.jpg',
    bio: 'Patrick Acquah (stylized as Rick Aqua) is a Ghanaian consumer tech reviewer and video creator known for cinematic smartphone comparisons, camera shootouts, and Apple/Android ecosystem deep dives.',
    award: {
      title: 'Cinematic Tech Storyteller of the Year',
      year: '2025',
      description: 'Awarded by Ghana Tech Content Summit for elevating video production values and visual storytelling in African technology media.'
    },
    profileArticle: `Patrick Acquah, professionally stylized as Rick Aqua, has redefined technology review videography in West Africa. With studio-grade cinematography, innovative lighting, and intricate sound design, Rick Aqua produces gadget reviews that set the visual benchmark for African creators.

His YouTube channel (@RickAqua) hosts over 606 meticulously crafted videos with more than 11.16 million total channel views and 47.2K subscribers. Across social media, he connects with 162K followers on Instagram (@rick_aqua) and 23.2K on TikTok, presenting in-depth camera shootouts, daily-driver durability tests, and smart home gadget reviews.`,
    stats: {
      instagramFollowers: '162K',
      youtubeSubscribers: '47.2K',
      tiktokFollowers: '23.2K',
      engagementRate: '11.4%'
    },
    socialLinks: {
      instagram: 'https://www.instagram.com/rick_aqua/',
      youtube: 'https://www.youtube.com/@RickAqua',
      tiktok: 'https://www.tiktok.com/@rick_aqua',
      twitter: 'https://x.com/true_rick_aqua'
    }
  },
  {
    id: 'dessy-ocean',
    name: 'Dessy Ocean (Desmond Ofori Appiah)',
    realName: 'Desmond Ofori Appiah',
    handle: '@dessy_ocean',
    platform: 'TikTok',
    category: 'Tech & Culture',
    status: 'Breakthrough',
    subscribers: '463K+ Combined Reach',
    avatar: 'https://ghanamediatechexpo.org/wp-content/uploads/2025/11/Desmond-Ofori-Appiah-.jpg',
    bannerImage: 'https://miro.medium.com/v2/resize:fit:2400/1*8eGgWHwoWgb0DbmNpGWxfA.png',
    coverImage: 'https://miro.medium.com/v2/resize:fit:2400/1*8eGgWHwoWgb0DbmNpGWxfA.png',
    articleBodyImage: 'https://techinghanaconference.com/wp-content/uploads/2023/11/Desmond-Dessy-Ocean-scaled.jpeg',
    bio: 'Desmond Ofori Appiah, known professionally as Dessy Ocean, is a dynamic Ghanaian tech creator selected by Meta in May 2024 to promote Meta\'s AI technologies in Ghana.',
    award: {
      title: 'Tech Creator of the Year',
      year: '2024',
      description: 'Awarded at the Ghana Creators Festival / Creators Awards Ghana for outstanding digital literacy advocacy and short-form tech tutorials.'
    },
    profileArticle: `Desmond Ofori Appiah, recognized professionally as Dessy Ocean, has unlocked viral success through short-form educational tech content. By distilling complex software features, hidden smartphone settings, and artificial intelligence prompts into engaging reels, Dessy has amassed over 293.2K followers on TikTok (@dessy_ocean, with 5.6M+ likes), 156K on Instagram, 9.29K on YouTube (852 videos), and 5K on X.

In recognition of his impactful digital presence, Meta selected Dessy Ocean in May 2024 to spearhead and promote Meta's AI technologies and tools across Ghana, cementing his role as a trusted digital literacy ambassador and speaker at the Ghana Media Tech Expo and Tech in Ghana Conference.`,
    stats: {
      tiktokFollowers: '293.2K',
      instagramFollowers: '156K',
      youtubeSubscribers: '9.29K',
      twitterFollowers: '5K',
      engagementRate: '14.2%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@dessy_ocean',
      instagram: 'https://www.instagram.com/dessy_ocean/',
      youtube: 'https://www.youtube.com/@dessyocean',
      twitter: 'https://x.com/dessy_ocean'
    }
  },
  {
    id: 'wazz',
    name: 'Wazz (Bytes Unlocked)',
    realName: 'Wazz',
    handle: '@onetruewazz',
    platform: 'Instagram',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '584K+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_n0aB7_Cr0SG7z_sCbJm6Xl_K1NCgBxTU3UqIOS1S-6-n0=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/p7HfjFeo__4/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/p7HfjFeo__4/maxresdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/COWaiCDcm5Y/hq720.jpg',
    bio: 'Wazz is the co-host of Ghana\'s Bytes Unlocked tech channel alongside Delppy, specializing in short-form tech, smartphone durability, foldable devices, and audio gear content on Instagram (@onetruewazz) and TikTok (@wazzhimself).',
    award: {
      title: 'Consumer Tech Guide & Video Host Award',
      year: '2025',
      description: 'Awarded by Accra Tech Media Community for insightful consumer tech guides and collaborative hardware testing on Bytes Unlocked.'
    },
    profileArticle: `Wazz is the co-creator and dynamic co-host of Bytes Unlocked (@BYTESUNLOCKED), one of Ghana's most engaging collaborative tech YouTube channels, operated alongside fellow creator Delppy.

With 571 published videos and over 3.04 million collective views on YouTube (18.3K subscribers), alongside 480,000 followers on Instagram (@onetruewazz) and 85,600 on TikTok (@wazzhimself), Wazz breaks down honest smartphone durability tests, foldable screens, audio earbuds, and day-to-day gadget reliability with unmatched authenticity.`,
    stats: {
      instagramFollowers: '480K',
      tiktokFollowers: '85.6K',
      youtubeSubscribers: '18.3K',
      engagementRate: '10.3%'
    },
    socialLinks: {
      instagram: 'https://www.instagram.com/onetruewazz/',
      tiktok: 'https://www.tiktok.com/@wazzhimself',
      youtube: 'https://www.youtube.com/@BYTESUNLOCKED'
    }
  },
  {
    id: 'clifford-scott',
    name: 'Clifford Scott (CoolTechie)',
    realName: 'Clifford Scott',
    handle: '@cliffordscott_',
    platform: 'TikTok',
    category: 'Tech & Culture',
    status: 'Established',
    subscribers: '231K+ Combined Reach',
    avatar: 'https://labarijournal.com/wp-content/uploads/2025/12/Screenshot-2025-12-17-at-1.26.36-PM-632x1024.png',
    bannerImage: 'https://i.ytimg.com/vi/OJSwJ_RWIbA/hqdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/OJSwJ_RWIbA/hqdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/ZUFAhmnDN0A/hqdefault.jpg',
    bio: 'Clifford Scott (CoolTechie) began recording tech explainers in Junior High School with a borrowed phone, monetized his YouTube in under a year, and built over 150K TikTok followers.',
    award: {
      title: 'Tech Education Creator of the Year',
      year: '2025',
      description: 'Conferred by Ghana EdTech Network for accessible digital skills tutorials and software guidance.'
    },
    profileArticle: `Clifford Scott, famously known as CoolTechie, embodies the inspiring resilience of Ghana's young digital creator economy. Starting his journey in Junior High School using a borrowed smartphone, Clifford taught himself video editing and tech communication, successfully monetizing his YouTube channel within twelve months.

When an unexpected platform ban wiped out his initial account, he rebounded by building a brand-new TikTok presence (@cliffordscott_) to over 150,000 followers and growing his YouTube channel (@CliffordScott) to 46,400 subscribers (with 246 videos and 5.21M+ views), alongside 34,700 on Instagram. Today, his practical tutorials on software tools, PC setups, and creator workflows empower students across the continent.`,
    stats: {
      tiktokFollowers: '150K',
      youtubeSubscribers: '46.4K',
      instagramFollowers: '34.7K',
      engagementRate: '9.8%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@cliffordscott_',
      youtube: 'https://www.youtube.com/@CliffordScott',
      instagram: 'https://www.instagram.com/cliffordscott_/'
    }
  },
  {
    id: 'selorm-tech',
    name: 'Tech In Twi (Kwabena Boateng)',
    realName: 'Kwabena Boateng',
    handle: '@TechInTwi',
    platform: 'YouTube',
    category: 'Tech & Culture',
    status: 'Breakthrough',
    subscribers: '190K YouTube Subscribers',
    avatar: 'https://pbs.twimg.com/profile_images/2045979387347050497/CVhMsuOW.jpg',
    bannerImage: 'https://i.ytimg.com/vi/RAgVWURsoIE/hq720.jpg',
    coverImage: 'https://i.ytimg.com/vi/RAgVWURsoIE/hq720.jpg',
    articleBodyImage: 'https://yt3.googleusercontent.com/qUM6YxXRkdO2WLSuwzdQjQB2pkcDjYiMyqR3UZWS6-9QjiQ4jtRBW3BfCGddFWb8FF4QQJGmKXo=s900-c-k-c0x00ffffff-no-rj',
    bio: 'Tech In Twi (Kwabena Boateng) is Ghana\'s pioneering Twi-language tech educator, breaking down smartphones, computing tools, and digital literacy in authentic Ghanaian dialect.',
    award: {
      title: 'Indigenous Language Tech Advocate',
      year: '2026',
      description: 'Recognized at Ghana Silicon Summit for pioneering hardware reviews and digital safety tutorials in local Ghanaian dialects.'
    },
    profileArticle: `Kwabena Boateng, creator of the renowned Tech In Twi channel, has revolutionized technology education in Ghana. By creating comprehensive smartphone reviews, software tutorials, and digital safety guides entirely in the Twi language, Kwabena has made digital knowledge accessible to millions who prefer indigenous language content.

With over 766 videos, 190,000 YouTube subscribers, 146,000+ Facebook followers, and 42,000+ TikTok followers, Tech In Twi bridges the digital divide and demonstrates that high-tech concepts thrive when communicated in Ghana's native tongues.`,
    stats: {
      youtubeSubscribers: '190K',
      facebookFollowers: '146K+',
      tiktokFollowers: '42K+',
      engagementRate: '13.7%'
    },
    socialLinks: {
      youtube: 'https://www.youtube.com/@TechInTwi'
    }
  },
  {
    id: 'kalyjay',
    name: 'Kalyjay (Joshua Buernortey Boye-Doe)',
    realName: 'Joshua Buernortey Boye-Doe',
    handle: '@gyaigyimii',
    platform: 'Multi-Platform',
    category: 'Pop Culture & Critique',
    status: 'Established',
    subscribers: '2.5M+ Combined Reach',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/KalyJay_at_a_bar_in_osu.jpg',
    bannerImage: 'https://cdn.yen.com.gh/images/360x203/c8dd8d2a75046518.jpeg?v=1',
    coverImage: 'https://cdn.yen.com.gh/images/360x203/c8dd8d2a75046518.jpeg?v=1',
    articleBodyImage: 'https://cdn.ghanaweb.com/imagelib/pics/851/85169391.jpg',
    bio: 'Joshua Buernortey Boye-Doe, widely known as KalyJay (@gyaigyimii), is a leading digital influencer, GIJ alumnus, and initiator of the historic #FixTheCountry movement with over 2.1M followers on X.',
    award: {
      title: 'Twitter Influencer of the Year',
      year: '2024',
      description: 'Awarded at the Pulse Ghana Influencer Awards for shaping national discourse and leading youth civic mobilization.'
    },
    profileArticle: `Joshua Buernortey Boye-Doe, universally known across West Africa as KalyJay (@gyaigyimii), is a defining force in Ghanaian digital media and civic mobilization. Educated at the University of Media, Arts and Communication (Ghana Institute of Journalism), Kalyjay sparked the historic #FixTheCountry movement, mobilizing millions of young citizens online to demand governance transparency and youth opportunities.

With 2.1 million followers on X (@gyaigyimii), 74,200 on Instagram (@kalyjayy), 15,800 on TikTok (392.4K likes), and over 310K on Snapchat, his platform serves as a modern town square where breaking social commentary, celebrity spotlights, and youth initiatives converge daily.`,
    stats: {
      twitterFollowers: '2.1M',
      instagramFollowers: '74.2K',
      tiktokFollowers: '15.8K',
      engagementRate: '15.4%'
    },
    socialLinks: {
      twitter: 'https://x.com/gyaigyimii',
      instagram: 'https://www.instagram.com/kalyjayy/',
      tiktok: 'https://www.tiktok.com/@kalyjayy'
    }
  },
  {
    id: 'asantewaa',
    name: 'Asantewaa (Martina Dwamena)',
    realName: 'Martina Dwamena',
    handle: '@asantewaaaaa',
    platform: 'TikTok',
    category: 'Dance & Viral',
    status: 'Established',
    subscribers: '5.2M+ Combined Reach',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Asantewaa_at_3_Music_Awards_22_26.jpg',
    bannerImage: 'https://cdn.yen.com.gh/tags/600x600/4b956fe5c270b0fa.jpeg?v=1',
    coverImage: 'https://cdn.yen.com.gh/tags/600x600/4b956fe5c270b0fa.jpeg?v=1',
    articleBodyImage: 'https://cdn.ghanaweb.com/imagelib/pics/604/60458616.295.jpg',
    bio: 'Martina Dwamena, known to millions as Asantewaa, is a certified nurse, actress, and premier TikTok superstar with over 4.1M followers and 130.9M+ likes.',
    award: {
      title: 'TikTok Influencer of the Year',
      year: '2021',
      description: 'Awarded at the Pulse Ghana Influencer Awards for viral dance routines and unmatched audience engagement.'
    },
    profileArticle: `Martina Dwamena, celebrated as Asantewaa, transitioned from professional nursing to become Ghana's undisputed queen of TikTok. Amassing over 4.1 million followers on TikTok (@asantewaaaaa with 130.9M+ likes) and 1.1 million on Instagram (@_asantewaaaa_), her seamless blend of relatable family comedy, infectious dance trends, and commercial brand ambassadorships has set the benchmark for female creators in West Africa.

In 2021, she was crowned TikTok Influencer of the Year at the Pulse Ghana Influencer Awards, cementing her reputation as an innovative entertainer and leading digital brand icon.`,
    stats: {
      tiktokFollowers: '4.1M',
      instagramFollowers: '1.1M',
      engagementRate: '9.8%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@asantewaaaaa',
      instagram: 'https://www.instagram.com/_asantewaaaa_/'
    }
  },
  {
    id: 'endurance-grand',
    name: 'Endurance Grand (Endurance Nkechi Dzigbordi Dedzo)',
    realName: 'Endurance Nkechi Dzigbordi Dedzo',
    handle: '@endurancegrand',
    platform: 'TikTok',
    category: 'Dance & Viral',
    status: 'Established',
    subscribers: '16.4M+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/xNYLT0yJgCqcgq0Fwcu4uh41asGSveCU6zAj3gpPu2xoDQdHlUnS5SHJQn8SxwJRQqJHQpEGBWo=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/SlaQjtKdS6U/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/SlaQjtKdS6U/maxresdefault.jpg',
    articleBodyImage: 'https://endurancegrand.co/wp-content/uploads/2023/03/228A6872-2-scaled.jpg',
    bio: 'Endurance Nkechi Dzigbordi Dedzo is a lead dancer with DWP Academy, international choreographer, and TikTok icon with over 14M followers and 442.8M+ likes.',
    award: {
      title: 'Creator of the Year',
      year: '2024',
      description: 'Awarded at the Ghana Creators Festival for phenomenal global dance choreography and crossing 10M+ followers on TikTok.'
    },
    profileArticle: `Endurance Nkechi Dzigbordi Dedzo, known worldwide as Endurance Grand, represents the pinnacle of modern African choreography. Operating from DWP Academy in Accra, Endurance has created viral dance anthems that propelled her beyond 14 million TikTok followers (@endurancegrand with 442.8M+ likes), 1.7 million on Instagram, and 723,000 on YouTube (852 videos and 219.97M+ views).

Her routines for global superstars like Davido, Stonebwoy, and Burna Boy have captured audiences across continents, earning her the prestigious Creator of the Year honors at the Ghana Creators Festival.`,
    stats: {
      tiktokFollowers: '14M',
      instagramFollowers: '1.7M',
      youtubeSubscribers: '723K',
      engagementRate: '11.8%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@endurancegrand',
      instagram: 'https://www.instagram.com/endurancegrand/',
      youtube: 'https://www.youtube.com/@EnduranceGrand',
      website: 'https://endurancegrand.co/'
    }
  },
  {
    id: 'official-starter',
    name: 'Official Starter (Ernest Raja Nettey)',
    realName: 'Ernest Raja Nettey',
    handle: '@officialstarter_',
    platform: 'TikTok',
    category: 'Comedy & Lifestyle',
    status: 'Established',
    subscribers: '5.1M+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/UPEE7P2vdvJHajKE8KaCuvJrwIeUmupVBo5tnUIKsq12_sMaApXYmJYZ6BONuK1xS6uBi0N5aw=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/eILqjIYpazY/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/eILqjIYpazY/maxresdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/lKfVzzIJerg/maxresdefault.jpg',
    bio: 'Ernest Raja Nettey (also known as Raja) is a viral creator and DWP Academy dancer famous for dancing joyfully alongside market women at Makola Market (~4.3M TikTok followers).',
    award: {
      title: 'Cultural Ambassador & Joy Creator Award',
      year: '2025',
      description: 'Presented by Ghana Tourism Authority for celebrating Ghanaian informal market culture and radiating authentic joy to global audiences.'
    },
    profileArticle: `Ernest Raja Nettey, universally beloved as Official Starter (or Raja), touched global audiences with an uplifting and authentic concept: dancing joyfully alongside everyday market mothers and traders at Accra's Makola Market and Kumasi's Kejetia.

Affiliated with DWP Academy, his viral videos celebrate the dignity, warmth, and resilience of Ghanaian informal traders. Amassing over 4.3 million TikTok followers (108.1M+ likes), 671,000 on Instagram, and 164,000 on YouTube (1,123 videos, 55.66M+ views), his infectious routines have earned accolades from international music icons, billboard campaigns in Accra, and acclaim from cultural bodies worldwide.`,
    stats: {
      tiktokFollowers: '4.3M',
      instagramFollowers: '671K',
      youtubeSubscribers: '164K',
      engagementRate: '12.5%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@officialstarter_',
      instagram: 'https://www.instagram.com/officialstarter_/',
      youtube: 'https://www.youtube.com/@officialstarter_'
    }
  },
  {
    id: 'wode-maya',
    name: 'Wode Maya (Berthold Kobby Winkler Ackon)',
    realName: 'Berthold Kobby Winkler Ackon',
    handle: '@wodemaya',
    platform: 'YouTube',
    category: 'Travel & Heritage',
    status: 'Established',
    subscribers: '4.3M+ Combined Reach',
    avatar: 'https://yt3.ggpht.com/LoEIb550gchEDJy8MQiNBtqm5UZRuywFA4kiSyYM1fiWFfFsbK4yH9VXEqMiFR_CSHIT86BJKQ=s800-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/Ix9-1CpcOhQ/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/Ix9-1CpcOhQ/maxresdefault.jpg',
    articleBodyImage: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Wode_Maya_at_Ham%27s_Residence.jpg',
    bio: 'Berthold Kobby Winkler Ackon, universally known as Wode Maya, is a pioneering Pan-African YouTuber with over 2.05M subscribers promoting African business, real estate, and tourism.',
    award: {
      title: 'Pan-African Tourism & Storyteller Award',
      year: '2024',
      description: 'Awarded by African Union Diaspora Directorate for shifting global perceptions and championing intra-African tourism.'
    },
    profileArticle: `Berthold Kobby Winkler Ackon, universally celebrated as Wode Maya, is one of the most transformative independent documentarians on the African continent. Under his signature banner "Africa to the World," his YouTube channel has surpassed 2.05 million subscribers (2,172 videos, 349.89M+ views), with 402,000 on Instagram (@mrghanababy), 328.9K on X, and 1.5M+ on Facebook.

From modern real estate developments and agricultural innovations to conversations with diaspora returnees, Wode Maya's camera showcases African ingenuity, inspiring thousands to invest and travel across the continent.`,
    stats: {
      youtubeSubscribers: '2.05M',
      instagramFollowers: '402K',
      twitterFollowers: '328.9K',
      facebookFollowers: '1.5M+',
      engagementRate: '8.4%'
    },
    socialLinks: {
      youtube: 'https://www.youtube.com/@wodemaya',
      instagram: 'https://www.instagram.com/mrghanababy/',
      twitter: 'https://x.com/wode_maya',
      website: 'https://wodemaya.me/'
    }
  },
  {
    id: 'kwadwo-sheldon',
    name: 'Kwadwo Sheldon (Bernard Kwadwo Amoafo)',
    realName: 'Bernard Kwadwo Amoafo',
    handle: '@kwadwosheldon',
    platform: 'Multi-Platform',
    category: 'Pop Culture & Critique',
    status: 'Established',
    subscribers: '4.3M+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/mJATfrwDmaOBemb5ic91dCdGcfAPXOa21VwkH9529R1x8BH2sJKN0N0l588io3TQcDYam4orpA=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/_TLS_fHumLk/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/_TLS_fHumLk/maxresdefault.jpg',
    articleBodyImage: 'https://ghanaremembers.com/images/http/article_images/public/kwadwo-sheldon-1.jpg/f1d52b539308fd570e7c23ddf345cd2e/kwadwo-sheldon-1.webp',
    bio: 'Bernard Kwadwo Amoafo, known as Kwadwo Sheldon, is a digital satirist and studio head of Kwadwo Sheldon Studios with 848K YouTube subscribers, 1.9M on X, and 1.4M on Instagram.',
    award: {
      title: 'Entertainment Creator of the Year (KSS Studios)',
      year: '2024',
      description: 'Awarded at the Ghana Creators Festival for pioneering digital satire, news commentary, and independent studio broadcasting.'
    },
    profileArticle: `Bernard Kwadwo Amoafo, known to audiences as Kwadwo Sheldon, has built one of Ghana's premier independent digital broadcasting enterprises, Kwadwo Sheldon Studios (KSS). With over 6,367 videos, 848,000 subscribers, and 250.85 million views on YouTube, alongside 1.9 million followers on X (@kwadwosheldon), 1.4 million on Instagram, and 195.6K on TikTok, Sheldon commands immense cultural influence.

Through hit formats like "Yawa of the Day" and exclusive artist interviews, he provides fearless media critique and humor, winning Entertainment Creator of the Year at the Ghana Creators Festival.`,
    stats: {
      twitterFollowers: '1.9M',
      instagramFollowers: '1.4M',
      youtubeSubscribers: '848K',
      tiktokFollowers: '195.6K',
      engagementRate: '10.8%'
    },
    socialLinks: {
      youtube: 'https://www.youtube.com/@kwadwosheldonstudios',
      twitter: 'https://x.com/kwadwosheldon',
      instagram: 'https://www.instagram.com/kwadwosheldon/',
      tiktok: 'https://www.tiktok.com/@kwadwosheldon',
      website: 'https://kwadwosheldonstudios.com/'
    }
  },
  {
    id: 'sdk-dele',
    name: 'SDK Dele (Sadik Sulley)',
    realName: 'Sadik Sulley',
    handle: '@sdkdele',
    platform: 'Multi-Platform',
    category: 'Comedy & Lifestyle',
    status: 'Established',
    subscribers: '1.14M+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/GtlecAR8oUVnBQWQo8xBaksao0GE0UObrXDIYSnj1ajsJJWrHt4sRuuw0KFkafpRM-kVBaPN=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/pNGK5qjIIok/maxresdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/pNGK5qjIIok/maxresdefault.jpg',
    articleBodyImage: 'https://toppingafrica.s3.amazonaws.com/2085/500603321_18506794963003234_6231104715022209978_n.jpg',
    bio: 'Sadik Sulley (SDK Dele) is a beloved comedian, actor, and host of the viral SDK Food Tour celebrating authentic Ghanaian street food and family comedy (417.7K TikTok, 343.1K X, 331K IG).',
    award: {
      title: 'Comic Creator of the Year',
      year: '2024',
      description: 'Awarded at the Ghana Creators Festival for memorable relatable Ghanaian humor and culinary culture storytelling.'
    },
    profileArticle: `Sadik Sulley, widely recognized as SDK Dele, is a comedic institution in Ghanaian entertainment. With 417,700 TikTok followers (8.2M+ likes), 343,100 on X, 331,000 on Instagram, and 52,400 YouTube subscribers (151 videos, 3.63M+ views), SDK has captured the hearts of multiple generations.

From his beloved sketches portraying classic Ghanaian parent-child interactions to his wildly popular "SDK Food Tour" exploring local chop bars and street-food gems across Accra and Kumasi, SDK was named Comic Creator of the Year at the Ghana Creators Festival for his wholesome cultural contributions.`,
    stats: {
      tiktokFollowers: '417.7K',
      twitterFollowers: '343.1K',
      instagramFollowers: '331K',
      youtubeSubscribers: '52.4K',
      engagementRate: '11.5%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@sdkdele',
      twitter: 'https://x.com/sdkdele',
      instagram: 'https://www.instagram.com/sdkdele/',
      youtube: 'https://www.youtube.com/@sdkdele'
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
