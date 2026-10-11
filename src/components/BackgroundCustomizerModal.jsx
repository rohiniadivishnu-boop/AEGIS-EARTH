import React from 'react';
import { Palette, Globe, Cpu, Flame, Sparkles, Eye, RotateCw, X, Sliders, Check } from 'lucide-react';

export function BackgroundCustomizerModal({
  isOpen,
  onClose,
  bgTheme,
  setBgTheme,
  bgIntensity,
  setBgIntensity,
  autoRotate,
  setAutoRotate
}) {
  if (!isOpen) return null;

  const themes = [
    {
      id: 'orbital',
      name: 'Orbital Satellite Earth',
      desc: 'Cinematic Blue Marble globe with real rotating clouds, city night lights, and atmospheric halo',
      icon: Globe,
      color: 'from-blue-500/20 to-cyan-500/20 border-cyan-400/40 text-cyan-300'
    },
    {
      id: 'cyber_hologram',
      name: 'Cyber Hologram Matrix',
      desc: 'Futuristic tactical wireframe globe, topographic HUD elevation contours, and radar sweep',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-400/40 text-emerald-300'
    },
    {
      id: 'disaster_recon',
      name: 'Thermal IR Satellite Recon',
      desc: 'Infrared satellite thermography with thermal anomaly highlights and hazard thermal grid',
      icon: Flame,
      color: 'from-rose-500/20 to-red-500/20 border-rose-400/40 text-rose-300'
    },
    {
      id: 'aurora_cosmic',
      name: 'Cosmic Aurora Matrix',
      desc: 'Deep space starfield with undulating polar auroral waves and luminous interstellar dust',
      icon: Sparkles,
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-400/40 text-purple-300'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-lg rounded-3xl border border-white/20 p-6 shadow-2xl space-y-5 bg-[#0b122c]/95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-ai/20 text-ai border border-ai/40">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading uppercase tracking-wide">
                3D BACKGROUND & VISUAL THEME
              </h3>
              <p className="text-[11px] text-gray-400 font-mono">
                CUSTOMIZE 3D CANVAS, EARTH VISUALS & EFFECTS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme Grid */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-300 font-semibold uppercase flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-info" /> SELECT 3D EARTH STYLE
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {themes.map((t) => {
              const Icon = t.icon;
              const isSelected = bgTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setBgTheme(t.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? `bg-gradient-to-br ${t.color} border-2 shadow-xl scale-[1.02]`
                      : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {isSelected && (
                      <span className="p-1 rounded-full bg-white/20 text-white">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-heading">{t.name}</div>
                    <div className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {t.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliders & Controls */}
        <div className="space-y-4 pt-2 border-t border-white/10">
          {/* Intensity / Brightness */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-info" /> BACKGROUND INTENSITY:
              </span>
              <span className="font-bold text-info">{Math.round(bgIntensity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.3"
              max="1.0"
              step="0.05"
              value={bgIntensity}
              onChange={(e) => setBgIntensity(parseFloat(e.target.value))}
              className="w-full accent-[#4DA8FF] cursor-pointer h-1.5 bg-space-deep rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-500">
              <span>Subtle (30%)</span>
              <span>Balanced (65%)</span>
              <span>Vivid (100%)</span>
            </div>
          </div>

          {/* Auto Rotation Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center space-x-2.5">
              <RotateCw className={`w-4 h-4 text-info ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <div>
                <div className="text-xs font-bold text-white">EARTH AUTO-ORBIT ROTATION</div>
                <div className="text-[10px] text-gray-400">Smooth 3D planetary rotation in background</div>
              </div>
            </div>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all border ${
                autoRotate
                  ? 'bg-safe/20 text-safe border-safe/40 shadow-glow'
                  : 'bg-white/10 text-gray-400 border-white/15'
              }`}
            >
              {autoRotate ? 'ACTIVE' : 'PAUSED'}
            </button>
          </div>

          <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5 bg-info/10 border border-info/20 p-2.5 rounded-xl">
            <Eye className="w-4 h-4 text-info flex-shrink-0" />
            <span>Pro-tip: Click & drag anywhere to spin the 3D Earth, or use the mouse scroll wheel to zoom in/out!</span>
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-gradient-to-r from-info to-blue-600 text-white font-bold text-xs rounded-xl shadow-xl hover:opacity-95 transition-all uppercase tracking-wider"
        >
          APPLY BACKGROUND THEME
        </button>
      </div>
    </div>
  );
}
