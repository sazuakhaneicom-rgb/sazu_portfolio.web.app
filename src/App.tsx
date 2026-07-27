import React, { useState, useEffect, useRef, FormEvent } from 'react';
import {
  loadSettings,
  subscribeToCacheVersion,
  getTestimonials,
  getPricingPlans,
  GlobalSettings,
  DEFAULT_SETTINGS,
  FSTestimonial
} from './admin/firestore';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Sparkles,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Copy,
  Code,
  Briefcase,
  Send,
  Star,
  Zap,
  Palette,
  Smartphone,
  Bot,
  Wrench,
  Cpu,
  Megaphone,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Download,
  Github,
  ChevronRight,
  CheckSquare,
  Terminal,
  Layout,
  Layers,
  Globe,
  Check,
} from 'lucide-react';
import {
  bnData,
  enData,
  statsBn,
  statsEn,
  servicesBn,
  servicesEn,
  skillCards,
  skillsCategoriesData,
  SkillCategoryData,
  projectsData,
  ProjectItem,
  timelineBn,
  timelineEn,
  journeyData,
  toolsList,
  testimonialsBn,
  testimonialsEn,
  pricingData as defaultPricing,
  PricingPlan
} from './data';
import sazuProfile from './assets/sazu_profile.jpg';
import sazuLogo from './assets/sazu_logo.png';
import amardokanMockup from './assets/amardokan_mockup.jpg';
import studioMakerMockup from './assets/studio_maker_mockup.jpg';
import aiEnhancerMockup from './assets/ai_enhancer_mockup.jpg';
import posSystemMockup from './assets/pos_system_mockup.jpg';
import appMockup from './assets/app_mockup.png';
import graphicMockup from './assets/graphic_mockup.png';
import marketingMockup from './assets/marketing_mockup.png';

// ============================================================
// HELPERS
// ============================================================

function getProjectMockup(mockupType: string) {
  switch (mockupType) {
    case 'amardokan': return amardokanMockup;
    case 'studio_maker': return studioMakerMockup;
    case 'ai_enhancer': return aiEnhancerMockup;
    case 'pos_system': return posSystemMockup;
    case 'app': return appMockup;
    case 'graphic': return graphicMockup;
    case 'marketing': return marketingMockup;
    default: return appMockup;
  }
}

function getCategoryIcon(iconType: string) {
  switch (iconType) {
    case 'graphic': return <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    case 'uiux': return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    case 'web': return <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
    case 'app': return <Smartphone className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
    case 'ai': return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    case 'marketing': return <TrendingUp className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    case 'tools': return <Wrench className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
    default: return <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
  }
}

// Typed Animation Hook
function useTypedAnimation(words: string[], speed = 80, pause = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!isDeleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplayText(currentWord.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx, words, speed, pause]);

  return displayText;
}

// Animated Counter Hook
function useCounter(target: number, duration = 2000, startAnimation = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startAnimation) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);
  return count;
}

// ============================================================
// MAIN APP
// ============================================================

function StatCard({ stat, statsVisible, idx }: { stat: any, statsVisible: boolean, idx: number }) {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  const hasBengali = /[০-৯]/.test(stat.num || '');
  
  // Convert Bengali digits to English for parsing
  const enNumStr = (stat.num || '').replace(/[০-৯]/g, (w: string) => bnDigits.indexOf(w).toString());
  const numericMatch = enNumStr.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0]) : 0;
  
  const count = useCounter(target, 1800, statsVisible);
  
  // Convert back to Bengali if needed
  let displayCount = count.toString();
  if (hasBengali) {
    displayCount = displayCount.replace(/\d/g, (w: string) => bnDigits[parseInt(w)]);
  }

  // Remove both English and Bengali digits to get the suffix
  const suffix = (stat.num || '').replace(/[\d০-৯]/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl font-black text-white mb-1">
        {statsVisible ? displayCount : (hasBengali ? '০' : '0')}{suffix}
      </div>
      <div className="text-purple-200 text-sm font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  
  // Dynamic Data States
  const [globalData, setGlobalData] = useState<GlobalSettings>(DEFAULT_SETTINGS);
  const [fsTestimonials, setFsTestimonials] = useState<FSTestimonial[]>([]);
  const [fsPricing, setFsPricing] = useState<PricingPlan[]>(defaultPricing);
  const [initialCacheVersion, setInitialCacheVersion] = useState<number | null>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    return saved !== 'false';
  });

  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [skillFilter, setSkillFilter] = useState<'all' | 'design' | 'marketing' | 'development' | 'ai'>('all');
  const [activePricingCategory, setActivePricingCategory] = useState<string>('marketing');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Typed animation
  const t = lang === 'bn' ? bnData : enData;
  const typedText = useTypedAnimation(t.hero.typedRoles || ["Designer", "Developer", "Marketer"]);

  useEffect(() => { localStorage.setItem('portfolio-lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('portfolio-dark-mode', String(isDarkMode)); }, [isDarkMode]);

  
  // 1. Fetch Global Settings, Testimonials & Pricing on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel to save time
        const [s, tests, pricing] = await Promise.all([
          loadSettings(),
          getTestimonials(),
          getPricingPlans()
        ]);
        
        if (s) setGlobalData(s);
        if (tests && tests.length > 0) setFsTestimonials(tests);
        
        if (pricing && pricing.length > 0) {
          const sorted = pricing.sort((a, b) => (a.order as number) - (b.order as number));
          setFsPricing(sorted as unknown as PricingPlan[]);
        }
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    fetchData();
  }, []);

  // 2. Subscribe to Force Refresh Cache System
  useEffect(() => {
    const unsub = subscribeToCacheVersion((newVersion) => {
      if (initialCacheVersion === null) {
        setInitialCacheVersion(newVersion);
      } else if (newVersion !== initialCacheVersion) {
        window.location.reload();
      }
    });
    return () => unsub();
  }, [initialCacheVersion]);


  // Stats observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsVisible(true);
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: lang === 'bn' ? globalData.stats.yearsBn : globalData.stats.yearsEn, label: lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience' },
    { num: lang === 'bn' ? globalData.stats.projectsBn : globalData.stats.projectsEn, label: lang === 'bn' ? 'সম্পন্ন প্রজেক্ট' : 'Projects Completed' },
    { num: lang === 'bn' ? globalData.stats.clientsBn : globalData.stats.clientsEn, label: lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট' : 'Happy Clients' },
    { num: lang === 'bn' ? globalData.stats.sectorsBn : globalData.stats.sectorsEn, label: lang === 'bn' ? 'ইন্ডাস্ট্রি সেক্টর' : 'Industry Sectors' },
  ];
  const services = lang === 'bn' ? servicesBn : servicesEn;
  const projects = projectsData;
  const timeline = lang === 'bn' ? timelineBn : timelineEn;
  const currentTestimonials = fsTestimonials.filter(tt => tt.lang === lang).sort((a, b) => a.order - b.order);

  const filteredProjects = projects.filter(p =>
    projectFilter === 'all' || p.category === projectFilter
  );
  const filteredSkillCards = skillCards.filter(s =>
    skillFilter === 'all' || s.category === skillFilter
  );

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;
    setFormSubmitted(true);
    const messageBody = lang === 'bn'
      ? `হ্যালো সাজু! আমি আপনার পোর্টফোলিও থেকে যোগাযোগ করছি।\n\nনাম: ${formName}\nইমেইল: ${formEmail}\nবিষয়: ${formSubject || 'সাধারণ জিজ্ঞাসা'}\n\nবার্তা:\n${formMsg}\n\nধন্যবাদ!`
      : `Hello Sazu! I'm reaching out from your portfolio.\n\nName: ${formName}\nEmail: ${formEmail}\nSubject: ${formSubject || 'General Inquiry'}\n\nMessage:\n${formMsg}\n\nThank you!`;
    const waUrl = `https://wa.me/${globalData.contact.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
    setTimeout(() => window.open(waUrl, '_blank'), 500);
  };

  const handleResetForm = () => {
    setFormName(''); setFormEmail(''); setFormSubject(''); setFormMsg(''); setFormSubmitted(false);
  };

  const handleOrderWhatsApp = (tierName: string, categoryTitle: string, price: string) => {
    const msg = lang === 'bn'
      ? `হ্যালো সাজু! আমি আপনার পোর্টফোলিও থেকে নক করছি। আমি "${categoryTitle}" সার্ভিসের "${tierName}" প্যাকেজটি অর্ডার করতে চাই (মূল্য: ${price})। আলোচনা করতে পারি?`
      : `Hello Sazu! From your portfolio — I'd like to order the "${tierName}" package for "${categoryTitle}" service (Price: ${price}). Can we discuss?`;
    window.open(`https://wa.me/${globalData.hero.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };



  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div
        id="nrf-root"
        className="min-h-screen bg-white text-slate-900 dark:bg-[#090514] dark:text-purple-50 transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden"
      >

        {/* ==================== NAVIGATION ==================== */}
        <header className="sticky top-[3px] z-50 bg-white/80 dark:bg-[#090514]/80 backdrop-blur-md border-b border-purple-100 dark:border-purple-950/40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              href="#"
              className="group flex items-center gap-1.5 focus:outline-none"
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

            <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-slate-600 dark:text-purple-200/80">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#services", label: t.nav.services },
                { href: "#skills", label: t.nav.skills },
                { href: "#projects", label: t.nav.projects },
                { href: "#pricing", label: t.nav.pricing },
                { href: "#contact", label: t.nav.contact },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="relative hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setLang(l => l === 'bn' ? 'en' : 'bn')}
                className="px-3 py-1.5 rounded-lg border border-purple-100 dark:border-purple-900/40 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
              >
                {lang === 'bn' ? 'EN' : 'বাংলা'}
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/40 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-all text-purple-600 dark:text-purple-300"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-md shadow-purple-600/15 hover:shadow-purple-600/25 transition-all text-sm flex items-center gap-1.5"
              >
                {t.nav.cta} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

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
                className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[83px] left-0 right-0 z-40 bg-white/95 dark:bg-[#0c081d]/95 backdrop-blur-md border-b border-purple-100 dark:border-purple-950/40 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
                {[
                  { href: "#about", label: t.nav.about },
                  { href: "#services", label: t.nav.services },
                  { href: "#skills", label: t.nav.skills },
                  { href: "#projects", label: t.nav.projects },
                  { href: "#pricing", label: t.nav.pricing },
                  { href: "#contact", label: t.nav.contact },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 dark:text-purple-200 font-medium py-2 border-b border-purple-50 dark:border-purple-950/30"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-purple-600 text-white text-center rounded-xl font-semibold mt-2"
                >
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================== HERO ==================== */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-[#090514] dark:via-[#0f0a22] dark:to-[#0c0718]" />
          <div className="absolute inset-0 dot-matrix opacity-40" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 dark:bg-purple-900/30 border border-purple-200/60 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t.hero.badge}
              </motion.div>

              {/* Typed Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="text-base font-mono font-semibold text-purple-600 dark:text-purple-400 h-7 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span>{typedText}</span>
                  <span className="animate-pulse text-purple-500">|</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black leading-[1.05] text-slate-950 dark:text-white">
                  {lang === 'bn' ? 'ব্র্যান্ডকে ' : 'Brands into '}
                  <span className="purple-highlight text-purple-600 dark:text-purple-400">
                    {t.hero.headlineHighlight1}
                  </span>
                  {lang === 'bn' ? ' বানাই,' : ','}
                  <br />
                  <span className="text-slate-700 dark:text-purple-100">
                    {lang === 'bn' ? 'গল্পকে ' : 'stories into '}
                  </span>
                  <span className="purple-highlight text-purple-600 dark:text-purple-400">
                    {t.hero.headlineHighlight2}
                  </span>
                  <span className="text-purple-600">.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg text-slate-600 dark:text-purple-200/70 leading-relaxed max-w-xl"
              >
                {t.hero.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  className="group px-7 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all flex items-center gap-2"
                >
                  {t.hero.ctaPrimary}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-7 py-3.5 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
                >
                  {t.hero.ctaSecondary}
                </a>
                <a
                  href={globalData.hero.resumeUrl}
                  target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3.5 bg-slate-100 dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-purple-900/30 transition-all text-sm border border-slate-200 dark:border-purple-900/40"
                >
                  <Download className="w-4 h-4" />
                  {t.hero.ctaResume}
                </a>
              </motion.div>

              {/* Side notes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-4 border-t border-purple-100 dark:border-purple-950/40 space-y-2"
              >
                {[t.hero.side1, t.hero.side2, t.hero.side3].map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-purple-400/60">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl scale-110" />
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] overflow-hidden border-2 border-purple-200/50 dark:border-purple-800/30 shadow-2xl shadow-purple-600/20">
                  <img src={globalData.hero.profilePictureUrl || sazuProfile} alt="M. Asaduzzaman Sazu" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-purple-950/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-purple-100 dark:border-purple-800/30 text-center w-56">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">M. Asaduzzaman Sazu</p>
                  <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold mt-0.5">Digital Strategist</p>
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-purple-950 rounded-2xl px-3 py-2 shadow-lg border border-purple-100 dark:border-purple-800/40 flex items-center gap-2"
                >
                  <span className="text-lg">🎨</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-purple-200">5+ Years</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-purple-950 rounded-2xl px-3 py-2 shadow-lg border border-purple-100 dark:border-purple-800/40 flex items-center gap-2"
                >
                  <span className="text-lg">🚀</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-purple-200">200+ Clients</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== STATS ==================== */}
        <div ref={statsRef} className="bg-purple-600 dark:bg-purple-700 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} statsVisible={statsVisible} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* ==================== ABOUT ==================== */}
        <section id="about" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.about.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.about.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-100 dark:border-purple-800/40 shadow-lg flex-shrink-0">
                    <img src={globalData.hero.profilePictureUrl || sazuProfile} alt="Sazu" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">M. Asaduzzaman Sazu</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mt-1">Digital Strategist & Creative Professional</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                      <span className="text-xs text-slate-500 dark:text-purple-400/60 ml-1">5.0 • Top Rated</span>
                    </div>
                  </div>
                </div>

                <div
                  className="prose prose-slate dark:prose-invert text-slate-600 dark:text-purple-200/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: lang === 'bn' ? globalData.about.bioParagraph1Bn : globalData.about.bioParagraph1En }}
                />
                <div
                  className="prose prose-slate dark:prose-invert text-slate-600 dark:text-purple-200/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: lang === 'bn' ? globalData.about.bioParagraph2Bn : globalData.about.bioParagraph2En }}
                />

                {/* Quick info chips */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    { icon: "📍", text: "Kurigram, Bangladesh" },
                    { icon: "🌐", text: "Global Clients" },
                    { icon: "⚡", text: "Available Now" },
                  ].map((chip, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900/40 text-xs font-semibold text-slate-700 dark:text-purple-200">
                      {chip.icon} {chip.text}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Journey Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">{t.about.journeyTitle}</h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-100 dark:bg-purple-900/40" />
                  <div className="space-y-8">
                    {journeyData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative flex gap-6"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl shadow-md z-10`}>
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded">{item.year}</span>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                              {lang === 'bn' ? item.titleBn : item.titleEn}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-purple-300/70 leading-relaxed">
                            {lang === 'bn' ? item.descBn : item.descEn}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section id="services" className="py-20 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.services.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.services.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.15 }}
                  className="p-8 rounded-3xl bg-[#faf8fc] dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm hover:shadow-md hover:border-purple-300/50 dark:hover:border-purple-700/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-purple-100 text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-purple-300/60 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section id="skills" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.skills.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.skills.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { key: 'all', label: t.skills.filterAll },
                { key: 'design', label: t.skills.filterDesign },
                { key: 'marketing', label: t.skills.filterMarketing },
                { key: 'development', label: t.skills.filterDevelopment },
                { key: 'ai', label: t.skills.filterAI },
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setSkillFilter(f.key as typeof skillFilter)}
                  className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                    skillFilter === f.key
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-white dark:bg-[#120d29] border border-purple-100/50 dark:border-purple-950/80 text-slate-600 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredSkillCards.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm hover:shadow-lg hover:shadow-purple-600/10 hover:border-purple-300/50 dark:hover:border-purple-700/40 transition-all cursor-default flex flex-col items-center gap-3 text-center group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-purple-100 text-sm">{skill.name}</p>
                      {/* Mini progress bar */}
                      <div className="w-full h-1 bg-slate-100 dark:bg-purple-900/40 rounded-full mt-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.02 + 0.3, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 dark:text-purple-400/50 mt-1">{skill.proficiency}%</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section id="projects" className="py-20 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.projects.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.projects.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { key: 'all', label: t.projects.filterAll },
                { key: 'app', label: lang === 'bn' ? 'অ্যাপস' : 'Apps' },
                { key: 'graphic', label: lang === 'bn' ? 'গ্রাফিক' : 'Graphic' },
                { key: 'marketing', label: lang === 'bn' ? 'মার্কেটিং' : 'Marketing' },
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setProjectFilter(f.key)}
                  className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                    projectFilter === f.key
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-[#faf8fc] dark:bg-[#120d29] border border-purple-100/50 dark:border-purple-950/80 text-slate-600 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.2)" }}
                    className="rounded-3xl bg-[#faf8fc] dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 overflow-hidden cursor-pointer transition-all group"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Thumbnail */}
                    <div className={`h-52 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
                      <img
                        src={getProjectMockup(project.mockupType)}
                        alt={project.titleEn}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                          {lang === 'bn' ? project.tag : project.tagEn}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <span className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                            <ExternalLink className="w-3.5 h-3.5 text-white" />
                          </span>
                        )}
                        {project.githubUrl && (
                          <span className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                            <Github className="w-3.5 h-3.5 text-white" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                          {lang === 'bn' ? project.title : project.titleEn}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-purple-300/60 mt-2 leading-relaxed line-clamp-2">
                          {lang === 'bn' ? project.desc : project.descEn}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] font-semibold rounded-md border border-purple-100 dark:border-purple-900/40">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 bg-slate-50 dark:bg-purple-900/20 text-slate-500 text-[10px] font-semibold rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Metric & CTA */}
                      <div className="flex items-center justify-between pt-2 border-t border-purple-50 dark:border-purple-950/40">
                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <Zap className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold">{lang === 'bn' ? project.metric : project.metricEn}</span>
                        </div>
                        <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                          {t.projects.viewDetails} <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ==================== EXPERIENCE ==================== */}
        <section id="experience" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.experience.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.experience.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-300 to-transparent dark:from-purple-600 dark:via-purple-900 dark:to-transparent" />
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative flex gap-8"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/20 z-10">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-900/40">
                          {item.period}
                        </span>
                        {idx === 0 && (
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/40">
                            ● {lang === 'bn' ? 'বর্তমান' : 'Current'}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{item.role}</h3>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-3">{item.org}</p>
                      <p className="text-slate-600 dark:text-purple-200/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TOOLS ==================== */}
        <section className="py-16 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-8 text-center"
            >
              {t.tools.subtitle}
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {toolsList.map((tool, idx) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{ scale: 1.05, borderColor: "#a855f7", boxShadow: "0 4px 12px -2px rgba(168, 85, 247, 0.2)" }}
                  className="px-5 py-3 rounded-2xl bg-[#faf8fc] dark:bg-[#120d29] border border-purple-100/50 dark:border-purple-950/80 text-sm font-semibold text-slate-700 dark:text-purple-100 transition-all cursor-default duration-200"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.testimonials.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.testimonials.subtitle}</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentTestimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, borderColor: "#a855f7", boxShadow: "0 15px 30px -10px rgba(168, 85, 247, 0.15)" }}
                  className="p-6 rounded-3xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(testi.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-600 dark:text-purple-50 text-sm leading-relaxed">"{testi.quote}"</p>
                  </div>
                  <div className="pt-4 border-t border-purple-100/50 dark:border-purple-950/40 mt-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <div className="font-bold text-slate-900 dark:text-purple-100 text-sm">{testi.name}</div>
                        <div className="text-xs text-slate-500 dark:text-purple-400/60 mt-0.5">{testi.role}</div>
                      </div>
                      {testi.country && testi.flag && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#faf8fc] dark:bg-[#1a1338] border border-purple-100 dark:border-purple-900/40 text-[10px] font-semibold text-slate-600 dark:text-purple-300 whitespace-nowrap">
                          <span>{testi.flag}</span>
                          <span>{testi.country}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PRICING ==================== */}
        <section id="pricing" className="py-20 bg-white dark:bg-[#090514] border-b border-purple-50 dark:border-purple-950/40 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">
                {lang === 'bn' ? 'প্যাকেজ ও মূল্য' : 'Pricing & Packages'}
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">
                {lang === 'bn' ? 'স্বচ্ছ মূল্য, সেরা মান' : 'Transparent Pricing, Best Value'}
              </h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {fsPricing.map(plan => (
                <button
                  key={plan.categoryId}
                  onClick={() => setActivePricingCategory(plan.categoryId)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    activePricingCategory === plan.categoryId
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-[#faf8fc] dark:bg-[#120d29] border border-purple-100/50 dark:border-purple-950/80 text-slate-600 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                  }`}
                >
                  {lang === 'bn' ? plan.titleBn : plan.titleEn}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                {fsPricing.find(p => p.categoryId === activePricingCategory)?.tiers.map((tier, idx) => (
                  <motion.div
                    key={tier.nameEn + activePricingCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative flex flex-col p-8 rounded-3xl bg-[#faf8fc] dark:bg-[#110c28] border transition-all duration-300 ${
                      tier.popular
                        ? 'border-purple-500 dark:border-purple-500 shadow-xl shadow-purple-500/10 scale-100 md:scale-105 z-10'
                        : 'border-purple-100/50 dark:border-purple-950/60 shadow-sm'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                        {lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                      </div>
                    )}
                    <div className="mb-6 pb-6 border-b border-purple-100/50 dark:border-purple-950/40">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{lang === 'bn' ? tier.nameBn : tier.nameEn}</h3>
                      <p className="text-sm text-slate-500 dark:text-purple-300/70 h-10">{lang === 'bn' ? tier.descBn : tier.descEn}</p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">{lang === 'bn' ? tier.priceBn : tier.priceEn}</span>
                        <span className="text-sm text-slate-500 dark:text-purple-300/60">{lang === 'bn' ? tier.periodBn : tier.periodEn}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3 mb-8">
                      {tier.features.map((f, fi) => (
                        <div key={fi} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex-shrink-0 ${f.included ? 'text-purple-600 dark:text-purple-400' : 'text-slate-300 dark:text-slate-700'}`}>
                            {f.included ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                          </div>
                          <span className={`text-sm ${f.included ? 'text-slate-700 dark:text-purple-100' : 'text-slate-400 dark:text-slate-600 line-through'}`}>
                            {lang === 'bn' ? f.textBn : f.textEn}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => handleOrderWhatsApp(
                        lang === 'bn' ? tier.nameBn : tier.nameEn,
                        lang === 'bn' ? fsPricing.find(p => p.categoryId === activePricingCategory)?.titleBn || '' : fsPricing.find(p => p.categoryId === activePricingCategory)?.titleEn || '',
                        lang === 'bn' ? tier.priceBn : tier.priceEn
                      )}
                      className={`w-full py-3.5 rounded-xl font-semibold text-sm flex justify-center items-center gap-2 transition-all ${
                        tier.popular
                          ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-600/20'
                          : 'bg-white dark:bg-[#1a1338] border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {lang === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="py-20 bg-[#faf8fc] dark:bg-[#0c081d] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-bold tracking-wider uppercase mb-3">{t.contact.title}</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 dark:text-white">{t.contact.subtitle}</h2>
              <p className="text-slate-600 dark:text-purple-200/70 mt-4">{t.contact.tagline}</p>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  { icon: <Mail className="w-5 h-5" />, label: t.contact.emailLabel, value: globalData.contact.email, href: `mailto:${globalData.contact.email}` },
                  { icon: <Phone className="w-5 h-5" />, label: t.contact.phoneLabel, value: globalData.contact.phone, href: `tel:${globalData.contact.phone.replace(/[\s-]/g, '')}` },
                  { icon: <MapPin className="w-5 h-5" />, label: t.contact.locLabel, value: lang === 'bn' ? globalData.contact.locationBn : globalData.contact.locationEn, href: "#" },
                ].map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 hover:border-purple-300/50 dark:hover:border-purple-700/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-600/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-slate-400 dark:text-purple-400/40 font-bold tracking-wider">{info.label}</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-purple-200">{info.value}</span>
                    </div>
                  </motion.a>
                ))}

                {/* WhatsApp */}
                <motion.div whileHover={{ scale: 1.02, x: 4 }} className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    {lang === 'bn' ? 'সরাসরি চ্যাট' : 'Live Chat'}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-emerald-600/50 font-bold tracking-wider">WhatsApp</span>
                    <a href={`https://wa.me/${globalData.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">+{globalData.contact.whatsappNumber}</a>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm font-bold text-slate-700 dark:text-purple-200 mb-4">{t.contact.socialTitle}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: globalData.social.facebook, color: "hover:bg-blue-600 hover:border-blue-600" },
                      { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: globalData.social.instagram, color: "hover:bg-pink-600 hover:border-pink-600" },
                      { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: globalData.social.linkedin, color: "hover:bg-sky-700 hover:border-sky-700" },
                      { icon: <Github className="w-5 h-5" />, label: "GitHub", href: globalData.social.github, color: "hover:bg-slate-700 hover:border-slate-700" },
                      { icon: <Send className="w-5 h-5" />, label: "Telegram", href: globalData.social.telegram, color: "hover:bg-sky-500 hover:border-sky-500" },
                      { icon: <MessageCircle className="w-5 h-5" />, label: "Messenger", href: globalData.social.messenger, color: "hover:bg-indigo-600 hover:border-indigo-600" },
                    ].map(social => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 text-slate-600 dark:text-purple-300 hover:text-white transition-all group ${social.color} hover:border-transparent`}
                        title={social.label}
                      >
                        {social.icon}
                        <span className="text-[10px] font-semibold">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit}
                      className="p-8 rounded-3xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-purple-300 mb-2">{t.contact.formName} *</label>
                          <input
                            type="text" required value={formName} onChange={e => setFormName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#faf8fc] dark:bg-[#1a1338] border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-purple-100 placeholder:text-slate-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-sm transition-all"
                            placeholder={t.contact.formName}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 dark:text-purple-300 mb-2">{t.contact.formEmail} *</label>
                          <input
                            type="email" required value={formEmail} onChange={e => setFormEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#faf8fc] dark:bg-[#1a1338] border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-purple-100 placeholder:text-slate-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-sm transition-all"
                            placeholder={t.contact.formEmail}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-purple-300 mb-2">{t.contact.formSubject}</label>
                        <input
                          type="text" value={formSubject} onChange={e => setFormSubject(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8fc] dark:bg-[#1a1338] border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-purple-100 placeholder:text-slate-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-sm transition-all"
                          placeholder={t.contact.formSubject}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 dark:text-purple-300 mb-2">{t.contact.formMsg} *</label>
                        <textarea
                          required rows={5} value={formMsg} onChange={e => setFormMsg(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8fc] dark:bg-[#1a1338] border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-purple-100 placeholder:text-slate-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-sm transition-all resize-none"
                          placeholder={t.contact.formMsg}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md shadow-purple-600/20 hover:shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        {t.contact.formSubmit}
                      </button>
                      <p className="text-xs text-slate-400 dark:text-purple-400/40 text-center">{t.contact.formNote}</p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-3xl bg-white dark:bg-[#110c28] border border-purple-100/50 dark:border-purple-950/60 shadow-sm flex flex-col items-center justify-center text-center gap-5 min-h-[400px]"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.contact.formSuccess}</h3>
                        <p className="text-slate-500 dark:text-purple-300/60 text-sm">{lang === 'bn' ? 'হোয়াটসঅ্যাপ খুলছে...' : 'Opening WhatsApp...'}</p>
                      </div>
                      <button onClick={handleResetForm} className="text-sm text-purple-600 dark:text-purple-400 hover:underline font-semibold">
                        {lang === 'bn' ? '← নতুন বার্তা লিখুন' : '← Send another message'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
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
              <div className="text-xs text-slate-400 dark:text-purple-400/50 font-mono text-center">
                © {new Date().getFullYear()} {t.footer.rights}
              </div>
              <a href="#" className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                {t.footer.backToTop} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </footer>

        {/* ==================== PROJECT DETAIL MODAL ==================== */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="bg-white dark:bg-[#110c28] rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-purple-100/50 dark:border-purple-900/40 max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Header image */}
                <div className={`h-52 bg-gradient-to-br ${selectedProject.bgGradient} relative overflow-hidden`}>
                  <img src={getProjectMockup(selectedProject.mockupType)} alt={selectedProject.titleEn} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-black/50 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                      {lang === 'bn' ? selectedProject.tag : selectedProject.tagEn}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {lang === 'bn' ? selectedProject.title : selectedProject.titleEn}
                    </h2>
                    <p className="text-slate-600 dark:text-purple-200/70 mt-3 leading-relaxed text-sm">
                      {lang === 'bn' ? selectedProject.desc : selectedProject.descEn}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold text-slate-700 dark:text-purple-200 text-sm mb-3">{t.projects.techLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-lg border border-purple-100 dark:border-purple-900/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-slate-700 dark:text-purple-200 text-sm mb-3">{t.projects.featuresLabel}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-purple-200/80">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          {lang === 'bn' ? f.textBn : f.textEn}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/40 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400 block">{t.projects.metricLabel}</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-white">
                        {lang === 'bn' ? selectedProject.metric : selectedProject.metricEn}
                      </span>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3 pt-2">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer"
                        className="flex-1 py-3 bg-purple-600 text-white text-sm font-semibold rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" /> {t.projects.liveDemo}
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer"
                        className="flex-1 py-3 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" /> {t.projects.sourceCode}
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-3 border border-slate-200 dark:border-purple-900 text-slate-600 dark:text-purple-300 text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-purple-950/40 transition-all"
                    >
                      {t.projects.closeBtn}
                    </button>
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
