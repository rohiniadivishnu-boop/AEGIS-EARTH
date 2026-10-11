import React, { useState } from 'react';
import { Camera, MapPin, CheckCircle, ThumbsUp, AlertCircle, Shield, Upload, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export function EmergencyReportView({ reports, userRole, onSubmitReport, onConfirmReport }) {
  const [type, setType] = useState('flood');
  const [severity, setSeverity] = useState(4);
  const [description, setDescription] = useState('Rapidly rising floodwaters trapping vehicles near intersection.');
  const [locationName, setLocationName] = useState('Main St & 5th Ave, SF');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [arCaptured, setArCaptured] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReport({
      type,
      severity,
      description,
      location: { name: locationName, lat: 37.77, lng: -122.41 },
      photo_url: photoUrl
    });
    confetti({ particleCount: 70, spread: 80 });
    setDescription('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-emergency flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-emergency animate-pulse" />
            <span className="text-xs font-mono text-emergency font-bold uppercase tracking-widest">
              CROWD-SOURCED INCIDENT TELEMETRY
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            REALTIME EMERGENCY REPORTING & AR
          </h2>
          <p className="text-xs text-gray-300">
            Submit verified disaster photos with AR camera spatial overlay, GPS geotagging, and crowd reliability validation.
          </p>
        </div>

        <div className="glass-card px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-3">
          <div className="text-2xl font-extrabold text-emergency font-mono animate-pulse">1,247</div>
          <div className="text-[10px] font-mono text-gray-400">ACTIVE GLOBAL REPORTS</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incident Form & AR Simulation */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <h3 className="text-sm font-bold text-white uppercase font-heading flex items-center gap-2">
              <Camera className="w-4 h-4 text-info" /> SUBMIT NEW INCIDENT REPORT
            </h3>
            <button
              onClick={() => setIsCameraActive(!isCameraActive)}
              className="px-3 py-1 bg-ai/20 text-ai border border-ai/40 rounded-xl text-xs font-bold hover:bg-ai/30 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isCameraActive ? 'CLOSE AR CAMERA' : 'OPEN AR CAMERA VIEW'}</span>
            </button>
          </div>

          {/* AR Camera Overlay Simulation */}
          {isCameraActive && (
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border-2 border-ai shadow-2xl bg-black flex items-center justify-center">
              <img src={photoUrl} alt="AR View" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-ai font-bold">
                  <span>GPS: 37.7749° N, 122.4194° W</span>
                  <span className="animate-ping text-emergency">● RECORDING AR TELEMETRY</span>
                </div>
                <div className="border border-ai/50 rounded-xl p-2 bg-space-deep/80 text-[10px] font-mono text-white space-y-1">
                  <div>DISASTER RADAR DETECTED: {type.toUpperCase()}</div>
                  <div>ESTIMATED SEVERITY SCALE: LEVEL {severity} / 5</div>
                </div>
                <button
                  onClick={() => { setArCaptured(true); setIsCameraActive(false); }}
                  className="w-full py-2 bg-ai text-space-deep font-black text-xs rounded-xl uppercase"
                >
                  CAPTURE AR IMAGE & SNAP GEO-COORDINATES
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="text-gray-300 block mb-1">Disaster Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-space-deep border border-white/10 rounded-xl px-3 py-2 text-white"
              >
                <option value="flood">Flood Inundation</option>
                <option value="earthquake">Earthquake Structure Damage</option>
                <option value="wildfire">Wildfire Smoke & Embers</option>
                <option value="cyclone">Cyclone Wind Damage</option>
                <option value="industrial">Industrial Chemical Hazard</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-gray-300 mb-1">
                <span>Severity Scale (1-5)</span>
                <span className="text-emergency font-mono font-bold">LVL {severity}</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={severity}
                onChange={(e) => setSeverity(Number(e.target.value))}
                className="w-full accent-emergency cursor-pointer"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-1">Geotagged Location Name</label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-info" />
                <input
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 block mb-1">Incident Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe trapped people, blocked roads, water depth, or immediate dangers..."
                className="w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-3d py-3 bg-gradient-to-r from-emergency via-orange-600 to-ai text-white font-extrabold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase"
            >
              <Upload className="w-4 h-4" />
              <span>TRANSMIT LIVE INCIDENT REPORT TO MAP</span>
            </button>
          </form>
        </div>

        {/* Live Feed & Crowd Confirmation */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-safe" /> ACTIVE REPORTS & CROWD VERIFICATION
          </h3>

          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {reports.map((r) => (
              <div key={r.id} className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-2 py-0.5 bg-emergency/20 text-emergency border border-emergency/30 rounded font-mono text-[10px] font-bold uppercase">
                      LVL {r.severity} • {r.type}
                    </span>
                    <div className="text-xs font-bold text-white mt-1">{r.location?.name || 'San Francisco'}</div>
                  </div>
                  <div className="text-[10px] font-mono text-ai bg-ai/20 px-2 py-1 rounded-full">
                    RELIABILITY SCORE: {r.reliability_score || 96}%
                  </div>
                </div>

                {r.photo_url && (
                  <img src={r.photo_url} alt="Incident" className="w-full h-36 object-cover rounded-xl border border-white/10" />
                )}

                <p className="text-xs text-gray-300">{r.description}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                  <span className="text-gray-400 font-mono text-[10px]">
                    {r.confirmations_count || 1} Community Confirmations
                  </span>
                  <button
                    onClick={() => onConfirmReport(r.id)}
                    className="px-3 py-1 bg-safe/20 text-safe border border-safe/40 rounded-lg text-xs font-bold hover:bg-safe/30 flex items-center space-x-1"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>I SEE THIS TOO</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
