import React, { useState } from 'react';
import { LifeBuoy, Users, Radio, Navigation, CheckCircle, ShieldAlert, Clock, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export function RescueCommandView({ missions, rescueTeams, onUpdateMissionStatus }) {
  const [selectedMission, setSelectedMission] = useState(missions[0] || null);

  const handleStatusChange = (missionId, newStatus) => {
    onUpdateMissionStatus(missionId, newStatus);
    confetti({ particleCount: 40, spread: 50 });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <LifeBuoy className="w-5 h-5 text-emergency animate-pulse" />
            <span className="text-xs font-mono text-emergency font-bold uppercase tracking-widest">
              FIRST RESPONDER COMMAND CENTER
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            RESCUE DISPATCH COORDINATION
          </h2>
          <p className="text-xs text-gray-300">
            Tactical dispatch pipeline, live team tracking, rescue vehicle allocation, and mission thread communications log.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-emergency/20 border border-emergency/40 px-4 py-2 rounded-xl text-xs font-mono text-emergency font-bold">
          <span className="w-2 h-2 rounded-full bg-emergency animate-ping" />
          <span>{missions.length || 1} ACTIVE MISSIONS IN PIPELINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mission Request Board */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-emergency" /> RESCUE MISSION REQUESTS
          </h3>

          <div className="space-y-3">
            {missions.map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedMission(m)}
                className={`w-full p-4 rounded-xl border text-left transition-all space-y-2 ${
                  selectedMission?.id === m.id
                    ? 'bg-emergency/20 border-emergency text-white shadow-xl'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white uppercase">{m.type}</span>
                  <span className="px-2 py-0.5 bg-emergency text-white rounded font-mono text-[10px] font-bold">
                    {m.priority}
                  </span>
                </div>
                <div className="text-xs text-gray-300">{m.location?.address || 'Low-Lying Coastal Sector'}</div>
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>Status: <strong className="text-info">{m.status}</strong></span>
                  <span>{new Date(m.created_at).toLocaleTimeString()}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Mission Pipeline & Dispatcher */}
        {selectedMission && (
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-emergency font-bold">DISPATCH MISSION #{selectedMission.id}</span>
                <h3 className="text-lg font-bold text-white font-heading">{selectedMission.type}</h3>
                <div className="text-xs text-gray-400">{selectedMission.location?.address}</div>
              </div>
              <span className="px-3 py-1 bg-info/20 text-info border border-info/40 rounded-full text-xs font-mono font-bold">
                STAGE: {selectedMission.status}
              </span>
            </div>

            {/* Mission Status Pipeline Stepper */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-white font-mono uppercase">MISSION PIPELINE STATUS</div>
              <div className="grid grid-cols-5 gap-1 text-[10px] font-mono">
                {['Assigned', 'En Route', 'On Scene', 'Rescue in Progress', 'Complete'].map(st => {
                  const isActive = selectedMission.status === st;
                  return (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedMission.id, st)}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        isActive ? 'bg-emergency text-white font-bold border-emergency shadow-lg' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Assigned Rescue Teams & Assets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <div className="text-xs font-bold text-info font-mono flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> ASSIGNED RESCUE TEAM
                </div>
                <div className="text-sm font-bold text-white">Alpha Water Rescue Unit</div>
                <div className="text-xs text-gray-300">Members: Elena Rostova, Capt. Mark Miller, Dave Kim</div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <div className="text-xs font-bold text-safe font-mono flex items-center gap-1.5">
                  <Navigation className="w-4 h-4" /> DEPLOYED TACTICAL ASSETS
                </div>
                <div className="text-xs text-gray-300">• Rigid Evacuation Watercraft</div>
                <div className="text-xs text-gray-300">• Thermal Imaging Drone & Comms</div>
              </div>
            </div>

            {/* Mission Thread Comms Log */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-white font-mono uppercase">TACTICAL MISSION LOG & COMMS</div>
              <div className="bg-space-deep p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono max-h-40 overflow-y-auto">
                {selectedMission.mission_log?.map((log, idx) => (
                  <div key={idx} className="flex space-x-3 text-gray-300">
                    <span className="text-info">{log.time}</span>
                    <span>➔ {log.entry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
