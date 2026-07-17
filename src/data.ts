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
    bioParagraph1: "আমি <strong>আসাদুজ্জামান (সাজু)</strong>। বিগত ৮ বছরেরও বেশি সময় ধরে ডিজিটাল মার্কেটিং এবং প্রফেশনাল গ্রাফিক ডিজাইন নিয়ে নিরলসভাবে কাজ করছি। আমার কাজের মূল দর্শন হলো—শুধু কিছু সুন্দর ছবি বা পোস্ট তৈরি করা নয়, বরং আপনার ব্র্যান্ডের জন্য এমন একটি নির্ভরযোগ্য ও বিশ্বস্ত সেলস ফানেল গড়ে তোলা, যা সরাসরি আপনার ব্যবসার দীর্ঘমেয়াদী প্রবৃদ্ধি নিশ্চিত করবে।",
    bioParagraph2: "একটি সফল ব্র্যান্ড তৈরি হয় গ্রাহকের বিশ্বাসের ওপর ভিত্তি করে। আমি বিশ্বাস করি, নান্দনিক ডিজাইন এবং সঠিক মার্কেটিং কৌশলের সমন্বয়ে একটি সাধারণ ব্যবসাকেও মানুষের কাছে একটি বিশ্বস্ত ব্র্যান্ডে পরিণত করা সম্ভব। আমি কেবল একজন ফ্রিল্যান্সার হিসেবে নয়, বরং আপনার বিজনেসের একজন বিশ্বস্ত গ্রোথ-পার্টনার হিসেবে কাজ করি। স্বচ্ছতা, সততা এবং শতভাগ পেশাদারিত্বের সাথে আপনার প্রজেক্টের শুরু থেকে শেষ পর্যন্ত আমি নিজেই পরিচালনা করি।",
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
    tagline: "Crafting data-driven marketing strategies and premium visual designs for over 8+ years. My goal is to build deep customer trust and ensure your brand doesn't just look exquisite, but delivers highly profitable business results.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get in Touch",
    side1: "01 — Based in Kurigram, Rangpur, Bangladesh, working with clients globally.",
    side2: "02 — Available for freelance, contract, and full-time remote roles.",
    side3: "03 — Average response time: Within 24 hours.",
  },
  about: {
    title: "About & Work Philosophy",
    subtitle: "Why Trust Your Brand's Digital Journey with Me?",
    bioParagraph1: "I am <strong>M. Asaduzzaman Sazu</strong>, a professional digital marketing strategist and graphic designer with over 8+ years of hands-on experience. My core philosophy isn't just about creating visually appealing graphics—it's about building an integrated, high-converting digital foundation that earns customer trust and drives scalable business growth.",
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
  { num: "৮+", label: "বছরের অভিজ্ঞতা" },
  { num: "৮০+", label: "সম্পন্ন প্রজেক্ট" },
  { num: "৪০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { num: "১২+", label: "ইন্ডাস্ট্রি সেক্টর" },
];

export const statsEn: StatItem[] = [
  { num: "8+", label: "Years Experience" },
  { num: "80+", label: "Projects Completed" },
  { num: "40+", label: "Happy Clients" },
  { num: "12+", label: "Industry Sectors" },
];

export const servicesBn: ServiceCategory[] = [
  {
    title: "ডিজিটাল মার্কেটিং",
    items: [
      { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "আপনার সঠিক ক্রেতাদের খুঁজে বের করে ব্র্যান্ডের প্রতি তাদের বিশ্বাস ও সম্পৃক্ততা বৃদ্ধি করা।" },
      { title: "পেইড অ্যাড ক্যাম্পেইন", desc: "গুগল ও মেটা (ফেসবুক) অ্যাডস-এর মাধ্যমে কম খরচে সর্বোচ্চ সেলস ও কনভার্সন নিশ্চিত করা।" },
      { title: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)", desc: "গুগলের প্রথম পৃষ্ঠায় আপনার ওয়েবসাইটকে নিয়ে এসে দীর্ঘমেয়াদী ও স্থায়ী ক্রেতা তৈরি করা।" },
      { title: "কন্টেন্ট ও সেলস ফানেল", desc: "গ্রাহকদের মনস্তত্ত্ব বুঝে এমন কন্টেন্ট তৈরি করা, যা তাদেরকে আপনার সার্ভিস নিতে আগ্রহী করে তোলে।" },
    ]
  },
  {
    title: "গ্রাফিক ডিজাইন",
    items: [
      { title: "লোগো ও ব্র্যান্ড আইডেন্টিটি", desc: "এমন একটি ইউনিক এবং প্রফেশনাল লোগো ডিজাইন, যা মানুষের মনে আপনার ব্র্যান্ডের পরিচয় গেঁথে দেবে।" },
      { title: "সোশ্যাল মিডিয়া ডিজাইন", desc: "অত্যন্ত আকর্ষণীয় এবং মানসম্মত পোস্ট ও ব্যানার ডিজাইন, যা স্ক্রলিং থামিয়ে মানুষের নজর কাড়বে।" },
      { title: "প্রিন্ট ও প্যাকেজিং", desc: "আন্তর্জাতিক মানের নিখুঁত প্যাকেজিং ও বিজনেস কার্ড ডিজাইন, যা আপনার পেশাদারিত্ব প্রমাণ করবে।" },
      { title: "ইউআই/ইউএক্স (ওয়েব ডিজাইন)", desc: "ওয়েবসাইট বা অ্যাপের জন্য সহজ ও আধুনিক ইন্টারফেস ডিজাইন, যা গ্রাহকদের মুগ্ধ করবে।" },
    ]
  }
];

export const servicesEn: ServiceCategory[] = [
  {
    title: "Digital Marketing",
    items: [
      { title: "Social Media Marketing", desc: "Building profound brand trust and highly-engaged audiences across platforms to attract your ideal buyers." },
      { title: "Paid Ad Campaigns", desc: "Data-driven Meta & Google Ads optimized strictly for minimizing costs and maximizing direct sales/ROI." },
      { title: "Search Engine Optimization", desc: "Securing top Google rankings to generate a sustainable, long-term stream of organic, high-intent traffic." },
      { title: "Content & Sales Funnels", desc: "Crafting psychologically persuasive copywriting and funnel strategies that seamlessly convert visitors into loyal customers." },
    ]
  },
  {
    title: "Graphic Design",
    items: [
      { title: "Logo & Brand Identity", desc: "Designing memorable and highly professional brand identities that implant trust instantly in your customers' minds." },
      { title: "Social Media Creatives", desc: "Creating scroll-stopping, premium quality graphics and ad creatives that demand attention and drive clicks." },
      { title: "Print & Packaging", desc: "Delivering world-class, pixel-perfect print and packaging designs that elevate your product's perceived value." },
      { title: "UI/UX & Web Layouts", desc: "Architecting sleek, modern, and user-friendly interfaces that provide a flawless experience for your website visitors." },
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
    period: "২০২৩ — বর্তমান (২০২৬)",
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
    period: "2024 — Present (2026)",
    role: "Senior Digital Marketing Consultant",
    org: "Freelance & Remote — Bangladesh & International",
    desc: "Currently managing full-cycle digital marketing, brand strategy, and visual identity for 20+ local and international brands. Consistently delivering an average 3x ROAS improvement per client project."
  },
  {
    period: "2021 — 2024",
    role: "Graphic Designer & Digital Marketer",
    org: "Creative Social Media Agency",
    desc: "Designed brand logos, complete visual kits, Facebook and Instagram ad creatives, and independently managed paid campaign strategies for multiple multinational clients."
  },
  {
    period: "2019 — 2021",
    role: "Junior Graphic Designer",
    org: "Startup Design Studio",
    desc: "Built a strong design foundation through hands-on work in vector logos, corporate stationery, print banners, and packaging design — delivering real value from day one."
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
    quote: "Sazu completely revamped our cafe brand identity — from logo to social media creatives. The response was immediate: customers started sharing our pages on their own, and footfall visibly increased. Best investment we made this year.",
    name: "Sabrina Akter",
    role: "Founder, Leaf Coffee House",
    rating: 5
  },
  {
    quote: "Within 30 days of handing over our Meta Ads to him, our conversion rate doubled. The ad budget that was previously wasting now directly generates sales. He works as if it's his own business on the line.",
    name: "Imran Khan",
    role: "Marketing Manager, ShopExpress",
    rating: 5
  },
  {
    quote: "Delivered before the deadline, transparent updates at every step, and the packaging design he created makes every client ask 'who designed this?' — A truly rare partner who combines professionalism with genuine creative excellence.",
    name: "Tanveer Hasan",
    role: "CEO, NextGen Apparel",
    rating: 5
  }
];
