import React, { useState, useEffect } from 'react';
import { MessageSquare, Plus, Trash2, Edit2, X, Check } from 'lucide-react';
import { SectionHeader, SaveButton, AdminField } from '../components';
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial, FSTestimonial } from '../firestore';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<FSTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<FSTestimonial>>({});
  const [saving, setSaving] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    const data = await getTestimonials();
    setTestimonials(data.sort((a, b) => (a.order || 0) - (b.order || 0)));
    setLoading(false);
  };

  const set = (key: keyof FSTestimonial) => (v: string | number) => setForm(f => ({ ...f, [key]: v }));

  const handleSave = async () => {
    if (!form.quote || !form.name || !form.role) return;
    setSaving(true);
    if (isAdding) {
      await addTestimonial({
        quote: form.quote,
        name: form.name,
        role: form.role,
        rating: form.rating ? Number(form.rating) : 5,
        country: form.country || '',
        flag: form.flag || '',
        lang: (form.lang as 'bn' | 'en') || 'bn',
        order: testimonials.length,
      });
    } else if (editingId) {
      await updateTestimonial(editingId, { ...form, rating: Number(form.rating) });
    }
    await load();
    setSaving(false);
    setIsAdding(false);
    setEditingId(null);
    setForm({});
  };

  const handleDelete = async (id: string) => {
    if (confirm('সত্যিই ডিলিট করতে চান?')) {
      setSaving(true);
      await deleteTestimonial(id);
      await load();
      setSaving(false);
    }
  };

  const startEdit = (t: FSTestimonial) => {
    setForm({ ...t });
    setEditingId(t.id!);
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <SectionHeader title="রিভিউ / Testimonials" subtitle="ক্লায়েন্টদের রিভিউ ম্যানেজ করুন" icon={<MessageSquare className="w-5 h-5" />} />
        {!isAdding && !editingId && (
          <button
            onClick={() => { setIsAdding(true); setForm({ rating: 5, lang: 'bn' }); }}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-all"
          >
            <Plus className="w-4 h-4" /> নতুন রিভিউ
          </button>
        )}
      </div>

      {(isAdding || editingId) ? (
        <div className="bg-white/5 border border-purple-800/20 rounded-2xl p-6 max-w-2xl space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">{isAdding ? 'নতুন রিভিউ যোগ করুন' : 'রিভিউ এডিট করুন'}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="ক্লায়েন্টের নাম *" value={form.name || ''} onChange={set('name')} />
            <AdminField label="পদবী / Role *" value={form.role || ''} onChange={set('role')} placeholder="Founder, Company" />
            <AdminField label="দেশের নাম" value={form.country || ''} onChange={set('country')} placeholder="বাংলাদেশ" />
            <AdminField label="দেশের ফ্লাগ (Emoji)" value={form.flag || ''} onChange={set('flag')} placeholder="🇧🇩" />
            <AdminField label="রেটিং (1-5)" value={form.rating?.toString() || '5'} onChange={(v) => set('rating')(Number(v))} type="number" />
            <div>
              <label className="block text-xs font-bold text-purple-300/70 mb-1 uppercase tracking-wider">ভাষা</label>
              <select
                value={form.lang || 'bn'}
                onChange={e => set('lang')(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-800/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40 text-sm"
              >
                <option value="bn" className="bg-[#0f0a22]">বাংলা</option>
                <option value="en" className="bg-[#0f0a22]">English</option>
              </select>
            </div>
          </div>
          <AdminField label="রিভিউ টেক্সট *" value={form.quote || ''} onChange={set('quote')} rows={3} />
          
          <div className="flex gap-3 pt-4">
            <SaveButton onClick={handleSave} loading={saving} />
            <button
              onClick={() => { setIsAdding(false); setEditingId(null); setForm({}); }}
              disabled={saving}
              className="px-6 py-3 border border-purple-800/40 hover:bg-white/5 text-purple-300 rounded-xl text-sm font-semibold transition-all"
            >
              বাতিল
            </button>
          </div>
        </div>
      ) : loading ? (
        <p className="text-purple-400/60">লোড হচ্ছে...</p>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-2xl border border-purple-800/20">
          <p className="text-purple-300">কোনো রিভিউ নেই। নতুন রিভিউ যোগ করুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map(t => (
            <div key={t.id} className="p-5 bg-white/5 border border-purple-800/20 rounded-2xl relative group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-1 text-amber-400 text-xs">{'★'.repeat(t.rating)}</div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => startEdit(t)} className="p-1.5 text-blue-400 hover:bg-blue-400/10 rounded-lg"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(t.id!)} className="p-1.5 text-red-400 hover:bg-red-400/10 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-sm text-purple-100 mb-4 line-clamp-3">"{t.quote}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-purple-400/60">{t.role}</p>
                </div>
                <span className="text-[10px] px-2 py-1 bg-purple-900/30 text-purple-300 rounded uppercase">{t.lang}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
