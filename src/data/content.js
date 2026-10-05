const asset = (id, ext = "png") => `https://www.figma.com/api/mcp/asset/${id}.${ext}`;

export const ASSETS = {
  logo: "/logo-full.svg",
  logoIcon: "/logo-icon.svg",
  white: asset("1f669de9-a36b-416a-8b1a-ee4cf3cd2a0a", "svg"),
  website: asset("4baa8c02-f668-4548-ab90-bbe2ee5d6a17"),
  marketing: asset("0e46cdd5-d3fb-4c7d-91c4-47839dce723a"),
  meta: asset("46a27af1-d3d8-451b-b42c-5c50ae700c6f"),
  ceo: asset("bdc72f92-3682-4aec-b7af-63b04bd59d04")
};

export const CASES = [
  {
    id: "legal-link",
    title: "Legal Link",
    category: "AI & Legal Tech",
    client: "Legal Link Technologies",
    year: "2025",
    link: "/case/legal-link",
    brandColor: "#FF6B00",
    img: "https://larkh.vercel.app/connect%201.png"
  },
  {
    id: "rj-group-textile",
    title: "RJ Group",
    category: "E-Commerce",
    client: "RJ Group International",
    year: "2025",
    link: "/case/rj-group",
    brandColor: "#DC2626",
    img: "https://larkh.vercel.app/RJ%20group%20img%201.jpg"
  }
];

export const LEGAL_LINK_GALLERY = [
  "https://larkh.vercel.app/connect%201.png",
  "https://larkh.vercel.app/connect%202.png",
  "https://larkh.vercel.app/connect%203.png",
  "https://larkh.vercel.app/connect%204.png",
  "https://larkh.vercel.app/connect%205.png"
];

export const MIRA_GALLERY = LEGAL_LINK_GALLERY;

export const RJ_GROUP_GALLERY = [
  "https://larkh.vercel.app/RJ%20group%20img%201.jpg",
  "https://larkh.vercel.app/RJ%20group%20img%203.jpg",
  "https://larkh.vercel.app/RJ%20group%20img%205.jpg",
  "https://larkh.vercel.app/RJ%20group%20img%206.jpg"
];

export const BLOG_POSTS = [
  {
    slug: "startech-awards-branding",
    title: "How Startech Awards’ Branding Won Three International Awards",
    excerpt: "Learn how we developed a visually striking identity that reflects innovation, technological progress, and futuristic aesthetics—helping the Startech Awards brand shine on the global stage.",
    category: "Case study",
    readTime: "4 min read",
    date: "Feb 12, 2025",
    author: {
      name: "Alex V.",
      role: "Head of Brand Strategy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    tags: ["Branding", "Award Winning", "Design System", "3D Motion"],
    img: asset("06c4e171-81a3-4164-9773-2e7cf3363ec2"),
    keyTakeaways: [
      "Geometric brandmarks paired with chromatic gradients create an instantly recognizable signature for high-tech award programs.",
      "Dynamic 3D digital trophies converted passive award recipients into active viral brand ambassadors on LinkedIn and X.",
      "A modular design system allowed the brand to scale effortlessly across digital ceremonies, physical trophies, and streaming broadcasts."
    ],
    stats: [
      { label: "Global Design Awards Won", value: "3x" },
      { label: "Increase in Submissions", value: "+180%" },
      { label: "Social Media Impressions", value: "2.4M" }
    ],
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge: Elevating a Global Tech Honor",
        content: `When Startech approached Black Box, tech industry award ceremonies were suffering from a widespread design fatigue: generic gold stars, stock ribbon motifs, and outdated physical galas that failed to resonate with the modern venture and tech ecosystem.

Startech wanted a brand identity that felt as disruptive and forward-thinking as the AI founders, quantum innovators, and robotics engineers who would walk their virtual and physical stages. The goal was twofold: create an iconic visual system that founders would genuinely be proud to showcase, and establish a digital-first design system adaptable to live AR streaming, physical metalwork, and social virality.`
      },
      {
        id: "the-visual-philosophy",
        heading: "The Visual Philosophy: Dark Matter & Chromatic Refraction",
        content: `We anchored the visual identity in high-contrast obsidian neutrals accented by dynamic chromatic refraction. Rather than static color palettes, we engineered generative gradient behaviors that dynamically respond to different award tiers:

• Frontier AI & Machine Intelligence: Radiant ultraviolet and cyan pulses
• Hardware & Aerospace: Deep titanium gray with warm amber specular highlights
• Climate & Clean Energy: Bioluminescent emerald and solar gold

Each tier received a mathematically derived 3D prism trophy that rendered in real time across the awards website, giving viewers interactive 360-degree rotational control before the live ceremony.`
      },
      {
        id: "turning-recognition-into-virality",
        heading: "Turning Recognition into a Growth Flywheel",
        content: `An award is only as powerful as the pride of its recipients. To guarantee maximum organic distribution, we built an automated social asset engine for every nominee and winner:

1. **Instant Social Kit Generator**: Nominees could generate personalized, animated story badges and high-res LinkedIn banners with a single click.
2. **Interactive Digital Trophy**: Winners received an encrypted verifiable badge paired with an interactive 3D web asset embeddable directly into company websites and investor decks.
3. **Immersive Gala Experience**: The live stream utilized WebGL stage visuals synchronized with the keynote audio, delivering an experience that felt closer to a high-end cinematic trailer than an industry panel.`
      },
      {
        id: "results-and-impact",
        heading: "Results and Global Recognition",
        content: `Within four months of launching the new identity, Startech Awards saw a 180% surge in international applicant submissions from 42 countries. The rebrand captured three premier international design awards (including Saapro Site of the Day and Innovation Design Honors), and solidified Startech as the definitive mark of excellence in deep tech.`
      }
    ]
  },
  {
    slug: "marketing-in-latin-america-word-of-mouth",
    title: "Marketing in Latin America: Word of Mouth",
    excerpt: "Discover the power of word-of-mouth advertising in Latin America and why asking clients how they’re doing is crucial for success.",
    category: "Marketing",
    readTime: "6 min read",
    date: "Jan 28, 2025",
    author: {
      name: "Sofia Mendez",
      role: "LatAm Growth Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    tags: ["LatAm Market", "Growth Marketing", "Community Building", "Customer Retention"],
    img: asset("28933d3b-ae64-43f2-b107-92aa30aa01e0"),
    keyTakeaways: [
      "In Latin American markets, business is fundamentally personal: WhatsApp relationships often outperform cold funnel automation.",
      "Genuine post-sale follow-ups ('¿Cómo estás?') generate 3x more referral revenue than algorithmic ad retargeting.",
      "Hyper-localized cultural nuances matter far more than translating standard US/EU marketing copy."
    ],
    stats: [
      { label: "WhatsApp Conversion Rate", value: "38%" },
      { label: "Referral Driven Pipeline", value: "64%" },
      { label: "Retention Lift", value: "+45%" }
    ],
    sections: [
      {
        id: "the-cultural-foundation",
        heading: "The Cultural Foundation: Relationship-First Commerce",
        content: `Entering Latin American markets with standard Silicon Valley playbook tactics—cold automated drip emails, impersonal web forms, and detached self-serve onboarding—almost always leads to underwhelming conversion rates. 

Throughout Brazil, Mexico, Colombia, and Argentina, commerce has always been relational before it is transactional. Trust is not established by a slick landing page alone; it is cultivated through direct, human-to-human dialogue, warmth, and responsiveness.`
      },
      {
        id: "the-whatsapp-operating-system",
        heading: "WhatsApp as the Primary Commercial Operating System",
        content: `In LatAm, WhatsApp is not merely a messaging app; it is the entire digital marketplace. Successful brands operating in the region build dedicated WhatsApp conversational funnels rather than pushing users into cold email loops:

• **Immediate human concierge touch**: Responding within 4 minutes on WhatsApp increases deal closing rates by 260%.
• **Voice notes and authentic tone**: Using crisp, professional yet warm voice memos creates an immediate psychological bond of trust that static PDFs can never replicate.
• **Seamless payments & confirmations**: Integrating direct checkout links inside the chat flow reduces drop-off rates by nearly half.`
      },
      {
        id: "the-power-of-asking-how-are-you",
        heading: "Why Asking “¿Cómo te va?” Drives Compounding Referrals",
        content: `One of our fintech clients struggling with high customer acquisition costs in São Paulo and Mexico City implemented our 'Relationship First' protocol: instead of automated NPS survey emails, founders and account leads sent personalized 15-second audio check-ins 14 days after purchase.

The response was staggering: over 70% of clients responded with detailed voice notes, and 42% voluntarily introduced colleagues, partners, or vendors without being prompted by a referral discount. In LatAm, genuine care is the highest-ROI marketing strategy.`
      }
    ]
  },
  {
    slug: "marketing-for-neobanks-human-touch",
    title: "Marketing for Neobanks: Why do they need a “face”?",
    excerpt: "Discover why neobanks need a human touch despite their digital nature and explore key marketing strategies to build trust.",
    category: "Strategy",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    author: {
      name: "Marcus Chen",
      role: "Principal FinTech Strategist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    tags: ["Fintech", "Neobanking", "Brand Trust", "UX Strategy"],
    img: asset("a07865f4-e033-4212-89a1-169201a76cca"),
    keyTakeaways: [
      "Consumers do not trust algorithms with life savings unless there is clear evidence of human accountability.",
      "Transparent fee breakdowns and human-centered microcopy dramatically reduce account abandonment during KYC.",
      "Personalized financial health dashboards transform transactional banking into daily advisory habits."
    ],
    stats: [
      { label: "KYC Completion Rate", value: "84%" },
      { label: "Deposit Volume Growth", value: "+210%" },
      { label: "Support Resolution Time", value: "< 2 min" }
    ],
    sections: [
      {
        id: "the-trust-deficit",
        heading: "The Trust Deficit in Purely Digital Finance",
        content: `Traditional banking institutions may be slow, bureaucratic, and burdened by legacy fees, but they hold one massive psychological advantage: a physical branch down the street with real humans behind glass doors.

When a digital neobank encounters a transaction error or fraud freeze, users without a clear human contact experience acute anxiety. Overcoming this 'trust deficit' is the single most critical marketing and branding objective for any emerging fintech.`
      },
      {
        id: "humanizing-the-interface",
        heading: "Humanizing the Interface: From Cold Numbers to Empathy",
        content: `To build genuine loyalty, neobanks must weave human empathy directly into the UI:

1. **Named Support Champions**: Instead of 'Ticket #48927 is being reviewed by our system', show 'Elena from our Security Team in Madrid is reviewing your transfer now'.
2. **Empathetic Error States**: Replace cryptic error codes with proactive, reassuring language and instant one-tap callback options.
3. **Transparent Financial Diagnostics**: Provide friendly insights that celebrate savings milestones and offer smart nudges rather than cold financial charts.`
      },
      {
        id: "building-brand-longevity",
        heading: "From Novelty Card to Primary Financial Hub",
        content: `Many neobanks win the battle for secondary spending cards (e.g. travel perks or split bills), but fail to become the user's primary salary account. The transition happens when the brand communicates stability, regulatory clarity, and human stewardship across every touchpoint.`
      }
    ]
  },
  {
    slug: "how-brands-can-work-with-chatgpt",
    title: "How brands can work with ChatGPT",
    excerpt: "Actionable insights and strategies for integrating AI-driven communication into your brand’s digital marketing efforts.",
    category: "How To",
    readTime: "7 min read",
    date: "Dec 20, 2024",
    author: {
      name: "Elena Rostova",
      role: "AI & Innovation Lead",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    tags: ["Artificial Intelligence", "Content Strategy", "Prompt Engineering", "Brand Voice"],
    img: asset("57238eab-9f0a-445e-afd6-9839a32d32ab"),
    keyTakeaways: [
      "AI models generate generic mediocrity unless governed by rigid brand voice guardrails and bespoke knowledge embeddings.",
      "Use LLMs as strategic sparring partners for ideation and structure, never as unsupervised copy-paste publishers.",
      "Establish strict verification pipelines to preserve factual accuracy and brand personality."
    ],
    stats: [
      { label: "Content Production Velocity", value: "4.5x" },
      { label: "Editorial Polish Time Saved", value: "-60%" },
      { label: "Brand Voice Consistency", value: "98%" }
    ],
    sections: [
      {
        id: "the-ai-slop-trap",
        heading: "The “AI Slop” Trap: Why Generic Prompts Fail",
        content: `Every week, thousands of companies publish hollow, formulaic AI articles packed with clichés like 'in today's fast-paced digital landscape' or 'supercharge your productivity'. The result is instant audience disengagement and severe search penalty.

Generative AI models are trained to predict the most statistically probable next word—which by definition produces the most average, generic thought possible unless explicitly counter-prompted with unique brand DNA.`
      },
      {
        id: "the-black-box-framework",
        heading: "The Black Box 4-Step Prompting Architecture",
        content: `To generate authentic, high-impact copy that sounds like your senior strategists rather than a generic machine, we employ our proprietary 4-layer framework:

1. **Archetype & Persona Mandate**: Define exact tone, forbidden clichés, sentence length variety, and philosophical worldview.
2. **Context & Proprietary Data Injection**: Feed raw interview transcripts, customer testimonials, and internal case studies.
3. **Structural Blueprint**: Dictate heading depth, paragraph cadence (65-75 characters max per line), and bullet balance.
4. **Adversarial Critique Pass**: Ask the model to review its own output from the perspective of a skeptical industry expert and rewrite any vague assertions.`
      },
      {
        id: "workflows-that-scale",
        heading: "Building an Autonomous Quality Pipeline",
        content: `By integrating AI into research synthesis, angle exploration, and outline stress-testing while retaining human directors for final prose curation, our partner brands produce 4.5x more content without sacrificing an ounce of editorial prestige.`
      }
    ]
  }
];

export const AWARDS = [
  { title: "Saapro – Site Of The Day", year: 2025, tag: "SOTD" },
  { title: "Saapro – Website Of The Day", year: 2025, tag: "Honorable" },
  { title: "Saapro — Silver in the nomination Best Industry Website", year: 2025, tag: "Silver" },
  { title: "Saapro — Shortlisted for the Website of the Year", year: 2025, tag: "Nominee" },
  { title: "Saapro — Best International Website", year: 2025, tag: "Best In Class" },
  { title: "Startech Awards – Website of The Day", year: 2024, tag: "SOTD" },
  { title: "Startech Awards – UI, UX, Innovation Design Award", year: 2024, tag: "Innovation" },
  { title: "Black Box – UI, UX, Innovation Design Award", year: 2024, tag: "Special Kudos" },
  { title: "Black Box – Website of The Day", year: 2024, tag: "SOTD" },
  { title: "Top B2B Company 2023", year: 2023, tag: "Global Leader" }
];

export const PRICING_PLANS = [
  {
    title: "Branding",
    price: "2,500€+",
    period: "fixed",
    desc: "Complete visual identity, logo, typography, brand guidelines & assets",
    bg: ASSETS.marketing,
    features: ["Brand strategy & positioning", "Logo & typography system", "Visual guidelines (40+ pgs)", "Social & pitch templates"]
  },
  {
    title: "Website design & development",
    price: "6,000€+",
    period: "project",
    desc: "High-converting custom websites built for speed, responsiveness & polish",
    bg: ASSETS.website,
    featured: true,
    features: ["Figma UI/UX prototype", "Custom React/Framer animation", "Full responsive optimization", "SEO & analytics setup"]
  },
  {
    title: "Marketing & performance",
    price: "3,000€",
    period: "/mo",
    desc: "Go-to-market strategy, paid ads, campaign creatives & growth funnels",
    bg: ASSETS.marketing,
    features: ["Go-to-market roadmap", "Performance ad creatives", "Funnel conversion audit", "Weekly growth sprints"]
  },
  {
    title: "UX/UI Hourly",
    price: "35€",
    period: "/hour",
    desc: "Flexible on-demand design support for fast-moving startups and product teams",
    bg: ASSETS.meta,
    features: ["Dedicated senior designer", "Direct Slack / Figma sync", "Fast 24-48h turnaround", "No long-term lock-in"]
  }
];
