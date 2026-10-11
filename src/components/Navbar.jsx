import React from 'react';
import {
  Shield,
  Radio,
  Volume2,
  VolumeX,
  AlertTriangle,
  UserCheck,
  Flame,
  Waves,
  Activity,
  Wind,
  Sun,
  Palette,
  Server,
  Sparkles
} from 'lucide-react';
import { soundFX } from '../services/soundEffects';

export function Navbar({
  activeMode,
  setActiveMode,
  userRole,
  setUserRole,
  onTriggerAlert,
  onOpenLogin,
  onOpenBgCustomizer,
  bgTheme = 'orbital',
  backendStatus = { online: true, latency: 15 },
  metrics,
  audioEnabled,
  setAudioEnabled
}) {
  const modes = [
    { id: 'earth', label: 'Global Earth', icon: Activity, activeClass: 'bg-info/30 text-info border-info/50 shadow-glow' },
    { id: 'flood', label: 'Flood', icon: Waves, activeClass: 'bg-blue-600/30 text-blue-400 border-blue-400/60 shadow-glow' },
    { id: 'earthquake', label: 'Earthquake', icon: AlertTriangle, activeClass: 'bg-amber-600/30 text-amber-400 border-amber-400/60 shadow-glow' },
    { id: 'wildfire', label: 'Wildfire', icon: Flame, activeClass: 'bg-red-600/30 text-red-400 border-red-400/60 shadow-glow' },
    { id: 'cyclone', label: 'Cyclone', icon: Wind, activeClass: 'bg-emerald-600/30 text-emerald-400 border-emerald-400/60 shadow-glow' },
    { id: 'recovery', label: 'Recovery', icon: Sun, activeClass: 'bg-yellow-500/30 text-yellow-300 border-yellow-300/60 shadow-glow' }
  ];

  const roles = ['Citizen', 'Volunteer', 'Authority', 'First Responder'];

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
    if (audioEnabled) soundFX.playModeSwitch();
  };

  const handleAlertTrigger = () => {
    if (audioEnabled) soundFX.playAlertEmergency();
    onTriggerAlert();
  };

  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    soundFX.enabled = nextState;
    if (nextState) soundFX.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-40 glass-panel border-b border-white/10 px-3 md:px-5 py-2 flex items-center justify-between gap-2.5 bg-space-deep/85 backdrop-blur-xl">
      {/* Brand Header */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emergency/30 via-info/30 to-ai/30 border border-white/20 shadow-lg group">
          <Shield className="w-5 h-5 text-info animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emergency" />
          </span>
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <h1 className="text-sm md:text-base font-bold tracking-wider text-white uppercase font-heading">
              AEGIS EARTH
            </h1>
            <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-widest bg-ai/20 text-ai border border-ai/30 rounded-full font-semibold">
              v4.2 PRO
            </span>
          </div>
          <p className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
            <Radio className="w-3 h-3 text-safe animate-pulse" />
            MULTI-DISASTER COMMAND
          </p>
        </div>
      </div>

      {/* Real-time Backend Health Telemetry Pill */}
      <div className="hidden lg:flex items-center px-3 py-1 rounded-full border text-[11px] font-mono shadow-inner transition-all space-x-2 bg-space-surface/90 border-white/10">
        <Server className="w-3.5 h-3.5 text-info" />
        {backendStatus?.online ? (
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold">BACKEND ONLINE</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">PORT 5000</span>
            {backendStatus.latency && (
              <span className="text-cyan-400 text-[10px]">({backendStatus.latency}ms)</span>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-1.5 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>STANDALONE CLIENT MODE</span>
          </div>
        )}
      </div>

      {/* Live World Telemetry Ticker */}
      <div className="hidden 2xl:flex items-center bg-space-surface/90 border border-white/10 rounded-full px-4 py-1 space-x-3 text-[11px] font-mono shadow-inner">
        <div className="flex items-center space-x-1 text-emergency font-semibold">
          <span className="w-2 h-2 rounded-full bg-emergency animate-ping" />
          <span>{metrics.active_reports || 1247} Active Reports</span>
        </div>
        <span className="text-gray-600">|</span>
        <div className="flex items-center space-x-1 text-safe">
          <span>{metrics.open_shelters || 89} Shelters</span>
        </div>
        <span className="text-gray-600">|</span>
        <div className="flex items-center space-x-1 text-info">
          <span>{metrics.deployed_volunteers || 3412} Volunteers</span>
        </div>
      </div>

      {/* Mode Morphing Switcher & Interactive Controls */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        {/* Disaster Mode Selector */}
        <div className="flex items-center bg-space-surface/90 border border-white/15 rounded-xl p-1 space-x-1 shadow-lg">
          {modes.map((m) => {
            const Icon = m.icon;
            const isActive = activeMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleModeChange(m.id)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  isActive
                    ? `${m.activeClass} scale-105 shadow-md`
                    : 'bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-white/10'
                }`}
                title={`Morph 3D background to ${m.label} mode`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden xl:inline">{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Background Theme Customizer Quick Button */}
        <button
          onClick={() => {
            if (audioEnabled) soundFX.playClick();
            onOpenBgCustomizer();
          }}
          className="btn-3d px-2.5 py-1.5 bg-gradient-to-r from-ai/25 to-info/25 text-white border border-ai/40 rounded-xl text-xs font-bold hover:bg-ai/35 transition-all flex items-center space-x-1.5 shadow-md"
          title="Customize 3D Earth Background & Theme"
        >
          <Palette className="w-3.5 h-3.5 text-ai" />
          <span className="hidden sm:inline">BG THEME</span>
        </button>

        {/* Role Selector Dropdown */}
        <div className="hidden sm:flex items-center bg-space-surface/90 border border-white/15 rounded-xl px-2 py-1 space-x-1 shadow-lg">
          <UserCheck className="w-4 h-4 text-ai" />
          <select
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value);
              if (audioEnabled) soundFX.playClick();
            }}
            className="bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer pr-1"
          >
            {roles.map((r) => (
              <option key={r} value={r} className="bg-space-deep text-white">
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Login / Profile Button */}
        <button
          onClick={() => {
            if (audioEnabled) soundFX.playClick();
            onOpenLogin();
          }}
          className="px-3 py-1.5 bg-white/10 text-white border border-white/20 rounded-xl text-xs font-extrabold hover:bg-white/20 transition-all flex items-center space-x-1 shadow-md"
        >
          <span>LOGIN</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleAudio}
          className={`p-2 rounded-xl border transition-all ${
            audioEnabled
              ? 'bg-info/20 text-info border-info/40 shadow-glow'
              : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
          }`}
          title={audioEnabled ? 'Mute Tactical Audio' : 'Enable Tactical Audio'}
        >
          {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Trigger Emergency Alert Test */}
        <button
          onClick={handleAlertTrigger}
          className="btn-3d btn-ripple px-3 py-1.5 text-xs font-extrabold bg-gradient-to-r from-emergency to-red-600 text-white rounded-xl shadow-lg border border-emergency/40 flex items-center space-x-1 animate-pulse"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">TEST SOS</span>
        </button>
      </div>
    </header>
  );
}
