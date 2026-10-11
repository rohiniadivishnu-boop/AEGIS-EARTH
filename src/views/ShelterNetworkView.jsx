import React, { useState } from 'react';
import { Home, Users, CheckCircle, Navigation, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ShelterNetworkView({ shelters, userRole, onPreRegister, onUpdateOccupancy }) {
  const [selectedShelter, setSelectedShelter] = useState(null);

  const handleRegister = (shelterId) => {
    onPreRegister(shelterId);
    confetti({ particleCount: 50, spread: 60 });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-safe flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-safe animate-pulse" />
            <span className="text-xs font-mono text-safe font-bold uppercase tracking-widest">
              SMART EVACUATION REFUGE NETWORK
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            SMART SHELTER NETWORK
          </h2>
          <p className="text-xs text-gray-300">
            Real-time shelter capacity progress rings, AI inflow overflow prediction, facility filters, and instant pre-registration.
          </p>
        </div>

        <div className="glass-card px-4 py-2 rounded-xl border border-white/10 text-right">
          <div className="text-xs font-mono text-gray-400">TOTAL NETWORK CAPACITY</div>
          <div className="text-xl font-bold text-safe font-mono">850 / 1,200 SPOTS OPEN</div>
        </div>
      </div>

      {/* Shelter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shelters.map((s) => {
          const occupancyPct = Math.round((s.current_occupancy / s.capacity) * 100);
          const isFull = occupancyPct >= 90;

          return (
            <div key={s.id} className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 shadow-xl hover:border-white/30 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{s.name}</h3>
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-info" />
                    <span>{s.address}</span>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${isFull ? 'bg-emergency/20 text-emergency' : 'bg-safe/20 text-safe'}`}>
                  {isFull ? 'FULL' : 'OPEN'}
                </span>
              </div>

              {/* Live Capacity Bar & Meter */}
              <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">OCCUPANCY METRICS</span>
                  <span className="font-bold text-white">{s.current_occupancy} / {s.capacity} ({occupancyPct}%)</span>
                </div>
                <div className="w-full bg-space-deep h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${occupancyPct > 80 ? 'bg-emergency' : occupancyPct > 50 ? 'bg-warning' : 'bg-safe'}`}
                    style={{ width: `${occupancyPct}%` }}
                  />
                </div>
              </div>

              {/* AI Inflow Prediction Badge */}
              <div className="bg-ai/10 border border-ai/30 rounded-xl p-2.5 text-xs text-ai font-mono flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-ai flex-shrink-0" />
                <span>AI FORECAST: {s.ai_prediction || 'Optimal capacity available for next 6 hours.'}</span>
              </div>

              {/* Facilities Tag Badges */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                {s.facilities?.food && <span className="px-2 py-0.5 bg-white/10 text-white rounded">🍱 FOOD</span>}
                {s.facilities?.water && <span className="px-2 py-0.5 bg-white/10 text-white rounded">💧 WATER</span>}
                {s.facilities?.medical && <span className="px-2 py-0.5 bg-white/10 text-white rounded">🏥 MEDICAL</span>}
                {s.facilities?.power && <span className="px-2 py-0.5 bg-white/10 text-white rounded">⚡ POWER</span>}
                {s.facilities?.pets && <span className="px-2 py-0.5 bg-white/10 text-white rounded">🐾 PETS ALLOWED</span>}
                {s.facilities?.wheelchair && <span className="px-2 py-0.5 bg-white/10 text-white rounded">♿ ACCESSIBLE</span>}
              </div>

              {/* Shelter Manager Slider (Authority Role) */}
              {(userRole === 'Authority' || userRole === 'First Responder') && (
                <div className="bg-space-deep p-3 rounded-xl border border-white/10 space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-info">
                    <span>SHELTER MANAGER OVERRIDE SLIDER</span>
                    <span>{s.current_occupancy} Occupants</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={s.capacity}
                    value={s.current_occupancy}
                    onChange={(e) => onUpdateOccupancy(s.id, Number(e.target.value))}
                    className="w-full accent-info cursor-pointer"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => handleRegister(s.id)}
                  disabled={isFull}
                  className="flex-1 btn-3d py-2.5 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-lg disabled:opacity-50"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>PRE-REGISTER SPOT ({s.pre_registered_count || 0} Registered)</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
