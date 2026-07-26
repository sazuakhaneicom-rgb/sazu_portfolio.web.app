import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['about'];
  onSave: (data: GlobalSettings['about']) => Promise<void>;
}

export default function AboutSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);
  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }));

  return (
    <div>
      <SectionHeader
        title="পরিচিতি / About"
        subtitle="About সেকশনের Bio আপডেট করুন"
        icon={<FileText className="w-5 h-5" />}
      />
      <div className="space-y-5 max-w-3xl">
        <AdminCard>
          <h3 className="text-sm font-bold text-purple-300 mb-4">প্যারাগ্রাফ ১</h3>
          <div className="space-y-4">
            <AdminField
              label="বাংলা (Paragraph 1)"
              sublabel="HTML ব্যবহার করা যাবে। যেমন: <strong>নাম</strong>"
              value={form.bioParagraph1Bn}
              onChange={set('bioParagraph1Bn')}
              rows={4}
            />
            <AdminField
              label="English (Paragraph 1)"
              sublabel="HTML allowed: e.g. <strong>Name</strong>"
              value={form.bioParagraph1En}
              onChange={set('bioParagraph1En')}
              rows={4}
            />
          </div>
        </AdminCard>

        <AdminCard>
          <h3 className="text-sm font-bold text-purple-300 mb-4">প্যারাগ্রাফ ২</h3>
          <div className="space-y-4">
            <AdminField
              label="বাংলা (Paragraph 2)"
              value={form.bioParagraph2Bn}
              onChange={set('bioParagraph2Bn')}
              rows={4}
            />
            <AdminField
              label="English (Paragraph 2)"
              value={form.bioParagraph2En}
              onChange={set('bioParagraph2En')}
              rows={4}
            />
          </div>
        </AdminCard>

        <p className="text-xs text-purple-400/40">
          💡 পরিবর্তন সেভ করার পর "Force Refresh" বাটনে চাপ দিলে সব ভিজিটর নতুন Bio দেখতে পাবে।
        </p>
        <SaveButton onClick={async () => { setSaving(true); await onSave(form); setSaving(false); }} loading={saving} />
      </div>
    </div>
  );
}
