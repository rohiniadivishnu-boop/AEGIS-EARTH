import React, { useState } from 'react';
import { AlertOctagon, CheckCircle2, PhoneCall, ShieldAlert, Navigation, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

export function FullScreenAlertModal({ alert, onClose, onAutoSOS }) {
  const [sosSent, setSosSent] = useState(false);

  if (!alert) return null;

  const handleAcknowledge = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    onClose();
  };

  const handleTriggerSOS = () => {
    setSosSent(true);
    if (onAutoSOS) onAutoSOS();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-red-950/90 backdrop-blur-xl screen-emergency-alert overflow-y-auto">
      <div className="max-w-2xl w-full glass-panel border-2 border-emergency rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative text-center">
        {/* Animated Emergency Beacon Header */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-emergency/30 border-2 border-emergency animate-bounce shadow-2xl">
            <AlertOctagon className="w-12 h-12 text-emergency animate-pulse" />
          </div>
          <div>
            <span className="px-3 py-1 bg-emergency text-white text-xs font-mono font-black tracking-widest rounded-full uppercase">
              {alert.severity || 'CRITICAL EMERGENCY'} OVERRIDE
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-wider font-heading mt-2">
              {alert.type || 'MULTI-HAZARD'} DISASTER WARNING
            </h2>
          </div>
        </div>

        {/* Alert Details Card */}
        <div className="bg-space-deep/90 border border-emergency/40 rounded-2xl p-4 md:p-6 text-left space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-300 border-b border-white/10 pb-2">
            <div>AFFECTED ZONE: <span className="text-emergency font-bold">{alert.affected_area || 'San Francisco & Bay Sector'}</span></div>
            <div>ETA: <span className="text-warning font-bold">{alert.eta || 'IMMEDIATE IMPACT'}</span></div>
          </div>

          <p className="text-sm md:text-base text-white font-medium leading-relaxed">
            {alert.message || 'Severe disaster telemetry detected. Take immediate shelter or follow emergency evacuation routes immediately.'}
          </p>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-xs text-gray-300 space-y-1">
            <div className="font-bold text-ai flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-ai" /> RECOMMENDED ACTIONS:
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Immediately move to higher ground or assigned 3D shelter.</li>
              <li>Keep emergency comms open and monitor Aegis live telemetry.</li>
              <li>Ensure emergency kit is secured before evacuation.</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleTriggerSOS}
            disabled={sosSent}
            className={`btn-3d py-3.5 px-4 font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg transition-all ${
              sosSent
                ? 'bg-safe/30 text-safe border border-safe/40'
                : 'bg-gradient-to-r from-red-600 to-amber-600 text-white border border-red-500 animate-pulse'
            }`}
          >
            <PhoneCall className="w-5 h-5" />
            <span>{sosSent ? 'AUTO-SOS BROADCAST SENT' : 'TRIGGER AUTO-SOS BROADCAST'}</span>
          </button>

          <button
            onClick={handleAcknowledge}
            className="btn-3d py-3.5 px-4 bg-gradient-to-r from-safe to-emerald-600 text-space-deep font-black text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg border border-safe/40"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>ACKNOWLEDGE & CONFIRM SAFE</span>
          </button>
        </div>

        {sosSent && (
          <div className="text-xs text-safe font-mono animate-pulse flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-safe animate-ping" />
            GPS Coordinates & Distress Payload Sent to Local Dispatch & Emergency Contacts!
          </div>
        )}
      </div>
    </div>
  );
}
