import React, { useState } from 'react';
import { Navigation, ShieldCheck, MapPin, AlertTriangle, ArrowRight, Download, RefreshCw, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export function EvacuationView() {
  const [origin, setOrigin] = useState('Financial District, SF');
  const [destination, setDestination] = useState('High School Gymnasium Shelter');
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCached, setIsCached] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      confetti({ particleCount: 40, spread: 50 });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-info flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Navigation className="w-5 h-5 text-info animate-pulse" />
            <span className="text-xs font-mono text-info font-bold uppercase tracking-widest">
              DYNAMIC HAZARD-AVOIDANCE ROUTING
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            EVACUATION INTELLIGENCE
          </h2>
          <p className="text-xs text-gray-300">
            AI pathfinding avoiding flooded roads, earthquake collapse zones, and wildfire smoke plumes, ranked by safety index.
          </p>
        </div>

        <button
          onClick={() => setIsCached(!isCached)}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center space-x-2 ${
            isCached ? 'bg-safe/20 text-safe border-safe/40' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>{isCached ? 'ROUTE SAVED OFFLINE' : 'CACHE ROUTE FOR OFFLINE USE'}</span>
        </button>
      </div>

      {/* Input Form & AI Calculations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Planner Card */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-info" /> EVACUATION PATHFINDER
          </h3>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs">
            <div>
              <label className="text-gray-300 block mb-1">Current Origin Location</label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-info" />
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 block mb-1">Target Refuge Shelter</label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-safe" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isCalculating}
              className="w-full btn-3d py-3 bg-gradient-to-r from-info via-ai to-safe text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase"
            >
              {isCalculating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
              <span>{isCalculating ? 'COMPUTING HAZARD PATHWAYS...' : 'CALCULATE OPTIMAL SAFE ROUTE'}</span>
            </button>
          </form>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-[11px] space-y-1.5 text-gray-300">
            <div className="font-bold text-warning flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> DANGER SECTORS AVOIDED:
            </div>
            <div>• Market St Sector 3 (Flooded 3ft water)</div>
            <div>• 5th Ave Overpass (Structural Crack Warning)</div>
          </div>
        </div>

        {/* 3D Route Display */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-safe font-bold">RECOMMENDED SAFE ROUTE #1</span>
              <h3 className="text-base font-bold text-white font-heading">{origin} ➔ {destination}</h3>
            </div>
            <div className="text-right">
              <div className="text-xl font-mono font-extrabold text-safe">96/100</div>
              <div className="text-[10px] font-mono text-gray-400">SAFETY SCORE</div>
            </div>
          </div>

          {/* 3D Glowing Path Visualization Canvas Frame */}
          <div className="relative w-full h-64 rounded-2xl bg-black/60 border border-info/40 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-info/10 via-transparent to-safe/10 pointer-events-none" />

            {/* Glowing Path Line */}
            <svg className="absolute inset-0 w-full h-full stroke-current text-safe" style={{ filter: 'drop-shadow(0 0 8px rgba(0,217,163,0.8))' }}>
              <path d="M 50,180 Q 150,50 300,120 T 550,60" fill="none" strokeWidth="4" strokeDasharray="8 4" className="animate-pulse" />
            </svg>

            {/* Waypoints */}
            <div className="absolute left-10 bottom-10 glass-card p-2 rounded-xl text-[10px] font-mono text-white flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-info animate-ping" /> START: FINANCIAL DISTRICT
            </div>
            <div className="absolute right-10 top-10 glass-card p-2 rounded-xl text-[10px] font-mono text-safe flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-safe" /> DEST: REFUGE SHELTER
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-gray-400">ESTIMATED TIME</div>
              <div className="text-lg font-mono font-bold text-white">14 MIN</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-gray-400">TOTAL DISTANCE</div>
              <div className="text-lg font-mono font-bold text-white">4.2 KM</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-gray-400">HAZARD INDEX</div>
              <div className="text-lg font-mono font-bold text-safe">MINIMAL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
