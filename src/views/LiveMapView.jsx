import React, { useState } from 'react';
import { Layers, Play, Pause, RotateCcw, MapPin, Eye, Flame, Waves, AlertTriangle, ShieldCheck, Home, Truck, Activity, Globe } from 'lucide-react';

export function LiveMapView({ shelters, reports, alerts }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeStep, setTimeStep] = useState(24);
  const [activeLayers, setActiveLayers] = useState({
    shelters: true,
    dangerZones: true,
    rescueTeams: true,
    blockedRoads: true,
    heatmaps: true
  });
  const [selectedMarker, setSelectedMarker] = useState(null);

  const toggleLayer = (layerKey) => {
    setActiveLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  const markers = [
    { id: 'm1', type: 'shelter', title: 'Civic Auditorium Shelter', lat: 37.778, lng: -122.417, status: 'Open (342/500 Occupied)', color: 'bg-safe', icon: Home },
    { id: 'm2', type: 'dangerZone', title: 'Low-Lying Coastal Flood Zone', lat: 37.769, lng: -122.446, status: 'Active Inundation - Lvl 4', color: 'bg-emergency', icon: Waves },
    { id: 'm3', type: 'rescueTeam', title: 'Alpha Water Rescue Unit', lat: 37.768, lng: -122.438, status: 'En Route to SOS Mission', color: 'bg-info', icon: Activity },
    { id: 'm4', type: 'blockedRoad', title: 'Market St Sector 3 Blocked', lat: 37.785, lng: -122.415, status: 'Impassable Water & Debris', color: 'bg-warning', icon: AlertTriangle }
  ];

  return (
    <div className="space-y-4">
      {/* Top Map Control Bar */}
      <div className="glass-panel rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-white/10 shadow-xl">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-info animate-bounce" />
          <div>
            <h2 className="text-base font-bold text-white font-heading uppercase">3D TACTICAL DISASTER MAP</h2>
            <div className="text-[10px] text-gray-400 font-mono">REAL-TIME ELEVATION & HAZARD LAYERS</div>
          </div>
        </div>

        {/* Layer Toggles */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-gray-400 text-[10px] mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> LAYERS:
          </span>
          {[
            { key: 'shelters', label: 'Shelters', color: 'text-safe' },
            { key: 'dangerZones', label: 'Danger Zones', color: 'text-emergency' },
            { key: 'rescueTeams', label: 'Rescue Teams', color: 'text-info' },
            { key: 'blockedRoads', label: 'Blocked Roads', color: 'text-warning' },
            { key: 'heatmaps', label: '3D Heat Domes', color: 'text-ai' }
          ].map(l => (
            <button
              key={l.key}
              onClick={() => toggleLayer(l.key)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                activeLayers[l.key]
                  ? 'bg-white/15 border-white/30 text-white font-bold'
                  : 'bg-white/5 border-white/10 text-gray-500 line-through'
              }`}
            >
              <span className={l.color}>{l.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas Map Frame */}
      <div className="relative w-full h-[520px] rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl bg-gradient-to-b from-[#091026] via-[#0b1739] to-[#080d21]">
        {/* Procedural Grid & Elevation Lines Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4da8ff 1px, transparent 1px), radial-gradient(#ff3b5c 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />

        {/* 3D Heat Dome Overlay Graphic */}
        {activeLayers.heatmaps && (
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-emergency/20 blur-3xl animate-pulse pointer-events-none" />
        )}
        {activeLayers.heatmaps && (
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-warning/20 blur-3xl animate-pulse pointer-events-none" />
        )}

        {/* Simulated Map Markers */}
        <div className="absolute inset-0 p-8 flex items-center justify-center">
          <div className="relative w-full h-full border border-white/10 rounded-2xl bg-black/30 backdrop-blur-xs flex items-center justify-center">
            <div className="text-center space-y-2 pointer-events-none">
              <div className="text-xs font-mono text-info tracking-widest uppercase">
                TACTICAL 3D HIGH-RESOLUTION GRID OPERATIONAL
              </div>
              <div className="text-sm font-bold text-gray-300">
                Lat: 37.7749° N | Lng: -122.4194° W | Elev: 16m
              </div>
            </div>

            {/* Render Map Markers */}
            {markers.map(m => {
              if (!activeLayers[m.type] && m.type !== 'dangerZone') return null;
              if (m.type === 'dangerZone' && !activeLayers.dangerZones) return null;

              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMarker(m)}
                  className={`absolute btn-3d p-2 rounded-xl border border-white/30 ${m.color} text-white shadow-2xl flex items-center space-x-2 transition-transform hover:scale-110`}
                  style={{
                    top: m.id === 'm1' ? '25%' : m.id === 'm2' ? '55%' : m.id === 'm3' ? '40%' : '70%',
                    left: m.id === 'm1' ? '30%' : m.id === 'm2' ? '60%' : m.id === 'm3' ? '45%' : '75%'
                  }}
                >
                  <Icon className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold hidden sm:inline">{m.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Marker Popup Detail */}
        {selectedMarker && (
          <div className="absolute bottom-16 left-6 max-w-sm w-full glass-panel border-glow-ai rounded-2xl p-4 space-y-2 shadow-2xl z-30 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="text-xs font-bold text-white font-heading">{selectedMarker.title}</div>
              <button onClick={() => setSelectedMarker(null)} className="text-xs text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="text-xs text-gray-300">{selectedMarker.status}</div>
            <div className="text-[10px] font-mono text-ai">Lat: {selectedMarker.lat} | Lng: {selectedMarker.lng}</div>
          </div>
        )}

        {/* Mini Globe Context Widget */}
        <div className="absolute top-4 right-4 glass-card p-3 rounded-2xl border border-white/20 flex items-center space-x-3 shadow-xl">
          <Globe className="w-6 h-6 text-ai animate-spin" style={{ animationDuration: '12s' }} />
          <div>
            <div className="text-[10px] font-mono text-gray-400">GLOBAL CONTEXT</div>
            <div className="text-xs font-bold text-white">PACIFIC SECTOR</div>
          </div>
        </div>

        {/* 24-Hour Time-Lapse Playback Bar */}
        <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-2xl p-3 flex items-center space-x-4 border border-white/20 shadow-2xl">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-info/20 text-info border border-info/40 rounded-xl hover:bg-info/30 text-xs font-bold flex items-center space-x-1"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPlaying ? 'PAUSE' : 'PLAY 24H EVOLUTION'}</span>
          </button>

          <div className="flex-1 flex items-center space-x-3">
            <span className="text-[10px] font-mono text-gray-400">-24 Hours</span>
            <input
              type="range"
              min="0"
              max="24"
              value={timeStep}
              onChange={(e) => setTimeStep(Number(e.target.value))}
              className="flex-1 accent-info cursor-pointer"
            />
            <span className="text-[10px] font-mono text-info font-bold">T+{timeStep}h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
