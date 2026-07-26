// ============================================================
// INTERFACES
// ============================================================

export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface ServiceDetail {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  items: ServiceDetail[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'marketing' | 'design' | 'app';
}

export interface SkillCardItem {
  name: string;
  category: 'design' | 'marketing' | 'development' | 'ai';
  icon: string; // emoji or icon name
  color: string; // tailwind color classes
  proficiency: number; // 0-100
}

export interface SkillCategoryData {
  id: string;
  titleEn: string;
  titleBn: string;
  iconType: 'graphic' | 'uiux' | 'web' | 'app' | 'ai' | 'marketing' | 'tools';
  colorTheme: string;
  skills: { name: string; level: number }[];
}

export interface ProjectFeature {
  textBn: string;
  textEn: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  category: string;
  tag: string;
  tagEn: string;
  metric: string;
  metricEn: string;
  thumbClass: string;
  bgGradient: string;
  technologies: string[];
  features: ProjectFeature[];
  liveUrl?: string;
  githubUrl?: string;
  mockupType: 'amardokan' | 'studio_maker' | 'ai_enhancer' | 'pos_system' | 'portfolio' | 'marketing' | 'graphic' | 'app';
}

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  desc: string;
}

export interface JourneyItem {
  year: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  icon: string;
  color: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  rating: number;
  country?: string;
  flag?: string;
}

export interface PricingFeature {
  textBn: string;
  textEn: string;
  included: boolean;
}

export interface PricingTier {
  nameBn: string;
  nameEn: string;
  priceBn: string;
  priceEn: string;
  periodBn: string;
  periodEn: string;
  descBn: string;
  descEn: string;
  features: { textBn: string; textEn: string; included: boolean }[];
  popular?: boolean;
  ctaBn?: string;
  ctaEn?: string;
}

export interface PricingPlan {
  categoryId: string;
  titleBn: string;
  titleEn: string;
  tiers: PricingTier[];
}

export interface TranslationSet {
  name: string;
  nav: {
    about: string;
    services: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    cta: string;
    pricing: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight1: string;
    headlineHighlight2: string;
    sub: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    side1: string;
    side2: string;
    side3: string;
    typedRoles: string[];
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    experienceBadge: string;
    journeyTitle: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterMarketing: string;
    filterDesign: string;
    filterDevelopment: string;
    filterAI: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    metricLabel: string;
    viewDetails: string;
    closeBtn: string;
    techLabel: string;
    featuresLabel: string;
    liveDemo: string;
    sourceCode: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  tools: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    tagline: string;
    emailLabel: string;
    phoneLabel: string;
    locLabel: string;
    formName: string;
    formEmail: string;
    formMsg: string;
    formSubject: string;
    formSubmit: string;
    formNote: string;
    formSuccess: string;
    copyTemplate: string;
    copySuccess: string;
    socialTitle: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
}

// ============================================================
// TRANSLATIONS - BANGLA
// ============================================================

export const bnData: TranslationSet = {
  name: "আসাদুজ্জামান (সাজু)",
  nav: {
    about: "পরিচিতি",
    services: "সেবাসমূহ",
    skills: "দক্ষতা",
    projects: "প্রজেক্ট",
    experience: "অভিজ্ঞতা",
    contact: "যোগাযোগ",
    cta: "হায়ার করুন",
    pricing: "মূল্য",
  },
  hero: {
    badge: "ওয়েব ডেভেলপার · গ্রাফিক ডিজাইনার · ডিজিটাল মার্কেটার",
    headline: " — ব্র্যান্ডকে ",
    headlineHighlight1: "গল্প",
    headlineHighlight2: "গ্রোথ",
    sub: " বানাই, গল্পকে ",
    tagline: "৫+ বছর ধরে মার্কেটিং স্ট্র্যাটেজি, কন্টেন্ট এবং ভিজ্যুয়াল ডিজাইন নিয়ে কাজ করছি। আমার লক্ষ্য হলো আপনার ব্যবসার জন্য বিশ্বস্ত ভিত্তি তৈরি করা যা সরাসরি প্রবৃদ্ধি আনবে।",
    ctaPrimary: "প্রজেক্ট দেখুন",
    ctaSecondary: "যোগাযোগ করুন",
    ctaResume: "রিজিউমি ডাউনলোড",
    side1: "০১ — কুড়িগ্রাম, রংপুর, বাংলাদেশ থেকে কাজ করি, তবে ক্লায়েন্ট বিশ্বজুড়ে।",
    side2: "০২ — ফ্রিল্যান্স ও চুক্তিভিত্তিক প্রজেক্টের জন্য উন্মুক্ত।",
    side3: "০৩ — গড় রেসপন্স সময়: ২৪ ঘণ্টার মধ্যে।",
    typedRoles: ["গ্রাফিক ডিজাইনার", "অ্যাপ ডেভেলপার", "ডিজিটাল মার্কেটার", "ব্র্যান্ড স্ট্র্যাটেজিস্ট", "Flutter ডেভেলপার"],
  },
  about: {
    title: "পরিচিতি ও কাজের দর্শন",
    subtitle: "আমার সাথে আপনার ব্র্যান্ডের পথচলা কেন দীর্ঘস্থায়ী ও বিশ্বস্ত হবে?",
    bioParagraph1: "আমি <strong>M. Asaduzzaman Sazu</strong>। বিগত ৫ বছর ধরে ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন এবং অ্যাপস ডেভেলপমেন্টের মাধ্যমে বিভিন্ন ব্যবসাকে সফল ব্র্যান্ডে পরিণত করতে সাহায্য করছি।",
    bioParagraph2: "আমি বিশ্বাস করি, একটি সুন্দর ডিজাইন মানুষের নজর কাড়ে, কিন্তু সঠিক মার্কেটিং কৌশল তাদের মন জয় করে। আমি শুধু একটি সার্ভিস দিই না, বরং আপনার ব্যবসার একজন বিশ্বস্ত 'গ্রোথ-পার্টনার' হিসেবে কাজ করি।",
    experienceBadge: "বছরের অভিজ্ঞতা",
    journeyTitle: "আমার পেশাদার যাত্রা",
  },
  services: {
    title: "সেবাসমূহ",
    subtitle: "আমি যা করি",
  },
  skills: {
    title: "পেশাগত দক্ষতা",
    subtitle: "কাজের ক্ষেত্র ও প্রযুক্তিগত দক্ষতা",
    filterAll: "সব",
    filterMarketing: "মার্কেটিং",
    filterDesign: "ডিজাইন",
    filterDevelopment: "ডেভেলপমেন্ট",
    filterAI: "AI & Tools",
  },
  projects: {
    title: "সিলেক্টেড কাজ",
    subtitle: "প্রজেক্ট গ্যালারি",
    filterAll: "সব কাজ",
    metricLabel: "ফলাফল",
    viewDetails: "বিস্তারিত দেখুন",
    closeBtn: "বন্ধ করুন",
    techLabel: "প্রযুক্তি",
    featuresLabel: "ফিচারসমূহ",
    liveDemo: "লাইভ দেখুন",
    sourceCode: "সোর্স কোড",
  },
  experience: {
    title: "অভিজ্ঞতা",
    subtitle: "কর্মজীবনের সময়রেখা",
  },
  tools: {
    title: "টুলস",
    subtitle: "যেসব প্রফেশনাল টুল ব্যবহার করি",
  },
  testimonials: {
    title: "প্রশংসাপত্র",
    subtitle: "ক্লায়েন্টরা যা বলেন",
  },
  contact: {
    title: "যোগাযোগ",
    subtitle: "চলুন কথা বলি",
    tagline: "নতুন প্রজেক্ট নিয়ে কথা বলতে চান? নিচের ফর্ম পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
    locLabel: "লোকেশন",
    formName: "আপনার নাম",
    formEmail: "আপনার ইমেইল",
    formSubject: "বিষয়",
    formMsg: "আপনার বার্তা",
    formSubmit: "মেসেজ পাঠান",
    formNote: "সাবমিট করলে সরাসরি হোয়াটসঅ্যাপে মেসেজ যাবে।",
    formSuccess: "ধন্যবাদ! আপনার মেসেজটি পাঠানো হচ্ছে।",
    copyTemplate: "ইমেইল টেমপ্লেট কপি করুন",
    copySuccess: "কপি করা হয়েছে!",
    socialTitle: "সোশ্যাল মিডিয়া",
  },
  footer: {
    rights: "আসাদুজ্জামান (সাজু)। সর্বস্বত্ব সংরক্ষিত।",
    backToTop: "উপরে ফিরুন",
  },
};

// ============================================================
// TRANSLATIONS - ENGLISH
// ============================================================

export const enData: TranslationSet = {
  name: "M. Asaduzzaman Sazu",
  nav: {
    about: "About",
    services: "Services",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    cta: "Hire Me",
    pricing: "Pricing",
  },
  hero: {
    badge: "Web Developer · Graphic Designer · Digital Marketer",
    headline: " — I turn brands into ",
    headlineHighlight1: "stories",
    headlineHighlight2: "growth",
    sub: ", and stories into ",
    tagline: "Crafting data-driven marketing strategies, premium visual designs, and high-performance apps for 5+ years. My goal is to build deep customer trust and deliver profitable business results.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get in Touch",
    ctaResume: "Download Resume",
    side1: "01 — Based in Kurigram, Rangpur, Bangladesh, working with clients globally.",
    side2: "02 — Available for freelance, contract, and full-time remote roles.",
    side3: "03 — Average response time: Within 24 hours.",
    typedRoles: ["Graphic Designer", "App Developer", "Digital Marketer", "Brand Strategist", "Flutter Developer"],
  },
  about: {
    title: "About & Work Philosophy",
    subtitle: "Why Trust Your Brand's Digital Journey with Me?",
    bioParagraph1: "I am <strong>M. Asaduzzaman Sazu</strong>, a professional digital marketing strategist, graphic designer, and app developer with over 5+ years of hands-on experience. My core philosophy is building an integrated, high-converting digital foundation that earns trust and drives scalable business growth.",
    bioParagraph2: "I work not just as a service provider, but as your dedicated growth partner—ensuring transparent communication, flawless execution, and absolute integrity in every project we undertake together.",
    experienceBadge: "Years of Trust",
    journeyTitle: "My Professional Journey",
  },
  services: {
    title: "Services",
    subtitle: "What I Do Best",
  },
  skills: {
    title: "Professional Skills",
    subtitle: "My Areas of Expertise",
    filterAll: "All",
    filterMarketing: "Marketing",
    filterDesign: "Design",
    filterDevelopment: "Development",
    filterAI: "AI & Tools",
  },
  projects: {
    title: "Selected Work",
    subtitle: "Project Showcase",
    filterAll: "All Projects",
    metricLabel: "Impact",
    viewDetails: "View Details",
    closeBtn: "Close",
    techLabel: "Technologies",
    featuresLabel: "Key Features",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
  },
  experience: {
    title: "Experience",
    subtitle: "Career Journey",
  },
  tools: {
    title: "Tools",
    subtitle: "Professional Tools I Use",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What Clients Say",
  },
  contact: {
    title: "Contact",
    subtitle: "Let's Talk",
    tagline: "Have an exciting project or idea? Fill out the form below or reach out directly.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locLabel: "Location",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMsg: "Your Message",
    formSubmit: "Send Message",
    formNote: "Submitting will open WhatsApp with a pre-filled message.",
    formSuccess: "Thank you! Your message is being sent.",
    copyTemplate: "Copy Email Template",
    copySuccess: "Copied successfully!",
    socialTitle: "Find Me Online",
  },
  footer: {
    rights: "M. Asaduzzaman Sazu. All Rights Reserved.",
    backToTop: "Back to Top",
  },
};

// ============================================================
// STATS
// ============================================================

export const statsBn: StatItem[] = [
  { num: "৫+", label: "বছরের অভিজ্ঞতা" },
  { num: "৮০+", label: "সম্পন্ন প্রজেক্ট" },
  { num: "২০০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { num: "১২+", label: "ইন্ডাস্ট্রি সেক্টর" },
];

export const statsEn: StatItem[] = [
  { num: "5+", label: "Years Experience" },
  { num: "80+", label: "Projects Completed" },
  { num: "200+", label: "Happy Clients" },
  { num: "12+", label: "Industry Sectors" },
];

// ============================================================
// JOURNEY TIMELINE (About section)
// ============================================================

export const journeyData: JourneyItem[] = [
  {
    year: "2019",
    titleBn: "গ্রাফিক ডিজাইনার",
    titleEn: "Graphic Designer",
    descBn: "Adobe Photoshop ও Illustrator দিয়ে লোগো, ব্র্যান্ড আইডেন্টিটি এবং প্রিন্ট ডিজাইন শুরু করি।",
    descEn: "Started with Adobe Photoshop & Illustrator — logos, brand identity, and print design.",
    icon: "🎨",
    color: "from-rose-500 to-pink-500",
  },
  {
    year: "2020",
    titleBn: "ডিজিটাল মার্কেটার",
    titleEn: "Digital Marketer",
    descBn: "Meta Ads, Google Ads এবং SEO শিখে বিভিন্ন ব্যবসার অনলাইন গ্রোথ নিশ্চিত করতে শুরু করি।",
    descEn: "Mastered Meta Ads, Google Ads & SEO to drive online growth for multiple businesses.",
    icon: "📈",
    color: "from-violet-500 to-purple-600",
  },
  {
    year: "2022",
    titleBn: "অ্যাপ ডেভেলপার",
    titleEn: "App Developer",
    descBn: "Flutter ও Firebase দিয়ে Android ও iOS অ্যাপ ডেভেলপমেন্টে প্রবেশ করি।",
    descEn: "Entered app development with Flutter & Firebase — building Android & iOS apps.",
    icon: "📱",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    titleBn: "AI ও অটোমেশন",
    titleEn: "AI & Automation",
    descBn: "AI টুলস, Gemini API এবং অটোমেশন ইন্টিগ্রেশন নিয়ে কাজ শুরু। POS সফটওয়্যার তৈরি।",
    descEn: "Started working with AI tools, Gemini API and automation. Built POS software.",
    icon: "🤖",
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2024+",
    titleBn: "ফুল-স্ট্যাক ডিজিটাল স্ট্র্যাটেজিস্ট",
    titleEn: "Full-Stack Digital Strategist",
    descBn: "ডিজাইন, মার্কেটিং ও ডেভেলপমেন্ট একত্রিত করে গ্লোবাল ক্লায়েন্টদের জন্য সম্পূর্ণ ডিজিটাল সমাধান প্রদান।",
    descEn: "Combining design, marketing & development to deliver complete digital solutions for global clients.",
    icon: "🚀",
    color: "from-amber-500 to-orange-500",
  },
];

// ============================================================
// SKILL CARDS
// ============================================================

export const skillCards: SkillCardItem[] = [
  // Design
  { name: "Photoshop", category: "design", icon: "🎨", color: "from-blue-500 to-blue-700", proficiency: 95 },
  { name: "Illustrator", category: "design", icon: "✏️", color: "from-orange-400 to-orange-600", proficiency: 90 },
  { name: "Figma", category: "design", icon: "🖌️", color: "from-purple-500 to-purple-700", proficiency: 85 },
  { name: "Canva", category: "design", icon: "🖼️", color: "from-teal-400 to-teal-600", proficiency: 98 },
  { name: "InDesign", category: "design", icon: "📄", color: "from-pink-500 to-pink-700", proficiency: 80 },
  // Marketing
  { name: "Meta Ads", category: "marketing", icon: "📢", color: "from-blue-600 to-indigo-700", proficiency: 95 },
  { name: "Google Ads", category: "marketing", icon: "🔍", color: "from-green-500 to-emerald-600", proficiency: 88 },
  { name: "SEO", category: "marketing", icon: "📊", color: "from-violet-500 to-purple-700", proficiency: 90 },
  { name: "Analytics", category: "marketing", icon: "📈", color: "from-orange-500 to-red-600", proficiency: 85 },
  { name: "Email Mktg", category: "marketing", icon: "📧", color: "from-cyan-500 to-sky-700", proficiency: 82 },
  // Development
  { name: "Flutter", category: "development", icon: "💙", color: "from-sky-400 to-blue-600", proficiency: 85 },
  { name: "Firebase", category: "development", icon: "🔥", color: "from-yellow-400 to-orange-500", proficiency: 88 },
  { name: "React", category: "development", icon: "⚛️", color: "from-cyan-400 to-blue-500", proficiency: 80 },
  { name: "Node.js", category: "development", icon: "💚", color: "from-green-500 to-emerald-700", proficiency: 75 },
  { name: "Android", category: "development", icon: "📱", color: "from-green-400 to-green-600", proficiency: 85 },
  { name: "GitHub", category: "development", icon: "🐙", color: "from-slate-600 to-slate-800", proficiency: 90 },
  // AI & Tools
  { name: "Gemini AI", category: "ai", icon: "✨", color: "from-indigo-500 to-purple-600", proficiency: 80 },
  { name: "ChatGPT", category: "ai", icon: "🤖", color: "from-emerald-400 to-teal-600", proficiency: 88 },
  { name: "Midjourney", category: "ai", icon: "🎭", color: "from-violet-500 to-indigo-700", proficiency: 82 },
  { name: "VS Code", category: "ai", icon: "💻", color: "from-blue-400 to-indigo-500", proficiency: 92 },
];

// ============================================================
// SERVICES
// ============================================================

export const servicesBn: ServiceCategory[] = [
  {
    title: "ডিজিটাল মার্কেটিং",
    icon: "📈",
    items: [
      { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "ফেসবুক, ইনস্টাগ্রাম ও ইউটিউবে আপনার আদর্শ ক্রেতাদের কাছে পৌঁছে তাদের বিশ্বাস অর্জন করি এবং ব্র্যান্ড এনগেজমেন্ট বাড়াই।", icon: "📱" },
      { title: "পেইড অ্যাড ক্যাম্পেইন (Meta & Google)", desc: "ডেটা-ড্রিভেন মেটা ও গুগল অ্যাডস ক্যাম্পেইন পরিচালনা করি, যেখানে কম বাজেটে সর্বোচ্চ সেলস ও কনভার্সন নিশ্চিত করা হয়।", icon: "🎯" },
      { title: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)", desc: "আপনার ওয়েবসাইটকে গুগলের প্রথম পৃষ্ঠায় এনে দীর্ঘমেয়াদী অর্গানিক ট্রাফিক ও সত্যিকারের ক্রেতা তৈরি করি।", icon: "🔍" },
      { title: "কন্টেন্ট স্ট্র্যাটেজি ও সেলস ফানেল", desc: "ক্রেতাদের মনস্তত্ত্ব বুঝে এমন কন্টেন্ট ও ফানেল তৈরি করি, যা ভিজিটরকে বিশ্বস্ত ক্রেতায় রূপান্তরিত করে।", icon: "🔄" },
    ]
  },
  {
    title: "গ্রাফিক ডিজাইন ও ব্র্যান্ডিং",
    icon: "🎨",
    items: [
      { title: "লোগো ও ব্র্যান্ড আইডেন্টিটি", desc: "আপনার ব্র্যান্ডের জন্য এমন একটি ইউনিক ও আধুনিক লোগো তৈরি করি, যা একনজরেই মানুষের মনে দাগ কাটে।", icon: "✨" },
      { title: "সোশ্যাল মিডিয়া ক্রিয়েটিভস", desc: "প্রিমিয়াম কোয়ালিটির পোস্ট, ব্যানার ও অ্যাড ক্রিয়েটিভ ডিজাইন করি, যা স্ক্রলিং থামিয়ে মানুষের দৃষ্টি আকর্ষণ করে।", icon: "🖼️" },
      { title: "প্রিন্ট, প্যাকেজিং ও স্টেশনারি", desc: "বিজনেস কার্ড থেকে শুরু করে প্রোডাক্ট প্যাকেজিং—সবকিছু আন্তর্জাতিক মানের ডিজাইনে তৈরি করি।", icon: "📦" },
      { title: "ইউআই/ইউএক্স ডিজাইন", desc: "অ্যাপ ও ওয়েবসাইটের জন্য এমন আধুনিক ইন্টারফেস ডিজাইন করি, যা ব্যবহারে সহজ এবং দেখতে অসাধারণ।", icon: "🎭" },
    ]
  },
  {
    title: "অ্যাপ ও সফটওয়্যার ডেভেলপমেন্ট",
    icon: "📱",
    items: [
      { title: "Flutter অ্যান্ড্রয়েড ও iOS অ্যাপ", desc: "আপনার বিজনেস আইডিয়াকে বাস্তবে রূপ দিতে দ্রুতগতি, নিরাপদ ও স্কেলেবল মোবাইল অ্যাপ তৈরি করি।", icon: "💙" },
      { title: "ই-কমার্স ও বিজনেস অ্যাপ", desc: "অনলাইনে সেলস বাড়াতে ইউজার-ফ্রেন্ডলি ই-কমার্স অ্যাপ এবং কর্পোরেট ম্যানেজমেন্ট অ্যাপ তৈরি করি।", icon: "🛒" },
      { title: "POS সফটওয়্যার সিস্টেম", desc: "দোকান ও রেস্টুরেন্টের জন্য কাস্টম POS সিস্টেম তৈরি করি—বিক্রি, স্টক ম্যানেজমেন্ট, রিপোর্ট সবকিছু এক জায়গায়।", icon: "🏪" },
      { title: "AI অটোমেশন ইন্টিগ্রেশন", desc: "ব্যবসার পুনরাবৃত্তিমূলক কাজ অটোমেট করতে AI ও স্মার্ট সিস্টেম তৈরি করি, যা সময় ও খরচ দুটোই সাশ্রয় করে।", icon: "🤖" },
    ]
  }
];

export const servicesEn: ServiceCategory[] = [
  {
    title: "Digital Marketing",
    icon: "📈",
    items: [
      { title: "Social Media Marketing", desc: "I connect your brand with the right audience on Facebook, Instagram, and YouTube—building genuine trust and meaningful engagement.", icon: "📱" },
      { title: "Paid Ad Campaigns (Meta & Google)", desc: "I run data-driven Meta and Google Ads campaigns that maximize your sales and conversions while keeping costs as low as possible.", icon: "🎯" },
      { title: "Search Engine Optimization (SEO)", desc: "I bring your website to Google's first page, generating long-term organic traffic and real, high-intent buyers for your business.", icon: "🔍" },
      { title: "Content Strategy & Sales Funnels", desc: "I craft persuasive content and smart funnels that guide your visitors from curiosity to confident purchase decisions.", icon: "🔄" },
    ]
  },
  {
    title: "Graphic Design & Branding",
    icon: "🎨",
    items: [
      { title: "Logo & Brand Identity", desc: "I create unique, modern logos and complete brand identities that make an unforgettable first impression on your customers.", icon: "✨" },
      { title: "Social Media Creatives", desc: "I design premium-quality posts, banners, and ad creatives that stop the scroll and grab your audience's attention instantly.", icon: "🖼️" },
      { title: "Print, Packaging & Stationery", desc: "From business cards to product packaging—I deliver internationally-standard designs that elevate your brand's perceived value.", icon: "📦" },
      { title: "UI/UX Design", desc: "I design sleek, modern interfaces for apps and websites that are visually stunning and effortlessly easy to use.", icon: "🎭" },
    ]
  },
  {
    title: "App & Software Development",
    icon: "📱",
    items: [
      { title: "Flutter Android & iOS Apps", desc: "I build lightning-fast, secure, and scalable mobile applications that bring your business idea to life on both platforms.", icon: "💙" },
      { title: "E-Commerce & Business Apps", desc: "I develop user-friendly e-commerce and corporate management apps designed to boost your online sales and operations.", icon: "🛒" },
      { title: "POS Software Systems", desc: "I build custom POS systems for shops and restaurants—sales tracking, inventory management, and reports all in one place.", icon: "🏪" },
      { title: "AI Automation Integration", desc: "I automate repetitive business tasks using AI and smart systems—saving you valuable time and operational costs.", icon: "🤖" },
    ]
  }
];

// ============================================================
// SKILL CATEGORIES (for the detailed section)
// ============================================================

export const skillsData: SkillItem[] = [
  { name: "Meta Ads & Business Suite", level: 95, category: "marketing" },
  { name: "SEO Strategy & Optimization", level: 90, category: "marketing" },
  { name: "Google Search & Display Ads", level: 85, category: "marketing" },
  { name: "Content Strategy & Funnels", level: 92, category: "marketing" },
  { name: "Adobe Photoshop", level: 95, category: "design" },
  { name: "Adobe Illustrator", level: 90, category: "design" },
  { name: "Figma (UI/UX)", level: 85, category: "design" },
  { name: "Brand Identity Design", level: 90, category: "design" },
  { name: "Flutter App Development", level: 85, category: "app" },
  { name: "Firebase Backend", level: 88, category: "app" },
  { name: "Android Development", level: 82, category: "app" },
  { name: "React & Next.js", level: 78, category: "app" },
];

export const skillsCategoriesData: SkillCategoryData[] = [
  {
    id: "graphic-design",
    titleEn: "Graphic Design",
    titleBn: "গ্রাফিক ডিজাইন",
    iconType: "graphic",
    colorTheme: "rose",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Figma (UI/UX)", level: 85 },
      { name: "Canva Pro", level: 98 },
      { name: "Brand Identity Design", level: 92 },
      { name: "Print & Packaging", level: 88 },
    ]
  },
  {
    id: "app-development",
    titleEn: "App Development",
    titleBn: "অ্যাপ ডেভেলপমেন্ট",
    iconType: "app",
    colorTheme: "pink",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Firebase", level: 88 },
      { name: "React / Next.js", level: 78 },
      { name: "Node.js / Express", level: 75 },
      { name: "Android Studio", level: 80 },
      { name: "REST APIs", level: 82 },
    ]
  },
  {
    id: "digital-marketing",
    titleEn: "Digital Marketing",
    titleBn: "ডিজিটাল মার্কেটিং",
    iconType: "marketing",
    colorTheme: "indigo",
    skills: [
      { name: "Meta Ads & Business Suite", level: 95 },
      { name: "Google PPC Ad Campaigns", level: 90 },
      { name: "SEO & Keyword Research", level: 88 },
      { name: "Content Strategy", level: 90 },
      { name: "Lead Generation", level: 86 },
      { name: "Conversion Funnel Design", level: 92 },
    ]
  }
];

// ============================================================
// PROJECTS
// ============================================================

export const projectsData: ProjectItem[] = [
  {
    id: "amardokan",
    title: "আমারডোকান — ই-কমার্স অ্যাপ",
    titleEn: "AmarDokan — E-Commerce App",
    desc: "বাংলাদেশের ছোট ব্যবসায়ীদের জন্য তৈরি একটি সম্পূর্ণ ই-কমার্স মার্কেটপ্লেস অ্যাপ। Flutter দিয়ে তৈরি এই অ্যাপে আছে প্রোডাক্ট লিস্টিং, শপিং কার্ট, বিকাশ পেমেন্ট ও অর্ডার ট্র্যাকিং।",
    descEn: "A complete e-commerce marketplace app built for Bangladeshi small businesses. Built with Flutter, it features product listings, shopping cart, bKash payment integration, and real-time order tracking.",
    category: "app",
    tag: "Flutter App",
    tagEn: "Flutter App",
    metric: "লোডিং ২x দ্রুত",
    metricEn: "2x Faster Load",
    thumbClass: "Smartphone",
    bgGradient: "from-blue-600 to-indigo-700",
    technologies: ["Flutter", "Firebase", "bKash API", "Node.js", "Firestore"],
    features: [
      { textBn: "মাল্টি-ভেন্ডর মার্কেটপ্লেস সিস্টেম", textEn: "Multi-vendor marketplace system" },
      { textBn: "বিকাশ ও কার্ড পেমেন্ট ইন্টিগ্রেশন", textEn: "bKash & card payment integration" },
      { textBn: "রিয়েল-টাইম অর্ডার ট্র্যাকিং", textEn: "Real-time order tracking" },
      { textBn: "সেলার ড্যাশবোর্ড ও অ্যানালিটিক্স", textEn: "Seller dashboard & analytics" },
      { textBn: "পুশ নোটিফিকেশন সিস্টেম", textEn: "Push notification system" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    mockupType: "amardokan",
  },
  {
    id: "studio_maker",
    title: "Studio Maker — ডিজাইন টুল",
    titleEn: "Studio Maker — Design Tool",
    desc: "নন-ডিজাইনারদের জন্য একটি সহজ ও শক্তিশালী গ্রাফিক ডিজাইন টুল। ব্যবহারকারীরা সহজেই লোগো, সোশ্যাল মিডিয়া পোস্ট ও ব্যানার তৈরি করতে পারেন।",
    descEn: "A simple yet powerful graphic design tool for non-designers. Users can easily create logos, social media posts, and banners with drag-and-drop simplicity.",
    category: "app",
    tag: "Web App",
    tagEn: "Web App",
    metric: "৫০০+ ব্যবহারকারী",
    metricEn: "500+ Users",
    thumbClass: "Palette",
    bgGradient: "from-purple-600 to-pink-600",
    technologies: ["React", "Node.js", "Canvas API", "Firebase", "Tailwind CSS"],
    features: [
      { textBn: "ড্র্যাগ-এন্ড-ড্রপ ডিজাইন এডিটর", textEn: "Drag-and-drop design editor" },
      { textBn: "১০০০+ প্রি-মেড টেমপ্লেট", textEn: "1000+ pre-made templates" },
      { textBn: "AI-চালিত ব্যাকগ্রাউন্ড রিমুভার", textEn: "AI-powered background remover" },
      { textBn: "PNG, JPG, SVG এক্সপোর্ট", textEn: "PNG, JPG, SVG export" },
      { textBn: "কোলাবোরেশন ফিচার", textEn: "Collaboration feature" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    mockupType: "studio_maker",
  },
  {
    id: "ai_enhancer",
    title: "AI Image Enhancer",
    titleEn: "AI Image Enhancer",
    desc: "AI দিয়ে পুরনো বা নিম্নমানের ছবি 4K-তে রূপান্তরিত করার একটি স্মার্ট ওয়েব অ্যাপ। Gemini AI ইন্টিগ্রেশন দিয়ে তৈরি এই টুলটি ফটোগ্রাফার ও ব্যবসায়ীদের জন্য অসাধারণ।",
    descEn: "A smart web app that transforms old or low-quality images into stunning 4K using AI. Built with Gemini AI integration, it's perfect for photographers and businesses alike.",
    category: "app",
    tag: "AI Tool",
    tagEn: "AI Tool",
    metric: "৯৫% নির্ভুলতা",
    metricEn: "95% Accuracy",
    thumbClass: "Bot",
    bgGradient: "from-emerald-500 to-teal-700",
    technologies: ["React", "Gemini AI", "Firebase", "Python", "TensorFlow"],
    features: [
      { textBn: "AI-চালিত ছবি এনহান্সমেন্ট", textEn: "AI-powered image enhancement" },
      { textBn: "ব্যাচ প্রসেসিং (একসাথে অনেক ছবি)", textEn: "Batch processing (multiple images)" },
      { textBn: "Before/After স্লাইডার ভিউ", textEn: "Before/After slider view" },
      { textBn: "নয়েজ রিডাকশন ও শার্পনিং", textEn: "Noise reduction & sharpening" },
      { textBn: "4K রেজোলিউশনে ডাউনলোড", textEn: "Download in 4K resolution" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    mockupType: "ai_enhancer",
  },
  {
    id: "pos_system",
    title: "POS সফটওয়্যার সিস্টেম",
    titleEn: "POS Software System",
    desc: "ছোট থেকে মাঝারি দোকান ও রেস্টুরেন্টের জন্য একটি সম্পূর্ণ পয়েন্ট-অফ-সেল সিস্টেম। বিক্রয়, স্টক, রিপোর্ট ও কর্মী ব্যবস্থাপনা সবকিছু এক জায়গায়।",
    descEn: "A complete Point-of-Sale system for small to medium shops and restaurants. Sales tracking, inventory, reports, and staff management—all in one place.",
    category: "app",
    tag: "Software",
    tagEn: "Software",
    metric: "বিক্রয় ২৫% বৃদ্ধি",
    metricEn: "+25% Sales Efficiency",
    thumbClass: "Terminal",
    bgGradient: "from-amber-500 to-orange-600",
    technologies: ["Flutter", "Firebase", "SQLite", "bKash API", "PDF Generation"],
    features: [
      { textBn: "দ্রুত বিলিং ও ইনভয়েস", textEn: "Fast billing & invoice generation" },
      { textBn: "স্টক ম্যানেজমেন্ট ও লো-স্টক অ্যালার্ট", textEn: "Stock management & low-stock alerts" },
      { textBn: "দৈনিক/মাসিক সেলস রিপোর্ট", textEn: "Daily/monthly sales reports" },
      { textBn: "মাল্টি-ইউজার ও রোল অ্যাকসেস", textEn: "Multi-user & role-based access" },
      { textBn: "অফলাইন মোড সাপোর্ট", textEn: "Offline mode support" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    mockupType: "pos_system",
  },
  {
    id: "brand_identity",
    title: "কমপ্লিট ব্র্যান্ড আইডেন্টিটি",
    titleEn: "Complete Brand Identity Design",
    desc: "একটি প্রিমিয়াম ব্র্যান্ডের জন্য আধুনিক লোগো, ব্র্যান্ড গাইডলাইন, কালার প্যালেট এবং সোশ্যাল মিডিয়া কিট ডিজাইন। ব্র্যান্ড ভিজিবিলিটি ৪০% বৃদ্ধি পেয়েছে।",
    descEn: "Modern logo, brand guidelines, color palette, and social media kit for an emerging brand. The visual identity helped increase brand visibility by 40%.",
    category: "graphic",
    tag: "Branding",
    tagEn: "Branding",
    metric: "ব্র্যান্ড ভিজিবিলিটি +৪০%",
    metricEn: "+40% Brand Visibility",
    thumbClass: "Palette",
    bgGradient: "from-pink-500 to-rose-600",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"],
    features: [
      { textBn: "প্রাইমারি ও সেকেন্ডারি লোগো সেট", textEn: "Primary & secondary logo set" },
      { textBn: "ব্র্যান্ড কালার প্যালেট ও টাইপোগ্রাফি", textEn: "Brand color palette & typography" },
      { textBn: "সোশ্যাল মিডিয়া ক্রিয়েটিভ কিট", textEn: "Social media creative kit" },
      { textBn: "প্রিন্ট-রেডি ফাইল (AI/EPS/PDF)", textEn: "Print-ready files (AI/EPS/PDF)" },
      { textBn: "কমপ্লিট ব্র্যান্ড গাইডলাইন বুক", textEn: "Complete brand guideline book" },
    ],
    liveUrl: "#",
    githubUrl: undefined,
    mockupType: "graphic",
  },
  {
    id: "meta_campaign",
    title: "হাই-কনভার্টিং অ্যাড ক্যাম্পেইন",
    titleEn: "High-Converting Ad Campaign",
    desc: "ফেসবুক ও গুগল অ্যাডস ব্যবহার করে টার্গেটেড লিড জেনারেশন ও সেলস ফানেল তৈরি। সঠিক ক্রেতা খুঁজে কম খরচে সর্বোচ্চ ROAS নিশ্চিত করা হয়েছে।",
    descEn: "Targeted lead generation and sales funnel creation using Facebook and Google Ads. By targeting the exact ideal audience, we ensured the highest possible ROAS at minimized cost.",
    category: "marketing",
    tag: "Meta Ads",
    tagEn: "Meta Ads",
    metric: "ROAS ৪.২x বৃদ্ধি",
    metricEn: "4.2x Scaled ROAS",
    thumbClass: "Megaphone",
    bgGradient: "from-violet-600 to-purple-800",
    technologies: ["Meta Ads Manager", "Google Ads", "SEMrush", "Google Analytics", "Canva"],
    features: [
      { textBn: "টার্গেটেড অডিয়েন্স রিসার্চ", textEn: "Targeted audience research" },
      { textBn: "A/B টেস্টিং ও ক্রিয়েটিভ অপটিমাইজেশন", textEn: "A/B testing & creative optimization" },
      { textBn: "রিটার্গেটিং ও লুকঅ্যালাইক অডিয়েন্স", textEn: "Retargeting & lookalike audiences" },
      { textBn: "সম্পূর্ণ কনভার্সন ফানেল", textEn: "Complete conversion funnel" },
      { textBn: "সাপ্তাহিক পারফরম্যান্স রিপোর্ট", textEn: "Weekly performance reports" },
    ],
    liveUrl: "#",
    githubUrl: undefined,
    mockupType: "marketing",
  },
];

// Keep legacy arrays for backward compatibility
export const projectsBn: ProjectItem[] = projectsData;
export const projectsEn: ProjectItem[] = projectsData;

// ============================================================
// EXPERIENCE TIMELINE
// ============================================================

export const timelineBn: TimelineItem[] = [
  {
    period: "২০২৪ — বর্তমান (২০২৬)",
    role: "লিড ডিজিটাল স্ট্র্যাটেজিস্ট ও অ্যাপ ডেভেলপার",
    org: "ফ্রিল্যান্স · গ্লোবাল ক্লায়েন্টবেস",
    desc: "বর্তমানে দেশীয় ও আন্তর্জাতিক ব্র্যান্ডের জন্য ফুল-স্ট্যাক ডিজিটাল মার্কেটিং, প্রিমিয়াম ব্র্যান্ডিং এবং কাস্টম মোবাইল অ্যাপ ডেভেলপমেন্ট নিয়ে কাজ করছি।"
  },
  {
    period: "২০২২ — ২০২৪",
    role: "গ্রাফিক ডিজাইনার ও ডিজিটাল মার্কেটার",
    org: "ক্রিয়েটিভ সোশাল মিডিয়া এজেন্সি",
    desc: "মাল্টি-ন্যাশনাল ক্লায়েন্টদের জন্য ব্র্যান্ড লোগো, ভিজ্যুয়াল কিট, সোশ্যাল মিডিয়া ক্রিয়েটিভস ডিজাইন এবং পেইড অ্যাড ক্যাম্পেইন পরিচালনার মাধ্যমে ব্র্যান্ডের পরিচিতি ও বিক্রি বৃদ্ধি করেছি।"
  },
  {
    period: "২০২১ — ২০২২",
    role: "জুনিয়র গ্রাফিক ডিজাইনার",
    org: "স্টার্টআপ ডিজাইন স্টুডিও",
    desc: "কর্পোরেট স্টেশনারি, লোগো ডিজাইন, প্রিন্ট ব্যানার এবং প্যাকেজিং ডিজাইনে হাতে-কলমে কাজ করার মধ্য দিয়ে পেশাদার ক্যারিয়ারের একটি শক্ত ভিত্তি তৈরি করি।"
  },
  {
    period: "২০১৯ — ২০২১",
    role: "ফ্রিল্যান্স গ্রাফিক ডিজাইনার",
    org: "Fiverr · Upwork · স্থানীয় ক্লায়েন্ট",
    desc: "ফ্রিল্যান্সিং প্ল্যাটফর্মে কাজ শুরু। লোগো ডিজাইন, সোশ্যাল মিডিয়া ক্রিয়েটিভ এবং ডিজিটাল মার্কেটিংয়ে দক্ষতা অর্জন করি।"
  }
];

export const timelineEn: TimelineItem[] = [
  {
    period: "2024 — Present (2026)",
    role: "Lead Digital Strategist & App Developer",
    org: "Freelance — Global Client Base",
    desc: "Currently leading full-stack digital marketing, premium branding, and custom mobile app development for local and international brands."
  },
  {
    period: "2022 — 2024",
    role: "Graphic Designer & Digital Marketer",
    org: "Creative Social Media Agency",
    desc: "Designed comprehensive brand identities, visual kits, and social media creatives while independently managing high-converting paid ad campaigns for multinational clients."
  },
  {
    period: "2021 — 2022",
    role: "Junior Graphic Designer",
    org: "Startup Design Studio",
    desc: "Built a solid professional foundation by focusing on vector logos, corporate stationery, print banners, and product packaging design."
  },
  {
    period: "2019 — 2021",
    role: "Freelance Graphic Designer",
    org: "Fiverr · Upwork · Local Clients",
    desc: "Started freelancing on major platforms, building expertise in logo design, social media creatives, and digital marketing."
  }
];

// ============================================================
// TOOLS LIST
// ============================================================

export const toolsList = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma (UI/UX)",
  "Canva Pro",
  "Meta Business Suite",
  "Google Ads & Analytics",
  "SEMrush (SEO)",
  "Flutter",
  "Firebase / Firestore",
  "React / Next.js",
  "Android Studio",
  "VS Code / Git",
  "ChatGPT / Gemini AI",
  "Midjourney",
];

// ============================================================
// TESTIMONIALS
// ============================================================

export const testimonialsBn: TestimonialItem[] = [
  {
    quote: "আমাদের ব্র্যান্ড রিব্র্যান্ডিংয়ে অসাধারণ কাজ করেছেন। বিক্রি এবং ব্র্যান্ড ইমেজ দুটোই বহুগুণ বেড়ে গেছে। আমরা চমৎকার সাড়া পাচ্ছি।",
    name: "সাবরিনা আক্তার",
    role: "প্রতিষ্ঠাতা, লিফ কফি হাউজ",
    rating: 5,
    country: "বাংলাদেশ",
    flag: "🇧🇩"
  },
  {
    quote: "অ্যাড ক্যাম্পেইন শুরু করার পর আমাদের কনভার্সন রেট প্রায় দ্বিগুণ হয়ে গেছে। সত্যি অসাধারণ মার্কেটিং স্ট্র্যাটেজি, যা সরাসরি ইউএস মার্কেটে আমাদের সেলস বাড়িয়েছে।",
    name: "মাইকেল জনসন",
    role: "মার্কেটিং হেড, স্কাইলাইন ডিজিটাল",
    rating: 5,
    country: "যুক্তরাষ্ট্র",
    flag: "🇺🇸"
  },
  {
    quote: "আমাদের ই-কমার্স অ্যাপটি তিনি যেভাবে ডেভেলপ করেছেন তা সত্যিই চমৎকার। অ্যাপটি খুব ফাস্ট এবং ইউজার-ফ্রেন্ডলি। আমি তার কাজের মানে মুগ্ধ।",
    name: "রাহাত আলী",
    role: "ম্যানেজিং ডিরেক্টর, ট্রেডবিডি",
    rating: 5,
    country: "সংযুক্ত আরব আমিরাত",
    flag: "🇦🇪"
  },
  {
    quote: "লোগো এবং প্যাকেজিং ডিজাইনে তার সৃজনশীলতা অসাধারণ। আন্তর্জাতিক মানের কাজ পেয়েছি, যা আমাদের ব্র্যান্ডকে একটি প্রিমিয়াম লুক দিয়েছে।",
    name: "ফাতিমা নূর",
    role: "ফাউন্ডার, নূরা অর্গানিকস",
    rating: 5,
    country: "যুক্তরাজ্য",
    flag: "🇬🇧"
  }
];

export const testimonialsEn: TestimonialItem[] = [
  {
    quote: "Sazu completely revamped our cafe brand identity. The response was immediate: customers started sharing our pages on their own, and footfall visibly increased.",
    name: "Sabrina Akter",
    role: "Founder, Leaf Coffee House",
    rating: 5,
    country: "Bangladesh",
    flag: "🇧🇩"
  },
  {
    quote: "Within 30 days of handing over our Meta Ads to him, our conversion rate doubled. His strategic approach increased our brand visibility in the US market significantly.",
    name: "Michael Johnson",
    role: "Marketing Head, Skyline Digital",
    rating: 5,
    country: "United States",
    flag: "🇺🇸"
  },
  {
    quote: "He developed our e-commerce app flawlessly. The app loads incredibly fast and our customers love the experience. A truly rare partner who combines professionalism with excellence.",
    name: "Rahat Ali",
    role: "Managing Director, TradeBD",
    rating: 5,
    country: "UAE",
    flag: "🇦🇪"
  },
  {
    quote: "Our complete brand identity — logo, packaging, everything came out world-class. He truly understands how to make a brand look premium and trustworthy. Highly recommended!",
    name: "Fatima Noor",
    role: "Founder, Noora Organics",
    rating: 5,
    country: "United Kingdom",
    flag: "🇬🇧"
  }
];

// ============================================================
// PRICING
// ============================================================

export const pricingData: PricingPlan[] = [
  {
    categoryId: "marketing",
    titleBn: "ডিজিটাল মার্কেটিং",
    titleEn: "Digital Marketing",
    tiers: [
      {
        nameBn: "বেসিক", nameEn: "Basic",
        priceBn: "৳৩,০০০", priceEn: "$35",
        periodBn: "/মাস", periodEn: "/month",
        descBn: "ছোট ব্যবসার সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
        descEn: "Social media management for small business",
        features: [
          { textBn: "১টি সোশ্যাল মিডিয়া অ্যাকাউন্ট", textEn: "1 Social Media Account", included: true },
          { textBn: "মাসে ১২টি প্রফেশনাল পোস্ট", textEn: "12 Pro Post Designs/Month", included: true },
          { textBn: "বেসিক কনটেন্ট রাইটিং", textEn: "Basic Content Writing", included: true },
          { textBn: "অ্যাড ক্যাম্পেইন ম্যানেজমেন্ট", textEn: "Ad Campaign Management", included: false },
          { textBn: "অ্যানালিটিক্স ও রিপোর্ট", textEn: "Analytics & Reporting", included: false },
          { textBn: "আনলিমিটেড সাপোর্ট", textEn: "Unlimited Support", included: false }
        ]
      },
      {
        nameBn: "স্ট্যান্ডার্ড", nameEn: "Standard",
        priceBn: "৳৮,০০০", priceEn: "$95",
        periodBn: "/মাস", periodEn: "/month",
        descBn: "গ্রোথ-ফোকাসড ব্যবসার জন্য সেরা পছন্দ",
        descEn: "Best choice for growth-focused businesses",
        popular: true,
        features: [
          { textBn: "৩টি সোশ্যাল মিডিয়া অ্যাকাউন্ট", textEn: "3 Social Media Accounts", included: true },
          { textBn: "মাসে ৩০টি প্রফেশনাল পোস্ট", textEn: "30 Pro Post Designs/Month", included: true },
          { textBn: "প্রিমিয়াম কনটেন্ট রাইটিং", textEn: "Premium Content Writing", included: true },
          { textBn: "অ্যাড ক্যাম্পেইন ম্যানেজমেন্ট (৪টি)", textEn: "Ad Campaign Management (4)", included: true },
          { textBn: "মাসিক অ্যানালিটিক্স রিপোর্ট", textEn: "Monthly Analytics Report", included: true },
          { textBn: "আনলিমিটেড সাপোর্ট", textEn: "Unlimited Support", included: false }
        ]
      },
      {
        nameBn: "প্রিমিয়াম", nameEn: "Premium",
        priceBn: "৳১৫,০০০", priceEn: "$175",
        periodBn: "/মাস", periodEn: "/month",
        descBn: "এন্টারপ্রাইজ বা বড় ব্যবসার ফুল সলিউশন",
        descEn: "Full solution for enterprise or large business",
        features: [
          { textBn: "আনলিমিটেড অ্যাকাউন্ট ম্যানেজমেন্ট", textEn: "Unlimited Account Management", included: true },
          { textBn: "আনলিমিটেড প্রফেশনাল পোস্ট ও রিলস", textEn: "Unlimited Pro Posts & Reels", included: true },
          { textBn: "SEO অপ্টিমাইজড কনটেন্ট ও স্ট্র্যাটেজি", textEn: "SEO Optimized Content & Strategy", included: true },
          { textBn: "আনলিমিটেড অ্যাড ক্যাম্পেইন ও ট্র্যাকিং", textEn: "Unlimited Ad Campaigns & Tracking", included: true },
          { textBn: "অ্যাডভান্সড সেলস ফানেল তৈরি", textEn: "Advanced Sales Funnel Creation", included: true },
          { textBn: "২৪/৭ আনলিমিটেড ডেডিকেটেড সাপোর্ট", textEn: "24/7 Unlimited Dedicated Support", included: true }
        ]
      }
    ]
  },
  {
    categoryId: "graphic",
    titleBn: "গ্রাফিক ডিজাইন",
    titleEn: "Graphic Design",
    tiers: [
      {
        nameBn: "বেসিক", nameEn: "Basic",
        priceBn: "৳২,০০০", priceEn: "$25",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "স্টার্টআপদের জন্য সিম্পল ব্র্যান্ডিং",
        descEn: "Simple branding for startups",
        features: [
          { textBn: "১টি হাই-কোয়ালিটি লোগো কনসেপ্ট", textEn: "1 High-Quality Logo Concept", included: true },
          { textBn: "৩ বার ডিজাইন রিভিশন", textEn: "3 Design Revisions", included: true },
          { textBn: "প্রাইমারি কালার প্যালেট", textEn: "Primary Color Palette", included: true },
          { textBn: "প্রিন্ট-রেডি ভেক্টর ফাইল", textEn: "Print-Ready Vector Files", included: false },
          { textBn: "সোশ্যাল মিডিয়া ব্র্যান্ড কিট", textEn: "Social Media Brand Kit", included: false },
          { textBn: "ফুল ব্র্যান্ড গাইডলাইন বুক", textEn: "Full Brand Guideline Book", included: false }
        ]
      },
      {
        nameBn: "স্ট্যান্ডার্ড", nameEn: "Standard",
        priceBn: "৳৫,০০০", priceEn: "$60",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "প্রফেশনাল ব্র্যান্ড আইডেন্টিটি প্যাকেজ",
        descEn: "Professional brand identity package",
        popular: true,
        features: [
          { textBn: "৩টি প্রিমিয়াম লোগো কনসেপ্ট", textEn: "3 Premium Logo Concepts", included: true },
          { textBn: "৫ বার ডিজাইন রিভিশন", textEn: "5 Design Revisions", included: true },
          { textBn: "কালার প্যালেট ও টাইপোগ্রাফি", textEn: "Color Palette & Typography", included: true },
          { textBn: "প্রিন্ট-রেডি ভেক্টর ফাইল", textEn: "Print-Ready Vector Files", included: true },
          { textBn: "সোশ্যাল মিডিয়া প্রোফাইল কিট", textEn: "Social Media Profile Kit", included: true },
          { textBn: "ফুল ব্র্যান্ড গাইডলাইন বুক", textEn: "Full Brand Guideline Book", included: false }
        ]
      },
      {
        nameBn: "প্রিমিয়াম", nameEn: "Premium",
        priceBn: "৳১২,০০০", priceEn: "$140",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "এ টু জেড কমপ্লিট ব্র্যান্ড সলিউশন",
        descEn: "A to Z complete brand solution",
        features: [
          { textBn: "আনলিমিটেড লোগো কনসেপ্ট", textEn: "Unlimited Logo Concepts", included: true },
          { textBn: "আনলিমিটেড ডিজাইন রিভিশন", textEn: "Unlimited Design Revisions", included: true },
          { textBn: "কমপ্লিট ব্র্যান্ড স্টাইল গাইড", textEn: "Complete Brand Style Guide", included: true },
          { textBn: "সকল প্রকার সোর্স ফাইল", textEn: "All Type of Source Files", included: true },
          { textBn: "ফুল সোশ্যাল মিডিয়া ও প্রিন্ট কিট", textEn: "Full Social Media & Print Kit", included: true },
          { textBn: "১ মাসের ফ্রি সাপোর্ট", textEn: "1 Month Free Support", included: true }
        ]
      }
    ]
  },
  {
    categoryId: "app",
    titleBn: "অ্যাপ ডেভেলপমেন্ট",
    titleEn: "App Development",
    tiers: [
      {
        nameBn: "বেসিক", nameEn: "Basic",
        priceBn: "৳১২,০০০", priceEn: "$140",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "ছোট ব্যবসার জন্য ইনফরমেশনাল অ্যাপ",
        descEn: "Informational app for small business",
        features: [
          { textBn: "সিঙ্গেল প্ল্যাটফর্ম (Android)", textEn: "Single Platform (Android)", included: true },
          { textBn: "৫টি স্ক্রিন পর্যন্ত সুন্দর UI", textEn: "Beautiful UI up to 5 Screens", included: true },
          { textBn: "স্ট্যাটিক ডেটা / বেসিক API", textEn: "Static Data / Basic API", included: true },
          { textBn: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন", textEn: "Payment Gateway Integration", included: false },
          { textBn: "অ্যাডমিন প্যানেল (Dashboard)", textEn: "Admin Panel (Dashboard)", included: false },
          { textBn: "প্লে স্টোর পাবলিশিং", textEn: "Play Store Publishing", included: false }
        ]
      },
      {
        nameBn: "স্ট্যান্ডার্ড", nameEn: "Standard",
        priceBn: "৳২৫,০০০", priceEn: "$290",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "ই-কমার্স বা ডাইনামিক বিজনেস অ্যাপ",
        descEn: "E-commerce or dynamic business app",
        popular: true,
        features: [
          { textBn: "অ্যান্ড্রয়েড ও iOS উভয় প্ল্যাটফর্ম", textEn: "Android & iOS Platforms", included: true },
          { textBn: "১৫টি স্ক্রিন ও প্রিমিয়াম ডিজাইন", textEn: "15 Screens & Premium Design", included: true },
          { textBn: "ফায়ারবেস/কাস্টম ব্যাকএন্ড", textEn: "Firebase/Custom Backend", included: true },
          { textBn: "পেমেন্ট গেটওয়ে (বিকাশ/স্ট্রাইপ)", textEn: "Payment Gateway (bKash/Stripe)", included: true },
          { textBn: "সহজ অ্যাডমিন প্যানেল", textEn: "Simple Admin Panel", included: true },
          { textBn: "প্লে স্টোর পাবলিশিং", textEn: "Play Store Publishing", included: false }
        ]
      },
      {
        nameBn: "প্রিমিয়াম", nameEn: "Premium",
        priceBn: "৳৪৫,০০০+", priceEn: "$520+",
        periodBn: "/প্রজেক্ট", periodEn: "/project",
        descBn: "স্কেলেবল এন্টারপ্রাইজ গ্রেড অ্যাপ",
        descEn: "Scalable enterprise grade app",
        features: [
          { textBn: "ক্রস-প্ল্যাটফর্ম হাই-এন্ড পারফরম্যান্স", textEn: "Cross-Platform High-End Performance", included: true },
          { textBn: "আনলিমিটেড স্ক্রিন ও কাস্টম অ্যানিমেশন", textEn: "Unlimited Screens & Custom Animations", included: true },
          { textBn: "স্কেলেবল ক্লাউড ব্যাকএন্ড ও API", textEn: "Scalable Cloud Backend & API", included: true },
          { textBn: "মাল্টি-ভেন্ডর বা কমপ্লেক্স পেমেন্ট ফ্লো", textEn: "Multi-Vendor or Complex Payment Flow", included: true },
          { textBn: "অ্যাডভান্সড অ্যাডমিন ড্যাশবোর্ড", textEn: "Advanced Admin Dashboard", included: true },
          { textBn: "প্লে স্টোর ও অ্যাপ স্টোর পাবলিশিং", textEn: "Play Store & App Store Publishing", included: true }
        ]
      }
    ]
  }
];
