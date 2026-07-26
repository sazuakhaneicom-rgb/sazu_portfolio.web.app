import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['social'];
  onSave: (data: GlobalSettings['social']) => Promise<void>;
}

const socials: { key: keyof GlobalSettings['social']; label: string; icon: string; placeholder: string }[] = [
  { key: 'facebook', label: 'Facebook', icon: '📘', placeholder: 'https://facebook.com/...' },
  { key: 'instagram', label: 'Instagram', icon: '📸', placeholder: 'https://instagram.com/...' },
  { key: 'linkedin', label: 'LinkedIn', icon: '💼', placeholder: 'https://linkedin.com/in/...' },
  { key: 'github', label: 'GitHub', icon: '🐙', placeholder: 'https://github.com/...' },
  { key: 'telegram', label: 'Telegram', icon: '✈️', placeholder: 'https://t.me/...' },
  { key: 'messenger', label: 'Messenger', icon: '💬', placeholder: 'https://m.me/...' },
];

export default function SocialSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }));

  return (
    <div>
      <SectionHeader title="সোশ্যাল মিডিয়া লিংক" subtitle="সব সোশ্যাল প্রোফাইলের URL আপডেট করুন" icon={<Globe className="w-5 h-5" />} />
      <div className="space-y-5 max-w-2xl">
        <AdminCard>
          <div className="space-y-5">
            {socials.map(s => (
              <AdminField
                key={s.key}
                label={`${s.icon} ${s.label}`}
                value={form[s.key]}
                onChange={set(s.key)}
                type="url"
                placeholder={s.placeholder}
              />
            ))}
          </div>
        </AdminCard>
        <p className="text-xs text-purple-400/40">
          💡 যদি কোনো অ্যাকাউন্ট না থাকে, # দিয়ে রাখুন। লিংক দেখাবে কিন্তু কোথাও যাবে না।
        </p>
        <SaveButton onClick={async () => { setSaving(true); await onSave(form); setSaving(false); }} loading={saving} />
      </div>
    </div>
  );
}
