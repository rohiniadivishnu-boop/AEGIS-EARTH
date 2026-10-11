import React, { useState } from 'react';
import { BrainCircuit, Activity, CloudRain, Wind, Zap, Thermometer, ShieldAlert, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export function AIPredictionView() {
  const [selectedDisaster, setSelectedDisaster] = useState('flood');

  const predictions = [
    {
      id: 'flood',
      title: '72% Chance of Severe Atmospheric River Flooding',
      timeframe: 'Within Next 48 Hours',
      confidence: 91,
      severity: 'Emergency',
      reasoning: 'AI models detected strong atmospheric river moisture transport (IVT > 1000 kg/m/s) stalling over coastal river basins during spring high tide surge.',
      rainfall: '142 mm / 24h',
      wind: '42 knots SE',
      temp: '14°C',
      seismic: '0.1 Mag ambient',
      timeline: [
        { hour: '0h', risk: 35 },
        { hour: '12h', risk: 65 },
        { hour: '24h', risk: 92 },
        { hour: '36h', risk: 78 },
        { hour: '48h', risk: 40 }
      ]
    },
    {
      id: 'earthquake',
      title: '38% Probability of Moderate Tremor (M4.5+)',
      timeframe: 'Within Next 72 Hours',
      confidence: 76,
      severity: 'Watch',
      reasoning: 'Deep strain gauge telemetry along the Hayward Fault indicates micro-seismic swarm migration towards shallow fault asperities.',
      rainfall: '12 mm',
      wind: '14 knots',
      temp: '18°C',
      seismic: '4.2 Richter foreshock',
      timeline: [
        { hour: '0h', risk: 20 },
        { hour: '12h', risk: 55 },
        { hour: '24h', risk: 48 },
        { hour: '36h', risk: 30 },
        { hour: '48h', risk: 15 }
      ]
    },
    {
      id: 'wildfire',
      title: '64% Elevated Wildfire Flame Spread Danger',
      timeframe: 'Next 24 Hours',
      confidence: 88,
      severity: 'Warning',
      reasoning: 'Relative humidity dropping below 12% combined with Diablo wind gusts exceeding 45 mph across dry vegetation canopy.',
      rainfall: '0 mm',
      wind: '48 knots NW',
      temp: '32°C',
      seismic: '0.0 Mag',
      timeline: [
        { hour: '0h', risk: 40 },
        { hour: '12h', risk: 85 },
        { hour: '24h', risk: 90 },
        { hour: '36h', risk: 50 },
        { hour: '48h', risk: 20 }
      ]
    },
    {
      id: 'cyclone',
      title: '15% Tropical Storm System Trajectory Watch',
      timeframe: 'Next 5 Days',
      confidence: 82,
      severity: 'Advisory',
      reasoning: 'Low-pressure tropical wave maintaining warm sea surface temperature energy feed (SST 29.5°C).',
      rainfall: '45 mm',
      wind: '28 knots',
      temp: '26°C',
      seismic: '0.0 Mag',
      timeline: [
        { hour: '0h', risk: 10 },
        { hour: '12h', risk: 25 },
        { hour: '24h', risk: 40 },
        { hour: '36h', risk: 35 },
        { hour: '48h', risk: 15 }
      ]
    },
    {
      id: 'industrial',
      title: '98% Safe Standard Industrial Telemetry',
      timeframe: 'Stable Operations',
      confidence: 96,
      severity: 'Safe',
      reasoning: 'Chemical refinery sensors reporting zero volatile gas leakage and normal pressure vessel containment.',
      rainfall: '5 mm',
      wind: '10 knots',
      temp: '20°C',
      seismic: '0.0 Mag',
      timeline: [
        { hour: '0h', risk: 5 },
        { hour: '12h', risk: 5 },
        { hour: '24h', risk: 5 },
        { hour: '36h', risk: 5 },
        { hour: '48h', risk: 5 }
      ]
    }
  ];

  const activePred = predictions.find((p) => p.id === selectedDisaster) || predictions[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="w-5 h-5 text-ai animate-pulse" />
            <span className="text-xs font-mono text-ai font-bold uppercase tracking-widest">
              NEURAL DISASTER FORECAST SYSTEM
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            AI DISASTER PREDICTION ENGINE
          </h2>
          <p className="text-xs text-gray-300">
            Real-time satellite radar, seismic fault sensors, and deep learning meteorology models predicting disaster impact before occurrence.
          </p>
        </div>

        {/* AI Confidence Meter */}
        <div className="glass-card p-4 rounded-xl border border-ai/40 flex items-center space-x-4">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-ai/20 border-2 border-ai shadow-glow">
            <span className="text-xl font-extrabold text-ai font-mono">{activePred.confidence}%</span>
          </div>
          <div>
            <div className="text-[10px] font-mono text-gray-400 uppercase">MODEL CONFIDENCE SCORE</div>
            <div className="text-xs font-bold text-white">HIGH PRECISION MODEL</div>
            <div className="text-[10px] text-ai font-mono">100,000+ Data Nodes Synthesized</div>
          </div>
        </div>
      </div>

      {/* 5 Multi-Disaster Grid Monitors */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {predictions.map((p) => {
          const isSelected = selectedDisaster === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedDisaster(p.id)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-ai/20 border-ai text-white shadow-xl scale-105'
                  : 'bg-space-surface/80 border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                <span className="uppercase font-bold">{p.id}</span>
                <span className={`px-1.5 py-0.5 rounded font-bold ${
                  p.severity === 'Emergency' ? 'bg-emergency/20 text-emergency' :
                  p.severity === 'Warning' ? 'bg-warning/20 text-warning' :
                  p.severity === 'Watch' ? 'bg-alert/20 text-alert' : 'bg-safe/20 text-safe'
                }`}>
                  {p.severity}
                </span>
              </div>
              <div className="text-lg font-mono font-bold text-white">{p.confidence}%</div>
              <div className="text-[10px] text-gray-400 truncate mt-1">{p.title}</div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Prediction Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prediction Reasoning & Timeline Card */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-ai font-bold uppercase">{activePred.id} INSIGHT</span>
              <h3 className="text-lg font-bold text-white font-heading">{activePred.title}</h3>
            </div>
            <span className="px-3 py-1 bg-emergency/20 text-emergency border border-emergency/40 rounded-full text-xs font-mono font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activePred.timeframe}
            </span>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="text-xs font-bold text-ai font-mono flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4" /> AI SYNTHESIS & REASONING:
            </div>
            <p className="text-xs text-gray-200 leading-relaxed font-sans">{activePred.reasoning}</p>
          </div>

          {/* Visual Prediction Timeline */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white font-heading uppercase flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-info" /> PREDICTED RISK SURGE TIMELINE
              </span>
              <span className="text-[10px] text-gray-400 font-mono">PEAK AT +24 HOURS</span>
            </div>

            <div className="grid grid-cols-5 gap-2 pt-2">
              {activePred.timeline.map((t, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="w-full bg-space-deep h-32 rounded-xl p-1 relative flex items-end border border-white/10">
                    <div
                      className={`w-full rounded-lg transition-all duration-500 ${
                        t.risk > 75 ? 'bg-gradient-to-t from-emergency to-red-400' :
                        t.risk > 45 ? 'bg-gradient-to-t from-warning to-amber-400' : 'bg-gradient-to-t from-info to-blue-400'
                      }`}
                      style={{ height: `${t.risk}%` }}
                    />
                    <span className="absolute top-2 left-0 right-0 text-center text-[10px] font-mono font-bold text-white">
                      {t.risk}%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 font-semibold">{t.hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Weather Telemetry Integration & 10-Year History */}
        <div className="space-y-6">
          <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase font-heading flex items-center gap-1.5 border-b border-white/10 pb-3">
              <Activity className="w-4 h-4 text-safe" /> REALTIME TELEMETRY FEED
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <CloudRain className="w-4 h-4 text-info" />
                  <span>RAINFALL</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">{activePred.rainfall}</div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Wind className="w-4 h-4 text-safe" />
                  <span>WIND SPEED</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">{activePred.wind}</div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Zap className="w-4 h-4 text-warning" />
                  <span>SEISMIC</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">{activePred.seismic}</div>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Thermometer className="w-4 h-4 text-emergency" />
                  <span>TEMP</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">{activePred.temp}</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3">
            <div className="text-xs font-bold text-white uppercase font-heading border-b border-white/10 pb-2">
              10-YEAR HISTORICAL PATTERN ANALYSIS
            </div>
            <p className="text-[11px] text-gray-300">
              Bay Area atmospheric river floods recur on average every 3.2 years during La Niña winters.
            </p>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-[10px] font-mono text-ai space-y-1">
              <div>• 2023: 120mm Atmospheric River (Severe)</div>
              <div>• 2019: 98mm Cresting Surge (Moderate)</div>
              <div>• 2017: 154mm Flash Flood Event (Critical)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
