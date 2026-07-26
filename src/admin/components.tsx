// Shared admin form field components

import React from 'react';
import { Save } from 'lucide-react';

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

interface SaveButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export function SaveButton({ onClick, loading }: SaveButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-xl shadow-md shadow-purple-600/20 transition-all text-sm"
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <Save className="w-4 h-4" />
      )}
      সেভ করুন
    </button>
  );
}

export function AdminCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-purple-800/20 rounded-2xl p-6">
      {children}
    </div>
  );
}
