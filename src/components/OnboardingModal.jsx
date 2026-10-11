import React, { useState, useEffect } from 'react';
import { Shield, MapPin, User, Mail, Phone, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export function OnboardingModal({ isOpen, onClose, currentProfile, onSaveProfile }) {
  const [fullName, setFullName] = useState(currentProfile?.full_name || 'Cmdr. K. Rajesh Sharma');
  const [email, setEmail] = useState(currentProfile?.email || 'rajesh.sharma@ap.gov.in');
  const [phone, setPhone] = useState(currentProfile?.phone || '+91 866 247-4999');
  const [locationName, setLocationName] = useState(currentProfile?.locationName || 'Vijayawada, Andhra Pradesh, India');
  const [role, setRole] = useState(currentProfile?.role || 'Authority');
  const [isLocating, setIsLocating] = useState(false);

  useEffect(() => {
    if (currentProfile) {
      if (currentProfile.full_name) setFullName(currentProfile.full_name);
      if (currentProfile.email) setEmail(currentProfile.email);
      if (currentProfile.phone) setPhone(currentProfile.phone);
      if (currentProfile.locationName) setLocationName(currentProfile.locationName);
      if (currentProfile.role) setRole(currentProfile.role);
    }
  }, [currentProfile]);

  if (!isOpen) return null;

  const handleAutoGps = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocationName('Detected: Vijayawada, Andhra Pradesh (16.5062° N, 80.6480° E)');
      setIsLocating(false);
    }, 800);
  };

  const handleAutoSave = (e) => {
    e.preventDefault();
    onSaveProfile({
      full_name: fullName,
      email,
      phone,
      locationName,
      role
    });
    confetti({ particleCount: 50, spread: 60 });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-deep/90 backdrop-blur-md">
      <div className="glass-panel border-glow-ai rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-ai" />
            <h2 className="text-base font-bold text-white font-heading">EASY QUICK LOGIN & AUTO-SAVE</h2>
          </div>
          <button onClick={onClose} className="text-xs text-gray-400 hover:text-white">✕</button>
        </div>

        <form onSubmit={handleAutoSave} className="space-y-3.5 text-xs">
          <div>
            <label className="text-gray-300 block mb-1 font-semibold">User Role Privilege</label>
            <div className="grid grid-cols-2 gap-2">
              {['Citizen', 'Volunteer', 'Authority', 'First Responder'].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`p-2 rounded-xl border text-center font-bold transition-all ${
                    role === r ? 'bg-ai/20 border-ai text-white shadow-md' : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-1 font-semibold">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-300 block mb-1 font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-300 block mb-1 font-semibold">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-ai focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-1 font-semibold">Home Telemetry Zone / Location</label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 absolute left-3 top-2.5 text-info" />
                <input
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  className="w-full bg-space-deep border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white focus:border-info focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={handleAutoGps}
                className="px-3 py-2 bg-info/20 text-info border border-info/40 rounded-xl font-bold hover:bg-info/30"
              >
                {isLocating ? 'Locating...' : 'GPS'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-3d py-3 bg-gradient-to-r from-safe via-info to-ai text-space-deep font-black text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2 uppercase mt-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>SAVE TO MY DEVICE & INITIALIZE</span>
          </button>
        </form>
      </div>
    </div>
  );
}
