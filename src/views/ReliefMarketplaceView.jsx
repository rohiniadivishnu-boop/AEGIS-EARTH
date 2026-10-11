import React, { useState } from 'react';
import { ShoppingBag, Heart, Users, CheckCircle2, ArrowRight, DollarSign, Package, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ReliefMarketplaceView({ donations, supplyRequests, fundraisers, onDonateFund }) {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [donationAmount, setDonationAmount] = useState(100);

  const handleFundDonate = (fundraiserId) => {
    onDonateFund(fundraiserId, donationAmount, 'Emergency Relief Support');
    confetti({ particleCount: 60, spread: 70 });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-ai animate-pulse" />
            <span className="text-xs font-mono text-ai font-bold uppercase tracking-widest">
              RESOURCE & VOLUNTEER COORDINATION
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            RELIEF & RESOURCE COMMAND CENTER
          </h2>
          <p className="text-xs text-gray-300">
            Supply marketplace, AI resource matching, volunteer operations, and transparent crowdfunding telemetry.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-space-surface border border-white/10 rounded-xl p-1 space-x-1 text-xs">
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'marketplace' ? 'bg-ai/20 text-ai border border-ai/40' : 'text-gray-400 hover:text-white'
            }`}
          >
            SUPPLY MARKETPLACE
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'volunteers' ? 'bg-info/20 text-info border border-info/40' : 'text-gray-400 hover:text-white'
            }`}
          >
            VOLUNTEER OPS
          </button>
          <button
            onClick={() => setActiveTab('fundraising')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'fundraising' ? 'bg-safe/20 text-safe border border-safe/40' : 'text-gray-400 hover:text-white'
            }`}
          >
            CROWDFUNDING
          </button>
        </div>
      </div>

      {/* Tab 1: Supply Marketplace & AI Matcher */}
      {activeTab === 'marketplace' && (
        <div className="space-y-6">
          <div className="bg-ai/10 border border-ai/30 rounded-2xl p-4 text-xs text-ai font-mono flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-ai animate-spin" style={{ animationDuration: '6s' }} />
              <span>AI AUTO-MATCHER ACTIVE: 14 Supply Donations matched with nearby Urgent Shelter Requests!</span>
            </div>
            <span className="px-3 py-1 bg-ai text-space-deep font-bold rounded-lg text-[10px]">98% MATCH ACCURACY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Donations List */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-safe" /> AVAILABLE DONATIONS
              </h3>

              <div className="space-y-3">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Water Filtration Units & Clean Water</span>
                    <span className="text-safe font-mono">AVAILABLE</span>
                  </div>
                  <div className="text-xs text-gray-300">Quantity: 50 Cases • New Unopened</div>
                  <div className="text-[10px] text-gray-400 font-mono">Location: Central Depot Gate B</div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Emergency Generator (5500W)</span>
                    <span className="text-safe font-mono">AVAILABLE</span>
                  </div>
                  <div className="text-xs text-gray-300">Quantity: 2 Units • Excellent Condition</div>
                  <div className="text-[10px] text-gray-400 font-mono">Location: High School Shelter Annex</div>
                </div>
              </div>
            </div>

            {/* Supply Requests */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emergency" /> URGENT SUPPLY REQUESTS
              </h3>

              <div className="space-y-3">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Thermal Blankets & First Aid Kits</span>
                    <span className="text-emergency font-mono font-bold">CRITICAL URGENCY</span>
                  </div>
                  <div className="text-xs text-gray-300">Need: 200 Units for Displaced Families</div>
                  <div className="text-[10px] text-gray-400 font-mono">Destination: Civic Auditorium Shelter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Volunteer Operations */}
      {activeTab === 'volunteers' && (
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <Users className="w-5 h-5 text-info" /> VOLUNTEER DISPATCH & SKILLS MATRIX
              </h3>
              <p className="text-xs text-gray-300">Register your capabilities to receive automated emergency task dispatches.</p>
            </div>
            <span className="px-3 py-1 bg-info/20 text-info border border-info/40 rounded-full text-xs font-mono font-bold">
              3,412 VOLUNTEERS DEPLOYED
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Water Rescue', 'Emergency Medical', 'Mass Cooking', 'Heavy Driving', 'Logistics', 'Psychological First Aid', 'Radio Comms', 'Drone Tech'].map(skill => (
              <div key={skill} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-200 font-medium">{skill}</span>
                <CheckCircle2 className="w-4 h-4 text-safe" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Crowdfunding & Transparency Tracker */}
      {activeTab === 'fundraising' && (
        <div className="space-y-6">
          {fundraisers.map(f => {
            const pct = Math.min(100, Math.round((f.raised_amount / f.target_amount) * 100));
            return (
              <div key={f.id} className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6 shadow-xl">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white font-heading">{f.title}</h3>
                    <span className="px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-full text-xs font-mono font-bold">
                      VERIFIED 501(c)(3)
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">{f.description}</p>
                </div>

                {/* Raised Amount Progress Bar */}
                <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300">FUNDRAISER PROGRESS</span>
                    <span className="text-safe font-bold">${f.raised_amount?.toLocaleString()} / ${f.target_amount?.toLocaleString()} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-space-deep h-4 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-safe to-emerald-400 transition-all duration-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                {/* Donation Quick Form */}
                <div className="flex flex-wrap items-center gap-3 bg-space-surface p-4 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-white">DONATE RELIEF FUNDS:</div>
                  {[25, 50, 100, 250].map(amt => (
                    <button
                      key={amt}
                      onClick={() => setDonationAmount(amt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        donationAmount === amt ? 'bg-safe text-space-deep border-safe font-extrabold' : 'bg-white/5 text-gray-300 border-white/10'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}

                  <button
                    onClick={() => handleFundDonate(f.id)}
                    className="btn-3d px-5 py-2 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center space-x-1.5 shadow-lg ml-auto"
                  >
                    <Heart className="w-4 h-4 fill-current text-space-deep" />
                    <span>CONTRIBUTE ${donationAmount} NOW</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
