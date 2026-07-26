import fs from 'fs';

let content = fs.readFileSync('App_old2.tsx', 'utf-8');

// 1. Add imports
content = content.replace(
  "import {",
  "import { loadSettings, subscribeToCacheVersion, getTestimonials, GlobalSettings, DEFAULT_SETTINGS, FSTestimonial } from './admin/firestore';\nimport {"
);

// 2. Add state
const stateInjection = `
  // Dynamic Data States
  const [globalData, setGlobalData] = useState<GlobalSettings>(DEFAULT_SETTINGS);
  const [fsTestimonials, setFsTestimonials] = useState<FSTestimonial[]>([]);
  const [initialCacheVersion, setInitialCacheVersion] = useState<number | null>(null);
`;
content = content.replace(
  "const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {",
  stateInjection + "\n  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {"
);

// 3. Add useEffects for Firestore
const effectsInjection = `
  // 1. Fetch Global Settings & Testimonials on load
  useEffect(() => {
    const fetchData = async () => {
      const s = await loadSettings();
      setGlobalData(s);
      const tests = await getTestimonials();
      setFsTestimonials(tests);
      setTimeout(() => setIsLoading(false), 1200);
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
`;
content = content.replace(
  "// Loading screen\n  useEffect(() => {\n    const timer = setTimeout(() => setIsLoading(false), 1800);\n    return () => clearTimeout(timer);\n  }, []);",
  effectsInjection
);

// 4. Update Stats
content = content.replace(
  "const stats = lang === 'bn' ? statsBn : statsEn;",
  `const stats = [
    { num: lang === 'bn' ? globalData.stats.yearsBn : globalData.stats.yearsEn, label: lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience' },
    { num: lang === 'bn' ? globalData.stats.projectsBn : globalData.stats.projectsEn, label: lang === 'bn' ? 'সম্পন্ন প্রজেক্ট' : 'Projects Completed' },
    { num: lang === 'bn' ? globalData.stats.clientsBn : globalData.stats.clientsEn, label: lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট' : 'Happy Clients' },
    { num: lang === 'bn' ? globalData.stats.sectorsBn : globalData.stats.sectorsEn, label: lang === 'bn' ? 'ইন্ডাস্ট্রি সেক্টর' : 'Industry Sectors' },
  ];`
);

// 5. Update form submission waUrl
content = content.replace(
  "const waUrl = `https://wa.me/8801772570807?text=${encodeURIComponent(messageBody)}`;",
  "const waUrl = `https://wa.me/${globalData.contact.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;"
);
content = content.replace(
  "window.open(`https://wa.me/8801772570807?text=${encodeURIComponent(msg)}`, '_blank');",
  "window.open(`https://wa.me/${globalData.hero.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');"
);

// 6. Hero Resume link
content = content.replace(
  "href=\"#\"\n                  className=\"flex items-center gap-2 px-5 py-3.5 bg-slate-100",
  "href={globalData.hero.resumeUrl}\n                  target=\"_blank\" rel=\"noreferrer\" className=\"flex items-center gap-2 px-5 py-3.5 bg-slate-100"
);

// 7. About Bio update
content = content.replace(
  "dangerouslySetInnerHTML={{ __html: t.about.bioParagraph1 }}",
  "dangerouslySetInnerHTML={{ __html: lang === 'bn' ? globalData.about.bioParagraph1Bn : globalData.about.bioParagraph1En }}"
);
content = content.replace(
  "dangerouslySetInnerHTML={{ __html: t.about.bioParagraph2 }}",
  "dangerouslySetInnerHTML={{ __html: lang === 'bn' ? globalData.about.bioParagraph2Bn : globalData.about.bioParagraph2En }}"
);

// 8. Testimonials loop replace
content = content.replace(
  "const testimonials = lang === 'bn' ? testimonialsBn : testimonialsEn;",
  "const currentTestimonials = fsTestimonials.filter(tt => tt.lang === lang).sort((a, b) => a.order - b.order);"
);
content = content.replace(
  "{testimonials.map((testi, idx) => (",
  "{currentTestimonials.map((testi, idx) => ("
);
content = content.replace(
  "key={idx}",
  "key={testi.id}"
);

// 9. Contact Info replace
content = content.replace(
  `{ icon: <Mail className="w-5 h-5" />, label: t.contact.emailLabel, value: "freelancersazu03@gmail.com", href: "mailto:freelancersazu03@gmail.com" },
                  { icon: <Phone className="w-5 h-5" />, label: t.contact.phoneLabel, value: "+880 177-2570807", href: "tel:+8801772570807" },
                  { icon: <MapPin className="w-5 h-5" />, label: t.contact.locLabel, value: lang === 'bn' ? "কুড়িগ্রাম, রংপুর, বাংলাদেশ" : "Kurigram, Rangpur, Bangladesh", href: "#" },`,
  `{ icon: <Mail className="w-5 h-5" />, label: t.contact.emailLabel, value: globalData.contact.email, href: \`mailto:\${globalData.contact.email}\` },
                  { icon: <Phone className="w-5 h-5" />, label: t.contact.phoneLabel, value: globalData.contact.phone, href: \`tel:\${globalData.contact.phone.replace(/[\\s-]/g, '')}\` },
                  { icon: <MapPin className="w-5 h-5" />, label: t.contact.locLabel, value: lang === 'bn' ? globalData.contact.locationBn : globalData.contact.locationEn, href: "#" },`
);

content = content.replace(
  `href="https://wa.me/8801772570807" target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">+880 177-2570807</a>`,
  `href={\`https://wa.me/\${globalData.contact.whatsappNumber}\`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">+{globalData.contact.whatsappNumber}</a>`
);

// 10. Social links replace
content = content.replace(
  `{ icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/sazu807", color: "hover:bg-blue-600 hover:border-blue-600" },
                      { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#", color: "hover:bg-pink-600 hover:border-pink-600" },
                      { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", color: "hover:bg-sky-700 hover:border-sky-700" },
                      { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#", color: "hover:bg-slate-700 hover:border-slate-700" },
                      { icon: <Send className="w-5 h-5" />, label: "Telegram", href: "#", color: "hover:bg-sky-500 hover:border-sky-500" },
                      { icon: <MessageCircle className="w-5 h-5" />, label: "Messenger", href: "https://m.me/sazu807", color: "hover:bg-indigo-600 hover:border-indigo-600" },`,
  `{ icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: globalData.social.facebook, color: "hover:bg-blue-600 hover:border-blue-600" },
                      { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: globalData.social.instagram, color: "hover:bg-pink-600 hover:border-pink-600" },
                      { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: globalData.social.linkedin, color: "hover:bg-sky-700 hover:border-sky-700" },
                      { icon: <Github className="w-5 h-5" />, label: "GitHub", href: globalData.social.github, color: "hover:bg-slate-700 hover:border-slate-700" },
                      { icon: <Send className="w-5 h-5" />, label: "Telegram", href: globalData.social.telegram, color: "hover:bg-sky-500 hover:border-sky-500" },
                      { icon: <MessageCircle className="w-5 h-5" />, label: "Messenger", href: globalData.social.messenger, color: "hover:bg-indigo-600 hover:border-indigo-600" },`
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx successfully updated with Firestore integrations while keeping all sections.');
