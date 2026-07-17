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
  category: 'marketing' | 'design';
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
    tagline: "৫+ বছর ধরে স্ট্র্যাটেজি, কন্টেন্ট আর ভিজ্যুয়াল ডিজাইন একসাথে নিয়ে কাজ করছি — যেন প্রতিটি ব্র্যান্ড শুধু দেখতেই সুন্দর না হয়, বরং ব্যবসায়িক ফলাফলও নিয়ে আসে।",
    ctaPrimary: "প্রজেক্ট দেখুন",
    ctaSecondary: "যোগাযোগ করুন",
    side1: "০১ — কুড়িগ্রাম, রংপুর, বাংলাদেশ থেকে কাজ করি, তবে ক্লায়েন্ট বিশ্বজুড়ে।",
    side2: "০২ — ফ্রিল্যান্স ও চুক্তিভিত্তিক প্রজেক্টের জন্য উন্মুক্ত।",
    side3: "০৩ — গড় রেসপন্স সময়: ২৪ ঘণ্টার মধ্যে।",
  },
  about: {
    title: "পরিচিতি ও কাজের দর্শন",
    subtitle: "আমার সাথে আপনার ব্র্যান্ডের পথচলা কেন দীর্ঘস্থায়ী ও বিশ্বস্ত হবে?",
    bioParagraph1: "আমি <strong>আসাদুজ্জামান (সাজু)</strong>। বিগত ৫ বছরেরও বেশি সময় ধরে ডিজিটাল মার্কেটিং স্ট্র্যাটেজি এবং প্রফেশনাল গ্রাফিক ডিজাইন নিয়ে নিরলসভাবে কাজ করছি। আমার কাজের মূল দর্শন শুধু কিছু ভিজ্যুয়াল বা কন্টেন্ট তৈরি করা নয়, বরং আপনার ব্র্যান্ডের জন্য এমন একটি নির্ভরযোগ্য ও বিশ্বস্ত সেলস ফানেল এবং ব্র্যান্ড ইমেজ গড়ে তোলা—যা সরাসরি দীর্ঘমেয়াদী ব্যবসায়িক প্রবৃদ্ধি বা কনভার্সন এনে দেবে। কুড়িগ্রাম, রংপুরের শান্ত পরিবেশে থেকে বিশ্বজুড়ে ছড়িয়ে থাকা নানা ক্লায়েন্টদের ব্র্যান্ডের শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ ডিজিটাল রূপান্তর অত্যন্ত বিশ্বস্ততা ও স্বচ্ছতার সাথে আমি নিজে পরিচালনা করি।",
    bioParagraph2: "প্রতিটি সফল ব্র্যান্ডের পেছনে থাকে একটি অবিচ্ছেদ্য সম্পর্ক এবং কাজের নিখুঁত সততা। আমি বিশ্বাস করি, চমৎকার প্রফেশনাল ডিজাইনের নান্দনিকতা এবং ডেটা-চালিত পেইড বিজ্ঞাপনের যুগান্তকারী কৌশল যখন একবিন্দুতে মিলিত হয়, ঠিক তখনই জন্ম নেয় একটি কালজয়ী ব্র্যান্ড। সেই বিশ্বাস থেকেই আমি কেবল একজন ফ্রিল্যান্সার হিসেবে নয়, বরং আপনার বিজনেসের একজন ডেডিকেটেড গ্রোথ পার্টনার হিসেবে কাজ করি, যেখানে প্রজেক্টের শুরু থেকে শেষ পর্যন্ত শতভাগ স্বচ্ছ যোগাযোগ ও মানের ক্ষেত্রে কোনো আপস করা হয় না।",
    experienceBadge: "বছরের বিশ্বস্ততা"
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
  name: "Asaduzzaman (Saju)",
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
    tagline: "Crafting marketing strategies, compelling content, and visual designs for over 5+ years. Ensuring every brand doesn't just look exquisite but delivers high-performing business results.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get in Touch",
    side1: "01 — Based in Kurigram, Rangpur, Bangladesh, working with clients globally.",
    side2: "02 — Available for freelance, contract, and full-time remote roles.",
    side3: "03 — Average response time: Within 24 hours.",
  },
  about: {
    title: "About & Work Philosophy",
    subtitle: "Why Trust Your Brand's Digital Journey with Me?",
    bioParagraph1: "I am <strong>Asaduzzaman (Saju)</strong>, a professional digital marketing strategist and graphic designer with over 5+ years of hands-on experience. My core philosophy isn't just about crafting pretty visual designs or writing social media posts—it is about building an integrated, high-converting digital system and a robust brand identity that directly triggers scalable business growth. From strategic marketing architecture to aesthetic high-end designs, I independently manage your brand's digital presence with absolute transparency, meticulous execution, and trust.",
    bioParagraph2: "Every successful brand is built on deep trust, pristine credibility, and uncompromising quality. I believe that when world-class creative design meets data-driven campaign precision, an unforgettable brand experience is born. This conviction drives me to act not merely as a service provider, but as your dedicated growth partner, maintaining seamless real-time communication and absolute integrity at every step of our collaboration.",
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
    rights: "Asaduzzaman (Saju). All Rights Reserved.",
    backToTop: "Back to Top",
  },
};

export const statsBn: StatItem[] = [
  { num: "৫+", label: "বছরের অভিজ্ঞতা" },
  { num: "৮০+", label: "সম্পন্ন প্রজেক্ট" },
  { num: "৪০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { num: "১২+", label: "ইন্ডাস্ট্রি সেক্টর" },
];

export const statsEn: StatItem[] = [
  { num: "5+", label: "Years Experience" },
  { num: "80+", label: "Projects Completed" },
  { num: "40+", label: "Happy Clients" },
  { num: "12+", label: "Industry Sectors" },
];

export const servicesBn: ServiceCategory[] = [
  {
    title: "ডিজিটাল মার্কেটিং",
    items: [
      { title: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)", desc: "অর্গানিক সার্চে র‍্যাঙ্ক বাড়িয়ে দীর্ঘমেয়াদী স্থায়ী ট্রাফিক তৈরি করা।" },
      { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "ফেসবুক, ইনস্টাগ্রাম, লিংকডইনে ব্র্যান্ড উপস্থিতি ও এনগেজমেন্ট বৃদ্ধি।" },
      { title: "পেইড অ্যাড ক্যাম্পেইন", desc: "Meta Ads ও Google Ads — বাজেট অনুযায়ী সর্বোচ্চ আরওআই (ROI) নিশ্চিতকরণ।" },
      { title: "কন্টেন্ট ও ইমেইল মার্কেটিং", desc: "কনভার্সন-ফোকাসড কপিরাইটিং ও ইমেইল ফানেল তৈরির মাধ্যমে কাস্টমার তৈরি।" },
    ]
  },
  {
    title: "গ্রাফিক ডিজাইন",
    items: [
      { title: "লোগো ও ব্র্যান্ড আইডেন্টিটি", desc: "সম্পূর্ণ ব্র্যান্ড গাইডলাইন, কালার প্যালেট ও মানসম্মত টাইপোগ্রাফি সিস্টেম।" },
      { title: "সোশ্যাল মিডিয়া ক্রিয়েটিভ", desc: "নান্দনিক পোস্ট, হাই-কনভার্টিং ব্যানার ও রিল কভার — যা স্ক্রল থামিয়ে দেয়।" },
      { title: "প্রিন্ট ও প্যাকেজিং ডিজাইন", desc: "বিজনেস কার্ড থেকে শুরু করে চমৎকার প্যাকেজিং — প্রিন্ট-রেডি ভেক্টর ফাইল।" },
      { title: "ইউআই/ইউএক্স ডিজাইন (Figma)", desc: "ওয়েবসাইট ও ল্যান্ডিং পেজের জন্য পরিষ্কার, ব্যবহারবান্ধব এবং আধুনিক ইন্টারফেস।" },
    ]
  }
];

export const servicesEn: ServiceCategory[] = [
  {
    title: "Digital Marketing",
    items: [
      { title: "Search Engine Optimization (SEO)", desc: "Increasing organic ranks on search engines to drive long-term compound traffic." },
      { title: "Social Media Marketing", desc: "Growing engagement, followers and high-intent leads on Meta, LinkedIn, and Instagram." },
      { title: "Paid Ads Management", desc: "High-yield Meta & Google PPC ads targeted precisely to optimize client acquisition cost." },
      { title: "Content & Email Copywriting", desc: "Creating converting sales copies and automatic email drip campaigns." },
    ]
  },
  {
    title: "Graphic Design",
    items: [
      { title: "Logo & Brand Identity", desc: "Developing complete visual style guidelines, color palettes and type systems." },
      { title: "Social Media Creatives", desc: "Scroll-stopping static posts, carousels, and thumb-catching story/reels graphics." },
      { title: "Print & Package Design", desc: "Durable layouts from business stationery to exquisite structural product packages." },
      { title: "UI/UX Layout Design", desc: "Sleek, intuitive and conversion-optimized websites and desktop/mobile landing pages." },
    ]
  }
];

export const skillsData: SkillItem[] = [
  { name: "Meta Ads & Business Suite", level: 95, category: "marketing" },
  { name: "SEO Strategy & Optimization", level: 90, category: "marketing" },
  { name: "Google Search & Display Ads", level: 85, category: "marketing" },
  { name: "Content Strategy & Copywriting", level: 80, category: "marketing" },
  { name: "Email Marketing & Automation", level: 75, category: "marketing" },
  { name: "Adobe Photoshop (Manipulations)", level: 95, category: "design" },
  { name: "Adobe Illustrator (Vector Art)", level: 90, category: "design" },
  { name: "Figma (UI/UX & Prototyping)", level: 85, category: "design" },
  { name: "Brand Guidelines & Typography", level: 90, category: "design" },
  { name: "Print & Package Template Design", level: 80, category: "design" },
];

export const skillsCategoriesData: SkillCategoryData[] = [
  {
    id: "web-development",
    titleEn: "Web Development",
    titleBn: "ওয়েব ডেভেলপমেন্ট",
    iconType: "web",
    colorTheme: "violet",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 94 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "HTML & CSS", level: 95 },
      { name: "Firebase & MongoDB", level: 88 }
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
    title: "ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট",
    desc: "রিয়েক্ট এবং নোড জেএস ব্যবহার করে একটি সম্পূর্ণ ফুল-স্ট্যাক ই-কমার্স ওয়েবসাইট তৈরি। পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং ফাস্ট লোডিং স্পিড।",
    category: "web",
    tag: "Web Dev",
    metric: "লোডিং স্পিড ২x ফাস্ট",
    thumbClass: "Code",
    bgGradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "ব্র্যান্ড আইডেন্টিটি ডিজাইন",
    desc: "একটি টেক স্টার্টআপের জন্য আধুনিক লোগো, ব্র্যান্ড গাইডলাইন এবং সোশ্যাল মিডিয়া কিট ডিজাইন।",
    category: "graphic",
    tag: "Design",
    metric: "ব্র্যান্ড এওয়ারনেস +৪০%",
    thumbClass: "Palette",
    bgGradient: "from-pink-500 to-rose-500"
  },
  {
    title: "লিড জেনারেশন ক্যাম্পেইন",
    desc: "ফেসবুক এবং গুগল অ্যাডস ব্যবহার করে টার্গেটেড লিড জেনারেশন।",
    category: "marketing",
    tag: "Marketing",
    metric: "ROAS ৩.৫x বৃদ্ধি",
    thumbClass: "Megaphone",
    bgGradient: "from-violet-600 to-purple-800"
  }
];

export const projectsEn: ProjectItem[] = [
  {
    title: "E-Commerce Website Development",
    desc: "A complete full-stack e-commerce website built with React and Node.js. Includes payment gateway integration and blazing fast loading speed.",
    category: "web",
    tag: "Web Dev",
    metric: "2x Faster Load Time",
    thumbClass: "Code",
    bgGradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Brand Identity Design",
    desc: "Modern logo, brand guidelines, and social media kit design for an emerging tech startup.",
    category: "graphic",
    tag: "Design",
    metric: "+40% Brand Awareness",
    thumbClass: "Palette",
    bgGradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Lead Generation Campaign",
    desc: "Targeted lead generation using Facebook and Google Ads campaigns with high conversion rates.",
    category: "marketing",
    tag: "Marketing",
    metric: "3.5x Scaled ROAS",
    thumbClass: "Megaphone",
    bgGradient: "from-violet-600 to-purple-800"
  }
];

export const timelineBn: TimelineItem[] = [
  {
    period: "২০২৩ — বর্তমান",
    role: "সিনিয়র ডিজিটাল মার্কেটিং কনসালট্যান্ট",
    org: "ফ্রিল্যান্স · রিমোট",
    desc: "১৫+ বৈশ্বিক ও দেশীয় ব্র্যান্ডের জন্য পূর্ণাঙ্গ মার্কেটিং এবং ডিজাইন স্ট্র্যাটেজি পরিচালনা করে আরওআই বৃদ্ধি নিশ্চিত করা।"
  },
  {
    period: "২০২১ — ২০২৩",
    role: "গ্রাফিক ডিজাইনার ও মার্কেটিং এক্সিকিউটিভ",
    org: "ক্রিয়েটিভ সোশাল মিডিয়া এজেন্সি",
    desc: "মাল্টি-ন্যাশনাল ব্র্যান্ডগুলোর জন্য ক্যাম্পেইন লোগো, ভিজ্যুয়াল কিট এবং ফেসবুক/ইনস্টাগ্রাম অ্যাড ক্রিয়েটিভস ডিজাইন করা।"
  },
  {
    period: "২০১৯ — ২০২১",
    role: "জুনিয়র গ্রাফিক ডিজাইনার",
    org: "স্টার্টআপ ডিজাইন স্টুডিও",
    desc: "কর্পোরেট স্টেশনারি, লোগো ট্রেসিং, ব্যানার এবং কাস্টম প্রিন্ট ডিজাইন দিয়ে সফলভাবে পেশাদারি যাত্রা শুরু।"
  }
];

export const timelineEn: TimelineItem[] = [
  {
    period: "2023 — Present",
    role: "Senior Digital Marketing Consultant",
    org: "Freelance & Remote",
    desc: "Formulating performance strategies and identity designs for 15+ global clients to scale high-intent customer acquisition."
  },
  {
    period: "2021 — 2023",
    role: "Graphic Designer & Marketer",
    org: "Creative Social Agency",
    desc: "Leading visual design sets, asset packages and social campaign structures for mid-size consumer goods."
  },
  {
    period: "2019 — 2021",
    role: "Junior Graphic Designer",
    org: "Startup Design Studio",
    desc: "Gaining robust layout experience in vector tracing, layout print templates, presentation decks, and branding drafts."
  }
];

export const toolsList = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Canva Pro",
  "Meta Business Suite",
  "Google Ads",
  "Google Analytics 4",
  "SEMrush",
  "Mailchimp",
  "Adobe Premiere Pro"
];

export const testimonialsBn: TestimonialItem[] = [
  {
    quote: "আমাদের ব্র্যান্ড রিব্র্যান্ডিংয়ে অসাধারণ কাজ করেছেন। বিক্রি এবং ব্র্যান্ড ইমেজ দুটোই বহুগুণ বেড়ে গেছে। আমরা চমৎকার সাড়া পাচ্ছি।",
    name: "সাবরিনা আক্তার",
    role: "প্রতিষ্ঠাতা, লিফ কফি হাউজ",
    rating: 5
  },
  {
    quote: "অ্যাড ক্যাম্পেইন শুরু করার পর আমাদের কনভার্সন রেট প্রায় দ্বিগুণ হয়ে গেছে। সত্যিই প্রফেশনাল মার্কেটিং ও ডিজাইন সেন্স!",
    name: "ইমরান খান",
    role: "মার্কেটিং ম্যানেজার, শপএক্সপ্রেস",
    rating: 5
  },
  {
    quote: "সময়মতো নিখুঁত ডেলিভারি, পরিষ্কার ফ্রেন্ডলি কমিউনিকেশন আর অসাধারণ ক্রিয়েটিভ চোখের অধিকারী। ওনাকে হাইলি রিকমেন্ড করছি।",
    name: "তানভীর হাসান",
    role: "সিইও, নেক্সটজেন অ্যাপারেল",
    rating: 5
  }
];

export const testimonialsEn: TestimonialItem[] = [
  {
    quote: "Did an incredible job with our cafe rebranding. Both our sales and social media engagement surged. Highly professional work!",
    name: "Sabrina Akter",
    role: "Founder, Leaf Coffee House",
    rating: 5
  },
  {
    quote: "Our e-commerce conversion rates doubled since handing over our Meta Ads and creative designs to him. Absolute growth partner.",
    name: "Imran Khan",
    role: "Marketing Manager, ShopExpress",
    rating: 5
  },
  {
    quote: "On-time premium delivery, exceptionally clear communication, and an outstanding design intuition. Highly recommended!",
    name: "Tanveer Hasan",
    role: "CEO, NextGen Apparel",
    rating: 5
  }
];
