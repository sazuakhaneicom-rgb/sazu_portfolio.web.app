import React, { useState, useEffect } from 'react';
import { Award, Plus, Trash2, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, AdminCard, SaveButton } from '../components';
import { getSkillCategories, saveSkillCategory, FSSkillCategory } from '../firestore';
import { skillsCategoriesData } from '../../data';

const ICON_TYPES = ['graphic', 'uiux', 'web', 'app', 'ai', 'marketing', 'tools'];
const COLOR_THEMES = ['rose', 'purple', 'blue', 'emerald', 'amber', 'violet', 'sky', 'pink'];

export default function SkillsManager() {
  const [categories, setCategories] = useState<FSSkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [toast, setToast] = useState('');
  const [editForms, setEditForms] = useState<Record<string, FSSkillCategory>>({});

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const data = await getSkillCategories();
    if (data.length > 0) {
      setCategories(data);
      const forms: Record<string, FSSkillCategory> = {};
      data.forEach(c => { if (c.id) forms[c.id] = { ...c }; });
      setEditForms(forms);
    } else {
      // Load from default data
      const defaults = skillsCategoriesData.map((c, i) => ({
        id: c.id,
        titleBn: c.titleBn,
        titleEn: c.titleEn,
        iconType: c.iconType,
        colorTheme: c.colorTheme,
        order: i,
        skills: c.skills,
      } as FSSkillCategory));
      setCategories(defaults);
      const forms: Record<string, FSSkillCategory> = {};
      defaults.forEach(c => { if (c.id) forms[c.id!] = { ...c }; });
      setEditForms(forms);
    }
    setLoading(false);
  };

  const handleSaveCategory = async (cat: FSSkillCategory) => {
    if (!cat.id) return;
    setSaving(cat.id);
    await saveSkillCategory(cat.id, editForms[cat.id]);
    await load();
    setSaving(null);
    showToast('✅ সেভ হয়েছে!');
  };

  const updateForm = (id: string, key: keyof FSSkillCategory, value: unknown) => {
    setEditForms(prev => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  };

  const updateSkill = (catId: string, skillIdx: number, field: 'name' | 'level', value: string | number) => {
    setEditForms(prev => {
      const cat = { ...prev[catId] };
      const skills = [...cat.skills];
      skills[skillIdx] = { ...skills[skillIdx], [field]: field === 'level' ? Number(value) : value };
      cat.skills = skills;
      return { ...prev, [catId]: cat };
    });
  };

  const addSkill = (catId: string) => {
    setEditForms(prev => {
      const cat = { ...prev[catId] };
      cat.skills = [...cat.skills, { name: 'নতুন স্কিল', level: 80 }];
      return { ...prev, [catId]: cat };
    });
  };

  const removeSkill = (catId: string, skillIdx: number) => {
    setEditForms(prev => {
      const cat = { ...prev[catId] };
      cat.skills = cat.skills.filter((_, i) => i !== skillIdx);
      return { ...prev, [catId]: cat };
    });
  };

  if (loading) return <div className="text-purple-400 p-4">লোড হচ্ছে...</div>;

  return (
    <div>
      <SectionHeader
        title="স্কিল ম্যানেজার"
        subtitle="প্রতিটি স্কিলের নাম ও দক্ষতার মাত্রা (%) পরিবর্তন করুন"
        icon={<Award className="w-5 h-5" />}
      />

      {toast && <div className="mb-4 px-4 py-3 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-sm font-semibold">{toast}</div>}

      <div className="space-y-6">
        {categories.map(cat => {
          const form = editForms[cat.id!];
          if (!form) return null;
          return (
            <AdminCard key={cat.id}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-900/30">
                <div className="flex-1">
                  <p className="font-bold text-white">{form.titleBn} / {form.titleEn}</p>
                  <p className="text-purple-400/50 text-xs">{form.skills.length}টি স্কিল</p>
                </div>
              </div>

              {/* Category Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                <div>
                  <label className="block text-[11px] text-purple-300/60 uppercase mb-1">শিরোনাম (বাংলা)</label>
                  <input value={form.titleBn} onChange={e => updateForm(cat.id!, 'titleBn', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-lg text-white text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] text-purple-300/60 uppercase mb-1">Title (En)</label>
                  <input value={form.titleEn} onChange={e => updateForm(cat.id!, 'titleEn', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-lg text-white text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] text-purple-300/60 uppercase mb-1">আইকন টাইপ</label>
                  <select value={form.iconType} onChange={e => updateForm(cat.id!, 'iconType', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-lg text-white text-sm focus:outline-none">
                    {ICON_TYPES.map(t => <option key={t} value={t} className="bg-[#1a1338]">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-purple-300/60 uppercase mb-1">রঙ</label>
                  <select value={form.colorTheme} onChange={e => updateForm(cat.id!, 'colorTheme', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-purple-800/40 rounded-lg text-white text-sm focus:outline-none">
                    {COLOR_THEMES.map(t => <option key={t} value={t} className="bg-[#1a1338]">{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 mb-4">
                {form.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-purple-900/20">
                    <input
                      value={skill.name}
                      onChange={e => updateSkill(cat.id!, idx, 'name', e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-white/5 border border-purple-800/30 rounded-lg text-white text-sm focus:outline-none"
                    />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <input
                        type="range" min="1" max="100"
                        value={skill.level}
                        onChange={e => updateSkill(cat.id!, idx, 'level', e.target.value)}
                        className="w-24 accent-purple-500"
                      />
                      <span className="text-purple-400 text-xs font-bold w-8 text-right">{skill.level}%</span>
                    </div>
                    <button onClick={() => removeSkill(cat.id!, idx)} className="p-1 rounded-lg hover:bg-red-500/20 text-red-400/50 hover:text-red-400 flex-shrink-0">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => addSkill(cat.id!)} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 rounded-lg text-xs font-semibold">
                  <Plus className="w-3.5 h-3.5" /> স্কিল যোগ
                </button>
                <button onClick={() => handleSaveCategory(cat)} disabled={saving === cat.id} className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold">
                  <Check className="w-3.5 h-3.5" /> {saving === cat.id ? 'সেভ হচ্ছে...' : 'সেভ করুন'}
                </button>
              </div>
            </AdminCard>
          );
        })}
      </div>
    </div>
  );
}
