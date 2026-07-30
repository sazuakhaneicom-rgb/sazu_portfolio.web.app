import React, { useState, useEffect } from 'react';
import { Settings, Plus, Trash2, Check, X, MoveUp, MoveDown } from 'lucide-react';
import { SectionHeader, AdminCard, SaveButton } from '../components';
import { getServices, saveService, FSService, FSServiceItem } from '../firestore';
import { servicesBn, servicesEn } from '../../data';

export default function ServicesManager() {
  const [services, setServices] = useState<FSService[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [toast, setToast] = useState('');
  const [editForms, setEditForms] = useState<Record<string, FSService>>({});

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const data = await getServices();
    if (data.length > 0) {
      setServices(data);
      const forms: Record<string, FSService> = {};
      data.forEach(c => { if (c.id) forms[c.id] = { ...c }; });
      setEditForms(forms);
    } else {
      // Create defaults
      const defaults = servicesBn.map((bn, i) => ({
        id: `service_${i}`,
        titleBn: bn.title,
        titleEn: servicesEn[i].title,
        icon: bn.icon,
        order: i,
        items: bn.items.map((item, j) => ({
          title: item.title,
          titleEn: servicesEn[i].items[j].title,
          desc: item.desc,
          descEn: servicesEn[i].items[j].desc,
          icon: item.icon,
        }))
      } as FSService));
      setServices(defaults);
      const forms: Record<string, FSService> = {};
      defaults.forEach(c => { if (c.id) forms[c.id] = { ...c }; });
      setEditForms(forms);
    }
    setLoading(false);
  };

  const handleSave = async (svc: FSService) => {
    if (!svc.id) return;
    setSaving(svc.id);
    await saveService(svc.id, editForms[svc.id]);
    await load();
    setSaving(null);
    showToast('✅ সার্ভিস সেভ হয়েছে!');
  };

  const updateForm = (id: string, key: keyof FSService, value: unknown) => {
    setEditForms(prev => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  };

  const updateItem = (svcId: string, idx: number, key: keyof FSServiceItem, value: string) => {
    setEditForms(prev => {
      const form = { ...prev[svcId] };
      const items = [...form.items];
      items[idx] = { ...items[idx], [key]: value };
      form.items = items;
      return { ...prev, [svcId]: form };
    });
  };

  const addItem = (svcId: string) => {
    setEditForms(prev => {
      const form = { ...prev[svcId] };
      form.items = [...form.items, { title: 'নতুন সার্ভিস', titleEn: 'New Service', desc: '', descEn: '', icon: '✨' }];
      return { ...prev, [svcId]: form };
    });
  };

  const removeItem = (svcId: string, idx: number) => {
    if (!confirm('সার্ভিস আইটেমটি মুছে ফেলবেন?')) return;
    setEditForms(prev => {
      const form = { ...prev[svcId] };
      form.items = form.items.filter((_, i) => i !== idx);
      return { ...prev, [svcId]: form };
    });
  };

  if (loading) return <div className="text-purple-400 p-4">লোড হচ্ছে...</div>;

  return (
    <div>
      <SectionHeader
        title="সার্ভিস সেকশন"
        subtitle="সার্ভিস ক্যাটাগরি এবং আইটেম পরিচালনা করুন"
        icon={<Settings className="w-5 h-5" />}
      />

      {toast && <div className="mb-4 px-4 py-3 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-sm font-semibold">{toast}</div>}

      <div className="space-y-6">
        {services.map(svc => {
          const form = editForms[svc.id!];
          if (!form) return null;
          return (
            <AdminCard key={svc.id}>
              {/* Category Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Field label="ক্যাটাগরি (বাংলা)" value={form.titleBn} onChange={e => updateForm(svc.id!, 'titleBn', e.target.value)} />
                <Field label="Category (English)" value={form.titleEn} onChange={e => updateForm(svc.id!, 'titleEn', e.target.value)} />
                <Field label="আইকন (ইমোজি)" value={form.icon} onChange={e => updateForm(svc.id!, 'icon', e.target.value)} />
              </div>

              {/* Items List */}
              <div className="space-y-4 mb-4 mt-6">
                <p className="text-purple-300 font-bold text-sm border-b border-purple-900/30 pb-2">সার্ভিস আইটেম সমূহ</p>
                {form.items.map((item, idx) => (
                  <div key={idx} className="bg-white/3 border border-purple-900/20 rounded-xl p-4 relative">
                    <button onClick={() => removeItem(svc.id!, idx)} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-red-500/20 text-red-400/50 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label={`আইটেম ${idx + 1} শিরোনাম (বাংলা)`} value={item.title} onChange={e => updateItem(svc.id!, idx, 'title', e.target.value)} />
                      <Field label={`Item ${idx + 1} Title (English)`} value={item.titleEn} onChange={e => updateItem(svc.id!, idx, 'titleEn', e.target.value)} />
                      <TextArea label="বিবরণ (বাংলা)" value={item.desc} onChange={e => updateItem(svc.id!, idx, 'desc', e.target.value)} />
                      <TextArea label="Description (English)" value={item.descEn} onChange={e => updateItem(svc.id!, idx, 'descEn', e.target.value)} />
                      <Field label="আইকন (ইমোজি)" value={item.icon} onChange={e => updateItem(svc.id!, idx, 'icon', e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => addItem(svc.id!)} className="flex items-center gap-1.5 px-3 py-2 bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 rounded-lg text-xs font-semibold">
                  <Plus className="w-4 h-4" /> আইটেম যোগ করুন
                </button>
                <button onClick={() => handleSave(svc)} disabled={saving === svc.id} className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold">
                  <Check className="w-4 h-4" /> {saving === svc.id ? 'সেভ হচ্ছে...' : 'ক্যাটাগরি সেভ করুন'}
                </button>
              </div>
            </AdminCard>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[11px] text-purple-300/60 uppercase mb-1">{label}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40" />
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div>
      <label className="block text-[11px] text-purple-300/60 uppercase mb-1">{label}</label>
      <textarea value={value} onChange={onChange} rows={2} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none" />
    </div>
  );
}
