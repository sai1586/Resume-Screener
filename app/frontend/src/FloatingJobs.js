import React, { useEffect, useState } from 'react';
import './FloatingJobs.css';

const jobTitles = [
  'Engineer', 'Designer', 'Manager', 'Developer', 'Analyst', 'Consultant', 'Architect', 'Marketer', 'Sales', 'HR', 'Support', 'Product Owner', 'QA', 'Data Scientist', 'Intern', 'Director', 'Executive', 'Administrator', 'Coordinator', 'Specialist', 'Trainer'
];

function generateStyles() {
  return jobTitles.map(() => {
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 5;
    const left = Math.random() * 90;
    const fontSize = 1 + Math.random() * 2;
    const color = '#0057b8'; // Professional accent blue
    const top = Math.random() * 80;
    return {
      left: `${left}%`,
      fontSize: `${fontSize}rem`,
      color,
      animation: `floatJobFromTop ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
      position: 'absolute',
      top: `${top}%`,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: 0.95,
      zIndex: 1,
    };
  });
}

const FloatingJobs = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    setStyles(generateStyles());
  }, []);

  return (
    <div className="floating-jobs-bg">
      {jobTitles.map((title, idx) => (
        <span key={idx} style={styles[idx] || {}} className="floating-job-title">
          {title}
        </span>
      ))}
    </div>
  );
};

export default FloatingJobs;
