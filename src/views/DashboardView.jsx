import React from 'react';
import { ShieldCheck, AlertTriangle, Home, Camera, LifeBuoy, Users, PhoneCall, Award, Activity, Heart, ArrowUpRight, Navigation } from 'lucide-react';

export function DashboardView({ profile, onNavigate, alerts, reports }) {
  const safetyScore = profile?.safety_score || 96;
  const locationName = profile?.locationName || 'Vijayawada, Andhra Pradesh, India';

  const contacts = profile?.emergency_contacts || [
    { name: 'AP State Disaster Helpline (APSDRF)', phone: '1070 / +91 863 2377107', relation: 'State Emergency Control' },
    { name: 'Vijayawada Collectorate Control Room', phone: '+91 866 2474999', relation: 'District Command' },
    { name: 'Govt General Hospital Vijayawada', phone: '+91 94401 88220', relation: 'Emergency Medical' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-info flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-safe animate-ping" />
            <span className="text-xs font-mono text-safe uppercase font-bold tracking-widest">
              ACTIVE TELEMETRY MONITORED
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            MY SAFE ZONE COMMAND — {locationName}
          </h2>
          <p className="text-xs text-gray-300">
            Real-time Krishna river basin flood risk, Prakasam barrage surge, emergency action triggers, and preparedness telemetry.
          </p>
        </div>

        {/* Safety Score Gauge */}
        <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center space-x-4">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-safe/20 to-info/20 border border-safe/40 shadow-inner">
            <span className="text-xl font-extrabold text-white font-mono">{safetyScore}%</span>
          </div>
          <div>
            <div className="text-[10px] font-mono text-gray-400 uppercase">SAFETY PREPAREDNESS SCORE</div>
            <div className="text-xs font-bold text-safe">HIGHLY PROTECTED</div>
            <div className="text-[10px] text-gray-400 mt-0.5">Contacts verified • Shelter pre-registered</div>
          </div>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'REPORT INCIDENT', icon: Camera, color: 'from-emergency to-red-600', action: () => onNavigate('report') },
          { label: 'FIND NEARBY SHELTER', icon: Home, color: 'from-info to-blue-600', action: () => onNavigate('shelters') },
          { label: 'EVACUATION ROUTE', icon: Navigation, color: 'from-warning to-amber-600', action: () => onNavigate('evacuation') },
          { label: 'VOLUNTEER MISSIONS', icon: Users, color: 'from-ai to-purple-600', action: () => onNavigate('relief') }
        ].map((act, i) => {
          const Icon = act.icon;
          return (
            <button
              key={i}
              onClick={act.action}
              className={`btn-3d btn-ripple p-4 bg-gradient-to-r ${act.color} text-white rounded-2xl shadow-lg border border-white/20 text-left space-y-2 group`}
            >
              <div className="flex justify-between items-center">
                <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
              <div className="text-xs font-extrabold font-heading tracking-wide uppercase">{act.label}</div>
            </button>
          );
        })}
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Zone Risk Status */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-emergency" />
              <h3 className="text-sm font-bold text-white uppercase font-heading">VIJAYAWADA RISK METRICS</h3>
            </div>
            <span className="text-[10px] font-mono text-warning bg-warning/20 px-2 py-0.5 rounded-full border border-warning/30">
              ELEVATED
            </span>
          </div>

          <div className="space-y-3">
            {[
              { type: 'Krishna River Flood Risk', level: '72%', status: 'Prakasam Barrage Surge (High)', color: 'bg-emergency' },
              { type: 'Cyclone & Wind Risk', level: '45%', status: 'Bay of Bengal Storm (Watch)', color: 'bg-warning' },
              { type: 'Seismic Tremor Risk', level: '12%', status: 'Stable Crust (Low Advisory)', color: 'bg-safe' }
            ].map((r, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-gray-200">{r.type}</span>
                  <span className="font-mono font-bold text-white">{r.level}</span>
                </div>
                <div className="w-full bg-space-deep h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${r.color}`} style={{ width: r.level }} />
                </div>
                <div className="text-[10px] text-gray-400 font-mono text-right">{r.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Impact & Missions */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-ai" />
              <h3 className="text-sm font-bold text-white uppercase font-heading">COMMUNITY IMPACT</h3>
            </div>
            <span className="text-[10px] font-mono text-ai bg-ai/20 px-2 py-0.5 rounded-full border border-ai/30">
              LVL 4 RESCUER
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="glass-card p-3 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-ai font-mono">280</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">PEOPLE HELPED</div>
            </div>
            <div className="glass-card p-3 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-safe font-mono">24</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">MISSIONS COMPLETED</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10 space-y-2">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>CURRENT MISSION ASSIGNMENT</span>
              <span className="text-[10px] text-info font-mono">EN ROUTE</span>
            </div>
            <p className="text-xs text-gray-300">
              APSDRF 10th Battalion — Clean drinking water distribution & power rescue boat deployment at Singh Nagar, Vijayawada.
            </p>
          </div>
        </div>

        {/* Emergency Contacts Quick-Dial */}
        <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <PhoneCall className="w-5 h-5 text-safe" />
              <h3 className="text-sm font-bold text-white uppercase font-heading">EMERGENCY HELPLINES</h3>
            </div>
            <button
              onClick={() => onNavigate('settings')}
              className="text-[10px] font-mono text-info hover:underline"
            >
              + EDIT CONTACTS
            </button>
          </div>

          <div className="space-y-2">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="text-[10px] text-gray-400">{c.relation} • {c.phone}</div>
                </div>
                <a
                  href={`tel:${c.phone}`}
                  className="px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-lg text-xs font-bold hover:bg-safe/30 flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>DIAL</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
