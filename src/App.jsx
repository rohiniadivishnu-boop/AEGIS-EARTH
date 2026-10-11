import React, { useState, useEffect } from 'react';
import { ThreeEarthBackground } from './components/ThreeEarthBackground';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { OnboardingModal } from './components/OnboardingModal';
import { FullScreenAlertModal } from './components/FullScreenAlertModal';
import { BackgroundCustomizerModal } from './components/BackgroundCustomizerModal';

import { DashboardView } from './views/DashboardView';
import { AIPredictionView } from './views/AIPredictionView';
import { LiveMapView } from './views/LiveMapView';
import { EmergencyAlertsView } from './views/EmergencyAlertsView';
import { EmergencyReportView } from './views/EmergencyReportView';
import { ShelterNetworkView } from './views/ShelterNetworkView';
import { ReliefMarketplaceView } from './views/ReliefMarketplaceView';
import { EvacuationView } from './views/EvacuationView';
import { RescueCommandView } from './views/RescueCommandView';
import { CommunityFeedView } from './views/CommunityFeedView';
import { DamageRecoveryView } from './views/DamageRecoveryView';
import { SettingsView } from './views/SettingsView';

import * as api from './services/api';
import { soundFX } from './services/soundEffects';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeMode, setActiveMode] = useState('earth');
  const [userRole, setUserRole] = useState('Authority');
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Background Customizer State (with LocalStorage persistence)
  const [bgTheme, setBgTheme] = useState(() => localStorage.getItem('aegis_bg_theme') || 'orbital');
  const [bgIntensity, setBgIntensity] = useState(() => parseFloat(localStorage.getItem('aegis_bg_intensity') || '0.85'));
  const [autoRotate, setAutoRotate] = useState(true);
  const [isBgCustomizerOpen, setIsBgCustomizerOpen] = useState(false);

  // Save bg preferences
  useEffect(() => {
    localStorage.setItem('aegis_bg_theme', bgTheme);
    localStorage.setItem('aegis_bg_intensity', bgIntensity.toString());
  }, [bgTheme, bgIntensity]);

  // Modal States
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [activeCriticalAlert, setActiveCriticalAlert] = useState(null);

  // Backend Real-time Health
  const [backendStatus, setBackendStatus] = useState({ online: false, latency: null });

  // Telemetry & Full Data Collections
  const [metrics, setMetrics] = useState({
    active_reports: 1251,
    open_shelters: 89,
    deployed_volunteers: 3428,
    active_alerts: 2,
    active_missions: 1
  });

  const [alerts, setAlerts] = useState([]);
  const [reports, setReports] = useState([]);
  const [shelters, setShelters] = useState([]);
  const [missions, setMissions] = useState([]);
  const [feedPosts, setFeedPosts] = useState([]);
  const [fundraisers, setFundraisers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [supplyRequests, setSupplyRequests] = useState([]);
  const [rescueTeams, setRescueTeams] = useState([]);
  const [damageAssessments, setDamageAssessments] = useState([]);

  // Profile default initialized with Vijayawada, Andhra Pradesh, India
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('aegis_user_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      full_name: 'Cmdr. K. Rajesh Sharma',
      email: 'rajesh.sharma@ap.gov.in',
      phone: '+91 866 247-4999',
      role: 'Authority',
      locationName: 'Vijayawada, Andhra Pradesh, India',
      emergency_contacts: [
        { name: 'AP State Disaster Helpline (APSDRF)', phone: '1070 / +91 863 2377107', relation: 'State Emergency Control' },
        { name: 'Vijayawada Collectorate Control Room', phone: '+91 866 2474999', relation: 'District Command' },
        { name: 'Govt General Hospital Vijayawada', phone: '+91 94401 88220', relation: 'Emergency Medical' }
      ],
      safety_score: 96
    };
  });

  useEffect(() => {
    localStorage.setItem('aegis_user_profile', JSON.stringify(profile));
  }, [profile]);

  // Fetch telemetry & check backend health
  useEffect(() => {
    const loadData = async () => {
      // 1. Check health
      const health = await api.checkBackendHealth();
      setBackendStatus({ online: health.online, latency: health.latency });

      // 2. Fetch full datasets
      const [m, a, r, s, mis, f, fund, d, sq, rt, dmg] = await Promise.all([
        api.fetchOverviewMetrics(),
        api.fetchAlerts(),
        api.fetchReports(),
        api.fetchShelters(),
        api.fetchRescueMissions(),
        api.fetchCommunityFeed(),
        api.fetchFundraisers(),
        api.fetchDonations(),
        api.fetchSupplyRequests(),
        api.fetchRescueTeams(),
        api.fetchDamageAssessments()
      ]);

      if (m) setMetrics(m);
      if (a) setAlerts(a);
      if (r) setReports(r);
      if (s) setShelters(s);
      if (mis) setMissions(mis);
      if (f) setFeedPosts(f);
      if (fund) setFundraisers(fund);
      if (d) setDonations(d);
      if (sq) setSupplyRequests(sq);
      if (rt) setRescueTeams(rt);
      if (dmg) setDamageAssessments(dmg);
    };

    loadData();
    const interval = setInterval(loadData, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handlers with Sound Feedback
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (audioEnabled) soundFX.playClick();
  };

  const handleTriggerTestAlert = () => {
    const testAlert = {
      type: activeMode === 'earth' ? 'flood' : activeMode,
      severity: 'Emergency',
      affected_area: 'Vijayawada Krishna River Sector & Singh Nagar',
      message: 'CRITICAL EMERGENCY: Prakasam Barrage discharge cresting 4.5 Lakh Cusecs. High flood inundation warning for low-lying areas. Evacuate to Indira Gandhi Municipal Stadium immediately!',
      eta: '30 Minutes'
    };
    setActiveCriticalAlert(testAlert);
  };

  const handleCreateAlert = async (alertData) => {
    const created = await api.createAlert(alertData);
    setAlerts(prev => [created, ...prev]);
    if (audioEnabled) soundFX.playSuccess();
  };

  const handleSubmitReport = async (reportData) => {
    const created = await api.createReport(reportData);
    setReports(prev => [created, ...prev]);
    setMetrics(prev => ({ ...prev, active_reports: prev.active_reports + 1 }));
    if (audioEnabled) soundFX.playSuccess();
  };

  const handleConfirmReport = async (reportId) => {
    await api.confirmReport(reportId);
    setReports(prev => prev.map(r => r.id === reportId ? { ...r, confirmations_count: (r.confirmations_count || 1) + 1 } : r));
    if (audioEnabled) soundFX.playClick();
  };

  const handlePreRegisterShelter = async (shelterId) => {
    await api.preRegisterShelter(shelterId);
    setShelters(prev => prev.map(s => s.id === shelterId ? { ...s, pre_registered_count: (s.pre_registered_count || 0) + 1 } : s));
    if (audioEnabled) soundFX.playSuccess();
  };

  const handleUpdateShelterOccupancy = async (shelterId, occupancy) => {
    await api.updateShelterOccupancy(shelterId, occupancy);
    setShelters(prev => prev.map(s => s.id === shelterId ? { ...s, current_occupancy: occupancy } : s));
  };

  const handleUpdateMissionStatus = async (missionId, status) => {
    await api.updateRescueMissionStatus(missionId, status);
    setMissions(prev => prev.map(m => m.id === missionId ? { ...m, status } : m));
    if (audioEnabled) soundFX.playClick();
  };

  const handlePostFeedMessage = async (postData) => {
    const created = await api.postCommunityMessage(postData);
    setFeedPosts(prev => [created, ...prev]);
    if (audioEnabled) soundFX.playSuccess();
  };

  const handleUpvoteFeedPost = async (postId) => {
    await api.upvoteFeedPost(postId);
    setFeedPosts(prev => prev.map(p => p.id === postId ? { ...p, upvotes: (p.upvotes || 0) + 1 } : p));
    if (audioEnabled) soundFX.playClick();
  };

  const handleDonateFund = async (fundraiserId, amount, message) => {
    await api.donateToFundraiser(fundraiserId, amount, message);
    setFundraisers(prev => prev.map(f => f.id === fundraiserId ? { ...f, raised_amount: (f.raised_amount || 0) + amount } : f));
    if (audioEnabled) soundFX.playSuccess();
  };

  const handleSubmitDamage = async (data) => {
    const created = await api.submitDamageAssessment(data);
    setDamageAssessments(prev => [created, ...prev]);
    if (audioEnabled) soundFX.playSuccess();
  };

  return (
    <div className="relative min-h-screen bg-[#070b1e] text-[#F8F9FC] font-sans selection:bg-[#4DA8FF] selection:text-[#0A0E27] overflow-x-hidden">
      {/* 3D Living Earth Canvas Background System */}
      <ThreeEarthBackground
        mode={activeMode}
        bgTheme={bgTheme}
        bgIntensity={bgIntensity}
        autoRotate={autoRotate}
      />

      {/* Main UI Layer Floating over 3D Canvas */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
        {/* Navbar */}
        <div className="pointer-events-auto">
          <Navbar
            activeMode={activeMode}
            setActiveMode={setActiveMode}
            userRole={userRole}
            setUserRole={setUserRole}
            onTriggerAlert={handleTriggerTestAlert}
            onOpenLogin={() => setIsOnboardingOpen(true)}
            onOpenBgCustomizer={() => setIsBgCustomizerOpen(true)}
            bgTheme={bgTheme}
            backendStatus={backendStatus}
            metrics={metrics}
            audioEnabled={audioEnabled}
            setAudioEnabled={setAudioEnabled}
          />
        </div>

        <div className="flex flex-1 pt-16 pb-16 md:pb-6 pointer-events-auto">
          {/* Sidebar */}
          <div className="pointer-events-auto">
            <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} userRole={userRole} />
          </div>

          {/* Main Dashboard Content Area */}
          <main className="flex-1 md:pl-64 p-4 md:p-6 pointer-events-auto max-w-7xl mx-auto w-full">
            {activeTab === 'dashboard' && (
              <DashboardView profile={profile} onNavigate={handleTabChange} alerts={alerts} reports={reports} />
            )}
            {activeTab === 'prediction' && <AIPredictionView />}
            {activeTab === 'live-map' && <LiveMapView shelters={shelters} reports={reports} alerts={alerts} />}
            {activeTab === 'alerts' && (
              <EmergencyAlertsView alerts={alerts} userRole={userRole} onCreateAlert={handleCreateAlert} />
            )}
            {activeTab === 'report' && (
              <EmergencyReportView
                reports={reports}
                userRole={userRole}
                onSubmitReport={handleSubmitReport}
                onConfirmReport={handleConfirmReport}
              />
            )}
            {activeTab === 'shelters' && (
              <ShelterNetworkView
                shelters={shelters}
                userRole={userRole}
                onPreRegister={handlePreRegisterShelter}
                onUpdateOccupancy={handleUpdateShelterOccupancy}
              />
            )}
            {activeTab === 'relief' && (
              <ReliefMarketplaceView
                donations={donations}
                supplyRequests={supplyRequests}
                fundraisers={fundraisers}
                onDonateFund={handleDonateFund}
              />
            )}
            {activeTab === 'evacuation' && <EvacuationView />}
            {activeTab === 'rescue' && (
              <RescueCommandView
                missions={missions}
                rescueTeams={rescueTeams}
                onUpdateMissionStatus={handleUpdateMissionStatus}
              />
            )}
            {activeTab === 'community' && (
              <CommunityFeedView
                posts={feedPosts}
                userRole={userRole}
                onPostMessage={handlePostFeedMessage}
                onUpvotePost={handleUpvoteFeedPost}
              />
            )}
            {activeTab === 'recovery' && (
              <DamageRecoveryView
                damageAssessments={damageAssessments}
                onSubmitDamage={handleSubmitDamage}
              />
            )}
            {activeTab === 'settings' && (
              <SettingsView
                profile={profile}
                userRole={userRole}
                setUserRole={setUserRole}
                onSaveProfile={(updates) => setProfile(prev => ({ ...prev, ...updates }))}
              />
            )}
          </main>
        </div>
      </div>

      {/* Background Customizer Modal */}
      <BackgroundCustomizerModal
        isOpen={isBgCustomizerOpen}
        onClose={() => setIsBgCustomizerOpen(false)}
        bgTheme={bgTheme}
        setBgTheme={setBgTheme}
        bgIntensity={bgIntensity}
        setBgIntensity={setBgIntensity}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
      />

      {/* Easy Quick Login & Auto-Save Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        currentProfile={profile}
        onSaveProfile={(prof) => setProfile(prev => ({ ...prev, ...prof }))}
      />

      {/* Full Screen SOS Modal */}
      <FullScreenAlertModal
        alert={activeCriticalAlert}
        onClose={() => setActiveCriticalAlert(null)}
        onAutoSOS={() => {
          console.log('AUTO SOS Triggered');
        }}
      />
    </div>
  );
}
