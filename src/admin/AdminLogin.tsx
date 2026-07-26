import React, { useState } from 'react';
import { motion } from 'motion/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Lock, Mail, Eye, EyeOff, Sparkles } from 'lucide-react';
import sazuLogo from '../assets/sazu_logo.png';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        setError('ইমেইল বা পাসওয়ার্ড ভুল। আবার চেষ্টা করুন।');
      } else if (code === 'auth/too-many-requests') {
        setError('অনেকবার ভুল চেষ্টা করা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।');
      } else if (code === 'auth/operation-not-allowed') {
        setError('Email/Password লগইন সিস্টেম Firebase Console-এ চালু করা হয়নি।');
      } else {
        setError(`লগইন ব্যর্থ হয়েছে। Error: ${code || (err as Error).message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090514] via-[#0f0a22] to-[#0c0718] flex items-center justify-center p-4">
      {/* Background dots */}
      <div className="absolute inset-0 dot-matrix opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-purple-800/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/20">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-purple-600/30 bg-white flex items-center justify-center"
            >
              <img src={sazuLogo} alt="Logo" className="w-full h-full object-contain" />
            </motion.div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">অ্যাডমিন প্যানেল</h1>
              <p className="text-purple-400/60 text-sm mt-1 flex items-center gap-1 justify-center">
                <Sparkles className="w-3.5 h-3.5" />
                M. Asaduzzaman Sazu · Portfolio
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-purple-300/70 mb-2 uppercase tracking-wider">
                ইমেইল অ্যাড্রেস
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/50" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 text-sm transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-purple-300/70 mb-2 uppercase tracking-wider">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/50" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-purple-800/40 rounded-xl text-white placeholder:text-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400/50 hover:text-purple-300 transition-colors"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-purple-600/25 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  লগইন হচ্ছে...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  লগইন করুন
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-purple-400/30 mt-6">
            🔒 এই পেজটি শুধুমাত্র অ্যাডমিনের জন্য
          </p>
        </div>
      </motion.div>
    </div>
  );
}
