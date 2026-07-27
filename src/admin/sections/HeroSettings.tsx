import React, { useState } from 'react';
import { User, ExternalLink, Image } from 'lucide-react';
import { AdminField, AdminCard, SectionHeader, SaveButton } from '../components';
import { GlobalSettings } from '../firestore';

interface Props {
  data: GlobalSettings['hero'];
  onSave: (data: GlobalSettings['hero']) => Promise<void>;
}

export default function HeroSettings({ data, onSave }: Props) {
  const [form, setForm] = useState({ ...data });
  const [saving, setSaving] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const set = (key: keyof typeof form) => (v: string) => {
    setPreviewError(false);
    setForm(f => ({ ...f, [key]: v }));
  };

  const handleSave = async () => {
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div>
      <SectionHeader title="হিরো সেকশন" subtitle="প্রোফাইল ছবি, WhatsApp নম্বর ও Resume লিংক" icon={<User className="w-5 h-5" />} />
      <div className="space-y-5 max-w-2xl">

        {/* Profile Picture Section */}
        <AdminCard>
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-purple-300/70 mb-1 uppercase tracking-wider">প্রোফাইল ছবি</label>
              <p className="text-[11px] text-purple-400/40 mb-3">
                নিচের ফ্রি হোস্টিং সাইটে ছবি আপলোড করুন, তারপর <strong className="text-purple-300">Direct Link</strong> কপি করে এখানে পেস্ট করুন।
              </p>

              {/* Free Hosting Link */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: 'PostImages (সেরা)', url: 'https://postimages.org/', badge: '✅ সবচেয়ে ভালো' },
                  { name: 'ImgBB', url: 'https://imgbb.com/', badge: '⚡ দ্রুত' },
                  { name: 'Imgur', url: 'https://imgur.com/upload', badge: '🌐 জনপ্রিয়' },
                ].map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold hover:bg-purple-600/30 hover:border-purple-400/50 transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {site.name}
                    <span className="text-[10px] text-purple-400/60 ml-1">{site.badge}</span>
                  </a>
                ))}
              </div>

              {/* URL Input */}
              <div className="flex gap-2 items-start">
                <div className="flex-1">
                  <input
                    type="url"
                    value={form.profilePictureUrl}
                    onChange={e => set('profilePictureUrl')(e.target.value)}
                    placeholder="https://i.postimg.cc/xxxxxx/your-photo.jpg"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 text-sm"
                  />
                </div>
              </div>

              {/* Image Preview */}
              {form.profilePictureUrl && !previewError ? (
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-lg flex-shrink-0">
                    <img
                      src={form.profilePictureUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => setPreviewError(true)}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-green-400 font-semibold">✅ ছবি পাওয়া গেছে!</p>
                    <p className="text-[11px] text-purple-400/50 mt-1">Save করলে ওয়েবসাইটে এই ছবিটি দেখাবে।</p>
                  </div>
                </div>
              ) : previewError ? (
                <div className="mt-3 flex items-center gap-2 text-red-400 text-xs">
                  <Image className="w-4 h-4" />
                  <span>লিংকটি সঠিক নয়। Direct Image Link দিতে হবে (.jpg/.png দিয়ে শেষ হওয়া)।</span>
                </div>
              ) : null}

              {/* Instructions */}
              <div className="mt-4 p-3 rounded-xl bg-purple-900/20 border border-purple-800/20 text-[11px] text-purple-400/60 space-y-1">
                <p className="font-bold text-purple-300/70 text-[12px] mb-2">📌 PostImages.org ব্যবহারের নিয়ম:</p>
                <p>১. উপরের "PostImages" লিংকে ক্লিক করুন</p>
                <p>২. ছবি আপলোড করুন (Sign Up লাগবে না)</p>
                <p>৩. আপলোড হলে <strong>"Direct Link"</strong> অপশনটি কপি করুন</p>
                <p>৪. উপরের ইনপুটে পেস্ট করুন এবং সেভ করুন ✅</p>
              </div>
            </div>
          </div>
        </AdminCard>

        {/* WhatsApp & Resume */}
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
