# M. Asaduzzaman Sazu — Portfolio

ব্যক্তিগত পোর্টফোলিও সাইট, সাথে একটি Firestore-ভিত্তিক অ্যাডমিন প্যানেল যেখান থেকে
কোড না ছুঁয়েই সাইটের কনটেন্ট বদলানো যায়।

**লাইভ:** https://sazu-portfolio.web.app
**অ্যাডমিন:** https://sazu-portfolio.web.app/admin

---

## টেক স্ট্যাক

| | |
|---|---|
| ফ্রেমওয়ার্ক | React 19 + TypeScript + Vite 6 |
| স্টাইল | Tailwind CSS 4 |
| অ্যানিমেশন | Motion (framer-motion) |
| ব্যাকএন্ড | Firebase — Auth (Email/Password) + Firestore |
| হোস্টিং | Firebase Hosting (প্রজেক্ট: `sazu-portfolio`) |

---

## লোকালি চালানো

**লাগবে:** Node.js 20+

```bash
npm install
npm run dev
```

সাইট খুলবে http://localhost:3000, অ্যাডমিন প্যানেল http://localhost:3000/admin

অন্য স্ক্রিপ্ট:

```bash
npm run build     # প্রোডাকশন বিল্ড → dist/
npm run preview   # বিল্ড করা ভার্সন দেখা
npm run lint      # TypeScript টাইপচেক (tsc --noEmit)
```

> Firebase ক্লায়েন্ট কনফিগ `src/firebase.ts`-এ সরাসরি লেখা আছে। এটা গোপন তথ্য নয় —
> Firebase ওয়েব `apiKey` ব্রাউজারে পাবলিক হওয়াই স্বাভাবিক। আসল সুরক্ষা আসে
> `firestore.rules` থেকে। কোনো `.env` ফাইলের দরকার নেই।

---

## প্রজেক্ট স্ট্রাকচার

```
src/
├── App.tsx              # পুরো পাবলিক পোর্টফোলিও সাইট
├── data.ts              # স্ট্যাটিক ফলব্যাক ডেটা (Firestore খালি থাকলে এটা দেখায়)
├── firebase.ts          # Firebase ইনিশিয়ালাইজেশন
├── index.css            # Tailwind থিম + কাস্টম অ্যানিমেশন
└── admin/
    ├── AdminApp.tsx     # অ্যাডমিন শেল (সাইডবার, রাউটিং, সেভ)
    ├── AdminLogin.tsx   # লগইন ফর্ম
    ├── components.tsx   # শেয়ার্ড ফর্ম কম্পোনেন্ট + এরর হ্যান্ডলিং
    ├── firestore.ts     # সব Firestore রিড/রাইট
    └── sections/        # প্রতিটি অ্যাডমিন সেকশন
```

### ডেটা কোথা থেকে আসে

প্রতিটি সেকশন আগে Firestore-এ খোঁজে। ডেটা না পেলে `src/data.ts`-এর স্ট্যাটিক
ভার্সন দেখায়। অর্থাৎ Firestore খালি থাকলেও সাইট ভাঙে না।

| Firestore কোলেকশন | অ্যাডমিন সেকশন |
|---|---|
| `settings/global` | হিরো, যোগাযোগ, সোশ্যাল, স্ট্যাটস, পরিচিতি |
| `settings/cache` | Force Refresh (সব ভিজিটরের পেজ রিলোড) |
| `projects` | প্রজেক্ট গ্যালারি |
| `services` | সার্ভিস সেকশন |
| `journey` | জার্নি টাইমলাইন |
| `skills` | স্কিল ম্যানেজার |
| `testimonials` | রিভিউ |
| `pricing` | মূল্য / প্যাকেজ |

---

## ডিপ্লয়

```bash
npm run build
firebase deploy --only hosting,firestore:rules
```

**গুরুত্বপূর্ণ:** নতুন কোনো Firestore কোলেকশন যোগ করলে `firestore.rules`-এও তার
নিয়ম লিখতে হবে, নইলে Firestore ডিফল্টভাবে সব অনুমতি বন্ধ রাখে এবং অ্যাডমিন
প্যানেলে সেভ করলে `permission-denied` আসবে।

---

## নিরাপত্তা

`firestore.rules`-এ লেখার অনুমতি শুধু নির্দিষ্ট অ্যাডমিন ইমেইলের জন্য সীমাবদ্ধ।
অ্যাডমিন ইমেইল বদলালে `firestore.rules`-এর `isAdmin()` ফাংশনেও সেটা বদলাতে হবে,
তারপর আবার ডিপ্লয় করতে হবে।

অ্যাডমিন পাসওয়ার্ড কখনো কোডে বা রিপোতে রাখা যাবে না — Firebase Console
(Authentication → Users) থেকে পরিচালনা করুন।
