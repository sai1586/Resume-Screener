import './App.css';
import { URLS } from './urls';
import ResumeScreener from './ResumeScreener';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App vibrant-bg">
              <header className="App-header">
                <div className="home-card">
                  <h1 className="home-title">Welcome to Resume Screener!</h1>
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
  );
}

export default App;
