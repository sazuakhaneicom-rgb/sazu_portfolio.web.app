import React, { useState, useEffect } from 'react';
import { Layers, Plus, Trash2, Check, X } from 'lucide-react';
import { SectionHeader, AdminCard, SaveButton } from '../components';
import { getJourney, addJourneyItem, updateJourneyItem, deleteJourneyItem, FSJourneyItem } from '../firestore';
import { journeyData } from '../../data';

const EMPTY: Omit<FSJourneyItem, 'id'> = {
  year: '2024', titleBn: '', titleEn: '', descBn: '', descEn: '',
  icon: '🚀', color: 'from-purple-500 to-indigo-600', order: 0,
};

const COLORS = [
  'from-purple-500 to-indigo-600', 'from-blue-500 to-cyan-600',
  'from-emerald-500 to-teal-600', 'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600', 'from-violet-500 to-purple-600',
];

export default function JourneyManager() {
  const [items, setItems] = useState<FSJourneyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ ...EMPTY });
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<FSJourneyItem>>({});
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const data = await getJourney();
    setItems(data);
    setLoading(false);
  };

  const handleAdd = async () => {
    if (!addForm.titleBn) return;
    setSaving(true);
    await addJourneyItem({ ...addForm, order: items.length });
    await load();
    setAddForm({ ...EMPTY });
    setShowAdd(false);
    setSaving(false);
    showToast('✅ যোগ হয়েছে!');
  };

  const handleUpdate = async (id: string) => {
    setSaving(true);
    await updateJourneyItem(id, editForm);
    await load();
    setEditId(null); setEditForm({});
    setSaving(false);
    showToast('✅ আপডেট হয়েছে!');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('এই আইটেমটি মুছে ফেলবেন?')) return;
    await deleteJourneyItem(id);
    await load();
    showToast('🗑️ মুছে ফেলা হয়েছে!');
  };

  const set = (key: keyof typeof addForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setAddForm(f => ({ ...f, [key]: e.target.value }));

  const setEdit = (key: keyof FSJourneyItem) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setEditForm(f => ({ ...f, [key]: e.target.value }));

  const usingDefault = items.length === 0;

  return (
    <div>
      <SectionHeader
        title="জার্নি / টাইমলাইন"
        subtitle="আপনার ক্যারিয়ারের ধাপগুলো পরিচালনা করুন"
        icon={<Layers className="w-5 h-5" />}
      />

      {toast && <div className="mb-4 px-4 py-3 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-sm font-semibold">{toast}</div>}

      {usingDefault && !loading && (
        <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400/80 text-xs">
          ⚠️ এখন ডিফল্ট ডেটা দেখানো হচ্ছে। নতুন আইটেম যোগ করলে ফায়ারস্টোর থেকে দেখানো হবে।
        </div>
      )}

      <div className="mb-6">
        <button onClick={() => setShowAdd(v => !v)} className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm">
          <Plus className="w-4 h-4" /> নতুন ধাপ যোগ করুন
        </button>
      </div>

      {showAdd && (
        <AdminCard>
          <p className="text-purple-300 font-bold mb-4 text-sm">নতুন জার্নি আইটেম</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="বছর" value={addForm.year} onChange={set('year')} placeholder="2024" />
            <Field label="আইকন (ইমোজি)" value={addForm.icon} onChange={set('icon')} placeholder="🚀" />
            <Field label="শিরোনাম (বাংলা)" value={addForm.titleBn} onChange={set('titleBn')} placeholder="ওয়েব ডেভেলপমেন্ট শুরু" />
            <Field label="Title (English)" value={addForm.titleEn} onChange={set('titleEn')} placeholder="Started Web Development" />
            <TextArea label="বিবরণ (বাংলা)" value={addForm.descBn} onChange={set('descBn')} />
            <TextArea label="Description (English)" value={addForm.descEn} onChange={set('descEn')} />
            <div>
              <label className="block text-[11px] text-purple-300/60 uppercase mb-1">রঙ</label>
              <select value={addForm.color} onChange={set('color')} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none">
                {COLORS.map(c => <option key={c} value={c} className="bg-[#1a1338]">{c}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleAdd} disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm">
              <Check className="w-4 h-4" /> সেভ
            </button>
            <button onClick={() => setShowAdd(false)} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-purple-300 rounded-xl text-sm">বাতিল</button>
          </div>
        </AdminCard>
      )}

      <div className="space-y-3 mt-4">
        {/* Show Firestore items */}
        {items.map(item => (
          <AdminCard key={item.id}>
            {editId === item.id ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="বছর" value={(editForm.year ?? item.year) as string} onChange={setEdit('year')} />
                  <Field label="আইকন" value={(editForm.icon ?? item.icon) as string} onChange={setEdit('icon')} />
                  <Field label="শিরোনাম (বাংলা)" value={(editForm.titleBn ?? item.titleBn) as string} onChange={setEdit('titleBn')} />
                  <Field label="Title (English)" value={(editForm.titleEn ?? item.titleEn) as string} onChange={setEdit('titleEn')} />
                  <TextArea label="বিবরণ (বাংলা)" value={(editForm.descBn ?? item.descBn) as string} onChange={setEdit('descBn')} />
                  <TextArea label="Description (English)" value={(editForm.descEn ?? item.descEn) as string} onChange={setEdit('descEn')} />
                </div>
                <div className="flex gap-3 mt-3">
                  <button onClick={() => handleUpdate(item.id!)} disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm"><Check className="w-4 h-4" /> সেভ</button>
                  <button onClick={() => { setEditId(null); setEditForm({}); }} className="p-2 bg-white/5 hover:bg-white/10 text-purple-300 rounded-xl"><X className="w-4 h-4" /></button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-lg flex-shrink-0`}>{item.icon}</div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-purple-400 font-mono">{item.year}</p>
                  <p className="text-white text-sm font-semibold">{item.titleBn}</p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => { setEditId(item.id!); setEditForm({}); }} className="p-1.5 rounded-lg hover:bg-purple-900/30 text-purple-300 text-xs">✏️</button>
                  <button onClick={() => handleDelete(item.id!)} className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400/60 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            )}
          </AdminCard>
        ))}

        {/* Show default items preview */}
        {usingDefault && !loading && journeyData.map((item, i) => (
          <div key={i} className="bg-white/3 border border-purple-900/20 rounded-xl p-4 opacity-50">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-lg`}>{item.icon}</div>
              <div>
                <p className="text-xs font-bold text-purple-400">{item.year}</p>
                <p className="text-white text-sm font-semibold">{item.titleBn}</p>
                <p className="text-purple-400/40 text-[10px]">ডিফল্ট ডেটা (data.ts থেকে)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[11px] text-purple-300/60 uppercase mb-1">{label}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40" />
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div>
      <label className="block text-[11px] text-purple-300/60 uppercase mb-1">{label}</label>
      <textarea value={value} onChange={onChange} rows={3} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none" />
    </div>
  );
}
