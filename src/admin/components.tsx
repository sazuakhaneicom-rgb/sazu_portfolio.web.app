// Shared admin form field components

import React, { useState } from 'react';
import { Save, AlertTriangle, CheckCircle2 } from 'lucide-react';

/**
 * Firebase/Firestore এরর কোডকে বাংলায় বোধগম্য মেসেজে বদলে দেয়।
 * আগে সেভ ফেল করলে কিছুই দেখাতো না (শুধু console.error), তাই
 * ব্যবহারকারী বুঝতেই পারত না কেন পরিবর্তন সেভ হচ্ছে না।
 */
export function adminErrorMessage(e: unknown): string {
  const err = e as { code?: string; message?: string };
  const code = err?.code ?? '';

  switch (code) {
    case 'permission-denied':
      return 'অনুমতি নেই (permission-denied)। Firestore রুলসে এই কোলেকশনের লেখার অনুমতি নেই, অথবা আপনি অ্যাডমিন ইমেইল দিয়ে লগইন করেননি। ঠিক করতে: firebase deploy --only firestore:rules';
    case 'unauthenticated':
      return 'আপনার লগইন সেশন শেষ হয়ে গেছে। আবার লগইন করুন।';
    case 'not-found':
      return 'ডকুমেন্টটি খুঁজে পাওয়া যায়নি। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।';
    case 'unavailable':
    case 'deadline-exceeded':
      return 'Firestore-এ পৌঁছানো যাচ্ছে না। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।';
    case 'resource-exhausted':
      return 'Firestore-এর দৈনিক কোটা শেষ। কিছুক্ষণ পরে আবার চেষ্টা করুন।';
    case 'invalid-argument':
      return 'ডেটার ফরম্যাট ঠিক নেই (invalid-argument)। কোনো ঘর খালি আছে কি না দেখুন।';
    default:
      return `সেভ করা যায়নি। ${code || err?.message || 'অজানা ত্রুটি'}`;
  }
}

interface FieldProps {
  label: string;
  sublabel?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  rows?: number;
}

export function AdminField({ label, sublabel, value, onChange, type = 'text', placeholder, rows }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-purple-300/70 mb-1 uppercase tracking-wider">{label}</label>
      {sublabel && <p className="text-[11px] text-purple-400/40 mb-2">{sublabel}</p>}
      {rows ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 text-sm resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 text-sm"
        />
      )}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-3 mb-8">
      <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-purple-400/50 text-sm mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

/** সেভ ফেল করলে লাল বক্সে আসল কারণ দেখায়। */
export function AdminError({ message, onDismiss }: { message: string; onDismiss?: () => void }) {
  if (!message) return null;
  return (
    <div className="flex items-start gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm">
      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <div className="flex-1 leading-relaxed">{message}</div>
      {onDismiss && (
        <button onClick={onDismiss} className="text-red-400/60 hover:text-red-300 text-xs font-bold flex-shrink-0">
          ✕
        </button>
      )}
    </div>
  );
}

interface SaveButtonProps {
  /** ফেল করলে throw করতে দিন — SaveButton নিজেই এরর ধরে দেখাবে। */
  onClick: () => void | Promise<void>;
  /** বাইরের লোডিং স্টেট (optional)। */
  loading?: boolean;
  label?: string;
}

/**
 * নিজেই try/catch করে, তাই কোনো সেকশনে সেভ ফেল করলে আর
 * স্পিনার চিরকাল ঘুরবে না — আসল এরর মেসেজ দেখাবে।
 */
export function SaveButton({ onClick, loading, label = 'সেভ করুন' }: SaveButtonProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const isBusy = busy || !!loading;

  const handleClick = async () => {
    setError('');
    setDone(false);
    setBusy(true);
    try {
      await onClick();
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (e) {
      console.error('Save failed:', e);
      setError(adminErrorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-3">
      <AdminError message={error} onDismiss={() => setError('')} />
      <div className="flex items-center gap-3">
        <button
          onClick={handleClick}
          disabled={isBusy}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-xl shadow-md shadow-purple-600/20 transition-all text-sm"
        >
          {isBusy ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {label}
        </button>
        {done && (
          <span className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            সেভ হয়েছে
          </span>
        )}
      </div>
    </div>
  );
}

export function AdminCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-purple-800/20 rounded-2xl p-6">
      {children}
    </div>
  );
}
