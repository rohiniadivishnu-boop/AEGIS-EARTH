import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'data_store.json');

// Default Seed Data tailored for Vijayawada, Andhra Pradesh, India
const initialData = {
  profiles: [
    {
      id: 'usr_001',
      email: 'commander.vijayawada@aegis.org',
      full_name: 'Cmdr. K. Rajesh Sharma',
      role: 'Authority',
      phone: '+91 866 247-4999',
      home_location: { lat: 16.5062, lng: 80.6480, name: 'Vijayawada, Andhra Pradesh, India' },
      emergency_contacts: [
        { name: 'AP State Disaster Helpline (APSDRF)', phone: '1070 / +91 863 2377107', relation: 'State Emergency Control' },
        { name: 'Vijayawada Collectorate Control Room', phone: '+91 866 2474999', relation: 'District Command' },
        { name: 'Dr. V. Prasad (Govt General Hospital)', phone: '+91 94401 88220', relation: 'Medical Response' }
      ],
      alert_preferences: { flood: true, earthquake: true, wildfire: true, cyclone: true, industrial: true, radius_km: 50 },
      safety_score: 96
    }
  ],

  disaster_alerts: [
    {
      id: 'alt_001',
      type: 'flood',
      severity: 'Emergency',
      affected_area: 'Vijayawada Krishna River Basin & Prakasam Barrage Downstream',
      message: 'CRITICAL: Prakasam Barrage discharge exceeding 4.5 Lakh Cusecs. Heavy flood inundation warning for low-lying areas (Singh Nagar, Ranigarithota). Move to Indira Gandhi Stadium Shelter immediately.',
      eta: '2 Hours',
      status: 'active',
      created_at: new Date(Date.now() - 1800000).toISOString(),
      expires_at: new Date(Date.now() + 86400000).toISOString()
    },
    {
      id: 'alt_002',
      type: 'cyclone',
      severity: 'Warning',
      affected_area: 'Andhra Pradesh Coastal Belt & Machilipatnam-Vijayawada Corridor',
      message: 'Severe Deep Depression in Bay of Bengal expected to cross coastal AP. Heavy rainfall & wind gusts up to 75 km/h expected in Vijayawada.',
      eta: '6 Hours',
      status: 'active',
      created_at: new Date(Date.now() - 3600000).toISOString(),
      expires_at: new Date(Date.now() + 172800000).toISOString()
    }
  ],

  disaster_reports: [
    {
      id: 'rep_101',
      user_id: 'usr_001',
      type: 'flood',
      location: { lat: 16.518, lng: 80.632, name: 'Singh Nagar & Krishna Canal Bank, Vijayawada' },
      severity: 4,
      photo_url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop',
      description: 'Krishna floodwater entered residential streets. Water level 4 feet deep near canal road.',
      status: 'active',
      confirmations_count: 24,
      reliability_score: 98,
      created_at: new Date(Date.now() - 900000).toISOString()
    },
    {
      id: 'rep_102',
      user_id: 'usr_001',
      type: 'cyclone',
      location: { lat: 16.502, lng: 80.645, name: 'MG Road near Benz Circle, Vijayawada' },
      severity: 3,
      photo_url: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?w=800&auto=format&fit=crop',
      description: 'Tree branches and electric pole fallen blocking main traffic lane near Benz Circle.',
      status: 'verified',
      confirmations_count: 18,
      reliability_score: 95,
      created_at: new Date(Date.now() - 2700000).toISOString()
    }
  ],

  report_confirmations: [],

  shelters: [
    {
      id: 'shl_001',
      name: 'Indira Gandhi Municipal Stadium Relief Center',
      address: 'MG Road, Labbipet, Vijayawada, AP',
      lat: 16.506,
      lng: 80.644,
      capacity: 1200,
      current_occupancy: 420,
      facilities: { food: true, water: true, medical: true, power: true, pets: true, wheelchair: true },
      status: 'open',
      manager_id: 'usr_001',
      pre_registered_count: 145,
      ai_prediction: 'Optimal availability. Inflow expected to rise in next 3 hours.'
    },
    {
      id: 'shl_002',
      name: 'Tummalapalli Kalakshetram Safe Haven',
      address: 'Bandar Road, Governorpet, Vijayawada, AP',
      lat: 16.512,
      lng: 80.628,
      capacity: 600,
      current_occupancy: 210,
      facilities: { food: true, water: true, medical: true, power: true, pets: false, wheelchair: true },
      status: 'open',
      manager_id: 'usr_001',
      pre_registered_count: 62,
      ai_prediction: 'Adequate capacity available for next 8 hours.'
    },
    {
      id: 'shl_003',
      name: 'SRR & CVR Govt Degree College Refuge Center',
      address: 'Machavaram Down, Vijayawada, AP',
      lat: 16.520,
      lng: 80.655,
      capacity: 800,
      current_occupancy: 310,
      facilities: { food: true, water: true, medical: false, power: true, pets: true, wheelchair: true },
      status: 'open',
      manager_id: 'usr_001',
      pre_registered_count: 90,
      ai_prediction: 'Optimal availability for displaced families.'
    }
  ],

  shelter_registrations: [],

  risk_predictions: [
    {
      id: 'pred_001',
      area_name: 'Vijayawada Krishna River Basin',
      disaster_type: 'flood',
      risk_level: 'High',
      confidence_score: 94,
      predicted_timeline: [
        { time: 'Now', risk: 40 },
        { time: '+12h', risk: 75 },
        { time: '+24h', risk: 94 },
        { time: '+36h', risk: 65 },
        { time: '+48h', risk: 30 }
      ],
      reasoning: 'Prakasam Barrage inflows surging due to upper catchment heavy rains in Telangana & Western Ghats.',
      rainfall_data: '165 mm / 24h',
      wind_data: '45 km/h SE',
      seismic_data: '0.0 Magnitude',
      created_at: new Date().toISOString()
    }
  ],

  donations: [],
  supply_requests: [],

  volunteers: [
    {
      id: 'vol_001',
      user_id: 'usr_001',
      skills: ['water_rescue', 'medical', 'driving', 'logistics'],
      availability_calendar: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      status: 'active',
      current_mission_id: 'mis_001',
      impact_score: 1250,
      missions_completed: 24,
      people_helped: 280,
      hours_logged: 180
    }
  ],

  rescue_missions: [
    {
      id: 'mis_001',
      requester_id: 'usr_001',
      type: 'Krishna River Inundation Rescue',
      location: { lat: 16.518, lng: 80.632, address: 'Singh Nagar Sector 3, Vijayawada' },
      priority: 'Urgent (Priority 1)',
      status: 'En Route',
      assigned_team_id: 'team_alpha',
      mission_log: [
        { time: '02:00 PM', entry: 'Emergency distress signal received from Singh Nagar inundation zone.' },
        { time: '02:05 PM', entry: 'APSDRF Team Alpha dispatched with power rescue boats.' }
      ],
      created_at: new Date(Date.now() - 1800000).toISOString()
    }
  ],

  rescue_teams: [
    {
      id: 'team_alpha',
      name: 'APSDRF 10th Battalion Rescue Team',
      members: ['Cmdr. K. Rajesh', 'Sub-Inspector M. Rao', 'Constable V. Kumar'],
      current_location: { lat: 16.512, lng: 80.635 },
      current_mission_id: 'mis_001',
      resources: ['2 Inflatable Rescue Boats', 'Satellite Comms', 'Trauma First Aid Kit'],
      status: 'Deployed'
    }
  ],

  evacuation_routes: [
    {
      id: 'route_001',
      start_point: 'Benz Circle, Vijayawada',
      end_point: 'Indira Gandhi Municipal Stadium Relief Center',
      waypoints: [{ lat: 16.502, lng: 80.645 }, { lat: 16.505, lng: 80.644 }],
      blocked_segments: ['Krishna Canal Road near Ramavarappadu (Flooded)'],
      safety_score: 96,
      estimated_time: '10 min',
      created_at: new Date().toISOString()
    }
  ],

  community_feed: [
    {
      id: 'feed_001',
      user_id: 'usr_001',
      event_type: 'official_announcement',
      content: '🚨 OFFICIAL (AP SDRMA / Vijayawada Collectorate): Prakasam Barrage discharge has crossed 4.5 Lakh cusecs. Evacuation alert issued for Singh Nagar, Ranigarithota, and Krishna Lanka low-lying areas. Move to Indira Gandhi Municipal Stadium Shelter.',
      photo_url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop',
      location: 'Vijayawada Collectorate Command',
      upvotes: 215,
      created_at: new Date(Date.now() - 1800000).toISOString()
    }
  ],

  notifications: [],
  damage_assessments: [],
  fundraisers: [
    {
      id: 'fund_001',
      title: 'Vijayawada Krishna Flood Rapid Relief Fund',
      description: 'Emergency food packets, clean drinking water, medical kits, and shelter assistance for affected families in Vijayawada & Krishna District.',
      target_amount: 5000000,
      raised_amount: 3420000,
      beneficiary_info: 'AP State Disaster Relief Authority Partner Fund',
      created_at: new Date(Date.now() - 864000000).toISOString()
    }
  ],
  donations_funds: []
};

class LocalDatabase {
  constructor() {
    this.data = initialData;
    this.load();
  }

  load() {
    try {
      if (fs.existsSync(DB_FILE)) {
        // Force overwrite with updated Vijayawada initial data to refresh store
        this.data = initialData;
        this.save();
      } else {
        this.save();
      }
    } catch (err) {
      console.error('Error loading DB:', err);
    }
  }

  save() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf8');
    } catch (err) {
      console.error('Error saving DB:', err);
    }
  }

  get(table) {
    return this.data[table] || [];
  }

  getById(table, id) {
    const list = this.get(table);
    return list.find(item => item.id === id);
  }

  insert(table, item) {
    if (!this.data[table]) this.data[table] = [];
    const newItem = { id: `${table.slice(0, 3)}_${Date.now()}`, created_at: new Date().toISOString(), ...item };
    this.data[table].unshift(newItem);
    this.save();
    return newItem;
  }

  update(table, id, updates) {
    const list = this.get(table);
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates, updated_at: new Date().toISOString() };
      this.save();
      return list[idx];
    }
    return null;
  }

  delete(table, id) {
    if (!this.data[table]) return false;
    const initialLen = this.data[table].length;
    this.data[table] = this.data[table].filter(item => item.id !== id);
    this.save();
    return this.data[table].length < initialLen;
  }
}

export const db = new LocalDatabase();
