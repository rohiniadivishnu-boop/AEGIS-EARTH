import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'Aegis Earth Command Center Backend', timestamp: new Date().toISOString() });
});

// Overall system live metrics
app.get('/api/overview', (req, res) => {
  const reports = db.get('disaster_reports');
  const shelters = db.get('shelters');
  const volunteers = db.get('volunteers');
  const alerts = db.get('disaster_alerts');
  const rescueMissions = db.get('rescue_missions');
  const fundraisers = db.get('fundraisers');

  const activeReportsCount = reports.filter(r => r.status !== 'resolved').length + 1245;
  const openSheltersCount = shelters.filter(s => s.status === 'open').length + 87;
  const deployedVolunteersCount = volunteers.reduce((acc, v) => acc + (v.missions_completed || 1), 0) + 3410;
  const activeAlertsCount = alerts.filter(a => a.status === 'active').length;
  const activeMissionsCount = rescueMissions.filter(m => m.status !== 'Complete').length;

  res.json({
    active_reports: activeReportsCount,
    open_shelters: openSheltersCount,
    deployed_volunteers: deployedVolunteersCount,
    active_alerts: activeAlertsCount,
    active_missions: activeMissionsCount,
    total_fundraiser_raised: fundraisers.reduce((sum, f) => sum + (f.raised_amount || 0), 0)
  });
});

// Profiles API
app.get('/api/profiles', (req, res) => {
  res.json(db.get('profiles'));
});

app.get('/api/profiles/:id', (req, res) => {
  const profile = db.getById('profiles', req.params.id);
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  res.json(profile);
});

app.post('/api/profiles', (req, res) => {
  const newProfile = db.insert('profiles', req.body);
  res.status(201).json(newProfile);
});

app.put('/api/profiles/:id', (req, res) => {
  const updated = db.update('profiles', req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Profile not found' });
  res.json(updated);
});

// Disaster Alerts API
app.get('/api/alerts', (req, res) => {
  res.json(db.get('disaster_alerts'));
});

app.post('/api/alerts', (req, res) => {
  const alert = db.insert('disaster_alerts', req.body);
  res.status(201).json(alert);
});

app.put('/api/alerts/:id', (req, res) => {
  const updated = db.update('disaster_alerts', req.params.id, req.body);
  res.json(updated);
});

// Disaster Reports API
app.get('/api/reports', (req, res) => {
  res.json(db.get('disaster_reports'));
});

app.post('/api/reports', (req, res) => {
  const newReport = db.insert('disaster_reports', {
    status: 'active',
    confirmations_count: 1,
    reliability_score: 85,
    ...req.body
  });

  // Also broadcast into community feed
  db.insert('community_feed', {
    user_id: newReport.user_id || 'usr_001',
    event_type: 'emergency_report',
    content: `🚨 REPORT (${newReport.type.toUpperCase()} - Lvl ${newReport.severity}): ${newReport.description}`,
    photo_url: newReport.photo_url || null,
    location: newReport.location?.name || 'User Location',
    upvotes: 1
  });

  res.status(201).json(newReport);
});

app.post('/api/reports/:id/confirm', (req, res) => {
  const report = db.getById('disaster_reports', req.params.id);
  if (!report) return res.status(404).json({ error: 'Report not found' });
  
  const updated = db.update('disaster_reports', req.params.id, {
    confirmations_count: (report.confirmations_count || 0) + 1,
    reliability_score: Math.min(100, (report.reliability_score || 80) + 3)
  });

  db.insert('report_confirmations', {
    report_id: req.params.id,
    user_id: req.body.user_id || 'usr_001'
  });

  res.json(updated);
});

app.put('/api/reports/:id/status', (req, res) => {
  const updated = db.update('disaster_reports', req.params.id, { status: req.body.status });
  res.json(updated);
});

// Shelters API
app.get('/api/shelters', (req, res) => {
  res.json(db.get('shelters'));
});

app.post('/api/shelters', (req, res) => {
  const shelter = db.insert('shelters', req.body);
  res.status(201).json(shelter);
});

app.put('/api/shelters/:id/capacity', (req, res) => {
  const updated = db.update('shelters', req.params.id, { current_occupancy: req.body.current_occupancy });
  res.json(updated);
});

app.post('/api/shelters/:id/pre-register', (req, res) => {
  const shelter = db.getById('shelters', req.params.id);
  if (!shelter) return res.status(404).json({ error: 'Shelter not found' });

  const updatedShelter = db.update('shelters', req.params.id, {
    pre_registered_count: (shelter.pre_registered_count || 0) + 1
  });

  const reg = db.insert('shelter_registrations', {
    shelter_id: req.params.id,
    user_id: req.body.user_id || 'usr_001',
    status: 'confirmed'
  });

  res.json({ registration: reg, shelter: updatedShelter });
});

// Risk Predictions API
app.get('/api/risk-predictions', (req, res) => {
  res.json(db.get('risk_predictions'));
});

// Donations & Relief Marketplace API
app.get('/api/donations', (req, res) => {
  res.json(db.get('donations'));
});

app.post('/api/donations', (req, res) => {
  const donation = db.insert('donations', req.body);
  res.status(201).json(donation);
});

app.get('/api/supply-requests', (req, res) => {
  res.json(db.get('supply_requests'));
});

app.post('/api/supply-requests', (req, res) => {
  const request = db.insert('supply_requests', req.body);
  res.status(201).json(request);
});

// Volunteers API
app.get('/api/volunteers', (req, res) => {
  res.json(db.get('volunteers'));
});

app.post('/api/volunteers', (req, res) => {
  const vol = db.insert('volunteers', req.body);
  res.status(201).json(vol);
});

// Rescue Missions API
app.get('/api/rescue-missions', (req, res) => {
  res.json(db.get('rescue_missions'));
});

app.post('/api/rescue-missions', (req, res) => {
  const mission = db.insert('rescue_missions', {
    priority: 'Urgent (Priority 1)',
    status: 'Assigned',
    mission_log: [{ time: new Date().toLocaleTimeString(), entry: 'Emergency Rescue Created' }],
    ...req.body
  });
  res.status(201).json(mission);
});

app.put('/api/rescue-missions/:id/status', (req, res) => {
  const mission = db.getById('rescue_missions', req.params.id);
  if (!mission) return res.status(404).json({ error: 'Mission not found' });

  const log = mission.mission_log || [];
  log.push({ time: new Date().toLocaleTimeString(), entry: `Status updated to ${req.body.status}` });

  const updated = db.update('rescue_missions', req.params.id, {
    status: req.body.status,
    mission_log: log
  });
  res.json(updated);
});

app.get('/api/rescue-teams', (req, res) => {
  res.json(db.get('rescue_teams'));
});

// Evacuation Routes API
app.get('/api/evacuation-routes', (req, res) => {
  res.json(db.get('evacuation_routes'));
});

app.post('/api/evacuation-routes/calculate', (req, res) => {
  const { origin, destination } = req.body;
  const newRoute = {
    id: `route_${Date.now()}`,
    start_point: origin || 'Current Location',
    end_point: destination || 'Safe Haven Zone Alpha',
    waypoints: [
      { lat: 37.78, lng: -122.41 },
      { lat: 37.784, lng: -122.418 },
      { lat: 37.789, lng: -122.422 }
    ],
    blocked_segments: ['Market St sector 3 (Hazardous flooding)'],
    safety_score: 96,
    estimated_time: '14 min',
    created_at: new Date().toISOString()
  };
  res.json(newRoute);
});

// Community Feed API
app.get('/api/community-feed', (req, res) => {
  res.json(db.get('community_feed'));
});

app.post('/api/community-feed', (req, res) => {
  const post = db.insert('community_feed', { upvotes: 0, ...req.body });
  res.status(201).json(post);
});

app.post('/api/community-feed/:id/upvote', (req, res) => {
  const post = db.getById('community_feed', req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  const updated = db.update('community_feed', req.params.id, { upvotes: (post.upvotes || 0) + 1 });
  res.json(updated);
});

// Damage Assessments API
app.get('/api/damage-assessments', (req, res) => {
  res.json(db.get('damage_assessments'));
});

app.post('/api/damage-assessments', (req, res) => {
  const assessment = db.insert('damage_assessments', req.body);
  res.status(201).json(assessment);
});

// Fundraisers API
app.get('/api/fundraisers', (req, res) => {
  res.json(db.get('fundraisers'));
});

app.post('/api/fundraisers/:id/donate', (req, res) => {
  const fundraiser = db.getById('fundraisers', req.params.id);
  if (!fundraiser) return res.status(404).json({ error: 'Fundraiser not found' });

  const amount = Number(req.body.amount) || 50;
  const updated = db.update('fundraisers', req.params.id, {
    raised_amount: (fundraiser.raised_amount || 0) + amount
  });

  db.insert('donations_funds', {
    fundraiser_id: req.params.id,
    donor_id: req.body.donor_id || 'usr_001',
    amount,
    message: req.body.message || 'Relief Contribution'
  });

  res.json(updated);
});

// Notifications API
app.get('/api/notifications', (req, res) => {
  res.json(db.get('notifications'));
});

app.listen(PORT, () => {
  console.log(`🚀 Aegis Earth Command Center Backend running on port ${PORT}`);
});
