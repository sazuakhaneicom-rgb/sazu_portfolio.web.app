import { db } from '../firebase';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';

// ============================================================
// DEFAULT SETTINGS STRUCTURE
// ============================================================
export interface GlobalSettings {
  hero: {
    whatsappNumber: string;
    resumeUrl: string;
  };
  contact: {
    email: string;
    phone: string;
    locationBn: string;
    locationEn: string;
    whatsappNumber: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    github: string;
    telegram: string;
    messenger: string;
  };
  stats: {
    yearsBn: string;
    yearsEn: string;
    projectsBn: string;
    projectsEn: string;
    clientsBn: string;
    clientsEn: string;
    sectorsBn: string;
    sectorsEn: string;
  };
  about: {
    bioParagraph1Bn: string;
    bioParagraph1En: string;
    bioParagraph2Bn: string;
    bioParagraph2En: string;
  };
  cache: {
    version: number;
    lastRefreshed?: string;
  };
}

export const DEFAULT_SETTINGS: GlobalSettings = {
  hero: {
    whatsappNumber: '8801772570807',
    resumeUrl: '#',
  },
  contact: {
    email: 'freelancersazu03@gmail.com',
    phone: '+880 177-2570807',
    locationBn: 'কুড়িগ্রাম, রংপুর, বাংলাদেশ',
    locationEn: 'Kurigram, Rangpur, Bangladesh',
    whatsappNumber: '8801772570807',
  },
  social: {
    facebook: 'https://www.facebook.com/sazu807',
    instagram: '#',
    linkedin: '#',
    github: '#',
    telegram: '#',
    messenger: 'https://m.me/sazu807',
  },
  stats: {
    yearsBn: '৫+', yearsEn: '5+',
    projectsBn: '৮০+', projectsEn: '80+',
    clientsBn: '২০০+', clientsEn: '200+',
    sectorsBn: '১২+', sectorsEn: '12+',
  },
  about: {
    bioParagraph1Bn: 'আমি <strong>M. Asaduzzaman Sazu</strong>। বিগত ৫ বছর ধরে ডিজিটাল মার্কেটিং, গ্রাফিক ডিজাইন এবং অ্যাপস ডেভেলপমেন্টের মাধ্যমে বিভিন্ন ব্যবসাকে সফল ব্র্যান্ডে পরিণত করতে সাহায্য করছি।',
    bioParagraph1En: 'I am <strong>M. Asaduzzaman Sazu</strong>, a professional digital marketing strategist, graphic designer, and app developer with over 5+ years of hands-on experience.',
    bioParagraph2Bn: 'আমি বিশ্বাস করি, একটি সুন্দর ডিজাইন মানুষের নজর কাড়ে, কিন্তু সঠিক মার্কেটিং কৌশল তাদের মন জয় করে।',
    bioParagraph2En: 'I work not just as a service provider, but as your dedicated growth partner—ensuring transparent communication, flawless execution, and absolute integrity.',
  },
  cache: {
    version: Date.now(),
  },
};

// ============================================================
// FIRESTORE HELPERS
// ============================================================

const SETTINGS_DOC = 'settings/global';
const CACHE_DOC = 'settings/cache';

// Load global settings from Firestore (with defaults fallback)
export async function loadSettings(): Promise<GlobalSettings> {
  try {
    const snap = await getDoc(doc(db, 'settings', 'global'));
    if (snap.exists()) {
      return { ...DEFAULT_SETTINGS, ...(snap.data() as GlobalSettings) };
    }
    // First time: initialize with defaults
    await setDoc(doc(db, 'settings', 'global'), DEFAULT_SETTINGS);
    return DEFAULT_SETTINGS;
  } catch (e) {
    console.warn('Firestore unavailable, using defaults:', e);
    return DEFAULT_SETTINGS;
  }
}

// Save global settings
export async function saveSettings(settings: Partial<GlobalSettings>): Promise<void> {
  await updateDoc(doc(db, 'settings', 'global'), settings as Record<string, unknown>);
}

// Subscribe to cache version changes (for auto-reload)
export function subscribeToCacheVersion(callback: (version: number) => void): () => void {
  return onSnapshot(doc(db, 'settings', 'cache'), (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      callback(data.version as number);
    }
  });
}

// Force refresh all visitors
export async function forceRefreshAllVisitors(): Promise<void> {
  const newVersion = Date.now();
  await setDoc(doc(db, 'settings', 'cache'), {
    version: newVersion,
    lastRefreshed: new Date().toISOString(),
  });
}

// Initialize cache doc if missing
export async function initCacheDoc(): Promise<number> {
  try {
    const snap = await getDoc(doc(db, 'settings', 'cache'));
    if (snap.exists()) return snap.data().version as number;
    const version = Date.now();
    await setDoc(doc(db, 'settings', 'cache'), { version, lastRefreshed: new Date().toISOString() });
    return version;
  } catch {
    return 0;
  }
}

// ============================================================
// TESTIMONIALS CRUD
// ============================================================
export interface FSTestimonial {
  id?: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  country: string;
  flag: string;
  lang: 'bn' | 'en';
  order: number;
}

export async function getTestimonials(): Promise<FSTestimonial[]> {
  const snap = await getDocs(collection(db, 'testimonials'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as FSTestimonial));
}

export async function addTestimonial(t: Omit<FSTestimonial, 'id'>): Promise<void> {
  await addDoc(collection(db, 'testimonials'), t);
}

export async function updateTestimonial(id: string, t: Partial<FSTestimonial>): Promise<void> {
  await updateDoc(doc(db, 'testimonials', id), t as Record<string, unknown>);
}

export async function deleteTestimonial(id: string): Promise<void> {
  await deleteDoc(doc(db, 'testimonials', id));
}

// ============================================================
// PRICING CRUD
// ============================================================
export async function savePricingPlan(planId: string, data: unknown): Promise<void> {
  await setDoc(doc(db, 'pricing', planId), data as Record<string, unknown>);
}

export async function getPricingPlans(): Promise<Record<string, unknown>[]> {
  const snap = await getDocs(collection(db, 'pricing'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
