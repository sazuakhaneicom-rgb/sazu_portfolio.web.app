import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Layers,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Check,
  Copy,
  Code,
  Briefcase,
  ChevronRight,
  Send,
  Star,
  Zap,
  CheckSquare,
  Palette,
  Smartphone,
  Bot,
  Wrench,
  Terminal,
  Cpu,
  Layout,
  Megaphone,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle
} from 'lucide-react';
import {
  bnData,
  enData,
  statsBn,
  statsEn,
  servicesBn,
  servicesEn,
  skillsData,
  skillsCategoriesData,
  SkillCategoryData,
  projectsBn,
  projectsEn,
  timelineBn,
  timelineEn,
  toolsList,
  testimonialsBn,
  testimonialsEn,
  ProjectItem
} from './data';
import sazuProfile from './assets/sazu_profile.jpg';
import sazuLogo from './assets/sazu_logo.png';
import appMockup from './assets/app_mockup.png';
import graphicMockup from './assets/graphic_mockup.png';
import marketingMockup from './assets/marketing_mockup.png';

function getCategoryIcon(iconType: string) {
  switch (iconType) {
    case 'graphic':
      return <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    case 'uiux':
      return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    case 'web':
      return <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
    case 'app':
      return <Smartphone className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
    case 'ai':
      return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    case 'marketing':
      return <TrendingUp className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    case 'tools':
      return <Wrench className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
    default:
      return <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
  }
}

function getProjectIcon(iconName: string, className: string = "w-16 h-16") {
  switch (iconName) {
    case 'Code': return <Code className={className} strokeWidth={1.5} />;
    case 'Palette': return <Palette className={className} strokeWidth={1.5} />;
    case 'Megaphone': return <Megaphone className={className} strokeWidth={1.5} />;
    default: return <Award className={className} strokeWidth={1.5} />;
  }
}

function getThemeClasses(colorTheme: string) {
  switch (colorTheme) {
    case 'purple':
      return {
        bg: 'bg-purple-500/5 dark:bg-purple-500/10',
        border: 'border-purple-100 dark:border-purple-950/60',
        hoverBorder: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
        text: 'text-purple-700 dark:text-purple-300',
        badgeBg: 'bg-purple-50/60 dark:bg-purple-950/40',
        badgeBorder: 'border-purple-100/60 dark:border-purple-900/40',
        accentText: 'text-purple-600 dark:text-purple-400',
        glow: 'shadow-purple-500/5 dark:shadow-purple-400/5',
        dot: 'bg-purple-500',
        headerBg: 'from-purple-500/10 to-transparent',
      };
    case 'indigo':
      return {
        bg: 'bg-indigo-500/5 dark:bg-indigo-500/10',
        border: 'border-indigo-100 dark:border-indigo-950/60',
        hoverBorder: 'hover:border-indigo-500/60 dark:hover:border-indigo-400/60',
        text: 'text-indigo-700 dark:text-indigo-300',
        badgeBg: 'bg-indigo-50/60 dark:bg-indigo-950/40',
        badgeBorder: 'border-indigo-100/60 dark:border-indigo-900/40',
        accentText: 'text-indigo-600 dark:text-indigo-400',
        glow: 'shadow-indigo-500/5 dark:shadow-indigo-400/5',
        dot: 'bg-indigo-500',
        headerBg: 'from-indigo-500/10 to-transparent',
      };
    case 'violet':
      return {
        bg: 'bg-violet-500/5 dark:bg-violet-500/10',
        border: 'border-violet-100 dark:border-violet-950/60',
        hoverBorder: 'hover:border-violet-500/60 dark:hover:border-violet-400/60',
        text: 'text-violet-700 dark:text-violet-300',
        badgeBg: 'bg-violet-50/60 dark:bg-violet-950/40',
        badgeBorder: 'border-violet-100/60 dark:border-violet-900/40',
        accentText: 'text-violet-600 dark:text-violet-400',
        glow: 'shadow-violet-500/5 dark:shadow-violet-400/5',
        dot: 'bg-violet-500',
        headerBg: 'from-violet-500/10 to-transparent',
      };
    case 'pink':
      return {
        bg: 'bg-pink-500/5 dark:bg-pink-500/10',
        border: 'border-pink-100 dark:border-pink-950/60',
        hoverBorder: 'hover:border-pink-500/60 dark:hover:border-pink-400/60',
        text: 'text-pink-700 dark:text-pink-300',
        badgeBg: 'bg-pink-50/60 dark:bg-pink-950/40',
        badgeBorder: 'border-pink-100/60 dark:border-pink-900/40',
        accentText: 'text-pink-600 dark:text-pink-400',
        glow: 'shadow-pink-500/5 dark:shadow-pink-400/5',
        dot: 'bg-pink-500',
        headerBg: 'from-pink-500/10 to-transparent',
      };
    case 'emerald':
      return {
        bg: 'bg-emerald-500/5 dark:bg-emerald-500/10',
        border: 'border-emerald-100 dark:border-emerald-950/60',
        hoverBorder: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/60',
        text: 'text-emerald-700 dark:text-emerald-300',
        badgeBg: 'bg-emerald-50/60 dark:bg-emerald-950/40',
        badgeBorder: 'border-emerald-100/60 dark:border-emerald-900/40',
        accentText: 'text-emerald-600 dark:text-emerald-400',
        glow: 'shadow-emerald-500/5 dark:shadow-emerald-400/5',
        dot: 'bg-emerald-500',
        headerBg: 'from-emerald-500/10 to-transparent',
      };
    case 'sky':
      return {
        bg: 'bg-sky-500/5 dark:bg-sky-500/10',
        border: 'border-sky-100 dark:border-sky-950/60',
        hoverBorder: 'hover:border-sky-500/60 dark:hover:border-sky-400/60',
        text: 'text-sky-700 dark:text-sky-300',
        badgeBg: 'bg-sky-50/60 dark:bg-sky-950/40',
        badgeBorder: 'border-sky-100/60 dark:border-sky-900/40',
        accentText: 'text-sky-600 dark:text-sky-400',
        glow: 'shadow-sky-500/5 dark:shadow-sky-400/5',
        dot: 'bg-sky-500',
        headerBg: 'from-sky-500/10 to-transparent',
      };
    case 'rose':
      return {
        bg: 'bg-rose-500/5 dark:bg-rose-500/10',
        border: 'border-rose-100 dark:border-rose-950/60',
        hoverBorder: 'hover:border-rose-500/60 dark:hover:border-rose-400/60',
        text: 'text-rose-700 dark:text-rose-300',
        badgeBg: 'bg-rose-50/60 dark:bg-rose-950/40',
        badgeBorder: 'border-rose-100/60 dark:border-rose-900/40',
        accentText: 'text-rose-600 dark:text-rose-400',
        glow: 'shadow-rose-500/5 dark:shadow-rose-400/5',
        dot: 'bg-rose-500',
        headerBg: 'from-rose-500/10 to-transparent',
      };
    default:
      return {
        bg: 'bg-purple-500/5 dark:bg-purple-500/10',
        border: 'border-purple-100 dark:border-purple-950/60',
        hoverBorder: 'hover:border-purple-500/60 dark:hover:border-purple-400/60',
        text: 'text-purple-700 dark:text-purple-300',
        badgeBg: 'bg-purple-50/60 dark:bg-purple-950/40',
        badgeBorder: 'border-purple-100/60 dark:border-purple-900/40',
        accentText: 'text-purple-600 dark:text-purple-400',
        glow: 'shadow-purple-500/5 dark:shadow-purple-400/5',
        dot: 'bg-purple-500',
        headerBg: 'from-purple-500/10 to-transparent',
      };
  }
}

interface PremiumService {
  id: string;
  titleBn: string;
  titleEn: string;
  taglineBn: string;
  taglineEn: string;
  descBn: string;
  descEn: string;
  bulletsBn: string[];
  bulletsEn: string[];
  outcomeBn: string;
  outcomeEn: string;
  category: 'marketing' | 'graphic' | 'app';
}

const premiumServicesData: PremiumService[] = [
  {
    id: "marketing-ads",
    titleBn: "ডিজিটাল মার্কেটিং ও পেইড ক্যাম্পেইন",
    titleEn: "Digital Marketing & Paid Campaigns",
    taglineBn: "উচ্চ আরওআই (ROI) সহ ফেসবুক ও গুগল অ্যাড স্ট্র্যাটেজি",
    taglineEn: "High-ROI Meta & Google PPC ads targeted to scale acquisition",
    descBn: "আপনার ব্যবসার লক্ষ্য অনুযায়ী নিখুঁত কাস্টমার ফানেল তৈরি ও পেইড বিজ্ঞাপন পরিচালনা করি। এতে অপ্রয়োজনীয় বাজেট নষ্ট না হয়ে সর্বোচ্চ সেলস বা লিড নিশ্চিত হয়।",
    descEn: "Designing highly-optimized customer funnels and managing high-performance paid campaigns. We protect your budget while maximizing conversions.",
    bulletsBn: ["মেটা (Facebook/Instagram) অ্যাড সেটআপ", "গুগল পিপিসি (PPC) সার্চ ও ডিসপ্লে অ্যাডস", "কনভার্সন অপটিমাইজড অ্যাড কপিরাইটিং", "টার্গেটেড অডিয়েন্স ও রিটার্গেটিং ফানেল"],
    bulletsEn: ["Meta Ads Management", "Google PPC Ads", "High-Converting Ad Copy", "Audience Retargeting Funnels"],
    outcomeBn: "গড় ৪.২x রিটার্ন অন অ্যাড স্পেন্ড (ROAS)",
    outcomeEn: "Average 4.2x ROAS across campaigns",
    category: "marketing"
  },
  {
    id: "seo-strategy",
    titleBn: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)",
    titleEn: "Search Engine Optimization (SEO)",
    taglineBn: "গুগলের প্রথম পেজে দীর্ঘমেয়াদী অর্গানিক ট্রাফিক নিশ্চিতকরণ",
    taglineEn: "Compound organic traffic with strategic keyword ranking",
    descBn: "উন্নত অন-পেজ, অফ-পেজ ও টেকনিক্যাল এসইও কৌশলের মাধ্যমে সার্চ ইঞ্জিনে আপনার সাইটের র‍্যাঙ্ক বৃদ্ধি করি, যা দীর্ঘ মেয়াদে স্থায়ী কাস্টমার তৈরি করে।",
    descEn: "Proven white-hat optimization covering technical SEO, strategic keyword research, content briefs, and permanent link building.",
    bulletsBn: ["সম্পূর্ণ টেকনিক্যাল এসইও অডিট", "উন্নত কিওয়ার্ড রিসার্চ ও কম্পেটিটর অ্যানালাইসিস", "অন-পেজ কন্টেন্ট অপটিমাইজেশন", "হাই-অথরিটি ব্যাকলিংক বিল্ডিং স্ট্র্যাটেজি"],
    bulletsEn: ["Full Technical SEO Audit", "Advanced Keyword & Competitor Analysis", "On-Page Content Optimization", "High-Authority Backlink Building"],
    outcomeBn: "র‍্যাঙ্কিং ও অর্গানিক ট্রাফিক ৩০০%+ বৃদ্ধি",
    outcomeEn: "300%+ increase in search organic traffic",
    category: "marketing"
  },
  {
    id: "graphic-design",
    titleBn: "\u09aa\u09cd\u09b0\u09ab\u09c7\u09b6\u09a8\u09be\u09b2 \u0997\u09cd\u09b0\u09be\u09ab\u09bf\u0995 \u09a1\u09bf\u099c\u09be\u0987\u09a8",
    titleEn: "Professional Graphic Design",
    taglineBn: "\u0986\u09aa\u09a8\u09be\u09b0 \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u0995\u09c7 \u09ad\u09bf\u099c\u09cd\u09af\u09c1\u09af\u09bc\u09be\u09b2\u09bf \u0985\u09ac\u09bf\u09b8\u09cd\u09ae\u09b0\u09a3\u09c0\u09af\u09bc \u0995\u09b0\u09c7 \u09a4\u09cb\u09b2\u09be",
    taglineEn: "Making your brand visually unforgettable",
    descBn: "\u09b2\u09cb\u0997\u09cb, \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u0986\u0987\u09a1\u09c7\u09a8\u09cd\u099f\u09bf\u099f\u09bf, \u09b8\u09cb\u09b6\u09cd\u09af\u09be\u09b2 \u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be \u09aa\u09cb\u09b8\u09cd\u099f \u09a5\u09c7\u0995\u09c7 \u09b6\u09c1\u09b0\u09c1 \u0995\u09b0\u09c7 \u09aa\u09cd\u09b0\u09cb\u09a1\u09be\u0995\u09cd\u099f \u09aa\u09cd\u09af\u09be\u0995\u09c7\u099c\u09bf\u0982 \u09aa\u09b0\u09cd\u09af\u09a8\u09cd\u09a4\u2014\u09b8\u09ac\u0995\u09bf\u099b\u09c1 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09ae\u09be\u09a8\u09c7\u09b0 \u09a1\u09bf\u099c\u09be\u0987\u09a8\u09c7 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09bf\u0964 \u0986\u09ae\u09be\u09b0 \u09a1\u09bf\u099c\u09be\u0987\u09a8 \u09b6\u09c1\u09a7\u09c1 \u09b8\u09c1\u09a8\u09cd\u09a6\u09b0 \u09a8\u09af\u09bc, \u098f\u099f\u09bf \u0986\u09aa\u09a8\u09be\u09b0 \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf \u09ae\u09be\u09a8\u09c1\u09b7\u09c7\u09b0 \u0986\u09b8\u09cd\u09a5\u09be \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964",
    descEn: "From logos and brand identity to social media creatives and product packaging\u2014I create everything with international-standard design quality. My designs don't just look beautiful, they build genuine trust in your brand.",
    bulletsBn: ["\u0987\u0989\u09a8\u09bf\u0995 \u09b2\u09cb\u0997\u09cb \u0993 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u0986\u0987\u09a1\u09c7\u09a8\u09cd\u099f\u09bf\u099f\u09bf", "\u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u09b8\u09cb\u09b6\u09cd\u09af\u09be\u09b2 \u09ae\u09bf\u09a1\u09bf\u09af\u09bc\u09be \u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09c7\u099f\u09bf\u09ad\u09b8", "\u09aa\u09cd\u09b0\u09bf\u09a8\u09cd\u099f, \u09aa\u09cd\u09af\u09be\u0995\u09c7\u099c\u09bf\u0982 \u0993 \u09ac\u09bf\u099c\u09a8\u09c7\u09b8 \u09b8\u09cd\u099f\u09c7\u09b6\u09a8\u09be\u09b0\u09bf", "\u0987\u0989\u0986\u0987/\u0987\u0989\u098f\u0995\u09cd\u09b8 \u0987\u09a8\u09cd\u099f\u09be\u09b0\u09ab\u09c7\u09b8 \u09a1\u09bf\u099c\u09be\u0987\u09a8"],
    bulletsEn: ["Unique Logo \u0026 Complete Brand Identity", "Premium Social Media Creatives", "Print, Packaging \u0026 Business Stationery", "UI/UX Interface Design"],
    outcomeBn: "\u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u09ad\u09bf\u099c\u09bf\u09ac\u09bf\u09b2\u09bf\u099f\u09bf \u0993 \u09ac\u09bf\u09b6\u09cd\u09ac\u09be\u09b8\u09af\u09cb\u0997\u09cd\u09af\u09a4\u09be \u09eb\u0078 \u09ac\u09c3\u09a6\u09cd\u09a7\u09bf",
    outcomeEn: "5x increase in brand visibility \u0026 credibility",
    category: "graphic"
  },

  {
    id: "app-dev",
    titleBn: "কাস্টম মোবাইল অ্যাপ ডেভেলপমেন্ট",
    titleEn: "Custom Mobile App Development",
    taglineBn: "সুরক্ষিত ও ইন্টারেক্টিভ অ্যান্ড্রয়েড এবং ক্রস-প্ল্যাটফর্ম অ্যাপ",
    taglineEn: "Secure, interactive native & cross-platform applications",
    descBn: "আপনার অনন্য বিজনেস আইডিয়ার বাস্তব রূপদানে চমৎকার ইউজার ইন্টারফেস এবং ফায়ারবেস ইন্টিগ্রেশন সহ সুরক্ষিত অ্যান্ড্রয়েড ও ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ।",
    descEn: "Building high-performance Android and cross-platform companion mobile apps integrated tightly with secure database services.",
    bulletsBn: ["অ্যান্ড্রয়েড নেটিভ অ্যাপ্লিকেশন", "ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপস", "রিয়েল-টাইম ফায়ারবেস ব্যাকএন্ড", "ইউজার-ফ্রেন্ডলি ক্লিন মোবাইল UI/UX"],
    bulletsEn: ["Native Android Applications", "Cross-Platform Mobile Apps", "Real-Time Firebase Backend", "Clean and Intuitive Mobile UI/UX"],
    outcomeBn: "গুগল প্লে স্টোর কমপ্লায়েন্ট কাস্টম সলিউশন",
    outcomeEn: "Production-ready, store-compliant applications",
    category: "app"
  }
];

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    return saved !== 'false'; // Default to true (user-friendly dark mode)
  });

  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Interactive Skill Analyzer states
  const [skillCategoryFilter, setSkillCategoryFilter] = useState<'all' | 'marketing' | 'design'>('all');
  const [skillLevelMin, setSkillLevelMin] = useState<number>(70);
  const [activeSkillsCategory, setActiveSkillsCategory] = useState<string>('all');
  const [skillSearchQuery, setSkillSearchQuery] = useState<string>('');

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('portfolio-dark-mode', String(isDarkMode));
  }, [isDarkMode]);

  const t = lang === 'bn' ? bnData : enData;
  const stats = lang === 'bn' ? statsBn : statsEn;
  const services = lang === 'bn' ? servicesBn : servicesEn;
  const projects = lang === 'bn' ? projectsBn : projectsEn;
  const timeline = lang === 'bn' ? timelineBn : timelineEn;
  const testimonials = lang === 'bn' ? testimonialsBn : testimonialsEn;

  // Filter projects dynamically
  const filteredProjects = projects.filter(p => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  // Unique project categories for tab generation
  const projectCategories = [
    { id: 'all', label: lang === 'bn' ? 'সব কাজ' : 'All Projects' },
    { id: 'app', label: lang === 'bn' ? 'অ্যাপস ডেভেলপমেন্ট' : 'App Dev' },
    { id: 'graphic', label: lang === 'bn' ? 'গ্রাফিক ডিজাইন' : 'Graphic Design' },
    { id: 'marketing', label: lang === 'bn' ? 'ডিজিটাল মার্কেটিং' : 'Marketing' },
  ];

  // Filter skills dynamically
  const filteredSkills = skillsData.filter(s => {
    const matchesCategory = skillCategoryFilter === 'all' || s.category === skillCategoryFilter;
    const matchesLevel = s.level >= skillLevelMin;
    return matchesCategory && matchesLevel;
  });

  // Filter 7-category skills dynamically based on category, search query, and minimum mastery
  const filteredSkillsCategories = skillsCategoriesData.map(cat => {
    const matchesCategoryFilter = activeSkillsCategory === 'all' || cat.id === activeSkillsCategory;
    if (!matchesCategoryFilter) return null;

    const matchingSkills = cat.skills.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(skillSearchQuery.toLowerCase());
      const matchesLevel = s.level >= skillLevelMin;
      return matchesSearch && matchesLevel;
    });

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat): cat is SkillCategoryData => cat !== null && cat.skills.length > 0);

  // Form submission handler (triggers custom overlay and generates WhatsApp link)
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;

    setFormSubmitted(true);
    
    // Construct pre-filled WhatsApp message
    const messageBody = lang === 'bn'
      ? `হ্যালো আসাদুজ্জামান,\n\nআমার নাম ${formName}।\nইমেইল: ${formEmail}\nবিষয়: ${formSubject || 'নতুন প্রজেক্ট'}\n\nবার্তা:\n${formMsg}`
      : `Hello Asaduzzaman,\n\nMy name is ${formName}.\nEmail: ${formEmail}\nSubject: ${formSubject || 'New Project'}\n\nMessage:\n${formMsg}`;

    const whatsappUrl = `https://wa.me/8801772570807?text=${encodeURIComponent(messageBody)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  // Copy email template to clipboard
  const handleCopyTemplate = () => {
    const subjectLine = lang === 'bn' ? `পোর্টফোলিও যোগাযোগ: ${formSubject || 'নতুন প্রজেক্ট'}` : `Portfolio Contact: ${formSubject || 'New Project'}`;
    const emailBody = lang === 'bn'
      ? `হ্যালো আসাদুজ্জামান,\n\nআমার নাম ${formName} (${formEmail}).\n\nবার্তা:\n${formMsg}\n\nধন্যবাদ!`
      : `Hello Asaduzzaman,\n\nMy name is ${formName} (${formEmail}).\n\nMessage:\n${formMsg}\n\nBest regards!`;

    const fullTemplate = `${lang === 'bn' ? 'প্রাপক' : 'To'}: freelancersazu03@gmail.com\n${lang === 'bn' ? 'বিষয়' : 'Subject'}: ${subjectLine}\n\n${emailBody}`;
    
    navigator.clipboard.writeText(fullTemplate).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    });
  };

  const handleResetForm = () => {
    setFormName('');
    setFormEmail('');
    setFormSubject('');
    setFormMsg('');
    setFormSubmitted(false);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div 
        id="nrf-root"
        className="min-h-screen bg-white text-slate-900 dark:bg-[#090514] dark:text-purple-50 transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden"
      >
        {/* ===================== NAVIGATION ===================== */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#090514]/80 backdrop-blur-md border-b border-purple-100 dark:border-purple-950/40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              href="#" 
              className="group flex items-center gap-1.5 focus:outline-none"
              id="nrf-logo"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform flex items-center justify-center bg-white">
                <img src={sazuLogo} alt="Sazu Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-2xl tracking-tight dark:text-white text-purple-950 font-bold ml-1">
                {lang === 'bn' ? 'আসাদুজ্জামান' : 'M. Asaduzzaman'}
                <span className="text-purple-600 font-sans font-bold">.</span>
                <span className="text-sm font-sans font-normal opacity-85 text-slate-500 dark:text-purple-300/80 ml-1">
                  {lang === 'bn' ? 'সাজু' : 'Sazu'}
                </span>
              </span>
            </motion.a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600 dark:text-purple-200/80">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#services", label: t.nav.services },
                { href: "#skills", label: t.nav.skills },
                { href: "#projects", label: t.nav.projects },
                { href: "#experience", label: t.nav.experience },
                { href: "#contact", label: t.nav.contact }
              ].map((link, lidx) => (
                <motion.a 
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: lidx * 0.08 }}
                  href={link.href} 
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Utility Controls (Language, Theme, CTA) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setLang(l => l === 'bn' ? 'en' : 'bn')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-purple-900/40 text-xs font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all text-purple-700 dark:text-purple-300"
                aria-label="Toggle language"
                id="nrf-lang-toggle"
              >
                <Globe className="w-3.5 h-3.5 text-purple-500" />
                {lang === 'bn' ? 'English' : 'বাংলা'}
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/40 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all text-purple-600 dark:text-purple-300"
                aria-label="Toggle theme"
                id="nrf-theme-toggle"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              {/* Header CTA */}
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                href="#contact" 
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-md shadow-purple-600/15 hover:shadow-purple-600/25 transition-all text-sm flex items-center gap-1.5"
                id="nrf-nav-cta"
              >
                {t.nav.cta}
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setLang(l => l === 'bn' ? 'en' : 'bn')}
                className="px-2.5 py-1.5 rounded-lg border border-purple-100 dark:border-purple-900/30 text-xs font-semibold text-purple-700 dark:text-purple-300"
              >
                {lang === 'bn' ? 'EN' : 'বাংলা'}
              </button>
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg border border-purple-100 dark:border-purple-900/30 text-purple-600 dark:text-purple-300"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 inset-x-0 bg-white dark:bg-[#0c071a] border-b border-purple-100 dark:border-purple-950 z-40 shadow-xl py-6 px-4 flex flex-col gap-4"
            >
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.about}
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.services}
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.skills}
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.projects}
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.experience}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-2.5 px-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-purple-100 font-medium"
              >
                {t.nav.contact}
              </a>

              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 bg-purple-600 text-white text-center font-medium rounded-xl shadow-lg shadow-purple-600/20 block"
              >
                {t.nav.cta}
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 dark:bg-[#090514] bg-white dot-matrix">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column (Main Info) */}
              <div className="lg:col-span-7 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-wider uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  {t.hero.badge}
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight text-slate-950 dark:text-white"
                >
                  <span className="font-bold">{t.name}</span>
                  {t.hero.headline}
                  <span className="purple-highlight font-bold italic text-purple-700 dark:text-purple-400">
                    {t.hero.headlineHighlight1}
                  </span>
                  {t.hero.sub}
                  <span className="purple-highlight font-bold italic text-purple-700 dark:text-purple-400">
                    {t.hero.headlineHighlight2}
                  </span>
                  ।
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-slate-600 dark:text-purple-200/75 max-w-xl font-normal leading-relaxed"
                >
                  {t.hero.tagline}
                </motion.p>

                {/* Hero CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <a
                    href="#projects"
                    className="px-7 py-3.5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    {t.hero.ctaPrimary}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="px-7 py-3.5 border border-purple-200 dark:border-purple-900/50 hover:border-purple-400 dark:hover:border-purple-700 text-purple-800 dark:text-purple-200 font-semibold rounded-xl hover:bg-purple-50/50 dark:hover:bg-purple-950/20 transition-all"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </motion.div>
              </div>

              {/* Right Column (Side Metrics Box) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -8, 0] 
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.2 },
                    scale: { duration: 0.6, delay: 0.2 },
                    y: { 
                      repeat: Infinity, 
                      duration: 5, 
                      ease: "easeInOut",
                      delay: 0.8
                    } 
                  }}
                  className="relative p-8 rounded-3xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/80 dark:border-purple-900/40 shadow-inner"
                >
                  <div className="absolute top-4 right-4 text-purple-400 dark:text-purple-600 opacity-20 font-serif text-8xl font-black select-none leading-none">
                    AS
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono font-medium tracking-wider text-slate-500 dark:text-purple-300/60 uppercase">
                        {lang === 'bn' ? 'স্ট্যাটাস: নতুন প্রজেক্টের জন্য উন্মুক্ত' : 'Status: Accepting Client Projects'}
                      </span>
                    </div>

                    <div className="border-l-2 border-purple-600 dark:border-purple-500 pl-4 space-y-4">
                      <p className="text-[14.5px] font-mono text-slate-700 dark:text-purple-200 leading-relaxed">
                        {t.hero.side1}
                      </p>
                      <p className="text-[14.5px] font-mono text-slate-700 dark:text-purple-200 leading-relaxed">
                        {t.hero.side2}
                      </p>
                      <p className="text-[14.5px] font-mono text-slate-700 dark:text-purple-200 leading-relaxed">
                        {t.hero.side3}
                      </p>
                    </div>

                    {/* Miniature rating */}
                    <div className="pt-2 flex items-center gap-3">
                      <div className="flex gap-1 text-amber-500">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-purple-300">
                        {lang === 'bn' ? '৫.০ স্টার রেটিং (২০০+ ক্লায়েন্ট)' : '5.0 Star Rating (200+ clients)'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ===================== INFINITE TICKER ===================== */}
          <div className="mt-16 border-y border-purple-100 dark:border-purple-950 bg-purple-50/20 dark:bg-purple-950/10 py-5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="relative w-full overflow-hidden">
                <div className="animate-ticker flex items-center gap-12 select-none">
                  {[...Array(3)].map((_, listIndex) => (
                    <div key={listIndex} className="flex items-center gap-12">
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> SEO OPTIMIZATION
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> META PAID ADS
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> GOOGLE CONVERSIONS
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> BRAND IDENTITY DESIGN
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> SOCIAL CURATION
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> UI/UX FIGMA
                      </span>
                      <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> VECTOR ARTWORK
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section id="about" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Title and Bio */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Photo of Asaduzzaman Saju */}
                  <div className="md:col-span-4">
                    <motion.div 
                      whileHover={{ scale: 1.03, rotate: -1 }}
                      className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-purple-100 dark:border-purple-950/60 bg-white dark:bg-[#120d29] p-2"
                    >
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                        <img 
                          src={sazuProfile} 
                          alt="M. Asaduzzaman Sazu" 
                          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                        {/* Status tag */}
                        <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-1.5 rounded-xl border border-white/10 flex items-center justify-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                            {lang === 'bn' ? 'কাজের জন্য প্রস্তুত' : 'Available for Work'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 mb-2 text-center">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg font-serif tracking-wide leading-tight">
                          {lang === 'bn' ? 'এম. আসাদুজ্জামান সাজু' : 'M. Asaduzzaman Sazu'}
                        </h3>
                        <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 mt-1 uppercase tracking-widest">
                           {lang === 'bn' ? 'ডিজিটাল স্ট্র্যাটেজিস্ট' : 'Digital Strategist'}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Title and Bio */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase"
                      >
                        {t.about.title}
                      </motion.div>
                      <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 dark:text-white leading-tight"
                      >
                        {t.about.subtitle}
                      </motion.h2>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-slate-600 dark:text-purple-100/80 space-y-4 leading-relaxed text-sm"
                    >
                      <p dangerouslySetInnerHTML={{ __html: t.about.bioParagraph1 }}></p>
                      <p dangerouslySetInnerHTML={{ __html: t.about.bioParagraph2 }}></p>
                    </motion.div>
                  </div>

                </div>

                {/* Grid of stats items */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {stats.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ 
                        y: -6, 
                        borderColor: "#a855f7", 
                        boxShadow: "0 10px 20px -10px rgba(168, 85, 247, 0.25)",
                        scale: 1.02
                      }}
                      className="p-5 rounded-2xl bg-white dark:bg-[#130d29] border border-purple-100 dark:border-purple-950/60 shadow-sm text-center transition-colors cursor-default"
                    >
                      <div className="text-3xl font-serif font-bold text-purple-600 dark:text-purple-400 mb-1">
                        {item.num}
                      </div>
                      <div className="text-xs font-medium text-slate-500 dark:text-purple-300/70 uppercase tracking-wide leading-tight">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side: Creative Spec / Feature Highlights */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 space-y-6 lg:mt-14"
              >
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-xl relative overflow-hidden"
                >
                  <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-purple-200" />
                      <h3 className="text-2xl font-serif font-bold">
                        {lang === 'bn' ? 'কেন আমার ওপর আস্থা রাখবেন?' : 'Design + Data Philosophy'}
                      </h3>
                    </div>

                    <p className="text-sm text-purple-100 leading-relaxed">
                      {lang === 'bn' 
                        ? 'আমি কেবল সাধারণ কোনো ডিজাইন বা মার্কেটিং ক্যাম্পেইন করি না; আমার মূল লক্ষ্য প্রতিটি কাজে কাস্টমার সাইকোলজি এবং কনভার্সন ফানেলের নিখুঁত মেলবন্ধন ঘটানো, যাতে প্রতিটি ভিজ্যুয়াল ও স্ট্র্যাটেজি আপনার ব্র্যান্ডের দীর্ঘমেয়াদী বিশ্বাসযোগ্যতা ও সরাসরি ব্যবসায়িক লাভ নিশ্চিত করে।' 
                        : 'I don’t just create standard graphics or launch basic ads; my ultimate mission is to synthesize target consumer psychology with high-converting marketing funnels, ensuring every visual assets and campaigns translate into long-term customer trust and direct ROI.'}
                    </p>

                    <div className="space-y-3 pt-2">
                      {[
                        lang === 'bn' ? '১০০% প্রফেশনাল সততা ও লাইভ প্রজেক্ট ট্র্যাকিং' : 'Hands-on performance-focused execution',
                        lang === 'bn' ? 'মার্কেটিং সাইকোলজি ও সেলস ফানেল নির্ভর ডিজাইন' : 'Conversion-optimized landing templates',
                        lang === 'bn' ? 'আন্তর্জাতিক মানের পিক্সেল-নিখুঁত ইউনিক ভেক্টর আর্ট' : 'Stunning, vector-perfect identity guidebooks',
                        lang === 'bn' ? 'দীর্ঘমেয়াদী সফলতার জন্য বিশ্বস্ত ও সার্বক্ষণিক সাপোর্ট' : 'Proactive, transparent communication'
                      ].map((bullet, bidx) => (
                        <motion.div 
                          key={bidx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + bidx * 0.1 }}
                          className="flex items-start gap-2.5 text-xs text-purple-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-200 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ===================== SERVICES SECTION ===================== */}
        <section id="services" className="py-20 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase">
                {t.services.title}
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
                {t.services.subtitle}
              </h2>
              <div className="w-12 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </div>

            {/* Unified Services List (Responsive: Row on Desktop, Stack on Mobile) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {premiumServicesData.map((svc, idx) => (
                <motion.div 
                  key={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group p-6 lg:p-8 rounded-3xl border border-purple-100 dark:border-purple-950/60 bg-[#faf8fc]/80 dark:bg-[#0c0820]/50 hover:bg-white dark:hover:bg-[#0c0820] backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center relative overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/0 group-hover:bg-purple-500/5 dark:group-hover:bg-purple-400/5 rounded-full blur-3xl transition-colors duration-500" />

                  {/* Column 1: Info (approx 40% on desktop) */}
                  <div className="w-full lg:w-[40%] space-y-4 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100/80 dark:bg-purple-950/80 flex items-center justify-center shrink-0 shadow-sm text-purple-600 dark:text-purple-400">
                        {svc.category === 'marketing' ? (
                          <TrendingUp className="w-6 h-6" />
                        ) : svc.category === 'app' ? (
                          <Code className="w-6 h-6" />
                        ) : (
                          <Smartphone className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-wider text-purple-600 dark:text-purple-400 uppercase font-bold">
                          {svc.category === 'marketing' ? 'Marketing' : svc.category === 'app' ? 'App Development' : 'Graphic Design'}
                        </span>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-purple-50 font-serif mt-0.5 leading-tight">
                          {lang === 'bn' ? svc.titleBn : svc.titleEn}
                        </h4>
                      </div>
                    </div>
                    <div className="pl-16 lg:pl-0 xl:pl-16">
                      <p className="text-sm font-bold text-purple-600 dark:text-purple-400 font-serif mb-2">
                        {lang === 'bn' ? svc.taglineBn : svc.taglineEn}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-purple-200/60 leading-relaxed font-sans max-w-sm">
                        {lang === 'bn' ? svc.descBn : svc.descEn}
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Key Elements (approx 30%) */}
                  <div className="w-full lg:w-[30%] relative z-10 lg:px-4 lg:border-l border-purple-100/50 dark:border-purple-900/30">
                    <h5 className="text-[10px] font-mono font-bold text-slate-400 dark:text-purple-400/50 uppercase tracking-wider mb-4">
                      {lang === 'bn' ? 'প্রধান সার্ভিসসমূহ:' : 'Core Features:'}
                    </h5>
                    <ul className="space-y-2.5">
                      {(lang === 'bn' ? svc.bulletsBn : svc.bulletsEn).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-purple-200">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Outcome & Action (approx 30%) */}
                  <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-6 relative z-10 lg:pl-4 lg:border-l border-purple-100/50 dark:border-purple-900/30">
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-mono font-bold text-slate-400 dark:text-purple-400/50 uppercase tracking-wider">
                        {lang === 'bn' ? 'টার্গেট ফলাফল:' : 'Expected Outcome:'}
                      </h5>
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="font-serif font-bold">{lang === 'bn' ? svc.outcomeBn : svc.outcomeEn}</span>
                      </div>
                    </div>
                    
                    <a 
                      href="#contact"
                      className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 text-sm font-bold rounded-xl bg-purple-600/10 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white hover:border-purple-600 hover:-translate-y-0.5 transition-all w-full sm:w-auto lg:w-full xl:w-auto shrink-0 shadow-sm"
                    >
                      <span>{lang === 'bn' ? 'অর্ডার দিন' : 'Order Now'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===================== SKILLS SECTION ===================== */}
        <section id="skills" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header / Intro */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase"
              >
                {t.skills.title}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white leading-tight"
              >
                {t.skills.subtitle}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-purple-200/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans"
              >
                {lang === 'bn' 
                  ? 'আপনার ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে এগিয়ে নিয়ে যাওয়ার জন্য আমার প্রধান প্রযুক্তিগত এবং মার্কেটিং দক্ষতা যা সরাসরি প্রবৃদ্ধি এনে দেয়।'
                  : 'An expert-level arsenal spanning across web/mobile technologies, high-ROI paid campaigns, SEO, and client acquisition channels.'}
              </motion.p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" 
              />
            </div>

            {/* Premium Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsCategoriesData.map((category, catIdx) => {
                const theme = getThemeClasses(category.colorTheme);
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                    whileHover={{ 
                      y: -6,
                      borderColor: "rgba(168, 85, 247, 0.4)",
                      boxShadow: "0 12px 30px -10px rgba(168, 85, 247, 0.12)"
                    }}
                    className={`rounded-3xl bg-white dark:bg-[#120c29] border ${theme.border} ${theme.hoverBorder} p-6 shadow-sm transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div className="space-y-5">
                      {/* Card Header */}
                      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-purple-950/40">
                        <div className={`p-2 rounded-xl ${theme.badgeBg} border ${theme.badgeBorder} flex items-center justify-center shrink-0`}>
                          {getCategoryIcon(category.iconType)}
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-purple-50 tracking-tight leading-tight">
                            {lang === 'bn' ? category.titleBn : category.titleEn}
                          </h3>
                        </div>
                      </div>

                      {/* Small Compact Skill Pills Wrapped */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -1,
                              backgroundColor: "rgba(168, 85, 247, 0.08)",
                              borderColor: "rgba(168, 85, 247, 0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-[#171032]/80 border border-purple-500/5 dark:border-purple-900/10 text-xs text-slate-700 dark:text-purple-200/95 font-medium transition-all duration-200 flex items-center gap-1.5 cursor-default"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                            <span>{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer branding accent */}
                    <div className="mt-6 pt-3 border-t border-slate-50 dark:border-purple-950/20 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-purple-300/30">
                      <span>{lang === 'bn' ? 'যাচাইকৃত দক্ষতা' : 'VERIFIED SKILL'}</span>
                      <span className={`${theme.accentText}`}>●</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ===================== PORTFOLIO SHOWCASE SECTION ===================== */}
        <section id="projects" className="py-20 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12 space-y-3"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase">
                {t.projects.title}
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">
                {t.projects.subtitle}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" 
              />
            </motion.div>

            {/* Dynamic Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {projectCategories.map((cat, catIdx) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.05 }}
                  onClick={() => setProjectFilter(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-2xl cursor-pointer transition-all duration-300 border ${
                    projectFilter === cat.id
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/15'
                      : 'bg-purple-50/50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30 text-slate-600 dark:text-purple-200/80 hover:bg-purple-100/60 dark:hover:bg-purple-900/30'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      borderColor: "#a855f7",
                      boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.15), 0 10px 10px -5px rgba(168, 85, 247, 0.1)"
                    }}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-purple-50/20 dark:bg-[#110c26] border border-purple-100/60 dark:border-purple-950/60 shadow-sm transition-all duration-300"
                  >
                    {/* Card Thumbnail */}
                    <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-6 text-white overflow-hidden shrink-0`}>
                      <div className="absolute -bottom-6 -right-6 text-white/10 opacity-50">
                        {getProjectIcon(project.thumbClass, "w-40 h-40")}
                      </div>
                      
                      <div className="relative z-10 text-center flex justify-center drop-shadow-md">
                        {getProjectIcon(project.thumbClass, "w-16 h-16")}
                      </div>

                      {/* Badge and overlay indicators */}
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-md bg-black/30 backdrop-blur-sm text-purple-200">
                        {project.tag}
                      </span>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-purple-50 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-purple-200/55 line-clamp-3 leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* Performance Metric & View Button */}
                      <div className="pt-4 border-t border-purple-100/50 dark:border-purple-900/30 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="block text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-purple-400/55">
                            {t.projects.metricLabel}
                          </span>
                          <span className="block text-sm font-bold text-purple-600 dark:text-purple-400 font-serif">
                            {project.metric}
                          </span>
                        </div>

                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-[#1d163d] border border-purple-100 dark:border-purple-900/60 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-purple-700 dark:text-purple-300 transition-all cursor-pointer flex items-center gap-1"
                        >
                          {t.projects.viewDetails}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* ===================== EXPERIENCE TIMELINE SECTION ===================== */}
        <section id="experience" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading and Summary */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-4"
              >
                <div className="space-y-2">
                  <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase">
                    {t.experience.title}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">
                    {t.experience.subtitle}
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-purple-200/70 text-sm leading-relaxed max-w-sm">
                  {lang === 'bn' 
                    ? 'বিগত বছরগুলোতে সফলভাবে লোকাল ও মাল্টি-ন্যাশনাল ব্র্যান্ডের জন্য গ্রাফিক্স ক্রিয়েটিভস ও মার্কেটিং অপ্টিমাইজেশনের ভূমিকা।'
                    : 'A detailed log of creative and technical roles designed to generate customer equity across several fast-growing verticals.'}
                </p>

                {/* Micro-Badges / Skills Checklist */}
                <div className="space-y-3 pt-4">
                  {[
                    lang === 'bn' ? '৫+ বছর ধরে ডিজাইন এবং অ্যাডভার্টাইজিং ক্ষেত্র' : '5+ Years of Active Domain Craft',
                    lang === 'bn' ? '১০০% ক্লায়েন্ট সন্তুষ্টি এবং প্রফেশনাল রেটিং' : '100% Client Satisfaction Logs',
                    lang === 'bn' ? 'সরাসরি প্রাকটিকাল ব্র্যান্ডিং অপ্টিমাইজেশন' : 'Practical Conversion-First Design Systems'
                  ].map((bullet, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-purple-200/80"
                    >
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Timeline details */}
              <div className="lg:col-span-7 pl-4 md:pl-8 border-l-2 border-purple-100 dark:border-purple-950 space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Circle Node Indicator */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: idx * 0.15 + 0.2 }}
                      className="absolute -left-[21px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0c081d] border-4 border-purple-600 dark:border-purple-400 group-hover:scale-110 transition-transform" 
                    />

                    <div className="space-y-2">
                      <span className="inline-block text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-950 dark:text-white leading-snug">
                        {item.role}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 dark:text-purple-300/65">
                        {item.org}
                      </div>
                      <p className="text-sm text-slate-500 dark:text-purple-100/70 leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ===================== TOOLS USED SECTION ===================== */}
        <section className="py-16 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-8"
            >
              {lang === 'bn' ? 'যেসব প্রফেশনাল টুল ব্যবহার করি' : 'Tools I Master'}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {toolsList.map((tool, idx) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, delay: idx * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "#a855f7",
                    boxShadow: "0 4px 12px -2px rgba(168, 85, 247, 0.2)"
                  }}
                  className="px-5 py-3 rounded-2xl bg-[#faf8fc] dark:bg-[#120d29] border border-purple-100/50 dark:border-purple-950/80 text-sm font-semibold text-slate-700 dark:text-purple-100 transition-all cursor-default duration-200"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS SECTION ===================== */}
        <section className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-3"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase">
                {t.testimonials.title}
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">
                {t.testimonials.subtitle}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" 
              />
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: "#a855f7",
                    boxShadow: "0 15px 30px -10px rgba(168, 85, 247, 0.15)"
                  }}
                  className="p-8 rounded-3xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="font-serif italic text-slate-600 dark:text-purple-50 text-base leading-relaxed">
                      "{testi.quote}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-purple-100/50 dark:border-purple-950/40 mt-6 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-purple-100 text-sm">
                      {testi.name}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-purple-400/60">
                      {testi.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section id="contact" className="py-20 bg-white dark:bg-[#090514] transition-colors dot-matrix">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase">
                    {t.contact.title}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">
                    {t.contact.subtitle}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-purple-200/70 leading-relaxed max-w-sm pt-2">
                    {t.contact.tagline}
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-4 font-mono text-sm">
                  {/* Email Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100/50 dark:border-purple-900/10 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-600/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-slate-400 dark:text-purple-400/40 font-bold tracking-wider">{t.contact.emailLabel}</span>
                      <a href="mailto:freelancersazu03@gmail.com" className="text-sm text-slate-800 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold font-sans">
                        freelancersazu03@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100/50 dark:border-purple-900/10 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-600/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-slate-400 dark:text-purple-400/40 font-bold tracking-wider">{t.contact.phoneLabel}</span>
                      <a href="tel:+8801772570807" className="text-sm text-slate-800 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold font-sans">
                        +880 17725-70807
                      </a>
                    </div>
                  </motion.div>

                  {/* WhatsApp Premium Card (Dedicated and Emerald Green) */}
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Glowing active light */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                      {lang === 'bn' ? 'সরাসরি চ্যাট' : 'Live Chat'}
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-emerald-600/70 dark:text-emerald-400/50 font-bold tracking-wider">WhatsApp</span>
                      <a 
                        href="https://wa.me/8801772570807" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-emerald-800 dark:text-emerald-300 hover:underline transition-colors font-semibold font-sans block mt-0.5"
                      >
                        +880 17725-70807
                      </a>
                    </div>
                  </motion.div>

                  {/* Location Card (Corrected: Kurigram, Rangpur) */}
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100/50 dark:border-purple-900/10 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-600/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-slate-400 dark:text-purple-400/40 font-bold tracking-wider">{t.contact.locLabel}</span>
                      <span className="text-sm text-slate-800 dark:text-purple-200 font-semibold font-sans">
                        {lang === 'bn' ? 'কুড়িগ্রাম, রংপুর, বাংলাদেশ' : 'Kurigram, Rangpur, Bangladesh'}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Professional Social Media Elements */}
                <div className="pt-2">
                  <span className="block text-[10px] font-mono uppercase text-slate-400 dark:text-purple-400/40 font-bold tracking-wider mb-3">
                    {lang === 'bn' ? 'সোশ্যাল মিডিয়া লিংকস' : 'Connect on Socials'}
                  </span>
                  <div className="flex gap-4">
                    {[
                      { 
                        label: 'Facebook', 
                        url: 'https://www.facebook.com/sazu807', 
                        icon: <Facebook className="w-5 h-5" />,
                        color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600 text-blue-600/90 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/10'
                      },
                      { 
                        label: 'LinkedIn', 
                        url: 'https://www.linkedin.com/in/sazu807', 
                        icon: <Linkedin className="w-5 h-5" />,
                        color: 'hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-700/90 dark:text-blue-400 bg-blue-700/5 dark:bg-blue-700/10 border-blue-700/10'
                      },
                      { 
                        label: 'Instagram', 
                        url: 'https://www.instagram.com/sazu807', 
                        icon: <Instagram className="w-5 h-5" />,
                        color: 'hover:bg-pink-600 hover:text-white hover:border-pink-600 text-pink-600/90 dark:text-pink-400 bg-pink-500/5 dark:bg-pink-500/10 border-pink-500/10'
                      }
                    ].map((soc) => (
                      <motion.a
                        key={soc.label}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${soc.color}`}
                        aria-label={soc.label}
                      >
                        {soc.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact form / Template Generator */}
              <motion.div 
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-7 bg-[#faf8fc] dark:bg-[#110c25] p-6 sm:p-8 rounded-3xl border border-purple-100/80 dark:border-purple-950/80 shadow-md"
              >
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleFormSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-purple-300">
                            {lang === 'bn' ? 'নাম *' : 'Name *'}
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder={lang === 'bn' ? 'রহমান সাহেব' : 'Your Name'}
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181133] border border-purple-100 dark:border-purple-950/60 focus:outline-none focus:border-purple-500 text-sm text-slate-800 dark:text-purple-50"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-purple-300">
                            {lang === 'bn' ? 'ইমেইল *' : 'Email *'}
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="yourname@example.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181133] border border-purple-100 dark:border-purple-950/60 focus:outline-none focus:border-purple-500 text-sm text-slate-800 dark:text-purple-50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-purple-300">
                          {lang === 'bn' ? 'বিষয়' : 'Subject'}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          placeholder={lang === 'bn' ? 'প্রজেক্ট আলোচনা' : 'Project Discussion'}
                          value={formSubject}
                          onChange={(e) => setFormSubject(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181133] border border-purple-100 dark:border-purple-950/60 focus:outline-none focus:border-purple-500 text-sm text-slate-800 dark:text-purple-50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-purple-300">
                          {lang === 'bn' ? 'বার্তা *' : 'Message *'}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder={lang === 'bn' ? 'আপনার বার্তা এখানে লিখুন...' : 'Type your message details here...'}
                          value={formMsg}
                          onChange={(e) => setFormMsg(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181133] border border-purple-100 dark:border-purple-950/60 focus:outline-none focus:border-purple-500 text-sm text-slate-800 dark:text-purple-50 resize-y"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md shadow-purple-600/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        {t.contact.formSubmit}
                      </button>

                      <p className="text-[11px] text-slate-400 dark:text-purple-400/50 leading-relaxed text-center">
                        {t.contact.formNote}
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 space-y-6"
                    >
                      <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                        ✓
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                          {t.contact.formSuccess}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-purple-300/60 max-w-sm mx-auto">
                          {lang === 'bn' 
                            ? 'নিচের বাটনটি ক্লিক করে ইমেইল ক্লায়েন্ট চালু করুন অথবা সরাসরি কপি করে মেল করুন।' 
                            : 'Click launch below to load the message in your email app, or copy the formatted template directly.'}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                        <button
                          onClick={() => {
                            const subjectLine = lang === 'bn' ? `পোর্টফোলিও যোগাযোগ: ${formSubject || 'নতুন প্রজেক্ট'}` : `Portfolio Contact: ${formSubject || 'New Project'}`;
                            const emailBody = lang === 'bn'
                              ? `হ্যালো আসাদুজ্জামান,\n\nআমার নাম ${formName} (${formEmail}).\n\nবার্তা:\n${formMsg}\n\nধন্যবাদ!`
                              : `Hello M. Asaduzzaman Sazu,\n\nMy name is ${formName} (${formEmail}).\n\nMessage:\n${formMsg}\n\nBest regards!`;
                            window.location.href = `mailto:freelancersazu03@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;
                          }}
                          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {lang === 'bn' ? 'ইমেইল অ্যাপ খুলুন' : 'Open Email App'}
                        </button>

                        <button
                          onClick={handleCopyTemplate}
                          className="px-5 py-3 border border-purple-200 dark:border-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                        >
                          {copySuccess ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                          {copySuccess ? t.contact.copySuccess : t.contact.copyTemplate}
                        </button>
                      </div>

                      <button
                        onClick={handleResetForm}
                        className="text-xs text-purple-500 dark:text-purple-400 hover:underline pt-4 font-mono font-semibold"
                      >
                        {lang === 'bn' ? '← নতুন বার্তা লিখুন' : '← Send another message'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

              </div>

          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="bg-[#faf8fc] dark:bg-[#06040e] border-t border-purple-100 dark:border-purple-950 py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-md">
                  <img src={sazuLogo} alt="Sazu Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-serif text-lg tracking-tight dark:text-white text-purple-950 font-bold">
                  {lang === 'bn' ? 'আসাদুজ্জামান (সাজু)' : 'M. Asaduzzaman Sazu'}
                </span>
              </div>

              <div className="text-xs text-slate-400 dark:text-purple-400/50 font-mono text-center md:text-left">
                © {new Date().getFullYear()} {t.footer.rights}
              </div>

              <a 
                href="#"
                className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
              >
                {t.footer.backToTop}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>
        </footer>

        {/* ===================== PORTFOLIO DETAIL DIALOG MODAL ===================== */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl bg-white dark:bg-[#110c28] border border-purple-100 dark:border-purple-900 rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all z-20 focus:outline-none"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner Thumbnail with Image */}
                <div className={`relative h-56 bg-gradient-to-br ${selectedProject.bgGradient} flex flex-col items-center justify-center p-6 text-white overflow-hidden`}>
                  <div className="absolute inset-0 z-0">
                     <img 
                       src={selectedProject.category === 'app' ? appMockup : selectedProject.category === 'graphic' ? graphicMockup : marketingMockup} 
                       alt="Project Mockup" 
                       className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:opacity-100 hover:mix-blend-normal transition-all duration-500 cursor-pointer" 
                     />
                     <div className="absolute inset-0 bg-black/40 z-0" />
                  </div>
                  <div className="relative z-10 text-center flex flex-col items-center drop-shadow-xl">
                    <span className="inline-block px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-xl bg-black/40 backdrop-blur-md text-white/90 mb-3 border border-white/20">
                      {selectedProject.tag}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400 dark:text-purple-400/50">
                      {lang === 'bn' ? 'প্রজেক্টের বিবরণ:' : 'Project Context & Challenges:'}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-purple-100/85 leading-relaxed">
                      {selectedProject.desc}
                      {" "}
                      {lang === 'bn'
                        ? "এই প্রজেক্টের ডিজাইন এবং বিপণনের মূল লক্ষ্য ছিল গ্রাহকদের মনোযোগ আকর্ষণ করা এবং রূপান্তর হারকে ত্বরান্বিত করা। নিখুঁত রঙ সমন্বয় ও ব্রান্ডিং থিমের সাহায্যে সফলভাবে তা অর্জন করা গেছে।"
                        : "Our primary milestone for this client was establishing unified communication guidelines that convert traffic smoothly. By designing vector assets alongside highly-targeted ad copies, we obtained record conversion gains."}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-purple-400/40 mb-1">
                        {t.projects.metricLabel}
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400 font-serif">
                        {selectedProject.metric}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-purple-400/40 mb-1">
                        {lang === 'bn' ? 'ডেলিভারেবলস:' : 'Key Deliverables:'}
                      </div>
                      <div className="text-xs font-bold text-slate-700 dark:text-purple-200">
                        {selectedProject.category === 'graphic' && (lang === 'bn' ? 'লোগো, ব্র্যান্ড আইডেন্টিটি, প্রিন্ট ডিজাইন' : 'Logo, Brand Identity, UI/UX')}
                        {selectedProject.category === 'marketing' && (lang === 'bn' ? 'অ্যাড ক্যাম্পেইন, লিড জেনারেশন, ফানেল' : 'Ad Campaigns, SEO, Lead Gen')}
                        {selectedProject.category === 'app' && (lang === 'bn' ? 'অ্যান্ড্রয়েড অ্যাপ, আইওএস অ্যাপ, এপিআই' : 'Android App, iOS App, API Backend')}
                      </div>
                    </div>
                  </div>

                  {/* Call to action button inside Modal */}
                  <div className="pt-4 border-t border-purple-100/50 dark:border-purple-950/40 flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-purple-100 dark:border-purple-900 text-slate-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all cursor-pointer"
                    >
                      {t.projects.closeBtn}
                    </button>

                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all flex items-center gap-1"
                    >
                      {lang === 'bn' ? 'এরকম প্রজেক্টের জন্য যোগাযোগ করুন' : 'Discuss Similar Project'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
