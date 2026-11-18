import React, { useState, useEffect } from 'react';
import { DollarSign, Save } from 'lucide-react';
import { AdminCard, SectionHeader, SaveButton, AdminError, adminErrorMessage } from '../components';
import { getPricingPlans, savePricingPlan } from '../firestore';
import { pricingData as defaultPricing, PricingPlan } from '../../data';

export default function PricingManager() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const fsPlans = await getPricingPlans();
        if (fsPlans.length > 0) {
          // We assume fsPlans matched PricingPlan structure
          const sorted = fsPlans.sort((a, b) => (a.order as number) - (b.order as number));
          setPlans(sorted as unknown as PricingPlan[]);
        } else {
          setPlans(defaultPricing);
        }
      } catch (e) {
        // আগে এই এরর unhandled rejection হয়ে চুপচাপ হারিয়ে যেত
        console.error('Pricing load failed:', e);
        setError(adminErrorMessage(e));
        setPlans(defaultPricing);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleTierChange = (catIdx: number, tierIdx: number, field: string, val: string) => {
    const newPlans = [...plans];
    (newPlans[catIdx].tiers[tierIdx] as any)[field] = val;
    setPlans(newPlans);
  };

  // এরর আর গিলে ফেলা হয় না — SaveButton ধরে ব্যবহারকারীকে কারণ দেখায়।
  const handleSave = async () => {
    setSaveSuccess(false);
    for (let i = 0; i < plans.length; i++) {
      const plan = plans[i];
      await savePricingPlan(plan.categoryId, { ...plan, order: i });
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  if (loading) return <div className="text-white p-4">Loading Pricing...</div>;

  return (
    <div>
      <SectionHeader title="মূল্য / Pricing" subtitle="আপনার সার্ভিসের প্যাকেজ ও মূল্য পরিবর্তন করুন" icon={<DollarSign className="w-5 h-5" />} />

      {error && <div className="mb-4 max-w-4xl"><AdminError message={error} onDismiss={() => setError('')} /></div>}
      <div className="space-y-6 max-w-4xl">
        {plans.map((category, catIdx) => (
          <AdminCard key={category.categoryId}>
            <div className="mb-4 pb-2 border-b border-purple-900/40">
              <h3 className="text-lg font-bold text-white">{category.titleBn} / {category.titleEn}</h3>
            </div>
            
            <div className="space-y-6">
              {category.tiers.map((tier, tierIdx) => (
                <div key={tierIdx} className="p-4 rounded-xl bg-[#1a1338] border border-purple-900/40">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs font-bold rounded">
                      Tier {tierIdx + 1}
                    </span>
                    <h4 className="font-semibold text-purple-100">{tier.nameBn} / {tier.nameEn}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase text-purple-300 mb-1">Price (Bengali)</label>
                      <input
                        type="text"
                        value={tier.priceBn}
                        onChange={(e) => handleTierChange(catIdx, tierIdx, 'priceBn', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#110c28] border border-purple-900/40 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-purple-300 mb-1">Price (English)</label>
                      <input
                        type="text"
                        value={tier.priceEn}
                        onChange={(e) => handleTierChange(catIdx, tierIdx, 'priceEn', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#110c28] border border-purple-900/40 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-purple-300 mb-1">Period (Bengali)</label>
                      <input
                        type="text"
                        value={tier.periodBn}
                        onChange={(e) => handleTierChange(catIdx, tierIdx, 'periodBn', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#110c28] border border-purple-900/40 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-purple-300 mb-1">Period (English)</label>
                      <input
                        type="text"
                        value={tier.periodEn}
                        onChange={(e) => handleTierChange(catIdx, tierIdx, 'periodEn', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#110c28] border border-purple-900/40 text-sm text-white"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-purple-400/50 mt-2 italic">* Features cannot be edited from here yet.</p>
                </div>
              ))}
            </div>
          </AdminCard>
        ))}

        <div className="mt-8">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}
