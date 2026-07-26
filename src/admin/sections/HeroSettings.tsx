import React, { useState } from 'react';
import { User } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['hero'];
  onSave: (data: GlobalSettings['hero']) => Promise<void>;
}

export default function HeroSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);

  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }));

  const handleSave = async () => {
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div>
      <SectionHeader title="হিরো সেকশন" subtitle="WhatsApp নম্বর ও Resume লিংক" icon={<User className="w-5 h-5" />} />
      <div className="space-y-5 max-w-2xl">
        <AdminCard>
          <div className="space-y-5">
            <AdminField
              label="WhatsApp নম্বর"
              sublabel="Country code সহ লিখুন (যেমন: 8801772570807)"
              value={form.whatsappNumber}
              onChange={set('whatsappNumber')}
              placeholder="8801772570807"
            />
            <AdminField
              label="Resume PDF লিংক"
              sublabel="Google Drive বা যেকোনো PDF এর সরাসরি লিংক দিন"
              value={form.resumeUrl}
              onChange={set('resumeUrl')}
              type="url"
              placeholder="https://drive.google.com/..."
            />
          </div>
        </AdminCard>
        <SaveButton onClick={handleSave} loading={saving} />
      </div>
    </div>
  );
}
