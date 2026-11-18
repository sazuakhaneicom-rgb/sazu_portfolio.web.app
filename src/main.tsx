import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

/**
 * অ্যাডমিন প্যানেল lazy-load করা হয়।
 * আগে প্রতিটি ভিজিটরকে অ্যাডমিন প্যানেল + Firebase Auth-এর কোডও
 * ডাউনলোড করতে হত, যদিও তারা কখনো /admin-এ যায় না।
 */
const AdminApp = lazy(() => import('./admin/AdminApp'));

function AdminFallback() {
  return (
    <div className="min-h-screen bg-[#090514] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        <p className="text-purple-400/60 text-sm">অ্যাডমিন প্যানেল লোড হচ্ছে...</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<AdminFallback />}>
              <AdminApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
