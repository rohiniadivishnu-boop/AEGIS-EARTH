import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeEarthBackground({
  mode = 'earth',
  bgTheme = 'orbital', // 'orbital' | 'cyber_hologram' | 'disaster_recon' | 'aurora_cosmic'
  bgIntensity = 0.85,
  autoRotate = true
}) {
  const mountRef = useRef(null);
  const activeModeRef = useRef(mode);
  const activeThemeRef = useRef(bgTheme);
  const autoRotateRef = useRef(autoRotate);
  const bgIntensityRef = useRef(bgIntensity);

  useEffect(() => {
    activeModeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    activeThemeRef.current = bgTheme;
  }, [bgTheme]);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    bgIntensityRef.current = bgIntensity;
  }, [bgIntensity]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera & Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b1e, 0.012);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.8, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Root Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Helper: Convert Lat/Lng to 3D Sphere Vector
    const convertLatLngToVector3 = (lat, lng, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // 2. DEEP SPACE NEBULA & STARFIELD PARTICLES
    const starCount = 2400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 40 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      // Star Spectral Colors: Blues, Whites, Cyans, Golden
      const colorType = Math.random();
      if (colorType > 0.7) {
        starColors[i * 3] = 0.5; starColors[i * 3 + 1] = 0.8; starColors[i * 3 + 2] = 1.0; // Cyan
      } else if (colorType > 0.4) {
        starColors[i * 3] = 0.8; starColors[i * 3 + 1] = 0.85; starColors[i * 3 + 2] = 1.0; // Blue-white
      } else {
        starColors[i * 3] = 1.0; starColors[i * 3 + 1] = 0.9; starColors[i * 3 + 2] = 0.7; // Gold
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Cosmic Nebula Cloud Particles (Soft violet/cyan gas dust)
    const nebulaCount = 500;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      nebulaPos[i * 3] = (Math.random() - 0.5) * 70;
      nebulaPos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      nebulaPos[i * 3 + 2] = -20 - Math.random() * 40;

      // Deep space violet and cosmic teal
      if (i % 2 === 0) {
        nebulaColors[i * 3] = 0.35; nebulaColors[i * 3 + 1] = 0.15; nebulaColors[i * 3 + 2] = 0.7;
      } else {
        nebulaColors[i * 3] = 0.05; nebulaColors[i * 3 + 1] = 0.45; nebulaColors[i * 3 + 2] = 0.65;
      }
    }
    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const nebulaField = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebulaField);

    // 3. PROCEDURAL TEXTURED HIGH-FIDELITY GLOBE
    const globeRadius = 5.2;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);

    // Canvas procedural high-res earth texture generator
    const createEarthTexture = (theme = 'orbital') => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      if (theme === 'disaster_recon') {
        // Thermal IR Recon Base: Deep midnight thermal indigo
        ctx.fillStyle = '#050a18';
        ctx.fillRect(0, 0, 2048, 1024);

        // Thermal continents in heat gradients
        const heatGrad = ctx.createLinearGradient(0, 0, 2048, 1024);
        heatGrad.addColorStop(0, '#1a103c');
        heatGrad.addColorStop(0.5, '#2e1240');
        heatGrad.addColorStop(1, '#0f243a');
        ctx.fillStyle = heatGrad;
      } else {
        // Deep Space Ocean
        const oceanGrad = ctx.createRadialGradient(1024, 512, 100, 1024, 512, 1024);
        oceanGrad.addColorStop(0, '#091c38');
        oceanGrad.addColorStop(1, '#040b1a');
        ctx.fillStyle = oceanGrad;
        ctx.fillRect(0, 0, 2048, 1024);
        ctx.fillStyle = '#0d3257';
      }

      // Procedural Continents (Accurate relative positions)
      const landmasses = [
        { x: 480, y: 350, r: 240 },   // N. America
        { x: 620, y: 640, r: 190 },   // S. America
        { x: 1040, y: 360, r: 180 },  // Europe
        { x: 1100, y: 580, r: 260 },  // Africa
        { x: 1480, y: 400, r: 310 },  // Asia (India, China, SE Asia)
        { x: 1680, y: 740, r: 150 },  // Australia
        { x: 1024, y: 960, r: 160 }   // Antarctica
      ];

      landmasses.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        // Coastal details & archipelago islands
        for (let j = 0; j < 8; j++) {
          ctx.beginPath();
          ctx.arc(
            c.x + (Math.sin(j * 1.5) * c.r * 0.9),
            c.y + (Math.cos(j * 1.5) * c.r * 0.7),
            c.r * 0.45,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });

      // City Night Lights Clusters (India, Asia, Europe, Americas)
      ctx.fillStyle = theme === 'disaster_recon' ? '#ff3b5c' : '#5ce1e6';
      for (let i = 0; i < 900; i++) {
        const x = Math.random() * 2048;
        const y = Math.random() * 1024;
        const size = Math.random() > 0.85 ? 3 : 1.5;
        ctx.fillRect(x, y, size, size);
      }

      // Golden Metropolises (Delhi, Mumbai, Vijayawada/AP, SF, Tokyo, London)
      ctx.fillStyle = '#ffdf78';
      const megaCities = [
        { x: 1460, y: 480 }, // India - Vijayawada / Deccan
        { x: 1420, y: 440 }, // Delhi
        { x: 1780, y: 380 }, // Tokyo
        { x: 1040, y: 320 }, // London/Europe
        { x: 440, y: 380 },  // California/SF
        { x: 560, y: 360 }   // New York
      ];
      megaCities.forEach((mc) => {
        ctx.beginPath();
        ctx.arc(mc.x, mc.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mc.x, mc.y, 9, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 223, 120, 0.35)';
        ctx.fill();
        ctx.fillStyle = '#ffdf78';
      });

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture(activeThemeRef.current);

    const globeMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpScale: 0.18,
      specular: new THREE.Color(0x3877cc),
      shininess: 35,
      emissive: new THREE.Color(0x050e1f)
    });
    const globeMesh = new THREE.Mesh(sphereGeo, globeMat);
    mainGroup.add(globeMesh);

    // 4. INDEPENDENT TRANSLUCENT CLOUD LAYER
    const cloudRadius = globeRadius * 1.018;
    const cloudGeo = new THREE.SphereGeometry(cloudRadius, 48, 48);

    const createCloudTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, 1024, 512);

      // Cloud swirl bands
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      for (let i = 0; i < 28; i++) {
        const x = Math.random() * 1024;
        const y = 80 + Math.random() * 350;
        ctx.beginPath();
        ctx.ellipse(x, y, 90 + Math.random() * 70, 25 + Math.random() * 20, 0.2, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const cloudTexture = createCloudTexture();
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    mainGroup.add(cloudMesh);

    // 5. ATMOSPHERIC SCATTERING GLOW (Outer Corona Halo)
    const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.14, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x4da8ff,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    mainGroup.add(atmoMesh);

    // Secondary Rim Shell for crisp edge definition
    const rimGeo = new THREE.SphereGeometry(globeRadius * 1.025, 48, 48);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    mainGroup.add(rimMesh);

    // 6. TACTICAL CYBER HOLO-GRID & ELEVATION CONTOURS (For Cyber Theme & Active Modes)
    const cyberGroup = new THREE.Group();
    const cyberGridGeo = new THREE.SphereGeometry(globeRadius * 1.035, 36, 18);
    const cyberGridMat = new THREE.MeshBasicMaterial({
      color: 0x00d9a3,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const cyberGridMesh = new THREE.Mesh(cyberGridGeo, cyberGridMat);
    cyberGroup.add(cyberGridMesh);

    // Rotating Radar Sweep Ring
    const radarRingGeo = new THREE.RingGeometry(globeRadius * 1.05, globeRadius * 1.25, 64);
    const radarRingMat = new THREE.MeshBasicMaterial({
      color: 0x4da8ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22
    });
    const radarRingMesh = new THREE.Mesh(radarRingGeo, radarRingMat);
    radarRingMesh.rotation.x = Math.PI / 2.3;
    cyberGroup.add(radarRingMesh);
    mainGroup.add(cyberGroup);

    // 7. POLAR AURORA BOREALIS & AUSTRALIS RIBBONS
    const auroraCount = 350;
    const auroraGeo = new THREE.BufferGeometry();
    const auroraPos = new Float32Array(auroraCount * 3);
    const auroraColors = new Float32Array(auroraCount * 3);

    for (let i = 0; i < auroraCount; i++) {
      const angle = (i / auroraCount) * Math.PI * 2;
      const r = globeRadius * 0.45 + (Math.sin(i * 0.2) * 0.5);
      const isNorth = i % 2 === 0;
      const y = isNorth ? globeRadius * 0.88 + Math.random() * 0.6 : -(globeRadius * 0.88 + Math.random() * 0.6);

      auroraPos[i * 3] = Math.cos(angle) * r;
      auroraPos[i * 3 + 1] = y;
      auroraPos[i * 3 + 2] = Math.sin(angle) * r;

      // Glowing emerald and cyan
      auroraColors[i * 3] = 0.0;
      auroraColors[i * 3 + 1] = 0.85 + Math.random() * 0.15;
      auroraColors[i * 3 + 2] = 0.65;
    }
    auroraGeo.setAttribute('position', new THREE.BufferAttribute(auroraPos, 3));
    auroraGeo.setAttribute('color', new THREE.BufferAttribute(auroraColors, 3));

    const auroraMat = new THREE.PointsMaterial({
      size: 0.24,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const auroraMesh = new THREE.Points(auroraGeo, auroraMat);
    mainGroup.add(auroraMesh);

    // 8. DISASTER EPICENTER HOTSPOTS & SONAR PULSE RINGS
    const hotspotGroup = new THREE.Group();
    const hotspots = [
      { lat: 16.506, lng: 80.648, color: 0xff3b5c, label: 'Vijayawada Krishna River Basin', isPrimary: true },
      { lat: 37.774, lng: -122.419, color: 0xff8c42, label: 'SF Bay Sector' },
      { lat: 35.676, lng: 139.650, color: 0xffd23f, label: 'Tokyo Seismic' },
      { lat: 51.507, lng: -0.127, color: 0x4da8ff, label: 'London Node' },
      { lat: -33.868, lng: 151.209, color: 0x00d9a3, label: 'Sydney Coastal' }
    ];

    const pulseRings = [];

    hotspots.forEach((h) => {
      const pos = convertLatLngToVector3(h.lat, h.lng, globeRadius * 1.01);

      // Center Core Beacon
      const pinGeo = new THREE.SphereGeometry(h.isPrimary ? 0.32 : 0.22, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: h.color });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      hotspotGroup.add(pinMesh);

      // Concentric Expanding Sonar Rings
      const ringGeo = new THREE.RingGeometry(0.1, 0.45, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: h.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(0, 0, 0); // Align parallel to sphere surface
      hotspotGroup.add(ringMesh);

      pulseRings.push({ mesh: ringMesh, initialScale: 1, maxScale: 4.5, speed: h.isPrimary ? 2.5 : 1.8 });
    });
    mainGroup.add(hotspotGroup);

    // 9. ORBITING SATELLITE CONSTELLATION & LASER LINKS
    const satelliteGroup = new THREE.Group();
    const satellites = [];

    for (let s = 0; s < 4; s++) {
      const satGeo = new THREE.BoxGeometry(0.25, 0.12, 0.12);
      const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const satMesh = new THREE.Mesh(satGeo, satMat);

      // Solar Panel wings
      const wingGeo = new THREE.PlaneGeometry(0.5, 0.2);
      const wingMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, side: THREE.DoubleSide });
      const wingMesh = new THREE.Mesh(wingGeo, wingMat);
      wingMesh.rotation.x = Math.PI / 2;
      satMesh.add(wingMesh);

      const orbitRadius = globeRadius * 1.45 + s * 0.4;
      satellites.push({
        mesh: satMesh,
        radius: orbitRadius,
        speed: 0.4 + s * 0.15,
        angle: (s * Math.PI) / 2,
        inclination: (s * 0.5) - 0.7
      });
      satelliteGroup.add(satMesh);
    }
    mainGroup.add(satelliteGroup);

    // Orbital Orbit Curves
    for (let i = 0; i < 3; i++) {
      const curve = new THREE.EllipseCurve(0, 0, globeRadius * 1.4 + i * 0.35, globeRadius * 1.35 + i * 0.3, 0, Math.PI * 2);
      const pts = curve.getPoints(80);
      const orbitLineGeo = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, p.y, (i - 1) * 0.9)));
      const orbitLineMat = new THREE.LineBasicMaterial({ color: 0x4da8ff, transparent: true, opacity: 0.25 });
      const orbitLine = new THREE.Line(orbitLineGeo, orbitLineMat);
      orbitLine.rotation.x = Math.PI / (3.2 + i);
      satelliteGroup.add(orbitLine);
    }

    // 10. DISASTER MODE SPECIAL EFFECTS
    // Flood: Torrential Atmospheric Rain & Rising Grid Ocean
    const rainCount = 1800;
    const rainGeo = new THREE.BufferGeometry();
    const rainPos = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount; i++) {
      rainPos[i * 3] = (Math.random() - 0.5) * 45;
      rainPos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      rainPos[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.PointsMaterial({ color: 0x4da8ff, size: 0.16, transparent: true, opacity: 0 });
    const rainParticles = new THREE.Points(rainGeo, rainMat);
    scene.add(rainParticles);

    // Rising Ocean Grid Plane
    const oceanGeo = new THREE.PlaneGeometry(60, 60, 32, 32);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x0066cc,
      emissive: 0x001133,
      transparent: true,
      opacity: 0,
      wireframe: true
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    oceanMesh.rotation.x = -Math.PI / 2;
    oceanMesh.position.y = -8;
    scene.add(oceanMesh);

    // Wildfire: Fiery Rising Embers
    const fireCount = 1200;
    const fireGeo = new THREE.BufferGeometry();
    const firePos = new Float32Array(fireCount * 3);
    for (let i = 0; i < fireCount; i++) {
      firePos[i * 3] = (Math.random() - 0.5) * 40;
      firePos[i * 3 + 1] = -15 + Math.random() * 35;
      firePos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    fireGeo.setAttribute('position', new THREE.BufferAttribute(firePos, 3));
    const fireMat = new THREE.PointsMaterial({ color: 0xff5500, size: 0.22, transparent: true, opacity: 0 });
    const fireParticles = new THREE.Points(fireGeo, fireMat);
    scene.add(fireParticles);

    // Cyclone: Spiral Cloud Arms
    const cycloneCount = 1500;
    const cycloneGeo = new THREE.BufferGeometry();
    const cyclonePos = new Float32Array(cycloneCount * 3);
    for (let i = 0; i < cycloneCount; i++) {
      const radius = 1.5 + Math.random() * 16;
      const angle = Math.random() * Math.PI * 2;
      cyclonePos[i * 3] = Math.cos(angle) * radius;
      cyclonePos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      cyclonePos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    cycloneGeo.setAttribute('position', new THREE.BufferAttribute(cyclonePos, 3));
    const cycloneMat = new THREE.PointsMaterial({ color: 0x00d9a3, size: 0.18, transparent: true, opacity: 0 });
    const cycloneParticles = new THREE.Points(cycloneGeo, cycloneMat);
    scene.add(cycloneParticles);

    // Earthquake: Tectonic Shockwave Ring
    const shockwaveGeo = new THREE.RingGeometry(0.5, 9, 48);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xff3b5c,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      wireframe: true
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.rotation.x = Math.PI / 2;
    shockwaveMesh.position.y = -5;
    scene.add(shockwaveMesh);

    // Recovery: Gentle Golden Renewal Sparkles
    const recoveryCount = 600;
    const recoveryGeo = new THREE.BufferGeometry();
    const recoveryPos = new Float32Array(recoveryCount * 3);
    for (let i = 0; i < recoveryCount; i++) {
      recoveryPos[i * 3] = (Math.random() - 0.5) * 35;
      recoveryPos[i * 3 + 1] = -10 + Math.random() * 30;
      recoveryPos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    recoveryGeo.setAttribute('position', new THREE.BufferAttribute(recoveryPos, 3));
    const recoveryMat = new THREE.PointsMaterial({ color: 0xffd23f, size: 0.18, transparent: true, opacity: 0 });
    const recoveryParticles = new THREE.Points(recoveryGeo, recoveryMat);
    scene.add(recoveryParticles);

    // 11. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x4da8ff, 2.2);
    sunLight.position.set(24, 20, 24);
    scene.add(sunLight);

    const warmBackLight = new THREE.PointLight(0xffaa44, 1.2, 50);
    warmBackLight.position.set(-20, -10, -20);
    scene.add(warmBackLight);

    const lightningLight = new THREE.PointLight(0xffffff, 0, 100);
    lightningLight.position.set(0, 15, 10);
    scene.add(lightningLight);

    // 12. INTERACTIVE DRAG & MOUSE WHEEL ZOOM
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      // Don't drag if clicking buttons or interactive forms
      if (e.target.closest('button, input, select, a, textarea')) return;
      isDragging = true;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouse.x;
      const deltaY = e.clientY - previousMouse.y;

      dragVelocity.x = deltaX * 0.004;
      dragVelocity.y = deltaY * 0.004;

      mainGroup.rotation.y += dragVelocity.x;
      mainGroup.rotation.x += dragVelocity.y;

      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      if (e.target.closest('main, aside, nav, select')) return;
      const zoomDelta = e.deltaY * 0.005;
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + zoomDelta, 9, 24);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 13. ANIMATION LOOP
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const currentMode = activeModeRef.current;
      const currentTheme = activeThemeRef.current;
      const shouldAutoRotate = autoRotateRef.current;
      const intensity = bgIntensityRef.current;

      // Base Planet & Cloud Rotation
      if (shouldAutoRotate && !isDragging) {
        mainGroup.rotation.y += delta * 0.12;
      } else if (!isDragging) {
        // Friction damping
        dragVelocity.x *= 0.95;
        dragVelocity.y *= 0.95;
        mainGroup.rotation.y += dragVelocity.x;
        mainGroup.rotation.x += dragVelocity.y;
      }

      // Independent cloud layer rotation (slightly faster and inclined)
      cloudMesh.rotation.y += delta * 0.08;
      cloudMesh.rotation.x = Math.sin(time * 0.1) * 0.05;

      // Radar sweep ring rotation
      radarRingMesh.rotation.z += delta * 0.45;

      // Hotspot Sonar Rings Expansion
      pulseRings.forEach((p) => {
        p.mesh.scale.x += delta * p.speed;
        p.mesh.scale.y += delta * p.speed;
        const opacity = Math.max(0, 1 - (p.mesh.scale.x / p.maxScale));
        p.mesh.material.opacity = opacity * 0.85;

        if (p.mesh.scale.x > p.maxScale) {
          p.mesh.scale.set(1, 1, 1);
        }
      });

      // Satellites 3D Orbit Motion
      satellites.forEach((sat) => {
        sat.angle += delta * sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
        sat.mesh.position.y = Math.sin(sat.angle) * (sat.radius * sat.inclination);
        sat.mesh.lookAt(0, 0, 0);
      });

      // Aurora Wave Sinusoidal Oscillation
      const auroraPositions = auroraGeo.attributes.position.array;
      for (let i = 0; i < auroraCount; i++) {
        auroraPositions[i * 3 + 1] += Math.sin(time * 3 + i) * 0.003;
      }
      auroraGeo.attributes.position.needsUpdate = true;

      // THEME-SPECIFIC ADJUSTMENTS
      if (currentTheme === 'cyber_hologram') {
        cyberGridMat.opacity = 0.35 * intensity;
        radarRingMat.opacity = 0.4 * intensity;
        rimMat.opacity = 0.25;
        atmoMat.color.setHex(0x00d9a3);
      } else if (currentTheme === 'disaster_recon') {
        cyberGridMat.opacity = 0.22 * intensity;
        radarRingMat.opacity = 0.18 * intensity;
        rimMat.opacity = 0.15;
        atmoMat.color.setHex(0xff3b5c);
      } else if (currentTheme === 'aurora_cosmic') {
        cyberGridMat.opacity = 0.05;
        radarRingMat.opacity = 0.1;
        auroraMat.size = 0.35;
        atmoMat.color.setHex(0xb388ff);
      } else {
        // Orbital theme (default)
        cyberGridMat.opacity = 0.12 * intensity;
        radarRingMat.opacity = 0.15 * intensity;
        rimMat.opacity = 0.08;
        atmoMat.color.setHex(0x4da8ff);
      }

      // DISASTER MORPHING CONTROLS
      const fadeSpeed = delta * 2.2;

      // Flood Mode
      if (currentMode === 'flood') {
        rainMat.opacity = Math.min(0.85 * intensity, rainMat.opacity + fadeSpeed);
        oceanMat.opacity = Math.min(0.6 * intensity, oceanMat.opacity + fadeSpeed);
        const positions = rainGeo.attributes.position.array;
        for (let i = 0; i < rainCount; i++) {
          positions[i * 3 + 1] -= delta * 32;
          positions[i * 3] += delta * 4;
          if (positions[i * 3 + 1] < -22) positions[i * 3 + 1] = 22;
        }
        rainGeo.attributes.position.needsUpdate = true;

        if (Math.random() < 0.035) {
          lightningLight.intensity = 9;
        } else {
          lightningLight.intensity *= 0.82;
        }
        scene.fog.color.setHex(0x031024);
      } else {
        rainMat.opacity = Math.max(0, rainMat.opacity - fadeSpeed);
        oceanMat.opacity = Math.max(0, oceanMat.opacity - fadeSpeed);
        lightningLight.intensity = 0;
      }

      // Earthquake Mode
      if (currentMode === 'earthquake') {
        shockwaveMat.opacity = Math.min(0.85 * intensity, shockwaveMat.opacity + fadeSpeed);
        const sc = 1 + (time * 2.5 % 3) * 1.8;
        shockwaveMesh.scale.set(sc, sc, sc);
        camera.position.x = (Math.random() - 0.5) * 0.12;
        camera.position.y = 1.8 + (Math.random() - 0.5) * 0.12;
        scene.fog.color.setHex(0x190812);
      } else {
        shockwaveMat.opacity = Math.max(0, shockwaveMat.opacity - fadeSpeed);
        if (currentMode !== 'flood' && currentMode !== 'wildfire' && currentMode !== 'cyclone' && currentMode !== 'recovery') {
          camera.position.x = 0;
          camera.position.y = 1.8;
          scene.fog.color.setHex(0x070b1e);
        }
      }

      // Wildfire Mode
      if (currentMode === 'wildfire') {
        fireMat.opacity = Math.min(0.9 * intensity, fireMat.opacity + fadeSpeed);
        const positions = fireGeo.attributes.position.array;
        for (let i = 0; i < fireCount; i++) {
          positions[i * 3 + 1] += delta * 16;
          positions[i * 3] += Math.sin(time * 2 + i) * 0.08;
          if (positions[i * 3 + 1] > 22) positions[i * 3 + 1] = -15;
        }
        fireGeo.attributes.position.needsUpdate = true;
        scene.fog.color.setHex(0x1a0a03);
      } else {
        fireMat.opacity = Math.max(0, fireMat.opacity - fadeSpeed);
      }

      // Cyclone Mode
      if (currentMode === 'cyclone') {
        cycloneMat.opacity = Math.min(0.9 * intensity, cycloneMat.opacity + fadeSpeed);
        cycloneParticles.rotation.y += delta * 2.6;
        scene.fog.color.setHex(0x041915);
      } else {
        cycloneMat.opacity = Math.max(0, cycloneMat.opacity - fadeSpeed);
      }

      // Recovery Mode
      if (currentMode === 'recovery') {
        recoveryMat.opacity = Math.min(0.95 * intensity, recoveryMat.opacity + fadeSpeed);
        const positions = recoveryGeo.attributes.position.array;
        for (let i = 0; i < recoveryCount; i++) {
          positions[i * 3 + 1] += delta * 3.5;
          positions[i * 3] += Math.cos(time + i) * 0.06;
          if (positions[i * 3 + 1] > 18) positions[i * 3 + 1] = -10;
        }
        recoveryGeo.attributes.position.needsUpdate = true;
        scene.fog.color.setHex(0x0a1f18);
      } else {
        recoveryMat.opacity = Math.max(0, recoveryMat.opacity - fadeSpeed);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
}
