import { NewsArticle, ContentCreator, PollQuestion, EventPressItem } from '../types';

export const BREAKING_NEWS = [
  "Black Challenge win Ghana's maiden 2026 Amputee Football World Cup in Mexico; Sports Minister Kofi Adams pledges US$10,000 bonus per player ahead of KIA arrival.",
  "President Mahama to announce Ghana's official 5G network launch before end of 2026 after revised spectrum policy raises $240M — Sam George.",
  "Plexlink officially launches in Ghana: Lumen Studios CEO Mr Martei debuts smart NFC networking & link-in-bio platform with GHS 300 standard cards.",
  "Women's Development Bank begins staff recruitment ahead of March 2027 take-off as GH¢400M escrow and GH¢100M operational funds stand ready."
];

export const NEWS_ARTICLES: NewsArticle[] = [
  // FEATURED STORY (Index 0)
  {
    id: 'art-plexlink',
    title: 'Plexlink Launches in Ghana: Founder Mr Martei Unveils Smart NFC Networking & Link-in-Bio Platform',
    summary: 'Built and founded by Ghanaian tech creator, software engineer, and Lumen Studios CEO Mr Martei (Justice Martei Mamah), Plexlink introduces a next-generation link-in-bio and digital contact card sharing platform with custom NFC products for instant, frictionless networking.',
    content: `ACCRA, GHANA — In an era where traditional paper business cards are rapidly becoming obsolete, Ghanaian tech creator, software engineer, and Founder & CEO of Lumen Studios [Mr Martei](/creator/mr-martei) (Justice Martei Mamah) has officially launched Plexlink (https://www.plexlink.site/), an all-in-one link-in-bio tool and smart contact sharing networking platform tailored for modern African creators, entrepreneurs, and business professionals.

Unlike traditional internet service providers or fiber utilities, Plexlink operates at the cutting edge of personal branding, smart contact card sharing, and professional networking. The platform combines a customizable, high-speed digital link-in-bio profile with sleek physical NFC (Near Field Communication) smart cards, tags, and stickers. With a single tap of a Plexlink NFC product against any modern smartphone, users can instantly share their contact card (vCard), social media links, portfolio showcases, WhatsApp messaging channel, and mobile money payment details—without requiring the recipient to download any external app.

"Networking in Ghana and across Africa has historically relied on paper cards that get lost, thrown away, or quickly outdated," explained Lumen Studios Founder & CEO and Plexlink architect [Mr Martei](/creator/mr-martei) during the launch in Accra. "We built Plexlink from the ground up to empower African creatives, corporate executives, and startup founders with an intelligent digital identity. Whenever your phone number, social handle, or portfolio changes, your Plexlink profile automatically updates in real-time."

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
    publishedAt: 'Nov 26, 2026',
    imageUrl: '/assets/aistudio/PlexLink_rr_570f6f4f.png',
    articleBodyImage: 'https://i.ytimg.com/vi/QZYg94MzPQA/hqdefault.jpg',
    articleBodyCaption: 'Product Demo: Founder Mr Martei demonstrating Plexlink contactless NFC networking & mobile dashboard in action',
    readTime: '4 min read',
    views: 18500,
    likes: 1640,
    isBreaking: true,
    featuredCreatorId: 'mr-martei'
  },

  // === GRID ARTICLES (24 Cards = 8 Balanced Rows of 3 on Desktop, 12 Rows of 2 on Tablet) ===

  // SPORTS 1 (Nov 23–24, 2026)
  {
    id: 'art-black-challenge-world-cup',
    title: 'Black Challenge Win Maiden 2026 Amputee Football World Cup & Receive US$10,000 Bonus Pledge',
    summary: 'Ghana’s national amputee football team beat Morocco 1-0 in Mexico to lift their first World Cup title, with Sports Minister Kofi Adams pledging US$10,000 per player ahead of their Accra return.',
    content: `ACCRA & SAN JUAN DE LOS LAGOS — Ghana’s national amputee football team, the Black Challenge, have made sporting history by winning their maiden Amputee Football World Cup title after edging Morocco 1-0 in the final on Sunday, November 22, 2026, in San Juan de los Lagos, Mexico.

The triumph makes Ghana only the second African nation ever to claim the world crown, following Angola’s landmark victory in 2018. Ghana’s unbeaten knockout campaign showcased clinical composure against elite global opposition: the Black Challenge defeated the United States 3-1 in the Round of 16, shut out Egypt 2-0 in the quarterfinals, and held their nerve to overcome defending powerhouses Türkiye 4-3 on penalties in the semifinals before sealing the decisive winning goal in the final against Morocco.

Forward Mubarik Mohammed capped an extraordinary tournament by winning the Golden Boot with seven goals, spearheading Ghana’s attack throughout the competition in Mexico.

Back home in Accra, Minister for Sports and Recreation Kofi Adams hailed the team’s historic achievement and pledged a US$10,000 bonus per player in recognition of the world title. The victorious squad is scheduled to touch down at Kotoka International Airport (KIA) on Thursday, November 26, 2026, at 1:00 p.m., where national officials and jubilant supporters are preparing a hero’s welcome.

Source attribution: MyJoyOnline / Citi Newsroom (November 23–24, 2026).`,
    category: 'Sports',
    channel: 'MyJoyOnline',
    author: 'Kwabena Osei',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 21400,
    likes: 2380,
    isBreaking: true
  },

  // TECH 1 (Nov 24, 2026)
  {
    id: 'art-ghana-5g-sam-george',
    title: 'Mahama to Launch Ghana’s 5G Network Before End of 2026 — Sam George',
    summary: 'Communication Minister Samuel Nartey George tells Parliament Ghana’s revised 5G spectrum policy has raised $240 million, with President Mahama set to announce the official launch before year-end.',
    content: `ACCRA — President John Dramani Mahama is scheduled to announce the official launch of Ghana’s 5G network before the close of 2026, Minister for Communication, Digital Technology and Innovations Samuel Nartey George has informed Parliament.

Addressing lawmakers on November 24, 2026, Mr. George disclosed that the government’s revised 5G spectrum allocation policy—spanning the 700 MHz, 2.3 GHz, and 3 GHz frequency bands—has already mobilized US$240 million in revenue while restructuring the rollout to accelerate broad commercial access.

The Minister clarified that while infrastructure integration and operator readiness are advancing rapidly, no consumer 5G service is commercially live in Ghana as of late November 2026. Following the President’s official launch announcement before year-end, telecom subscribers are expected to begin receiving commercial 5G signals in early 2027 across priority urban corridors.

Industry observers note that the multi-band spectrum strategy balances deep indoor and rural coverage via 700 MHz with high-capacity urban throughput on the 2.3 GHz and 3 GHz bands, setting the stage for enterprise cloud services, low-latency fintech platforms, and next-generation digital media across Ghana.

Source attribution: Citi Newsroom (November 24, 2026).`,
    category: 'Tech',
    channel: 'Citi Newsroom',
    author: 'Efua Mensah',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 17900,
    likes: 1520,
    isBreaking: true
  },

  // POLITICS 1 (Nov 23, 2026)
  {
    id: 'art-presidency-ceo-handover',
    title: 'Presidency Directs Ministers to Enforce Handover of CEOs Past Retirement Age',
    summary: 'A directive from the Office of the President orders sector ministers to enforce constitutional retirement rules for State-Owned Enterprise and public institution chief executives past age 60.',
    content: `ACCRA — The Office of the President has directed all Cabinet and sector ministers to strictly enforce handover procedures for chief executive officers of State-Owned Enterprises (SOEs) and public institutions who have attained or exceeded the compulsory retirement age.

In an official communication signed by Secretary to the President Callistus Mahama and copied to Vice President Prof. Jane Naana Opoku-Agyemang and the Chief of Staff, the Presidency reminded ministries of the binding constitutional mandates governing public service tenure.

Specifically, the directive cites Article 199(1) of the 1992 Constitution, which sets the mandatory public service retirement age at 60 years, alongside Article 199(4), which restricts post-retirement contract extensions to a maximum of two years at a time and an absolute cumulative cap of five years where special public interest exigencies apply.

Ministers have been instructed to audit executive leadership rosters across agencies under their supervision and ensure orderly handovers to designated successors or acting heads, reinforcing constitutional compliance and institutional renewal across Ghana’s public sector.

Source attribution: Graphic Online (November 23, 2026).`,
    category: 'Politics',
    channel: 'Graphic Online',
    author: 'Kofi Boateng',
    publishedAt: 'Nov 23, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 15400,
    likes: 1120
  },

  // POLITICS 2 (Nov 25, 2026)
  {
    id: 'art-parliament-aircraft-recruitment',
    title: 'Parliament Clashes Over Presidential Aircraft Spending Amid Teacher, Nurse Recruitment Delays',
    summary: 'Minority Leader Alexander Afenyo-Markin and Education Minister Haruna Iddrisu trade sharp arguments on the floor over presidential travel expenditure and the Ghana Education Service recruitment portal.',
    content: `ACCRA — Tempers flared on the floor of Parliament on Wednesday, November 25, 2026, as lawmakers clashed over government expenditure on presidential aircraft operations alongside concerns regarding the timing of public-sector recruitment for newly trained teachers and nurses.

Minority Leader Alexander Afenyo-Markin questioned the administration’s priorities over aircraft-related spending and alleged that the Ghana Education Service (GES) online recruitment portal had remained inaccessible to qualified teacher graduates awaiting posting.

Responding on the floor, Minister for Education Haruna Iddrisu rejected claims that recruitment had stalled, clarifying that the GES portal had been undergoing final technical stress-testing ahead of its formal launch at 8:00 p.m. on November 25, 2026.

Mr. Iddrisu emphasized that the government is executing President John Dramani Mahama’s directive under the 2027 Budget framework to recruit 10,000 teachers and 10,000 nurses nationwide, noting that the immediate deployment phase opens applications for up to 7,000 qualified teachers across underserved districts.

Source attribution: MyJoyOnline / Citi Newsroom (November 25, 2026).`,
    category: 'Politics',
    channel: 'MyJoyOnline',
    author: 'Kofi Boateng',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 16200,
    likes: 980
  },

  // POLITICS 3 (Nov 25, 2026)
  {
    id: 'art-supreme-court-skytrain',
    title: 'Supreme Court Clears Way for US$2 Million Accra SkyTrain Trial',
    summary: 'A five-member Supreme Court panel dismisses former GIIF CEO Solomon Asamoah’s supervisory application, allowing the High Court trial over the alleged US$2 million SkyTrain loss to proceed.',
    content: `ACCRA — The Supreme Court has cleared the path for the High Court trial concerning the alleged US$2 million loss linked to the stalled Accra SkyTrain project to proceed after dismissing an application filed by former Ghana Infrastructure Investment Fund (GIIF) Chief Executive Officer Solomon Asamoah.

On November 25, 2026, a five-member apex court panel presided over by Justice Issifu Omoro Tanko Amadu dismissed Mr. Asamoah’s Article 132 supervisory jurisdiction application, which had sought to challenge an evidentiary ruling delivered earlier by High Court judge Justice Audrey Kocuvie-Tay.

Mr. Asamoah and former GIIF Board Chairman Prof. Christopher Ameyaw-Akumfi are standing trial on six counts connected to alleged financial loss to the state involving US$2 million disbursed under the proposed Accra SkyTrain transit initiative. Both accused persons have pleaded not guilty to all charges.

With the Supreme Court declining to halt or overturn the trial court’s procedural order, proceedings are now set to resume at the High Court in Accra.

Source attribution: Graphic Online (November 25, 2026).`,
    category: 'Politics',
    channel: 'Graphic Online',
    author: 'Kwame Agyeman',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 13800,
    likes: 870
  },

  // POLITICS 4 (Nov 24–25, 2026)
  {
    id: 'art-gabs-2026-steinmeier',
    title: 'German President Steinmeier Urges Africa to Open Trade Routes at GABS 2026 in Accra',
    summary: 'Addressing nearly 700 delegates at the 6th German-African Business Summit in Accra, President Frank-Walter Steinmeier champions AfCFTA integration as Germany-Africa trade rises 10%.',
    content: `ACCRA — German President Dr. Frank-Walter Steinmeier has called on African governments and private-sector leaders to accelerate cross-border trade integration and unlock continental supply corridors under the African Continental Free Trade Area (AfCFTA).

Delivering a keynote address at the 6th German-African Business Summit (GABS 2026) hosted in Accra on November 24–25, 2026, Dr. Steinmeier highlighted strong commercial momentum between Berlin and the continent, noting that bilateral trade between Germany and Africa expanded by roughly 10 percent in 2025.

Speaking alongside senior Ghanaian officials and European industrialists, Delegate of German Industry and Commerce in Ghana Dr. Michael Blank confirmed that approximately 700 business executives, investors, and policymakers convened in Accra for the summit—underscoring Ghana’s status as the host nation of the AfCFTA Secretariat and a strategic West African investment gateway.

Discussions focused on renewable energy manufacturing, agro-processing value chains, technical vocational training, and green industrial financing across Sub-Saharan Africa.

Source attribution: MyJoyOnline (November 24–25, 2026).`,
    category: 'Politics',
    channel: 'MyJoyOnline',
    author: 'Samuel Baidoo',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 12100,
    likes: 940
  },

  // BUSINESS 1 (Nov 25, 2026)
  {
    id: 'art-womens-development-bank',
    title: 'Women’s Development Bank Begins Recruitment Ahead of Planned March 2027 Take-Off',
    summary: 'With GH¢400 million held in escrow and GH¢100 million committed for operational take-off, the Women’s Development Bank opens staffing recruitment ahead of its targeted March 2027 launch.',
    content: `ACCRA — Preparations for the operational launch of Ghana’s Women’s Development Bank have entered a decisive phase following the commencement of formal staff recruitment via Daily Graphic advertisements published on November 18, 2026.

The institution’s dedicated Accra headquarters—located opposite the former Ministry of Finance building—is scheduled for formal handover in early December 2026 as interior fit-out and core banking technology deployment wrap up.

Briefing Parliament on November 25, 2026, Deputy Finance Minister Thomas Nyarko Ampem confirmed that the bank currently holds GH¢400 million in escrow to anchor its balance sheet. In addition, Finance Minister Dr. Cassiel Ato Forson has committed GH¢100 million in dedicated operational funding, building upon the GH¢51 million allocation from 2025 and GH¢401 million budgeted in 2026.

Subject to final regulatory licensing approval from the Bank of Ghana (BoG), full commercial operations are targeted for the end of March 2027, offering tailored low-interest credit, business advisory services, and working capital to women-owned micro, small, and medium enterprises nationwide.

Source attribution: MyJoyOnline (November 25, 2026).`,
    category: 'Business',
    channel: 'MyJoyOnline',
    author: 'Samuel Baidoo',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 16900,
    likes: 1410
  },

  // BUSINESS 2 (Nov 25, 2026)
  {
    id: 'art-chamber-mines-royalties',
    title: 'Ghana Chamber of Mines Demands 30% of Mineral Royalties for Host Communities',
    summary: 'Ahead of the unified Natural Resource Revenue Management Act, Chamber CEO Dr. Kenneth Ashigbey urges lawmakers to raise direct mineral royalty shares for mining host communities.',
    content: `ACCRA — The Ghana Chamber of Mines is pushing for a major overhaul of Ghana’s mineral revenue distribution formula, calling for 30 percent of mineral royalties to be ring-fenced directly for host mining communities under the upcoming unified Natural Resource Revenue Management Act.

Currently, mineral royalty inflows are split with 78 percent routed to central government, 2 percent allocated to the Minerals Income Investment Fund (MIIF), and 20 percent directed to the Minerals Development Fund (MDF)—leaving an estimated 5 percent effectively reaching local mining districts on the ground.

Speaking on November 25, 2026, Chamber of Mines Chief Executive Officer Dr. Kenneth Ashigbey underscored the sector’s fiscal weight, noting that mining accounted for roughly 30 percent of the Ghana Revenue Authority’s (GRA) direct domestic tax revenue in 2025. He argued that visible infrastructure, clean water, and local economic diversification in host towns are essential to sustaining social license and curbing illegal mining pressures.

Public Interest and Accountability Committee (PIAC) Chair Prof. Peter Quartey and the Africa Centre for Energy Policy (ACEP) expressed strong support for stronger statutory transparency and independent oversight mechanisms in the new consolidated legislation.

Source attribution: Business & Financial Times (November 25, 2026).`,
    category: 'Business',
    channel: 'B&FT',
    author: 'Kojo Asante',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 11800,
    likes: 860
  },

  // BUSINESS 3 (Nov 25, 2026)
  {
    id: 'art-ssnit-2-3m-contributors',
    title: 'SSNIT Targets 2.3 Million Active Contributors by End-2026',
    summary: 'At the final SSNIT-TUC regional forum in Tema, the pension trust reports 2.21M+ active contributors, 87% employer compliance, and GH¢6.42 billion paid in pensions through October.',
    content: `TEMA — The Social Security and National Insurance Trust (SSNIT) has set an ambitious target of reaching 2.3 million active contributors by the close of December 2026 as it intensifies nationwide enrollment drives among informal and self-employed workers.

Speaking during the final SSNIT–Trades Union Congress (TUC) regional stakeholders’ forum in Tema on November 24, 2026, SSNIT executives disclosed that the scheme had surpassed 2.21 million active contributors across more than 94,000 registered establishments as of October 2026.

Despite steady formal-sector gains—where employer contribution compliance climbed to 87 percent in 2025, up from 83.9 percent in 2024—officials emphasized that approximately 80 percent of Ghana’s self-employed workforce remains outside formal pension coverage. Expanding the Self-Employed Enrolment Drive (SEED) via mobile money channels remains the Trust’s central growth lever.

On benefit disbursements, SSNIT reported paying GH¢6.42 billion in monthly pensions between January and October 2026, with total full-year pension payouts projected to exceed GH¢8.21 billion by December.

Source attribution: Business & Financial Times (November 25, 2026).`,
    category: 'Business',
    channel: 'B&FT',
    author: 'Kwame Agyeman',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 10900,
    likes: 790
  },

  // BUSINESS 4 (Nov 25, 2026)
  {
    id: 'art-cagd-november-payroll',
    title: 'CAGD Reschedules November 2026 Government Payroll to Friday, November 27',
    summary: 'The Controller and Accountant-General’s Department cites technical processing challenges alongside newly approved salary adjustments and arrears across GES, GTVET, JUSAG, and tertiary staff.',
    content: `ACCRA — The Controller and Accountant-General’s Department (CAGD) has announced that the payment of November 2026 public-sector salaries has been rescheduled to Friday, November 27, 2026.

In an official press statement issued on November 25, 2026, CAGD Head of Public Relations Cephas N. Dosoo apologized to public servants for the brief adjustment, attributing the shift to technical payroll processing challenges compounded by the simultaneous integration of multiple government-approved salary revisions and allowance arrears.

According to the Department, the November payroll run incorporates promotion arrears and Continuous Development and Instructional Support Allowances (CDISA) for Ghana Education Service (GES) and Ghana TVET Service (GTVET) personnel, revised premiums for non-academic senior members across public universities and Colleges of Education, Judicial Service Staff Association of Ghana (JUSAG) adjustments, operational allowances for the Council for Law Reporting, and salary upgrades for staff of the Ghana Integrated Iron and Steel Development Corporation (GIISDEC).

CAGD assured workers that commercial banks and payment gateways have been aligned to ensure smooth crediting of accounts nationwide on Friday.

Source attribution: Graphic Online / Citi Newsroom (November 25, 2026).`,
    category: 'Business',
    channel: 'Graphic Online',
    author: 'Samuel Baidoo',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 19200,
    likes: 1030
  },

  // TECH 2 (Nov 23, 2026)
  {
    id: 'art-sumsub-ghana-card',
    title: 'Sumsub Launches Ghana Card Verification Using Only a PIN and Live Selfie',
    summary: 'Following the November 2 expiration of L.I. 2523’s grace period banning Ghana Card photos and scans, Sumsub rolls out direct NIA verification requiring only a PIN and live selfie.',
    content: `ACCRA — Global verification platform Sumsub has introduced a Non-Doc Identity Verification workflow in Ghana that authenticates users using only their Ghana Card Personal Identification Number (PIN) and a real-time selfie—completely eliminating the need to photograph or store physical ID cards.

The November 23, 2026 rollout responds directly to the November 2, 2026 expiration of the grace period under Legislative Instrument (L.I.) 2523, which strictly prohibits regulated entities from relying on visual inspections, photocopies, or uploaded photo scans of the Ghana Card for Know Your Customer (KYC) compliance.

The regulatory mandate spans commercial banks, licensed fintechs, mobile money operators, insurance providers, forex bureaus, virtual asset platforms, and iGaming operators. Under Sumsub’s direct integration, the submitted Ghana Card PIN and live biometric selfie are matched in real time against National Identification Authority (NIA) records—which currently cover roughly 93 percent of Ghana’s adult population—without retaining sensitive document images on merchant servers.

Compliance officers across Accra’s fintech corridor say the frictionless PIN-plus-selfie model drastically cuts onboarding drop-offs while closing loopholes exploited by forged ID templates.

Source attribution: Tech Labari (November 23, 2026).`,
    category: 'Tech',
    channel: 'Tech Labari',
    author: 'Efua Mensah',
    publishedAt: 'Nov 23, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 14700,
    likes: 1290
  },

  // TECH 3 (Nov 24, 2026)
  {
    id: 'art-payaza-shopaza-seesail',
    title: 'Payaza’s ShopAza Acquires Ghanaian Startup Seesail',
    summary: 'Cross-border commerce platform ShopAza acquires Seesail Technologies Ltd for an undisclosed sum, retaining the entire Ghanaian team as Seesail CEO Victor Blavo steps in as GM, Africa.',
    content: `ACCRA — ShopAza, the commerce arm of pan-African payments provider Payaza, has completed the acquisition of Ghanaian SME commerce and finance startup Seesail Technologies Ltd for an undisclosed sum.

Announced on November 24, 2026, the transaction sees ShopAza absorb Seesail’s entire engineering and operations team in Ghana. As part of the leadership integration, Seesail Chief Executive Officer Victor Blavo assumes the expanded role of General Manager, Africa, overseeing continental merchant expansion.

Despite the acquisition, Seesail will continue operating as a distinct business unit within the Payaza ecosystem, leveraging ShopAza’s pan-African payment rails and liquidity infrastructure to scale inventory financing, working capital solutions, and digital distribution tools for small and medium-sized enterprises across Ghana and neighboring West African markets.

Startup analysts view the deal as an encouraging exit signal for Accra’s early-stage fintech founders, highlighting rising appetite for cross-border African M&A focused on merchant commerce.

Source attribution: Tech Labari (November 24, 2026).`,
    category: 'Tech',
    channel: 'Tech Labari',
    author: 'Dr. Selassie Mensah',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 11600,
    likes: 980
  },

  // ENTERTAINMENT 1 (Nov 22, 2026)
  {
    id: 'art-emy-africa-2026',
    title: 'EMY Africa 2026: Moses Baiden, Kweku Smoke, Majid Michel Lead Winners',
    summary: 'The 11th EMY Africa Awards at the AICC Grand Arena celebrates excellence across business, film, music, and digital culture, honoring Moses Baiden Jnr., Kweku Smoke, Wode Maya, and Chef Abbys.',
    content: `ACCRA — Ghana’s business titans, cultural icons, and digital trailblazers gathered in grand style at the Accra International Conference Centre (AICC) Grand Arena on Saturday, November 21, 2026, for the 11th edition of the Exclusive Men of the Year (EMY) Africa Awards.

Margins ID Group Executive Chairman Moses Kwesi Baiden Jnr. claimed the night’s highest honor as Ultimate Man of the Year, while hip-hop star Kweku Smoke enjoyed a double triumph, taking home both the Music Award and Man of the Moment honors following a dominant year on charts and festival stages.

In sports and screen categories, Black Stars and Manchester City forward Antoine Semenyo won the Sports Award, veteran screen star Majid Michel was honored as Actor of the Year, highlife icon Kojo Antwi received the Legend Award, and advertising pioneer Reginald Daniel Laryea (Geddy) was celebrated with the Lifetime Achievement Award.

Ghana’s creator economy also shone brightly on the Grand Arena stage: culinary storyteller [Chef Abbys](/creator/chef-abbys) won Young Achiever (Female), while Pan-African documentarian [Wode Maya](/creator/wode-maya) captured Young Achiever (Male), underscoring the mainstream cultural weight of modern Ghanaian digital creators.

Source attribution: Pulse Ghana (November 22, 2026).`,
    category: 'Entertainment',
    channel: 'Pulse Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: 'Nov 22, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 19400,
    likes: 2110
  },

  // ENTERTAINMENT 2 (Nov 24, 2026)
  {
    id: 'art-unicef-nfa-childrens-film',
    title: 'UNICEF Ghana and NFA Host Maiden Children’s Film Festival',
    summary: 'Marking World Children’s Day, UNICEF Ghana, the National Film Authority, and the Gender Ministry screen nine youth-centered short films with a Child Jury and live set by Kuami Eugene.',
    content: `ACCRA — UNICEF Ghana and the National Film Authority (NFA), in partnership with the Ministry of Gender, Children and Social Protection, have successfully hosted Ghana’s maiden Children’s Film Festival to commemorate World Children’s Day.

Held on November 21, 2026, the landmark cultural showcase screened nine original short films and animations spotlighting children’s rights, inclusion, mental well-being, and everyday resilience—including standout titles such as "Mindalia" by Faiza Majeed and "Wheelchair" by Najaat Hussein.

In a refreshing departure from adult-led panels, the festival empowered a dedicated Child Jury to evaluate screenings and share direct feedback on how Ghanaian cinema represents young voices. NFA Executive Secretary Kafui Danku emphasized that nurturing child-friendly storytelling is essential to building an ethical, sustainable Ghanaian film industry for future generations.

The celebratory gathering wrapped up with an energetic live musical performance by Afrobeats hitmaker Kuami Eugene, drawing warm applause from students, filmmakers, and families in attendance.

Source attribution: Pulse Ghana (November 24, 2026).`,
    category: 'Entertainment',
    channel: 'Pulse Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 10300,
    likes: 880
  },

  // ENTERTAINMENT 3 (Nov 24, 2026)
  {
    id: 'art-ay-poyoo-tic-tac-energy-night',
    title: 'AY Poyoo Pulled Off Stage at Energy Night Concert; TiC TAC Apologises',
    summary: 'Hiplife veteran TiC TAC issues a public apology after viral rapper AY Poyoo was escorted off stage during Reggie Rockstone’s set at Zen Gardens in Labone due to an uncleared cameo.',
    content: `ACCRA — Veteran Ghanaian hiplife icon TiC TAC has issued a public apology to viral rapper AY Poyoo after security personnel unexpectedly pulled the younger artist off stage during the Energy Night Concert at Zen Gardens in Labone on November 21, 2026.

The nostalgia-packed concert featured heavyweight performances from TiC TAC, hiplife grandpapa Reggie Rockstone, and Obrafour. Tension erupted mid-show when AY Poyoo stepped onto the stage to join Reggie Rockstone during his set, only for stage security to swiftly intervene and escort him away.

Following widespread fan reactions after AY Poyoo took to X (formerly Twitter) on November 23 to recount his disappointment, TiC TAC addressed the incident directly on November 24. Expressing sincere regret over how the moment unfolded, TiC TAC explained that while fellow guest artist Pappy Kojo’s surprise cameo had been cleared in advance with stage managers and security leads, AY Poyoo’s appearance had not been communicated to the production crew.

TiC TAC reaffirmed his respect for AY Poyoo and pledged tighter stage-management coordination for future Energy Night showcases.

Source attribution: Pulse Ghana (November 24, 2026).`,
    category: 'Entertainment',
    channel: 'Pulse Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 16700,
    likes: 1140
  },

  // LIFESTYLE 1 (Nov 24, 2026)
  {
    id: 'art-black-friday-ghana-2026',
    title: 'Black Friday Ghana 2026: 10 Tips to Spot Real Discounts and Avoid Scams',
    summary: 'Ahead of Friday, November 27 sales across Accra and online stores, consumer advocates warn shoppers to track pre-sale prices, inspect warranties, and avoid upfront transfers to unverified pages.',
    content: `ACCRA — With Black Friday 2026 landing on Friday, November 27, retailers, electronics outlets, and social media vendors across Ghana are rolling out aggressive flash-sale banners—prompting consumer safety experts to remind shoppers how to separate genuine bargains from inflated markdowns and online scams.

Top among the ten recommended consumer safeguards is tracking pre-sale baseline prices days in advance. Shoppers frequently encounter "phantom discounts" where an item—such as a GH¢5,000 laptop—is temporarily marked up on paper before being advertised at GH¢4,800 as a massive slash. Comparing prices across multiple verified retailers remains the fastest reality check.

Buyers are also strongly cautioned against sending upfront Mobile Money or bank transfers to unverified Instagram, Snapchat, or TikTok vendor accounts that lack physical storefronts, verified reviews, or payment-on-delivery options.

Finally, shoppers purchasing smartphones, home appliances, or power backups should verify official manufacturer warranty cards, test units before leaving pick-up points, and confirm whether hidden delivery, installation, or customs fees erase the advertised discount.

Source attribution: Pulse Ghana (November 24, 2026).`,
    category: 'Lifestyle',
    channel: 'Pulse Ghana',
    author: 'Efua Mensah',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 14900,
    likes: 1210
  },

  // LIFESTYLE 2 (Nov 23, 2026)
  {
    id: 'art-accra-budget-date-spots',
    title: 'Five Budget-Friendly Date Spots in Greater Accra Under GH¢300',
    summary: 'From Nationalism Park in Osu and Accra Zoo in Achimota to Legon Botanical Gardens’ canopy walkway and Kokrobite’s shoreline, discover five memorable outings under GH¢300.',
    content: `ACCRA — Enjoying a memorable weekend outing in Greater Accra does not have to stretch your wallet past GH¢300. Lifestyle editors have spotlighted five scenic, accessible date spots offering nature, fresh sea breeze, and outdoor adventure at pocket-friendly rates.

1. Nationalism Park (Osu): Located right off the historic Osu coastline near Black Star Square, this breezy open-air green space charges an entry fee of around GH¢20, making it ideal for sunset picnics and relaxed conversation.

2. Accra Zoo (Achimota Forest): Set within the shaded Achimota Forest enclave, entry is GH¢20 per adult under the 2025 Fees and Charges Amendment—offering couples a quiet morning wildlife stroll away from city traffic.

3. Legon Botanical Gardens: Perfect for active dates, the gardens offer a canopy walkway at GH¢25, a two-route high-ropes course at GH¢40, and a four-route adventure course at GH¢70, alongside shaded lakeside lawns.

4. Beach View, Kokrobite: A laid-back coastal escape west of Accra for grilled tilapia and ocean views—though visitors are strongly reminded to exercise caution around strong Atlantic currents and avoid deep swimming.

5. Kpone Greenfill Bola Site: Increasingly popular for panoramic sunset photography and elevated coastal views, though visitors should confirm site access rules with local attendants before travelling.

Source attribution: Pulse Ghana (November 23, 2026).`,
    category: 'Lifestyle',
    channel: 'Pulse Ghana',
    author: 'Abena Osei-Bonsu',
    publishedAt: 'Nov 23, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 13400,
    likes: 1180
  },

  // LIFESTYLE 3 (Nov 24, 2026)
  {
    id: 'art-turkey-visa-ghana-guide',
    title: 'Turkey Visa Guide for Ghanaians: Requirements and Application Timeline',
    summary: 'Ordinary and official Ghanaian passport holders require a consular visa to visit Türkiye—here is the checklist, timeline, and official embassy guidance for late-2026 travellers.',
    content: `ACCRA — With business delegations, trade buyers, and sports fans increasingly travelling between Accra and Istanbul, Ghanaian travellers planning trips to Türkiye are being advised to prepare visa documentation well ahead of departure.

Citing Turkish Ministry of Foreign Affairs rules and a November 22, 2026 IziVisas travel update, holders of ordinary and official Ghanaian passports must obtain a consular sticker visa prior to arrival. Only holders of Ghanaian diplomatic passports are exempt from visa requirements for short stays of up to 90 days within any 180-day period.

Applicants are advised to submit their visa files at least one month before their intended travel date to avoid seasonal processing bottlenecks. Core documentation includes a completed online pre-application form, a valid Ghanaian passport with sufficient validity, confirmed return flight reservations, proof of hotel or host accommodation, travel health insurance, and verifiable proof of financial means.

Because consular processing fees and appointment procedures are periodically revised, travellers should confirm exact current fee schedules and submission windows directly with the Embassy of the Republic of Türkiye in Accra before paying third-party intermediaries.

Source attribution: Pulse Ghana (November 24, 2026).`,
    category: 'Lifestyle',
    channel: 'Pulse Ghana',
    author: 'Kojo Asante',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 11200,
    likes: 820
  },

  // SPORTS 2 (Nov 25, 2026)
  {
    id: 'art-caf-awards-2026-ghana',
    title: 'Ghana Omitted from All Six Men’s Categories in Final 2026 CAF Awards Shortlist',
    summary: 'Antoine Semenyo and Caleb Yirenkyi miss the final cut as no Ghanaian player, coach, club, or national team makes the final men’s shortlists ahead of the December 2 ceremony in Lagos.',
    content: `ACCRA — Ghanaian football fans have been left reflecting on a sobering continental verdict after the Confederation of African Football (CAF) confirmed that Ghana was omitted from all six men’s final shortlists for the 2026 CAF Awards, scheduled for December 2, 2026, in Lagos, Nigeria.

Black Stars and Manchester City forward Antoine Semenyo—who earned a place on the preliminary 10-man Men’s Player of the Year shortlist following an impressive domestic campaign—narrowly missed out on the final five-man cut.

Similarly, Coventry City and Black Stars midfielder Caleb Yirenkyi fell short of the final three nominees for Men’s Young Player of the Year, despite his memorable match-winning strike against Panama at the 2026 FIFA World Cup earlier in the year.

Across the remaining men’s honours, the Black Stars missed the National Team of the Year shortlist, while no Ghanaian tactician or Ghana Premier League club featured among the final Coach of the Year or Club of the Year nominees—sparking fresh debate among pundits over rebuilding continental competitiveness.

Source attribution: Graphic Online (November 25, 2026).`,
    category: 'Sports',
    channel: 'Graphic Online',
    author: 'Kwabena Osei',
    publishedAt: 'Nov 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 15800,
    likes: 960
  },

  // SPORTS 3 (Nov 22, 2026)
  {
    id: 'art-gpl-matchday-12-medeama',
    title: 'Ghana Premier League Matchday 12: Medeama Open Five-Point Lead as Hearts Draw & Kotoko Fall',
    summary: 'Medeama SC climb to 27 points with a 2-0 win over FC AshantiGold while Bechem United hand new Kotoko boss Stanley Menzo a losing debut ahead of the Super Clash.',
    content: `TARKWA & ACCRA — Medeama SC tightened their grip at the summit of the Ghana Premier League on Matchday 12 (November 22, 2026), dispatching FC AshantiGold 2-0 to open a commanding five-point lead at the top of the table on 27 points.

After a tight opening half, Dominic Amponsah broke the deadlock from the penalty spot in the 54th minute before Prosper Owusu Boakye sealed the points with a clinical 71st-minute finish, delighting the home faithful.

Elsewhere, Bechem United surged into second place after edging Asante Kotoko 1-0 at the Nana Fosu Gyeabour Park—handing newly appointed Kotoko head coach Stanley Menzo a frustrating debut defeat just days before the blockbuster Super Clash against bitter rivals Hearts of Oak.

Hearts of Oak endured frustration of their own, surrendering a commanding 2-0 lead to settle for a dramatic 2-2 draw against resilient Aduana FC. In other Matchday 12 fixtures, Dreams FC secured a comfortable 2-0 home win over defending champions FC Samartex 1996, while Berekum Chelsea edged regional rivals Young Apostles 2-1.

Source attribution: GhanaFA.org (November 22, 2026).`,
    category: 'Sports',
    channel: 'GhanaFA.org',
    author: 'Kwabena Osei',
    publishedAt: 'Nov 22, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 14100,
    likes: 1120
  },

  // SPORTS 4 (Nov 24, 2026)
  {
    id: 'art-black-bombers-iba-istanbul',
    title: 'Black Bombers Target US$100,000 Gold at Inaugural IBA President’s Cup in Istanbul',
    summary: 'Ghana names a six-boxer squad led by Joseph "Jaguar" Commey and Amadu Mohammed for the US$3 million prize-fund tournament in Istanbul running November 27 to December 4.',
    content: `ACCRA — Ghana’s national amateur boxing team, the Black Bombers, have finalized a sharp six-man squad to chase lucrative podium rewards at the inaugural International Boxing Association (IBA) President’s Cup in Istanbul, Türkiye, running from November 27 to December 4, 2026.

The traveling roster features Amadu Mohammed, Commonwealth Games standout Joseph "Jaguar" Commey, Henry Malm, Mathias Ashittey, Ebenezer Ankrah, and Jibril Muntari.

The landmark competition boasts a US$3 million overall prize pool spread across 12 men’s weight divisions, offering US$100,000 for gold medalists, US$50,000 for silver, and US$25,000 for bronze—a transformative financial incentive for Ghanaian amateur pugilists.

Beyond the prize money in Istanbul, Ghana Boxing Federation technical handlers view the elite international bouts as vital high-intensity preparation ahead of the 2027 African Games and the August 2027 Olympic boxing qualifiers set to be hosted in Accra.

Source attribution: Graphic Online (November 24, 2026).`,
    category: 'Sports',
    channel: 'Graphic Online',
    author: 'Kwabena Osei',
    publishedAt: 'Nov 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 min read',
    views: 11500,
    likes: 970
  },

  // FEATURED CREATOR ECOSYSTEM STORY (Grid #22)
  {
    id: 'art-tech-creators',
    title: 'Top Ghanaian Tech Creators Reshaping the Ecosystem: From Coding Tutorials to NFC Innovation',
    summary: 'Ghanaian tech influencers including Delppy, Rick Aqua, Dessy Ocean, Wazz, Clifford Scott, and Mr Martei are driving mass digital literacy and gadget literacy across West Africa.',
    content: `ACCRA — Ghana's technology ecosystem is experiencing an unprecedented surge in digital content creation, propelled by a dynamic cohort of tech reviewers, hardware testers, and product creators who demystify technology for millions across the continent.

Leading the movement is [Delppy](/creator/delppy) (Emmanuel Obuobi Fianko, @delppy1_), whose 293.6K TikTok and 231K Instagram followers turn to him for cybersecurity education, real-world smartphone benchmarks, and AI tools. Alongside Delppy is [Wazz](/creator/wazz) (@onetruewazz, 480K on Instagram and 85.6K on TikTok), with whom he co-hosts the acclaimed YouTube tech show Bytes Unlocked (@BYTESUNLOCKED, 18.3K subscribers).

Visual aesthetics and cinematic production are championed by [Rick Aqua](/creator/rick-aqua) (Patrick Acquah, @rick_aqua), whose crisp smartphone shootouts reach 162K Instagram followers, 47.2K YouTube subscribers (with over 11.16 million total views), and 23.2K on TikTok. Meanwhile, [Dessy Ocean](/creator/dessy-ocean) (Desmond Ofori Appiah, @dessy_ocean) commands 293.2K TikTok followers and 156K on Instagram, having been selected by Meta in May 2024 to promote Meta's AI technologies in Ghana.

Younger creators are also making monumental strides: [Clifford Scott](/creator/clifford-scott) (@cliffordscott_), known as CoolTechie, has built a following of 150K on TikTok and 46.4K on YouTube with student-friendly software guides and desk setup inspiration. Bridging local language gaps, [Kwabena Boateng](/creator/selorm-tech) of Tech In Twi (@TechInTwi) educates 190,000 YouTube subscribers and 146,000+ Facebook followers in the Twi language.

And proving that creators can also build tangible hardware and software products, [Mr Martei](/creator/mr-martei) (Justice Martei Mamah, Founder & CEO of Lumen Studios, @mr.martei — 41.4K+ combined reach across 16.4K primary Instagram @mr.marteii, 9.1K TikTok @mr.martei, 7.4K secondary Instagram @mr.martei, 6K Snapchat, 2.4K Facebook, and 142 YouTube) has built and launched Plexlink, Ghana's premier smart NFC business card and link-in-bio platform, alongside commercial collaborations with partners such as Oraimo Ghana, Syinix Ghana, QCY Ghana, Wolevo, Numero eSIM, and Bisame App. Together, these creators are cementing Ghana as West Africa's most vibrant digital storytelling sandbox.`,
    category: 'Tech',
    channel: 'Channel One TV',
    author: 'Efua Mensah',
    publishedAt: 'Nov 21, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    articleBodyImage: 'https://delppy.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-04-at-09.50.07-2-390x220.jpeg',
    articleBodyCaption: 'Ghana Tech Media: Leading creators and educators gathering to discuss digital transformation and consumer technology in West Africa',
    readTime: '5 min read',
    views: 14200,
    likes: 1250
  },

  // COCOBOD WITH FIXED COCOA/AGRICULTURE IMAGE (Grid #23)
  {
    id: 'art-12',
    title: 'COCOBOD Deploys Cocoa Management System as Agritech Startups Enable EUDR Supply-Chain Traceability',
    summary: 'Ghana Cocoa Board’s digital CMS mapping platform unites with agritech startups like Farmerline and AgroCenta to guarantee deforestation-free cocoa exports to Europe.',
    content: `TAKORADI & SEFWI WIAWSO — As the European Union Deforestation Regulation (EUDR) takes full effect, the Ghana Cocoa Board (COCOBOD) has completed the nationwide rollout of its Cocoa Management System (CMS), an end-to-end digital database mapping every cocoa farm, farmer identity, and purchasing station in Ghana.

The high-tech system assigns digital IDs to over 800,000 cocoa farmers and utilizes GPS polygon mapping to verify that harvested cocoa is grown strictly on established farmland without encroachment into forest reserves.

Working alongside COCOBOD are innovative Ghanaian agritech pioneers including Farmerline, AgroCenta, Trotro Tractor, and Complete Farmer. These startups deploy mobile apps and satellite imaging that provide farmers with weather advisories, subsidized fertilizer, digital payments, and verifiable chain-of-custody documentation, ensuring Ghanaian cocoa retains its premier position in global chocolate manufacturing.`,
    category: 'Business',
    channel: 'Channel One TV',
    author: 'Kojo Asante',
    publishedAt: 'Nov 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 10800,
    likes: 780
  },

  // BANK OF GHANA eCEDI PILOT (Grid #24 — Completes 24 = 8 x 3 balanced grid!)
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
    publishedAt: 'Nov 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    views: 12450,
    likes: 890
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
    subscribers: '41.4K+ Combined Reach',
    avatar: 'https://yt3.googleusercontent.com/iPDGhDeG-UIGsF8WZlGQBBLWcax4l7UKMdpvFYyome9gABUSAe2F4owxEhxD47GkEW1A_cEq=s900-c-k-c0x00ffffff-no-rj',
    bannerImage: 'https://i.ytimg.com/vi/ta_-_bIYqQc/hqdefault.jpg',
    coverImage: 'https://i.ytimg.com/vi/ta_-_bIYqQc/hqdefault.jpg',
    articleBodyImage: 'https://i.ytimg.com/vi/Tq2eQiG1It0/hqdefault.jpg',
    bio: 'Justice Martei Mamah, known online as Mr Martei, is a Ghanaian software engineer, tech creator, Founder & CEO of Lumen Studios, and Founder of Plexlink (https://www.plexlink.site/). With a 41.4K+ combined reach across Instagram (@mr.marteii primary & @mr.martei secondary), TikTok, Snapchat, Facebook, and YouTube, he partners with brands like Oraimo Ghana, Syinix Ghana, QCY Ghana, Wolevo, Numero eSIM, and Bisame App.',
    award: {
      title: 'Digital Product Founder & Tech Innovator of the Year',
      year: '2026',
      description: 'Awarded by Ghana Digital Innovation Awards for pioneering Plexlink and leading Lumen Studios, bringing smart NFC contactless networking and creative digital engineering to African professionals.'
    },
    profileArticle: `Justice Martei Mamah, known online as Mr Martei, is a Ghanaian software engineer, web developer, tech creator, Founder & CEO of Lumen Studios, and Founder of Plexlink (https://www.plexlink.site/). With an engaged network of 41.4K+ combined followers across primary Instagram (@mr.marteii with 16.4K followers), TikTok (@mr.martei with 9.1K followers), secondary Instagram (@mr.martei with 7.4K followers), Snapchat (6K followers), Facebook (2.4K followers), and YouTube (@mr.martei with 142 subscribers), Mr Martei is redefining personal branding and digital utility in West Africa.

As Founder & CEO of Lumen Studios, he leads creative digital media production and software product development, while his flagship venture Plexlink eliminates the friction of traditional paper business cards at conferences and business gatherings—enabling professionals to share comprehensive contact cards, portfolios, and social profiles with a single NFC tap on any smartphone.

In addition to Plexlink and Lumen Studios, Mr Martei developed the widely used "Paste Here" Figma plugin for designers worldwide and maintains an active developer portfolio at mrmartei.site. His trusted voice in consumer electronics and digital workflows has earned commercial collaborations with leading local and international partners including Oraimo Ghana, Syinix Ghana, QCY Ghana, Wolevo, Numero eSIM, and Bisame App.`,
    stats: {
      instagramFollowers: '16.4K',
      tiktokFollowers: '9.1K',
      secondaryInstagramFollowers: '7.4K',
      snapchatFollowers: '6K',
      facebookFollowers: '2.4K',
      youtubeSubscribers: '142',
      engagementRate: '12.8%'
    },
    brandPartners: [
      'Oraimo Ghana',
      'Syinix Ghana',
      'QCY Ghana',
      'Wolevo',
      'Numero eSIM',
      'Bisame App'
    ],
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
    avatar: 'https://diglancers.com/wp-content/uploads/2026/03/7wket4-compressed-300x300.jpg',
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
    articleBodyImage: '/assets/creators/dessy-ocean-event.jpg',
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
    articleBodyImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/KalyJay_at_a_bar_in_osu.jpg',
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
    articleBodyImage: 'https://cdn.yen.com.gh/tags/600x600/4b956fe5c270b0fa.jpeg?v=1',
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
    avatar: '/assets/creators/endurance-grand-avatar.jpg',
    bannerImage: '/assets/creators/endurance-grand-banner.jpg',
    coverImage: '/assets/creators/endurance-grand-banner.jpg',
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
    avatar: '/assets/creators/official-starter-avatar.jpg',
    bannerImage: '/assets/creators/official-starter-banner.jpg',
    coverImage: '/assets/creators/official-starter-banner.jpg',
    articleBodyImage: '/assets/creators/official-starter-body.jpg',
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
    avatar: '/assets/creators/wode-maya-avatar.jpg',
    bannerImage: '/assets/creators/wode-maya-banner.jpg',
    coverImage: '/assets/creators/wode-maya-banner.jpg',
    articleBodyImage: '/assets/creators/wode-maya-banner.jpg',
    bio: 'Berthold Kobby Winkler Ackon, universally known as Wode Maya, is a pioneering Pan-African YouTuber with over 2.05M subscribers promoting African business, real estate, and tourism—and 2026 EMY Africa Young Achiever (Male).',
    award: {
      title: 'EMY Africa Young Achiever (Male) & Pan-African Storyteller',
      year: '2026',
      description: 'Honored at the 11th EMY Africa Awards (Nov 2026) and recognized by the African Union Diaspora Directorate for championing intra-African tourism and entrepreneurship.'
    },
    profileArticle: `Berthold Kobby Winkler Ackon, universally celebrated as Wode Maya, is one of the most transformative independent documentarians on the African continent. Under his signature banner "Africa to the World," his YouTube channel has surpassed 2.05 million subscribers (2,172 videos, 349.89M+ views), with 402,000 on Instagram (@mrghanababy), 328.9K on X, and 1.5M+ on Facebook.

From modern real estate developments and agricultural innovations to conversations with diaspora returnees, Wode Maya's camera showcases African ingenuity, inspiring thousands to invest and travel across the continent—earning him the Young Achiever (Male) honour at the 11th EMY Africa Awards in November 2026.`,
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
    avatar: '/assets/creators/kwadwo-sheldon-avatar.jpg',
    bannerImage: '/assets/creators/kwadwo-sheldon-banner.jpg',
    coverImage: '/assets/creators/kwadwo-sheldon-banner.jpg',
    articleBodyImage: '/assets/creators/kwadwo-sheldon-banner.jpg',
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
    avatar: '/assets/creators/sdk-dele-avatar.jpg',
    bannerImage: '/assets/creators/sdk-dele-banner.jpg',
    coverImage: '/assets/creators/sdk-dele-banner.jpg',
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
  },
  {
    id: 'chef-abbys',
    name: 'Chef Abbys (Abena Amoakoaa Sintim-Aboagye)',
    realName: 'Abena Amoakoaa Sintim-Aboagye',
    handle: '@chefabbys',
    platform: 'Multi-Platform',
    category: 'Culinary & Lifestyle',
    status: 'Breakthrough',
    subscribers: '1.2M+ Combined Reach',
    avatar: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    articleBodyImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    bio: 'Abena Amoakoaa Sintim-Aboagye, celebrated online as Chef Abbys, is a Ghanaian culinary creator and food storyteller crowned Young Achiever (Female) at the 11th EMY Africa Awards in November 2026.',
    award: {
      title: 'EMY Africa Young Achiever (Female)',
      year: '2026',
      description: 'Awarded at the 11th EMY Africa Awards at the AICC Grand Arena (Nov 21, 2026) for elevating Ghanaian culinary storytelling and inspiring young African food entrepreneurs.'
    },
    profileArticle: `Abena Amoakoaa Sintim-Aboagye, widely known across West Africa and the diaspora as Chef Abbys, has transformed Ghanaian home-style cooking and West African street cuisine into high-energy digital storytelling. Through vibrant step-by-step recipe reels, cultural food journeys, and culinary entrepreneurship, she has built an engaged community exceeding 1.2 million followers across TikTok, Instagram, and YouTube.

On November 21, 2026, Chef Abbys was honoured with the prestigious Young Achiever (Female) trophy at the 11th EMY Africa Awards held at the Accra International Conference Centre Grand Arena—cementing her standing as one of Ghana’s defining lifestyle and culinary ambassadors.`,
    stats: {
      tiktokFollowers: '680K+',
      instagramFollowers: '420K+',
      youtubeSubscribers: '110K+',
      engagementRate: '13.4%'
    },
    socialLinks: {
      tiktok: 'https://www.tiktok.com/@chefabbys',
      instagram: 'https://www.instagram.com/chefabbys/',
      youtube: 'https://www.youtube.com/@chefabbys'
    }
  }
];

export const INITIAL_POLL: PollQuestion = {
  id: 'poll-1',
  question: 'Which Ghanaian milestone in late 2026 will have the biggest lasting impact going into 2027?',
  options: [
    { id: 'opt-1', text: 'Plexlink (Smart NFC Cards & Link-in-Bio Networking)', votes: 2450 },
    { id: 'opt-2', text: 'National 5G Spectrum Rollout & Commercial Launch', votes: 1420 },
    { id: 'opt-3', text: 'Women’s Development Bank March 2027 Take-Off', votes: 1180 },
    { id: 'opt-4', text: 'Direct NIA Ghana Card PIN + Selfie KYC Standards', votes: 690 }
  ],
  totalVotes: 5740
};

export const EVENTS_PRESS: EventPressItem[] = [
  {
    id: 'next-digital-wealth-summit-2026',
    type: 'Summit & Conference',
    title: 'Mr Martei Speaks on AI & Building Digital Wealth at The Next Digital Wealth Summit',
    outletOrEvent: 'The Next Digital Wealth Summit',
    episodeOrSession: 'Featured Session: Artificial Intelligence & Building Sustainable Digital Wealth',
    dateLabel: 'November 2, 2026 (2 weeks ago)',
    isoDate: '2026-11-02',
    location: 'Accra, Ghana',
    summary: 'Two weeks ago, Ghanaian tech creator, software engineer, Lumen Studios Founder & CEO, and Plexlink founder Mr Martei (Justice Martei Mamah) joined founders and digital strategists at The Next Digital Wealth Summit to break down practical AI leverage and product-led wealth creation.',
    content: `ACCRA — Two weeks ago at The Next Digital Wealth Summit, software engineer, tech creator, Founder & CEO of Lumen Studios, and Plexlink founder [Mr Martei](/creator/mr-martei) (Justice Martei Mamah) delivered a standout presentation centered on the intersection of Artificial Intelligence and building long-term digital wealth from Africa.

Addressing an audience of creators, early-stage startup builders, freelancers, and entrepreneurs, [Mr Martei](/creator/mr-martei) challenged attendees to look beyond chasing viral social metrics alone and instead convert online attention into owned software, creative studios, digital products, and scalable systems.

"AI has dramatically compressed the time between an idea and a working product," Mr Martei noted during his summit session. "A solo builder or lean studio in Accra today can use AI-assisted coding, design automation, and content distribution to ship real tools to a global audience—whether that is a Figma plugin like Paste Here, creative client work at Lumen Studios, or a physical-digital platform like Plexlink."

Mr Martei walked participants through a practical blueprint for AI-era digital wealth: pairing niche technical education across his 41.4K+ audience with direct-to-consumer digital infrastructure, automating customer onboarding, and using smart contactless networking tools so every in-person summit or client meeting turns into measurable digital pipeline.`,
    keyTakeaways: [
      'Transitioning from ad-dependent content creation to owning studios like Lumen Studios, software tools, and hardware-enabled platforms.',
      'Using Artificial Intelligence as a productivity multiplier for solo developers, designers, and lean Ghanaian startups.',
      'Building defensible personal brand equity where trust drives direct product adoption without middlemen.',
      'Turning offline events and summits into compounding digital networks with instant contactless contact sharing.'
    ],
    imageUrl: 'https://i.ytimg.com/vi/Tq2eQiG1It0/hqdefault.jpg',
    featuredCreatorId: 'mr-martei',
    featuredCreatorName: 'Mr Martei (Justice Martei Mamah)',
    topicTags: ['Artificial Intelligence', 'Digital Wealth', 'Lumen Studios', 'Accra Summit']
  },
  {
    id: 'zedfm-zedtech-content-creation-2025',
    type: 'Podcast & Radio',
    title: 'Mr Martei Appears on ZedFM’s ZedTech Episode to Unpack Tech Content Creation in Ghana',
    outletOrEvent: 'ZedFM (101.9 FM)',
    episodeOrSession: 'ZedTech — Content Creation, Consistency & Digital Storytelling',
    dateLabel: '2025 (Last Year)',
    isoDate: '2025-10-15',
    location: 'Accra, Ghana (Radio & Digital Broadcast)',
    summary: 'On a feature episode of ZedFM’s technology program ZedTech last year, Lumen Studios Founder & CEO Mr Martei shared his blueprint for launching tech content creation in Ghana, simplifying complex tools, and working with major local and international brand partners.',
    content: `ACCRA — Last year, tech creator, software developer, and Founder & CEO of Lumen Studios [Mr Martei](/creator/mr-martei) (Justice Martei Mamah) sat down on ZedFM’s flagship technology show, ZedTech, for an in-depth broadcast focused on the realities and opportunities of content creation in Ghana.

During the ZedTech episode, [Mr Martei](/creator/mr-martei) reflected on how aspiring Ghanaian creators can break into technology and educational media without waiting for expensive studio equipment. Emphasizing clarity over complexity, he explained how breaking down everyday software workflows, web development concepts, and digital design tricks helped him grow a 41.4K+ cross-platform community spanning Instagram (@mr.marteii primary & @mr.martei secondary), TikTok (@mr.martei), Snapchat, Facebook, and YouTube.

Speaking to ZedFM listeners across Accra and online streams, he emphasized that sustainable content creation relies on solving genuine audience problems: "When viewers leave your 60-second reel having learned a practical skill or discovered a tool that saves them hours of work, they do not just watch—they share, return, and trust what you build next."

The ZedTech conversation also explored how Ghanaian creators can balance technical work and studio leadership at Lumen Studios with regular publishing schedules, collaborate with fellow tech voices, and build long-term relationships with verified local and international brand partners—including Oraimo Ghana, Syinix Ghana, QCY Ghana, Wolevo, Numero eSIM, and Bisame App.`,
    keyTakeaways: [
      'Starting content creation with accessible smartphone tools and prioritizing clear audio and crisp storytelling.',
      'Translating technical software and design topics into practical, everyday value for Ghanaian youth and professionals.',
      'Balancing creative consistency with software engineering and leadership as Founder & CEO of Lumen Studios.',
      'Attracting verified local and international partners such as Oraimo Ghana, Syinix Ghana, QCY Ghana, Wolevo, Numero eSIM, and Bisame App.'
    ],
    imageUrl: 'https://i.ytimg.com/vi/ta_-_bIYqQc/hqdefault.jpg',
    featuredCreatorId: 'mr-martei',
    featuredCreatorName: 'Mr Martei (Justice Martei Mamah)',
    topicTags: ['ZedFM', 'ZedTech', 'Content Creation', 'Broadcast Interview']
  },
  {
    id: 'pan-african-ai-summit-delppy',
    type: 'Summit & Conference',
    title: 'Delppy Leads Consumer AI & Cybersecurity Literacy Discussion at Pan-African AI Summit',
    outletOrEvent: 'Pan-African AI Summit',
    episodeOrSession: 'Speaker Spotlight: Everyday AI Adoption & Mobile Security',
    dateLabel: 'September 2026',
    isoDate: '2026-09-18',
    location: 'Accra International Conference Centre',
    summary: 'Tech educator and Bytes Unlocked co-host Delppy (Emmanuel Obuobi Fianko) spoke at the Pan-African AI Summit on equipping everyday smartphone users with practical AI skills and cybersecurity awareness.',
    content: `ACCRA — At the Pan-African AI Summit in Accra, Ghanaian technology educator [Delppy](/creator/delppy) (Emmanuel Obuobi Fianko) joined regional AI researchers and policy leaders to examine how artificial intelligence reaches everyday consumers outside corporate boardrooms.

Drawing on insights from his 570K+ combined community across TikTok, Instagram, and the Bytes Unlocked YouTube channel, Delppy demonstrated why localized tech education is critical as AI tools become embedded in mobile banking, messaging apps, and consumer smartphones.

He underscored the parallel need for strong digital hygiene—educating creators and everyday citizens on spotting AI-enabled phishing attempts, securing multi-factor authentication, and evaluating consumer hardware honestly.`,
    keyTakeaways: [
      'Making practical AI prompts and productivity tools accessible to non-technical smartphone users across Ghana.',
      'Integrating cybersecurity awareness into creator-led technology education.',
      'Supporting indigenous and West African digital voices in shaping continental AI narratives.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80',
    featuredCreatorId: 'delppy',
    featuredCreatorName: 'Delppy (Emmanuel Obuobi Fianko)',
    topicTags: ['Pan-African AI Summit', 'Cybersecurity', 'Tech Literacy']
  },
  {
    id: 'tech-in-ghana-dessy-ocean',
    type: 'Press Appearance',
    title: 'Dessy Ocean Highlights Creator AI Workflows at Tech in Ghana Conference',
    outletOrEvent: 'Tech in Ghana Conference',
    episodeOrSession: 'Creator Economy & Emerging Digital Productivity Tools',
    dateLabel: 'August 2026',
    isoDate: '2026-08-12',
    location: 'Accra, Ghana',
    summary: 'Meta AI campaign creator Dessy Ocean (Desmond Ofori Appiah) addressed founders and digital creatives at the Tech in Ghana Conference on accelerating short-form educational media.',
    content: `ACCRA — Recognized across Ghana for making complex smartphone settings and AI features effortless to understand, [Dessy Ocean](/creator/dessy-ocean) (Desmond Ofori Appiah) took the stage at the Tech in Ghana Conference to discuss the convergence of creator media and emerging AI ecosystems.

Selected by Meta in May 2024 to promote Meta's AI technologies in Ghana, Dessy shared how rapid short-form tutorials help demystify AI assistants for students, entrepreneurs, and small businesses across the country.`,
    keyTakeaways: [
      'Demonstrating real-world AI assistant workflows for Ghanaian small business owners.',
      'Bridging global platform innovations with local creator storytelling formats.',
      'Empowering young creators across Accra, Kumasi, and Takoradi to build digital literacy channels.'
    ],
    imageUrl: '/assets/creators/dessy-ocean-event.jpg',
    featuredCreatorId: 'dessy-ocean',
    featuredCreatorName: 'Dessy Ocean (Desmond Ofori Appiah)',
    topicTags: ['Tech in Ghana', 'Meta AI', 'Digital Productivity']
  }
];
