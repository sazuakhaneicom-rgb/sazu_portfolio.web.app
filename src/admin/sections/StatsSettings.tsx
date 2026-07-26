import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['stats'];
  onSave: (data: GlobalSettings['stats']) => Promise<void>;
}

export default function StatsSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }));

  return (
    <div>
      <SectionHeader
        title="স্ট্যাটিস্টিক্স / পরিসংখ্যান"
        subtitle="Hero সেকশনে যে সংখ্যাগুলো দেখায় সেগুলো আপডেট করুন"
        icon={<BarChart2 className="w-5 h-5" />}
      />
      <div className="space-y-5 max-w-2xl">
        {[
          { bn: 'yearsBn', en: 'yearsEn', label: '📅 বছরের অভিজ্ঞতা', eg: '৫+ / 5+' },
          { bn: 'projectsBn', en: 'projectsEn', label: '🏗️ সম্পন্ন প্রজেক্ট', eg: '৮০+ / 80+' },
          { bn: 'clientsBn', en: 'clientsEn', label: '😊 সন্তুষ্ট ক্লায়েন্ট', eg: '২০০+ / 200+' },
          { bn: 'sectorsBn', en: 'sectorsEn', label: '🏢 ইন্ডাস্ট্রি সেক্টর', eg: '১২+ / 12+' },
        ].map(stat => (
          <AdminCard key={stat.bn}>
            <h3 className="text-sm font-bold text-purple-300 mb-4">{stat.label} <span className="text-purple-500/40 font-normal">(যেমন: {stat.eg})</span></h3>
            <div className="grid grid-cols-2 gap-4">
              <AdminField
                label="বাংলা মান"
                value={form[stat.bn as keyof typeof form]}
                onChange={set(stat.bn as keyof typeof form)}
                placeholder={stat.eg.split(' / ')[0]}
              />
              <AdminField
                label="English Value"
                value={form[stat.en as keyof typeof form]}
                onChange={set(stat.en as keyof typeof form)}
                placeholder={stat.eg.split(' / ')[1]}
              />
            </div>
          </AdminCard>
        ))}
        <SaveButton onClick={async () => { setSaving(true); await onSave(form); setSaving(false); }} loading={saving} />
      </div>
    </div>
  );
}
