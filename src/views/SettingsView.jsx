import React, { useState } from 'react';
import { Settings, User, Bell, Shield, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export function SettingsView({ profile, userRole, setUserRole, onSaveProfile }) {
  const [fullName, setFullName] = useState(profile?.full_name || 'Cmdr. Alex Vance');
  const [phone, setPhone] = useState(profile?.phone || '+1 (555) 019-2834');
  const [quietHours, setQuietHours] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile({ fullName, phone });
    confetti({ particleCount: 40, spread: 50 });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-ai flex items-center justify-between shadow-xl">
        <div>
          <h2 className="text-2xl font-bold text-white font-heading uppercase">SYSTEM & PROFILE SETTINGS</h2>
          <p className="text-xs text-gray-300">Manage operational privileges, quiet hours override, and emergency telemetry preferences.</p>
        </div>
        <Settings className="w-8 h-8 text-ai" />
      </div>

      <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-ai" /> COMMAND PROFILE & PRIVILEGE ROLE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 block mb-1">Full Operator Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Phone Contact</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 pb-4">
            <h3 className="text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-safe" /> ACTIVE OPERATIONAL ROLE PRIVILEGE
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Citizen', 'Volunteer', 'Authority', 'First Responder'].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setUserRole(r)}
                  className={`p-3 rounded-xl border text-center font-bold text-xs transition-all ${
                    userRole === r ? 'bg-safe/20 border-safe text-white shadow-lg' : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase font-heading mb-3 flex items-center gap-2">
              <Bell className="w-4 h-4 text-warning" /> QUIET HOURS & OVERRIDE SENSITIVITY
            </h3>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="font-bold text-white">Enable Quiet Hours (10 PM - 7 AM)</div>
                <div className="text-[10px] text-gray-400">Critical Emergency (Red) Level Alerts will ALWAYS override quiet hours.</div>
              </div>
              <input
                type="checkbox"
                checked={quietHours}
                onChange={(e) => setQuietHours(e.target.checked)}
                className="w-5 h-5 accent-safe cursor-pointer"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-3d py-3 bg-gradient-to-r from-ai to-info text-white font-bold text-xs rounded-xl shadow-xl uppercase flex items-center justify-center space-x-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>SAVE PREFERENCES</span>
          </button>
        </form>
      </div>
    </div>
  );
}
