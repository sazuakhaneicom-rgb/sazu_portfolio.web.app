import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { AdminCard, SectionHeader, SaveButton, AdminField } from '../components';
import { GlobalSettings } from '../firestore';

// Note: To keep it simple, we manage prices dynamically but features remain in code.
// For a full system, features would also move to Firestore. For now, this lets you change prices.

interface Props {
  data: GlobalSettings;
  onSave: (data: unknown) => Promise<void>;
}

export default function PricingManager({ data, onSave }: Props) {
  // We'll simulate price changes by letting you edit a JSON-like structure
  // In a real complex app, you'd have a full array editor here.
  return (
    <div>
      <SectionHeader title="মূল্য / Pricing" subtitle="এই ফিচারটি বর্তমানে Development-এ আছে।" icon={<DollarSign className="w-5 h-5" />} />
      <div className="space-y-5 max-w-2xl">
        <AdminCard>
          <div className="text-center py-10">
            <h3 className="text-xl font-bold text-white mb-2">শীঘ্রই আসছে!</h3>
            <p className="text-purple-300/60 text-sm max-w-md mx-auto">
              Pricing প্ল্যানগুলো অনেক জটিল ডেটা স্ট্রাকচার (Array of Objects) ব্যবহার করে।
              আপাতত এটি `src/data.ts` ফাইল থেকে কাজ করছে। 
              ভবিষ্যতে এখানে একটি পূর্ণাঙ্গ Pricing Editor যুক্ত করা হবে।
            </p>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
