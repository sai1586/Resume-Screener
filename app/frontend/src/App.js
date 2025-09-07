import './App.css';
import { useEffect, useRef } from 'react';
import { URLS } from './urls';
import ResumeScreener from './ResumeScreener';
import FloatingJobs from './FloatingJobs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function ParticleBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      size: Math.random() * 2 + 1,
      glowPhase: Math.random() * Math.PI * 2,
    }));
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.glowPhase += 0.04 + Math.random() * 0.01;
        const glow = 10 + Math.sin(p.glowPhase) * 12; // smoothly increase/decrease
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.shadowColor = 'rgba(255,255,255,0.85)'; // light white glow
        ctx.shadowBlur = glow;
        ctx.fillStyle = 'rgba(255,255,255,0.95)'; // light white
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="particle-bg"
      style={{ position: 'fixed', inset: 0, zIndex: 0, width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
}

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="App vibrant-bg" style={{ position: 'relative' }}>
                  <FloatingJobs />
                  <header className="App-header" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="home-card glass-modal">
                      <h1 className="home-title">
                        Welcome to <span className="gradient-text">Resume Screener</span>!
                      </h1>
                      <p className="home-tagline">
                        <span role="img" aria-label="sparkles">✨</span> Empower your career and hiring journey.<br />
                        Fast, smart, and fun resume analysis for everyone!
                      </p>
                      <div className="home-actions">
                        <button className="home-btn primary" onClick={() => window.location.href = URLS.resumescreener}>
                          Get Started
                        </button>
                      </div>
                    </div>
                  </header>
                </div>
              }
            />
            <Route path={URLS.resumescreener} element={<ResumeScreener />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
