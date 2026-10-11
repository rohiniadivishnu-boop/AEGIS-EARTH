import React from 'react';
import {
  LayoutDashboard,
  BrainCircuit,
  MapPin,
  AlertTriangle,
  Camera,
  Home,
  ShoppingBag,
  Navigation,
  LifeBuoy,
  MessageSquare,
  Wrench,
  Settings
} from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab, userRole }) {
  const tabs = [
    { id: 'dashboard', label: 'My Safe Zone', icon: LayoutDashboard, badge: null },
    { id: 'prediction', label: 'AI Risk Engine', icon: BrainCircuit, badge: 'AI' },
    { id: 'live-map', label: '3D Disaster Map', icon: MapPin, badge: 'LIVE' },
    { id: 'alerts', label: 'Emergency Alerts', icon: AlertTriangle, badge: '3' },
    { id: 'report', label: 'Report Incident', icon: Camera, badge: 'AR' },
    { id: 'shelters', label: 'Shelter Network', icon: Home, badge: null },
    { id: 'relief', label: 'Relief Marketplace', icon: ShoppingBag, badge: null },
    { id: 'evacuation', label: 'Evacuation AI', icon: Navigation, badge: null },
    {
      id: 'rescue',
      label: 'Rescue Dispatch',
      icon: LifeBuoy,
      badge: 'REQ',
      roleRestricted: ['Authority', 'First Responder']
    },
    { id: 'community', label: 'The Pulse Feed', icon: MessageSquare, badge: null },
    { id: 'recovery', label: 'Damage & Recovery', icon: Wrench, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null }
  ];

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-16 bottom-0 w-64 glass-panel border-r border-white/10 z-30 py-3 px-3 overflow-y-auto space-y-1 pointer-events-auto">
        <div className="px-2 pb-1.5 text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
          NAVIGATION COMMAND
        </div>

        {tabs.map((tab) => {
          if (tab.roleRestricted && !tab.roleRestricted.includes(userRole)) {
            return null;
          }
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-xs transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-info/25 via-space-surface to-info/10 text-white border border-info/40 shadow-lg font-semibold scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-2.5 truncate">
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-info' : 'text-gray-400'}`} />
                <span className="truncate">{tab.label}</span>
              </div>

              {tab.badge && (
                <span
                  className={`px-1.5 py-0.5 text-[9px] font-mono rounded font-bold flex-shrink-0 ml-1 ${
                    tab.badge === 'AI'
                      ? 'bg-ai/20 text-ai border border-ai/30'
                      : tab.badge === 'LIVE'
                      ? 'bg-emergency/20 text-emergency border border-emergency/30 animate-pulse'
                      : 'bg-info/20 text-info border border-info/30'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="pt-4 px-2 mt-auto">
          <div className="glass-card p-3 rounded-xl border border-white/15 text-center bg-space-deep/80">
            <div className="text-[10px] font-mono text-gray-400">ROLE PRIVILEGE</div>
            <div className="text-xs font-extrabold text-ai mt-0.5">{userRole.toUpperCase()}</div>
            <div className="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              SECURE SESSION
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 z-40 px-2 py-2 flex items-center justify-around overflow-x-auto bg-space-deep/90 pointer-events-auto">
        {tabs.slice(0, 5).map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-1.5 rounded-lg text-[10px] font-medium transition-all ${
                isActive ? 'text-info font-bold scale-105' : 'text-gray-400'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{tab.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
