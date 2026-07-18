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
}

export interface ServiceCategory {
  title: string;
  items: ServiceDetail[];
}

export interface SkillItem {
  name: string;
  level: number; // out of 100
  category: 'marketing' | 'design' | 'app';
}

export interface SkillCategoryData {
  id: string;
  titleEn: string;
  titleBn: string;
  iconType: 'graphic' | 'uiux' | 'web' | 'app' | 'ai' | 'marketing' | 'tools';
  colorTheme: string;
  skills: { name: string; level: number }[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  category: string;
  tag: string;
  metric: string;
  thumbClass: string;
  bgGradient: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  desc: string;
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
    side1: string;
    side2: string;
    side3: string;
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    experienceBadge: string;
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
  };
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    metricLabel: string;
    viewDetails: string;
    closeBtn: string;
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
    formSubmit: string;
    formNote: string;
    formSuccess: string;
    copyTemplate: string;
    copySuccess: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
}

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
  },
  hero: {
    badge: "ওয়েব ডেভেলপার · গ্রাফিক ডিজাইনার · ডিজিটাল মার্কেটার",
    headline: " — ব্র্যান্ডকে ",
    headlineHighlight1: "গল্প",
    headlineHighlight2: "গ্রোথ",
    sub: " বানাই, গল্পকে ",
    tagline: "৮+ বছর ধরে মার্কেটিং স্ট্র্যাটেজি, কন্টেন্ট এবং ভিজ্যুয়াল ডিজাইন নিয়ে কাজ করছি। আমার লক্ষ্য হলো আপনার ব্যবসার জন্য বিশ্বস্ত ভিত্তি তৈরি করা যা সরাসরি প্রবৃদ্ধি আনবে।",
    ctaPrimary: "প্রজেক্ট দেখুন",
    ctaSecondary: "যোগাযোগ করুন",
    side1: "০১ — কুড়িগ্রাম, রংপুর, বাংলাদেশ থেকে কাজ করি, তবে ক্লায়েন্ট বিশ্বজুড়ে।",
    side2: "০২ — ফ্রিল্যান্স ও চুক্তিভিত্তিক প্রজেক্টের জন্য উন্মুক্ত।",
    side3: "০৩ — গড় রেসপন্স সময়: ২৪ ঘণ্টার মধ্যে।",
  },
  about: {
    title: "পরিচিতি ও কাজের দর্শন",
    subtitle: "আমার সাথে আপনার ব্র্যান্ডের পথচলা কেন দীর্ঘস্থায়ী ও বিশ্বস্ত হবে?",
    bioParagraph1: "আমি <strong>M. Asaduzzaman Sazu</strong>। বিগত ৫ বছর ধরে ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন এবং অ্যাপস ডেভেলপমেন্টের মাধ্যমে বিভিন্ন ব্যবসাকে সফল ব্র্যান্ডে পরিণত করতে সাহায্য করছি। আমার কাজের উদ্দেশ্য খুব সাধারণ—আপনার ব্যবসাকে মানুষের কাছে একটি বিশ্বস্ত ও জনপ্রিয় নাম হিসেবে প্রতিষ্ঠিত করা।",
    bioParagraph2: "আমি বিশ্বাস করি, একটি সুন্দর ডিজাইন মানুষের নজর কাড়ে, কিন্তু সঠিক মার্কেটিং কৌশল তাদের মন জয় করে। আমি শুধু একটি সার্ভিস দিই না, বরং আপনার ব্যবসার একজন বিশ্বস্ত 'গ্রোথ-পার্টনার' হিসেবে কাজ করি। সততা, স্বচ্ছতা এবং কাজের প্রতি শতভাগ নিষ্ঠা দিয়ে আপনার ব্যবসাকে লাভজনক করে তোলাই আমার প্রধান লক্ষ্য।",
    experienceBadge: "বছরের অভিজ্ঞতা"
  },
  services: {
    title: "সেবাসমূহ",
    subtitle: "আমি যা করি",
  },
  skills: {
    title: "পেশাগত দক্ষতা",
    subtitle: "কাজের ক্ষেত্র ও প্রযুক্তিগত দক্ষতা",
    filterAll: "সব দক্ষতা",
    filterMarketing: "মার্কেটিং",
    filterDesign: "ডিজাইন",
  },
  projects: {
    title: "সিলেক্টেড কাজ",
    subtitle: "প্রজেক্ট গ্যালারি",
    filterAll: "সব কাজ",
    metricLabel: "ফলাফল",
    viewDetails: "বিস্তারিত দেখুন",
    closeBtn: "বন্ধ করুন",
  },
  experience: {
    title: "অভিজ্ঞতা",
    subtitle: "কর্মজীবনের সময়রেখা",
  },
  tools: {
    title: "টুলস",
    subtitle: "যেসব টুল ব্যবহার করি",
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
    formMsg: "আপনার বার্তা",
    formSubmit: "মেসেজ পাঠান",
    formNote: "সাবমিট করলে সরাসরি ইমেইল ক্লায়েন্ট ওপেন হবে অথবা ইমেইল ফরম্যাট কপি করতে পারবেন।",
    formSuccess: "ধন্যবাদ! আপনার মেসেজটি প্রস্তুত করা হয়েছে।",
    copyTemplate: "বার্তার টেমপ্লেট কপি করুন",
    copySuccess: "কপি করা হয়েছে!",
  },
  footer: {
    rights: "আসাদুজ্জামান (সাজু)। সর্বস্বত্ব সংরক্ষিত।",
    backToTop: "উপরে ফিরুন",
  },
};

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
  },
  hero: {
    badge: "Web Developer · Graphic Designer · Digital Marketer",
    headline: " — I turn brands into ",
    headlineHighlight1: "stories",
    headlineHighlight2: "growth",
    sub: ", and stories into ",
    tagline: "Crafting data-driven marketing strategies, premium visual designs, and high-performance apps for over 5+ years. My goal is to build deep customer trust and ensure your brand doesn't just look exquisite, but delivers highly profitable business results.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get in Touch",
    side1: "01 — Based in Kurigram, Rangpur, Bangladesh, working with clients globally.",
    side2: "02 — Available for freelance, contract, and full-time remote roles.",
    side3: "03 — Average response time: Within 24 hours.",
  },
  about: {
    title: "About & Work Philosophy",
    subtitle: "Why Trust Your Brand's Digital Journey with Me?",
    bioParagraph1: "I am <strong>M. Asaduzzaman Sazu</strong>, a professional digital marketing strategist, graphic designer, and app developer with over 5+ years of hands-on experience. My core philosophy isn't just about creating visually appealing graphics or code—it's about building an integrated, high-converting digital foundation that earns customer trust and drives scalable business growth.",
    bioParagraph2: "Every successful brand is built on uncompromising trust and credibility. I believe that when world-class aesthetic design meets data-driven marketing precision, an unforgettable and highly profitable brand experience is born. I work not just as a service provider, but as your dedicated growth partner—ensuring transparent communication, flawless execution, and absolute integrity in every project we undertake.",
    experienceBadge: "Years of Trust"
  },
  services: {
    title: "Services",
    subtitle: "What I Do Best",
  },
  skills: {
    title: "Professional Skills",
    subtitle: "My Areas of Expertise",
    filterAll: "All Skills",
    filterMarketing: "Marketing",
    filterDesign: "Design",
  },
  projects: {
    title: "Selected Work",
    subtitle: "Project Showcase",
    filterAll: "All Projects",
    metricLabel: "Impact",
    viewDetails: "View Details",
    closeBtn: "Close",
  },
  experience: {
    title: "Experience",
    subtitle: "Career Journey",
  },
  tools: {
    title: "Tools",
    subtitle: "Technologies I Master",
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
    formMsg: "Your Message",
    formSubmit: "Send Message",
    formNote: "Submitting opens your email client directly or lets you copy a prefilled template.",
    formSuccess: "Thank you! Your message is formatted and ready.",
    copyTemplate: "Copy Email Template",
    copySuccess: "Copied successfully!",
  },
  footer: {
    rights: "M. Asaduzzaman Sazu. All Rights Reserved.",
    backToTop: "Back to Top",
  },
};

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

export const servicesBn: ServiceCategory[] = [
  {
    title: "ডিজিটাল মার্কেটিং",
    items: [
      { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "ফেসবুক, ইনস্টাগ্রাম ও ইউটিউবে আপনার আদর্শ ক্রেতাদের কাছে পৌঁছে তাদের বিশ্বাস অর্জন করি এবং ব্র্যান্ড এনগেজমেন্ট বাড়াই।" },
      { title: "পেইড অ্যাড ক্যাম্পেইন (Meta & Google)", desc: "ডেটা-ড্রিভেন মেটা ও গুগল অ্যাডস ক্যাম্পেইন পরিচালনা করি, যেখানে কম বাজেটে সর্বোচ্চ সেলস ও কনভার্সন নিশ্চিত করা হয়।" },
      { title: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)", desc: "আপনার ওয়েবসাইটকে গুগলের প্রথম পৃষ্ঠায় এনে দীর্ঘমেয়াদী অর্গানিক ট্রাফিক ও সত্যিকারের ক্রেতা তৈরি করি।" },
      { title: "কন্টেন্ট স্ট্র্যাটেজি ও সেলস ফানেল", desc: "ক্রেতাদের মনস্তত্ত্ব বুঝে এমন কন্টেন্ট ও ফানেল তৈরি করি, যা ভিজিটরকে বিশ্বস্ত ক্রেতায় রূপান্তরিত করে।" },
    ]
  },
  {
    title: "গ্রাফিক ডিজাইন",
    items: [
      { title: "লোগো ও ব্র্যান্ড আইডেন্টিটি", desc: "আপনার ব্র্যান্ডের জন্য এমন একটি ইউনিক ও আধুনিক লোগো তৈরি করি, যা একনজরেই মানুষের মনে দাগ কাটে।" },
      { title: "সোশ্যাল মিডিয়া ক্রিয়েটিভস", desc: "প্রিমিয়াম কোয়ালিটির পোস্ট, ব্যানার ও অ্যাড ক্রিয়েটিভ ডিজাইন করি, যা স্ক্রলিং থামিয়ে মানুষের দৃষ্টি আকর্ষণ করে।" },
      { title: "প্রিন্ট, প্যাকেজিং ও স্টেশনারি", desc: "বিজনেস কার্ড থেকে শুরু করে প্রোডাক্ট প্যাকেজিং—সবকিছু আন্তর্জাতিক মানের ডিজাইনে তৈরি করি।" },
      { title: "ইউআই/ইউএক্স ডিজাইন", desc: "অ্যাপ ও ওয়েবসাইটের জন্য এমন আধুনিক ইন্টারফেস ডিজাইন করি, যা ব্যবহারে সহজ এবং দেখতে অসাধারণ।" },
    ]
  },
  {
    title: "অ্যাপস ডেভেলপমেন্ট",
    items: [
      { title: "অ্যান্ড্রয়েড ও আইওএস অ্যাপ", desc: "আপনার বিজনেস আইডিয়াকে বাস্তবে রূপ দিতে দ্রুতগতি, নিরাপদ ও স্কেলেবল মোবাইল অ্যাপ তৈরি করি।" },
      { title: "ই-কমার্স ও বিজনেস অ্যাপ", desc: "অনলাইনে সেলস বাড়াতে ইউজার-ফ্রেন্ডলি ই-কমার্স অ্যাপ এবং কর্পোরেট ম্যানেজমেন্ট অ্যাপ তৈরি করি।" },
      { title: "ইউআই/ইউএক্স অপটিমাইজেশন", desc: "ব্যবহারকারীর অভিজ্ঞতা বিশ্লেষণ করে অ্যাপের ডিজাইন ও পারফরম্যান্স ক্রমাগত উন্নত করি।" },
      { title: "এপিআই ও ব্যাকএন্ড সিস্টেম", desc: "অ্যাপের পেছনে শক্তিশালী ও নিরাপদ সার্ভার সিস্টেম তৈরি করি, যাতে ডেটা দ্রুত ও নির্ভুলভাবে কাজ করে।" },
    ]
  }
];

export const servicesEn: ServiceCategory[] = [
  {
    title: "Digital Marketing",
    items: [
      { title: "Social Media Marketing", desc: "I connect your brand with the right audience on Facebook, Instagram, and YouTube—building genuine trust and meaningful engagement." },
      { title: "Paid Ad Campaigns (Meta & Google)", desc: "I run data-driven Meta and Google Ads campaigns that maximize your sales and conversions while keeping costs as low as possible." },
      { title: "Search Engine Optimization (SEO)", desc: "I bring your website to Google's first page, generating long-term organic traffic and real, high-intent buyers for your business." },
      { title: "Content Strategy & Sales Funnels", desc: "I craft persuasive content and smart funnels that guide your visitors from curiosity to confident purchase decisions." },
    ]
  },
  {
    title: "Graphic Design",
    items: [
      { title: "Logo & Brand Identity", desc: "I create unique, modern logos and complete brand identities that make an unforgettable first impression on your customers." },
      { title: "Social Media Creatives", desc: "I design premium-quality posts, banners, and ad creatives that stop the scroll and grab your audience's attention instantly." },
      { title: "Print, Packaging & Stationery", desc: "From business cards to product packaging—I deliver internationally-standard designs that elevate your brand's perceived value." },
      { title: "UI/UX Design", desc: "I design sleek, modern interfaces for apps and websites that are visually stunning and effortlessly easy to use." },
    ]
  },
  {
    title: "App Development",
    items: [
      { title: "Android & iOS Apps", desc: "I build lightning-fast, secure, and scalable mobile applications that bring your business idea to life on both platforms." },
      { title: "E-Commerce & Business Apps", desc: "I develop user-friendly e-commerce and corporate management apps designed to boost your online sales and operations." },
      { title: "UI/UX Optimization", desc: "I analyze user behavior to continuously improve your app's design and performance for a seamless experience." },
      { title: "Backend & API Systems", desc: "I build robust, secure server architecture behind your app—ensuring fast, reliable, and safe data management." },
    ]
  }
];

export const skillsData: SkillItem[] = [
  // Digital Marketing
  { name: "Meta Ads & Business Suite", level: 95, category: "marketing" },
  { name: "SEO Strategy & Optimization", level: 90, category: "marketing" },
  { name: "Google Search & Display Ads", level: 85, category: "marketing" },
  { name: "Content Strategy & Funnels", level: 92, category: "marketing" },
  
  // Graphic Design
  { name: "Adobe Photoshop (Manipulations)", level: 95, category: "design" },
  { name: "Adobe Illustrator (Vector Art)", level: 90, category: "design" },
  { name: "Figma (UI/UX & Prototyping)", level: 85, category: "design" },
  { name: "Brand Guidelines & Typography", level: 90, category: "design" },
  
  // App Development
  { name: "Android App Development", level: 85, category: "app" },
  { name: "Cross-Platform Frameworks", level: 82, category: "app" },
  { name: "Firebase Backend & APIs", level: 88, category: "app" },
  { name: "Mobile UI/UX Optimization", level: 85, category: "app" },
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
      { name: "Brand Identity Design", level: 92 },
      { name: "Social Media Creatives", level: 95 },
      { name: "Print & Packaging", level: 88 },
      { name: "Typography & Color Theory", level: 90 }
    ]
  },
  {
    id: "app-development",
    titleEn: "App Development",
    titleBn: "অ্যাপ ডেভেলপমেন্ট",
    iconType: "app",
    colorTheme: "pink",
    skills: [
      { name: "Android Apps", level: 80 },
      { name: "Cross-Platform Apps", level: 82 },
      { name: "Firebase Integration", level: 88 },
      { name: "Business Applications", level: 85 }
    ]
  },
  {
    id: "digital-marketing",
    titleEn: "Digital Marketing",
    titleBn: "ডিজিটাল মার্কেটিং",
    iconType: "marketing",
    colorTheme: "indigo",
    skills: [
      { name: "Social Media Marketing", level: 94 },
      { name: "Search Engine Optimization (SEO)", level: 88 },
      { name: "Content Strategy", level: 90 },
      { name: "Lead Generation", level: 86 },
      { name: "Brand Marketing", level: 92 },
      { name: "Meta Ads & Business Suite", level: 95 },
      { name: "Google PPC Ad Campaigns", level: 90 },
      { name: "Conversion Funnel Design", level: 92 },
      { name: "Ad Copywriting & Creatives", level: 88 },
      { name: "ROI Optimization Strategy", level: 95 }
    ]
  }
];

export const projectsBn: ProjectItem[] = [
  {
    title: "কাস্টম ই-কমার্স ও বিজনেস অ্যাপ",
    desc: "উন্নত পারফরম্যান্স এবং মসৃণ ইউজার এক্সপেরিয়েন্স সমৃদ্ধ একটি ফুল-স্ট্যাক বিজনেস অ্যাপ। কাস্টম পেমেন্ট ইন্টিগ্রেশন এবং ফায়ারবেস ব্যাকএন্ডের মাধ্যমে অ্যাপটির ডেটা দ্রুত ও নিরাপদে পরিচালনা করার ব্যবস্থা করা হয়েছে।",
    category: "app",
    tag: "App Dev",
    metric: "লোডিং স্পিড ২x ফাস্ট",
    thumbClass: "Smartphone",
    bgGradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "কমপ্লিট ব্র্যান্ড আইডেন্টিটি ডিজাইন",
    desc: "একটি প্রিমিয়াম ব্র্যান্ডের জন্য আধুনিক লোগো, ব্র্যান্ড গাইডলাইন, কালার প্যালেট এবং সোশ্যাল মিডিয়া কিট ডিজাইন। উদ্দেশ্য ছিল এমন একটি ভিজ্যুয়াল আইডেন্টিটি তৈরি করা যা মানুষের মনে দীর্ঘস্থায়ী দাগ কাটে।",
    category: "graphic",
    tag: "Design",
    metric: "ব্র্যান্ড ভিজিবিলিটি +৪০%",
    thumbClass: "Palette",
    bgGradient: "from-pink-500 to-rose-500"
  },
  {
    title: "হাই-কনভার্টিং অ্যাড ক্যাম্পেইন",
    desc: "ফেসবুক ও গুগল অ্যাডস ব্যবহার করে টার্গেটেড লিড জেনারেশন ও সেলস ফানেল তৈরি। সঠিক ক্রেতাদের খুঁজে বের করে কম খরচে সর্বোচ্চ রিটার্ন অন অ্যাড স্পেন্ড (ROAS) নিশ্চিত করা হয়েছে।",
    category: "marketing",
    tag: "Marketing",
    metric: "ROAS ৪.২x বৃদ্ধি",
    thumbClass: "Megaphone",
    bgGradient: "from-violet-600 to-purple-800"
  }
];

export const projectsEn: ProjectItem[] = [
  {
    title: "Custom E-Commerce & Business App",
    desc: "A high-performance, full-stack business application focusing on smooth user experience. Features include custom payment integration, robust Firebase backend, and optimized loading speeds for seamless navigation.",
    category: "app",
    tag: "App Dev",
    metric: "2x Faster Load Time",
    thumbClass: "Smartphone",
    bgGradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Complete Brand Identity Design",
    desc: "Modern logo, brand guidelines, color palette, and premium social media kit design for an emerging brand. The goal was to craft a visual identity that leaves a memorable and trustworthy impression.",
    category: "graphic",
    tag: "Design",
    metric: "+40% Brand Visibility",
    thumbClass: "Palette",
    bgGradient: "from-pink-500 to-rose-500"
  },
  {
    title: "High-Converting Ad Campaign",
    desc: "Targeted lead generation and sales funnel creation using Facebook and Google Ads. By targeting the exact ideal audience, we ensured the highest possible Return on Ad Spend (ROAS) at a minimized cost.",
    category: "marketing",
    tag: "Marketing",
    metric: "4.2x Scaled ROAS",
    thumbClass: "Megaphone",
    bgGradient: "from-violet-600 to-purple-800"
  }
];

export const timelineBn: TimelineItem[] = [
  {
    period: "২০২৪ — বর্তমান (২০২৬)",
    role: "লিড ডিজিটাল স্ট্র্যাটেজিস্ট ও অ্যাপ ডেভেলপার",
    org: "ফ্রিল্যান্স · গ্লোবাল ক্লায়েন্টবেস",
    desc: "বর্তমানে দেশীয় ও আন্তর্জাতিক ব্র্যান্ডের জন্য ফুল-স্ট্যাক ডিজিটাল মার্কেটিং, প্রিমিয়াম ব্র্যান্ডিং এবং কাস্টম মোবাইল অ্যাপ ডেভেলপমেন্ট নিয়ে কাজ করছি। প্রতিটি প্রজেক্টে ক্লায়েন্টের সেলস ও ব্র্যান্ড ভ্যালু বহুগুণ বৃদ্ধি করাই আমার প্রধান লক্ষ্য।"
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
  }
];

export const timelineEn: TimelineItem[] = [
  {
    period: "2024 — Present (2026)",
    role: "Lead Digital Strategist & App Developer",
    org: "Freelance — Global Client Base",
    desc: "Currently leading full-stack digital marketing, premium branding, and custom mobile app development for local and international brands. My primary focus is scaling clients' sales, user acquisition, and overall brand value."
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
    desc: "Built a solid professional foundation by focusing on vector logos, corporate stationery, print banners, and product packaging design—delivering real value from day one."
  }
];

export const toolsList = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma (UI/UX)",
  "Meta Business Suite",
  "Google Ads & Analytics",
  "SEMrush (SEO)",
  "React Native / Flutter",
  "Android Studio",
  "Firebase / MongoDB",
  "VS Code / Git"
];

export const testimonialsBn: TestimonialItem[] = [
  {
    quote: "আমাদের ব্র্যান্ড রিব্র্যান্ডিংয়ে অসাধারণ কাজ করেছেন। বিক্রি এবং ব্র্যান্ড ইমেজ দুটোই বহুগুণ বেড়ে গেছে। আমরা চমৎকার সাড়া পাচ্ছি।",
    name: "সাবরিনা আক্তার",
    role: "প্রতিষ্ঠাতা, লিফ কফি হাউজ",
    rating: 5,
    country: "বাংলাদেশ",
    flag: "🇧🇩"
  },
  {
    quote: "অ্যাড ক্যাম্পেইন শুরু করার পর আমাদের কনভার্সন রেট প্রায় দ্বিগুণ হয়ে গেছে। সত্যি অসাধারণ মার্কেটিং স্ট্র্যাটেজি, যা সরাসরি ইউএস মার্কেটে আমাদের সেলস বাড়িয়েছে।",
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
    quote: "লোগো এবং প্যাকেজিং ডিজাইনে তার সৃজনশীলতা অসাধারণ। আন্তর্জাতিক মানের কাজ পেয়েছি, যা আমাদের ব্র্যান্ডকে একটি প্রিমিয়াম লুক দিয়েছে।",
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
          { textBn: "মাসে ১২টি প্রফেশনাল পোস্ট ডিজাইন", textEn: "12 Pro Post Designs/Month", included: true },
          { textBn: "বেসিক কনটেন্ট রাইটিং", textEn: "Basic Content Writing", included: true },
          { textBn: "অ্যাড ক্যাম্পেইন রান (বাজেট বাদে)", textEn: "Ad Campaign Setup", included: false },
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
          { textBn: "প্রিমিয়াম কনটেন্ট রাইটিং", textEn: "Premium Content Writing", included: true },
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
          { textBn: "প্রিন্ট-রেডি ভেক্টর ফাইল (AI/EPS)", textEn: "Print-Ready Vector Files (AI)", included: false },
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
          { textBn: "প্রিন্ট-রেডি ভেক্টর ফাইল (AI/EPS/PDF)", textEn: "Print-Ready Vector Files (All)", included: true },
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
