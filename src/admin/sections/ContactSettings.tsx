import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['contact'];
  onSave: (data: GlobalSettings['contact']) => Promise<void>;
}

export default function ContactSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }));

  return (
    <div>
      <SectionHeader title="যোগাযোগ তথ্য" subtitle="Email, Phone, Location, WhatsApp" icon={<Phone className="w-5 h-5" />} />
      <div className="space-y-5 max-w-2xl">
        <AdminCard>
          <div className="space-y-5">
            <AdminField label="ইমেইল অ্যাড্রেস" value={form.email} onChange={set('email')} type="email" placeholder="you@example.com" />
            <AdminField label="ফোন নম্বর (Display)" sublabel="যেভাবে দেখাবে: +880 177-2570807" value={form.phone} onChange={set('phone')} placeholder="+880 177-..." />
            <AdminField label="WhatsApp নম্বর" sublabel="Country code সহ (8801772570807)" value={form.whatsappNumber} onChange={set('whatsappNumber')} placeholder="8801772570807" />
          </div>
        </AdminCard>

        <AdminCard>
          <h3 className="text-sm font-bold text-purple-300 mb-4">📍 লোকেশন</h3>
          <div className="space-y-4">
            <AdminField label="লোকেশন (বাংলা)" value={form.locationBn} onChange={set('locationBn')} placeholder="কুড়িগ্রাম, রংপুর, বাংলাদেশ" />
            <AdminField label="Location (English)" value={form.locationEn} onChange={set('locationEn')} placeholder="Kurigram, Rangpur, Bangladesh" />
          </div>
        </AdminCard>

        <SaveButton onClick={async () => { setSaving(true); await onSave(form); setSaving(false); }} loading={saving} />
      </div>
    </div>
  );
}
