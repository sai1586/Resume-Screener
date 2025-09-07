import React, { useState } from 'react';

import { URLS } from './urls';


function ResumeScreener() {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleJobDescChange = (e) => {
    setJobDesc(e.target.value);
  };

  const handleStartAnalysis = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('job_description', jobDesc);

    try {
      const response = await fetch(URLS.apiUploadResume, {
        method: 'POST',
        body: formData,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Error uploading resume or job description.');
    }
  };

  return (
    <div className="fullscreen-bg">
      <div className="upload-container">
        <h2 className="upload-title">Resume Screener</h2>
        {step === 1 && !loading && (
          <div className="upload-step">
            <label htmlFor="resume-upload" className="upload-label">
              <span role="img" aria-label="resume">📄</span> Upload your resume
            </label>
            <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} className="upload-input" />
          </div>
        )}
        {step === 2 && !loading && (
          <div className="upload-step">
            <label htmlFor="job-desc" className="upload-label">
              <span role="img" aria-label="job">💼</span> Paste or upload the job description
            </label>
            <textarea
              id="job-desc"
              className="job-desc-input"
              rows={8}
              value={jobDesc}
              onChange={handleJobDescChange}
              placeholder="Paste job description here..."
            />
            <button className="upload-btn" onClick={handleStartAnalysis} disabled={!jobDesc}>
              <span role="img" aria-label="search">🔍</span> Start Analysis
            </button>
          </div>
        )}
        {loading && (
          <div className="loading-section">
            <div className="loader"></div>
            <p>Analyzing... Please wait.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeScreener;
