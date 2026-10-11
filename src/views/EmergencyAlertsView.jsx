import React, { useState } from 'react';
import { AlertTriangle, Plus, ShieldAlert, CheckCircle, Clock, BellRing, Send } from 'lucide-react';

export function EmergencyAlertsView({ alerts, userRole, onCreateAlert }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newType, setNewType] = useState('flood');
  const [newSeverity, setNewSeverity] = useState('Emergency');
  const [newArea, setNewArea] = useState('Bay Area & Coastal Zone 4');
  const [newMessage, setNewMessage] = useState('CRITICAL: Atmospheric river cresting riverbank. Move to higher ground immediately.');
  const [newEta, setNewEta] = useState('2 Hours');

  const handleCreate = (e) => {
    e.preventDefault();
    onCreateAlert({
      type: newType,
      severity: newSeverity,
      affected_area: newArea,
      message: newMessage,
      eta: newEta,
      status: 'active'
    });
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <BellRing className="w-5 h-5 text-emergency animate-pulse" />
            <span className="text-xs font-mono text-emergency font-bold uppercase tracking-widest">
              BROADCAST COMMAND CENTER
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            EMERGENCY ALERT SYSTEM
          </h2>
          <p className="text-xs text-gray-300">
            Real-time geofenced broadcast warnings categorized by severity: Advisory (blue), Watch (yellow), Warning (orange), Emergency (red).
          </p>
        </div>

        {(userRole === 'Authority' || userRole === 'First Responder') && (
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-3d px-4 py-2.5 bg-gradient-to-r from-emergency to-red-600 text-white font-bold text-xs rounded-xl flex items-center space-x-2 shadow-xl border border-emergency/40"
          >
            <Plus className="w-4 h-4" />
            <span>DISPATCH BROADCAST ALERT</span>
          </button>
        )}
      </div>

      {/* Alert Feed Grid */}
      <div className="space-y-4">
        {alerts.map((a) => {
          const isEmergency = a.severity === 'Emergency';
          const isWarning = a.severity === 'Warning';
          const isWatch = a.severity === 'Watch';

          const borderColor = isEmergency
            ? 'border-glow-emergency'
            : isWarning
            ? 'border-glow-warning'
            : isWatch
            ? 'border-amber-500/40'
            : 'border-info/40';

          const badgeBg = isEmergency
            ? 'bg-emergency text-white'
            : isWarning
            ? 'bg-warning text-white'
            : isWatch
            ? 'bg-alert text-space-deep'
            : 'bg-info text-white';

          return (
            <div key={a.id} className={`glass-panel rounded-2xl p-5 border ${borderColor} space-y-3 shadow-xl`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${badgeBg}`}>
                    {a.severity}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading uppercase">
                    {a.type} DISASTER ALERT
                  </h3>
                </div>
                <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-info" />
                  <span>ETA: <strong className="text-white">{a.eta}</strong></span>
                </div>
              </div>

              <div className="text-xs font-mono text-gray-300">
                AFFECTED AREA: <strong className="text-white">{a.affected_area}</strong>
              </div>

              <p className="text-sm text-gray-200 leading-relaxed font-sans">{a.message}</p>

              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 pt-2 border-t border-white/5">
                <span>ISSUED: {new Date(a.created_at).toLocaleString()}</span>
                <span className="text-safe flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> VERIFIED BY AEGIS AUTHORITY
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Authority Dispatch Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-deep/90 backdrop-blur-md">
          <div className="glass-panel border-glow-emergency rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-emergency" /> DISPATCH EMERGENCY BROADCAST
              </h3>
              <button onClick={() => setShowCreateModal(false)} className="text-xs text-gray-400">✕</button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 block mb-1">Disaster Category</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                >
                  <option value="flood">Flood Inundation</option>
                  <option value="earthquake">Seismic Tremor</option>
                  <option value="wildfire">Wildfire Propagation</option>
                  <option value="cyclone">Cyclone / Storm Surge</option>
                  <option value="industrial">Industrial Chemical Event</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Severity Level</label>
                  <select
                    value={newSeverity}
                    onChange={(e) => setNewSeverity(e.target.value)}
                    className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="Advisory">Advisory (Blue)</option>
                    <option value="Watch">Watch (Yellow)</option>
                    <option value="Warning">Warning (Orange)</option>
                    <option value="Emergency">Emergency (Red)</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Estimated Impact ETA</label>
                  <input
                    type="text"
                    value={newEta}
                    onChange={(e) => setNewEta(e.target.value)}
                    className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Affected Area / Geofence</label>
                <input
                  type="text"
                  value={newArea}
                  onChange={(e) => setNewArea(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Emergency Warning Message</label>
                <textarea
                  rows={3}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-3d py-3 bg-gradient-to-r from-emergency to-red-600 text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>BROADCAST IMMEDIATELY TO ALL CITIZENS</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
