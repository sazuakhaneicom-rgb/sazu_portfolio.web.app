import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';
import AdminLogin from './AdminLogin';
import {
  GlobalSettings,
  DEFAULT_SETTINGS,
  loadSettings,
  saveSettings,
  forceRefreshAllVisitors,
} from './firestore';
import {
  Settings,
  LogOut,
  RefreshCw,
  User as UserIcon,
  Phone,
  Globe,
  BarChart2,
  FileText,
  MessageSquare,
  DollarSign,
  Sparkles,
  Save,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Wifi,
} from 'lucide-react';
import ContactSettings from './sections/ContactSettings';
import SocialSettings from './sections/SocialSettings';
import StatsSettings from './sections/StatsSettings';
import HeroSettings from './sections/HeroSettings';
import AboutSettings from './sections/AboutSettings';
import TestimonialsManager from './sections/TestimonialsManager';
import PricingManager from './sections/PricingManager';
import sazuLogo from '../assets/sazu_logo.png';

type Section = 'dashboard' | 'hero' | 'contact' | 'social' | 'stats' | 'about' | 'testimonials' | 'pricing';

export default function AdminApp() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [settings, setSettings] = useState<GlobalSettings>(DEFAULT_SETTINGS);
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [refreshing, setRefreshing] = useState(false);
  const [refreshSuccess, setRefreshSuccess] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState('');

  // Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Load settings when logged in
  useEffect(() => {
    if (user) {
      setSettingsLoading(true);
      loadSettings().then((s) => {
        setSettings(s);
        setSettingsLoading(false);
      });
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSave = async (section: keyof GlobalSettings, data: unknown) => {
    try {
      await saveSettings({ [section]: data } as Partial<GlobalSettings>);
      setSettings(prev => ({ ...prev, [section]: data }));
      setSaveSuccess(section);
      setTimeout(() => setSaveSuccess(''), 3000);
    } catch (e) {
      console.error('Save failed:', e);
    }
  };

  const handleForceRefresh = async () => {
    setRefreshing(true);
    try {
      await forceRefreshAllVisitors();
      setRefreshSuccess(true);
      setTimeout(() => setRefreshSuccess(false), 4000);
    } catch (e) {
      console.error('Refresh failed:', e);
    } finally {
      setRefreshing(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#090514] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-3 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-purple-400/60 text-sm">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin onLogin={() => {}} />;
  }

  const navItems: { id: Section; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: <Sparkles className="w-4 h-4" />, desc: 'Overview' },
    { id: 'hero', label: 'হিরো সেকশন', icon: <UserIcon className="w-4 h-4" />, desc: 'WhatsApp, Resume' },
    { id: 'contact', label: 'যোগাযোগ তথ্য', icon: <Phone className="w-4 h-4" />, desc: 'Email, Phone, Location' },
    { id: 'social', label: 'সোশ্যাল লিংক', icon: <Globe className="w-4 h-4" />, desc: 'FB, IG, LI, GH...' },
    { id: 'stats', label: 'স্ট্যাটিস্টিক্স', icon: <BarChart2 className="w-4 h-4" />, desc: 'Counters & Numbers' },
    { id: 'about', label: 'পরিচিতি / Bio', icon: <FileText className="w-4 h-4" />, desc: 'About paragraphs' },
    { id: 'testimonials', label: 'রিভিউ / Testimonials', icon: <MessageSquare className="w-4 h-4" />, desc: 'Client reviews' },
    { id: 'pricing', label: 'মূল্য / Pricing', icon: <DollarSign className="w-4 h-4" />, desc: 'Package prices' },
  ];

  return (
    <div className="min-h-screen bg-[#09060f] text-white flex">
      {/* ====== SIDEBAR ====== */}
      <aside className="w-64 bg-[#0d0920] border-r border-purple-900/30 flex flex-col fixed h-full z-20 hidden md:flex">
        {/* Logo */}
        <div className="p-6 border-b border-purple-900/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0">
              <img src={sazuLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-bold text-sm text-white">Admin Panel</p>
              <p className="text-xs text-purple-400/50">Sazu Portfolio</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group ${
                activeSection === item.id
                  ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300'
                  : 'hover:bg-purple-900/20 text-purple-400/70 hover:text-purple-200'
              }`}
            >
              <span className={activeSection === item.id ? 'text-purple-400' : 'text-purple-600/60 group-hover:text-purple-400'}>
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold">{item.label}</p>
                <p className="text-[10px] text-purple-500/50 truncate">{item.desc}</p>
              </div>
              {activeSection === item.id && <ChevronRight className="w-3 h-3 text-purple-400" />}
            </button>
          ))}
        </nav>

        {/* Force Refresh */}
        <div className="p-4 border-t border-purple-900/30 space-y-3">
          <button
            onClick={handleForceRefresh}
            disabled={refreshing}
            className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              refreshSuccess
                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                : 'bg-orange-500/15 border border-orange-500/30 text-orange-400 hover:bg-orange-500/25'
            }`}
          >
            {refreshing ? (
              <div className="w-4 h-4 border-2 border-orange-400/30 border-t-orange-400 rounded-full animate-spin" />
            ) : refreshSuccess ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
            {refreshSuccess ? '✓ সব রিফ্রেশ হয়েছে!' : '🔄 Force Refresh All'}
          </button>
          {refreshSuccess && (
            <p className="text-[10px] text-emerald-400/60 text-center">সব ভিজিটরের পেজ আপডেট হয়েছে</p>
          )}

          {/* User info & logout */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center">
                <UserIcon className="w-3 h-3 text-purple-300" />
              </div>
              <p className="text-[10px] text-purple-400/50 truncate max-w-[100px]">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400/50 hover:text-red-400 transition-all"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* ====== MAIN CONTENT ====== */}
      <main className="flex-1 md:ml-64 min-h-screen overflow-y-auto">
        {/* Top bar (mobile) */}
        <div className="md:hidden sticky top-0 z-10 bg-[#0d0920]/90 backdrop-blur-md border-b border-purple-900/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden bg-white">
              <img src={sazuLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-sm">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleForceRefresh} disabled={refreshing} className="p-2 rounded-lg bg-orange-500/15 text-orange-400">
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={handleLogout} className="p-2 rounded-lg bg-red-500/10 text-red-400">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex overflow-x-auto gap-2 px-4 py-3 border-b border-purple-900/30 bg-[#0d0920]">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/20 text-purple-400/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Save success toast */}
        <AnimatePresence>
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600/90 backdrop-blur text-white rounded-xl shadow-xl text-sm font-semibold"
            >
              <CheckCircle2 className="w-4 h-4" />
              সফলভাবে সেভ হয়েছে!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 md:p-8">
          {settingsLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                <p className="text-purple-400/60 text-sm">সেটিংস লোড হচ্ছে...</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {/* DASHBOARD */}
              {activeSection === 'dashboard' && (
                <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white">স্বাগতম! 👋</h2>
                    <p className="text-purple-400/60 mt-1 text-sm">আপনার পোর্টফোলিও অ্যাডমিন প্যানেলে এসেছেন।</p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'অভিজ্ঞতা', value: settings.stats.yearsEn, color: 'from-purple-500 to-indigo-600' },
                      { label: 'প্রজেক্ট', value: settings.stats.projectsEn, color: 'from-pink-500 to-rose-600' },
                      { label: 'ক্লায়েন্ট', value: settings.stats.clientsEn, color: 'from-emerald-500 to-teal-600' },
                      { label: 'সেক্টর', value: settings.stats.sectorsEn, color: 'from-amber-500 to-orange-600' },
                    ].map((s, i) => (
                      <div key={i} className={`bg-gradient-to-br ${s.color} p-5 rounded-2xl shadow-lg`}>
                        <p className="text-3xl font-black text-white">{s.value}</p>
                        <p className="text-white/70 text-xs font-semibold mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quick links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {navItems.filter(n => n.id !== 'dashboard').map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className="p-5 bg-white/5 border border-purple-800/20 rounded-2xl text-left hover:bg-white/8 hover:border-purple-600/40 transition-all group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 group-hover:bg-purple-600/30 transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-semibold text-sm text-white">{item.label}</span>
                        </div>
                        <p className="text-xs text-purple-400/50">{item.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Force Refresh card */}
                  <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-white flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-orange-400" />
                          Force Refresh All Visitors
                        </h3>
                        <p className="text-sm text-orange-300/60 mt-1">
                          পোর্টফোলিও আপডেট করার পর এই বাটনে চাপ দিলে সব ভিজিটরের পেজ রিলোড হবে — মোবাইলেও।
                        </p>
                      </div>
                      <button
                        onClick={handleForceRefresh}
                        disabled={refreshing}
                        className="flex-shrink-0 px-5 py-2.5 bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all"
                      >
                        <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                        {refreshSuccess ? '✓ Done!' : 'Refresh Now'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* HERO */}
              {activeSection === 'hero' && (
                <motion.div key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <HeroSettings
                    data={settings.hero}
                    onSave={(data) => handleSave('hero', data)}
                  />
                </motion.div>
              )}

              {/* CONTACT */}
              {activeSection === 'contact' && (
                <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <ContactSettings
                    data={settings.contact}
                    onSave={(data) => handleSave('contact', data)}
                  />
                </motion.div>
              )}

              {/* SOCIAL */}
              {activeSection === 'social' && (
                <motion.div key="social" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <SocialSettings
                    data={settings.social}
                    onSave={(data) => handleSave('social', data)}
                  />
                </motion.div>
              )}

              {/* STATS */}
              {activeSection === 'stats' && (
                <motion.div key="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <StatsSettings
                    data={settings.stats}
                    onSave={(data) => handleSave('stats', data)}
                  />
                </motion.div>
              )}

              {/* ABOUT */}
              {activeSection === 'about' && (
                <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <AboutSettings
                    data={settings.about}
                    onSave={(data) => handleSave('about', data)}
                  />
                </motion.div>
              )}

              {/* TESTIMONIALS */}
              {activeSection === 'testimonials' && (
                <motion.div key="testimonials" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <TestimonialsManager />
                </motion.div>
              )}

              {/* PRICING */}
              {activeSection === 'pricing' && (
                <motion.div key="pricing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <PricingManager />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </main>
    </div>
  );
}
