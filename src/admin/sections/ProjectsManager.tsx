import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, Trash2, ChevronUp, ChevronDown, Edit2, Check, X, ExternalLink } from 'lucide-react';
import { SectionHeader, AdminCard, SaveButton } from '../components';
import { getProjects, addProject, updateProject, deleteProject, FSProject } from '../firestore';

const EMPTY_PROJECT: Omit<FSProject, 'id'> = {
  titleBn: '', titleEn: '', descBn: '', descEn: '',
  category: 'app', tag: '', tagEn: '', metric: '', metricEn: '',
  imageUrl: '', bgGradient: 'from-purple-600 to-indigo-700',
  technologies: '', liveUrl: '#', githubUrl: '#', order: 0,
};

const CATEGORIES = ['app', 'web', 'graphic', 'marketing', 'ai', 'tools'];
const GRADIENTS = [
  'from-purple-600 to-indigo-700', 'from-blue-600 to-indigo-700',
  'from-emerald-500 to-teal-700', 'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600', 'from-violet-600 to-purple-700',
];

export default function ProjectsManager() {
  const [projects, setProjects] = useState<FSProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<FSProject>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ ...EMPTY_PROJECT });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const data = await getProjects();
    setProjects(data);
    setLoading(false);
  };

  const handleAdd = async () => {
    if (!addForm.titleBn || !addForm.titleEn) return;
    setSaving(true);
    await addProject({ ...addForm, order: projects.length });
    await load();
    setAddForm({ ...EMPTY_PROJECT });
    setShowAdd(false);
    setSaving(false);
    showToast('✅ প্রজেক্ট যোগ হয়েছে!');
  };

  const handleUpdate = async (id: string) => {
    setSaving(true);
    await updateProject(id, editForm);
    await load();
    setEditingId(null);
    setEditForm({});
    setSaving(false);
    showToast('✅ আপডেট হয়েছে!');
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" প্রজেক্টটি মুছে ফেলবেন?`)) return;
    await deleteProject(id);
    await load();
    showToast('🗑️ মুছে ফেলা হয়েছে!');
  };

  const handleMove = async (idx: number, dir: 'up' | 'down') => {
    const arr = [...projects];
    const swapIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= arr.length) return;
    const a = arr[idx], b = arr[swapIdx];
    await updateProject(a.id!, { order: b.order });
    await updateProject(b.id!, { order: a.order });
    await load();
  };

  const set = (key: keyof typeof addForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setAddForm(f => ({ ...f, [key]: e.target.value }));

  const setEdit = (key: keyof FSProject) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setEditForm(f => ({ ...f, [key]: e.target.value }));

  if (loading) return <div className="text-purple-400 p-4">লোড হচ্ছে...</div>;

  return (
    <div>
      <SectionHeader
        title="প্রজেক্ট গ্যালারি"
        subtitle="আপনার সব প্রজেক্ট যোগ, সম্পাদনা ও মুছে ফেলুন"
        icon={<Briefcase className="w-5 h-5" />}
      />

      {toast && (
        <div className="mb-4 px-4 py-3 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-sm font-semibold">
          {toast}
        </div>
      )}

      {/* Add Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowAdd(v => !v)}
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          নতুন প্রজেক্ট যোগ করুন
        </button>
      </div>

      {/* Add Form */}
      {showAdd && (
        <AdminCard>
          <p className="text-purple-300 font-bold mb-4">নতুন প্রজেক্ট</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="শিরোনাম (বাংলা)" value={addForm.titleBn} onChange={set('titleBn')} placeholder="আমারডোকান — ই-কমার্স অ্যাপ" />
            <Field label="Title (English)" value={addForm.titleEn} onChange={set('titleEn')} placeholder="AmarDokan — E-Commerce App" />
            <TextArea label="বিবরণ (বাংলা)" value={addForm.descBn} onChange={set('descBn')} />
            <TextArea label="Description (English)" value={addForm.descEn} onChange={set('descEn')} />
            <Field label="ট্যাগ (বাংলা)" value={addForm.tag} onChange={set('tag')} placeholder="ফ্লাটার অ্যাপ" />
            <Field label="Tag (English)" value={addForm.tagEn} onChange={set('tagEn')} placeholder="Flutter App" />
            <Field label="মেট্রিক (বাংলা)" value={addForm.metric} onChange={set('metric')} placeholder="২x দ্রুত লোডিং" />
            <Field label="Metric (English)" value={addForm.metricEn} onChange={set('metricEn')} placeholder="2x Faster Load" />
            <div>
              <label className="block text-[11px] text-purple-300/60 uppercase mb-1">ক্যাটাগরি</label>
              <select value={addForm.category} onChange={set('category')} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40">
                {CATEGORIES.map(c => <option key={c} value={c} className="bg-[#1a1338]">{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-purple-300/60 uppercase mb-1">গ্রেডিয়েন্ট রং</label>
              <select value={addForm.bgGradient} onChange={set('bgGradient')} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40">
                {GRADIENTS.map(g => <option key={g} value={g} className="bg-[#1a1338]">{g}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <Field label="ছবির লিংক (PostImages Direct Link)" value={addForm.imageUrl} onChange={set('imageUrl')} placeholder="https://i.postimg.cc/xxx/image.jpg" />
              <a href="https://postimages.org/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] text-purple-400 mt-1 hover:text-purple-300">
                <ExternalLink className="w-3 h-3" /> PostImages.org থেকে ছবি আপলোড করুন
              </a>
            </div>
            <Field label="টেকনোলজি (কমা দিয়ে)" value={addForm.technologies} onChange={set('technologies')} placeholder="Flutter, Firebase, Node.js" />
            <Field label="লাইভ URL" value={addForm.liveUrl} onChange={set('liveUrl')} placeholder="https://..." />
            <Field label="GitHub URL" value={addForm.githubUrl} onChange={set('githubUrl')} placeholder="https://github.com/..." />
          </div>
          <div className="flex gap-3 mt-5">
            <button onClick={handleAdd} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm">
              <Check className="w-4 h-4" /> সেভ করুন
            </button>
            <button onClick={() => setShowAdd(false)} className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-purple-300 rounded-xl text-sm">
              বাতিল
            </button>
          </div>
        </AdminCard>
      )}

      {/* Project List */}
      <div className="space-y-4 mt-4">
        {projects.length === 0 && (
          <div className="text-center py-12 text-purple-400/50">
            <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>কোনো প্রজেক্ট নেই। উপরে "নতুন প্রজেক্ট যোগ করুন" বাটনে ক্লিক করুন।</p>
            <p className="text-xs mt-2 text-purple-400/30">ডিফল্ট প্রজেক্টগুলো data.ts থেকে দেখানো হচ্ছে যতক্ষণ এখানে কিছু যোগ না করা হয়।</p>
          </div>
        )}
        {projects.map((project, idx) => (
          <AdminCard key={project.id}>
            {editingId === project.id ? (
              <div>
                <p className="text-purple-300 font-bold mb-4 text-sm">সম্পাদনা করুন: {project.titleBn}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="শিরোনাম (বাংলা)" value={editForm.titleBn ?? project.titleBn} onChange={setEdit('titleBn')} />
                  <Field label="Title (English)" value={editForm.titleEn ?? project.titleEn} onChange={setEdit('titleEn')} />
                  <TextArea label="বিবরণ (বাংলা)" value={editForm.descBn ?? project.descBn} onChange={setEdit('descBn')} />
                  <TextArea label="Description (English)" value={editForm.descEn ?? project.descEn} onChange={setEdit('descEn')} />
                  <Field label="ট্যাগ (বাংলা)" value={editForm.tag ?? project.tag} onChange={setEdit('tag')} />
                  <Field label="Tag (English)" value={editForm.tagEn ?? project.tagEn} onChange={setEdit('tagEn')} />
                  <Field label="মেট্রিক (বাংলা)" value={editForm.metric ?? project.metric} onChange={setEdit('metric')} />
                  <Field label="Metric (English)" value={editForm.metricEn ?? project.metricEn} onChange={setEdit('metricEn')} />
                  <div>
                    <label className="block text-[11px] text-purple-300/60 uppercase mb-1">ক্যাটাগরি</label>
                    <select value={editForm.category ?? project.category} onChange={setEdit('category')} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none">
                      {CATEGORIES.map(c => <option key={c} value={c} className="bg-[#1a1338]">{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-purple-300/60 uppercase mb-1">গ্রেডিয়েন্ট</label>
                    <select value={editForm.bgGradient ?? project.bgGradient} onChange={setEdit('bgGradient')} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white text-sm focus:outline-none">
                      {GRADIENTS.map(g => <option key={g} value={g} className="bg-[#1a1338]">{g}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Field label="ছবির লিংক" value={editForm.imageUrl ?? project.imageUrl} onChange={setEdit('imageUrl')} placeholder="https://i.postimg.cc/..." />
                  </div>
                  <Field label="টেকনোলজি (কমা দিয়ে)" value={editForm.technologies ?? project.technologies} onChange={setEdit('technologies')} />
                  <Field label="লাইভ URL" value={editForm.liveUrl ?? project.liveUrl} onChange={setEdit('liveUrl')} />
                  <Field label="GitHub URL" value={editForm.githubUrl ?? project.githubUrl} onChange={setEdit('githubUrl')} />
                </div>
                <div className="flex gap-3 mt-4">
                  <button onClick={() => handleUpdate(project.id!)} disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm">
                    <Check className="w-4 h-4" /> সেভ
                  </button>
                  <button onClick={() => { setEditingId(null); setEditForm({}); }} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-purple-300 rounded-xl text-sm">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.bgGradient} flex items-center justify-center flex-shrink-0 text-lg overflow-hidden`}>
                  {project.imageUrl ? <img src={project.imageUrl} alt="" className="w-full h-full object-cover" /> : '🖼️'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-sm truncate">{project.titleBn}</p>
                  <p className="text-purple-400/60 text-xs truncate">{project.titleEn}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-purple-900/40 text-purple-300 text-[10px] rounded font-semibold">{project.category}</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => handleMove(idx, 'up')} disabled={idx === 0} className="p-1.5 rounded-lg hover:bg-purple-900/30 text-purple-400/60 disabled:opacity-20">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleMove(idx, 'down')} disabled={idx === projects.length - 1} className="p-1.5 rounded-lg hover:bg-purple-900/30 text-purple-400/60 disabled:opacity-20">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button onClick={() => { setEditingId(project.id!); setEditForm({}); }} className="p-1.5 rounded-lg hover:bg-purple-900/30 text-purple-300">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(project.id!, project.titleBn)} className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400/60 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </AdminCard>
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
      <textarea value={value} onChange={onChange} rows={3} className="w-full px-3 py-2.5 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none" />
    </div>
  );
}
