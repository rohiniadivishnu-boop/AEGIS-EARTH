import React, { useState } from 'react';
import { Wrench, FileText, Download, CheckCircle2, AlertCircle, DollarSign, BarChart3 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DamageRecoveryView({ damageAssessments, onSubmitDamage }) {
  const [location, setLocation] = useState('Sunset District Sector 4');
  const [damageType, setDamageType] = useState('Flood Inundation & Structural');
  const [severity, setSeverity] = useState(4);
  const [estimatedCost, setEstimatedCost] = useState('$45,000');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitDamage({
      location,
      damage_type: damageType,
      severity,
      estimated_cost: estimatedCost,
      status: 'pending_review'
    });
    confetti({ particleCount: 50, spread: 60 });
  };

  const exportInsuranceClaim = () => {
    const claimData = JSON.stringify({
      claim_id: `INS_${Date.now()}`,
      policy_holder: 'Cmdr. Alex Vance',
      location,
      damageType,
      estimatedCost,
      timestamp: new Date().toISOString()
    }, null, 2);

    const blob = new Blob([claimData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aegis_Insurance_Claim_${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-safe flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Wrench className="w-5 h-5 text-safe animate-pulse" />
            <span className="text-xs font-mono text-safe font-bold uppercase tracking-widest">
              POST-DISASTER RECOVERY & DAMAGE ESTIMATION
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            DAMAGE ASSESSMENT & RECOVERY
          </h2>
          <p className="text-xs text-gray-300">
            AI structural damage cost estimator, resource gap telemetry, exportable insurance claims, and recovery progress tracking.
          </p>
        </div>

        <button
          onClick={exportInsuranceClaim}
          className="btn-3d px-4 py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center space-x-2 shadow-xl"
        >
          <Download className="w-4 h-4" />
          <span>EXPORT STRUCTURED INSURANCE CLAIM</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Damage Report Submit Form */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-safe" /> SUBMIT DAMAGE REPORT
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="text-gray-300 block mb-1">Property Sector / Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-1">Damage Category</label>
              <input
                type="text"
                value={damageType}
                onChange={(e) => setDamageType(e.target.value)}
                className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-1">AI Estimated Repair Cost</label>
              <input
                type="text"
                value={estimatedCost}
                onChange={(e) => setEstimatedCost(e.target.value)}
                className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-3d py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase"
            >
              <span>TRANSMIT DAMAGE ASSESSOR REPORT</span>
            </button>
          </form>
        </div>

        {/* Resource Gap Analysis & Recovery Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-info" /> RESOURCE GAP ANALYSIS (REAL-TIME NEED VS DELIVERED)
            </h3>

            <div className="space-y-3">
              {[
                { item: 'Thermal Blankets', needed: 500, delivered: 120, unit: 'Units' },
                { item: 'Emergency Water Rations', needed: 2000, delivered: 1600, unit: 'Liters' },
                { item: 'Debris Clearance Heavy Trucks', needed: 15, delivered: 12, unit: 'Vehicles' }
              ].map((g, i) => {
                const pct = Math.round((g.delivered / g.needed) * 100);
                return (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-bold text-white">{g.item}</span>
                      <span className="text-info">{g.delivered} / {g.needed} {g.unit} ({pct}%)</span>
                    </div>
                    <div className="w-full bg-space-deep h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-warning to-safe transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
