'use client';

import React from 'react';
import { Trophy, Award, CheckCircle, Brain } from 'lucide-react';

interface Achievement {
  title: string;
  event: string;
  description: string;
  icon: React.ReactNode;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: '1st Place – Sudoku Solver Project',
      event: 'PRAGYAN Tech Fest 2026',
      description: 'Awarded first place in the college-wide hackathon for designing and implementing an optimized backtracking Sudoku Solver.',
      icon: <Trophy size={22} />
    },
    {
      title: '1st Place – College Website Development',
      event: 'ATOS Tech Fest 2025',
      description: 'Won first prize for designing and coding a modern, highly responsive university portal mockup with optimized page speed performance.',
      icon: <Trophy size={22} />
    },
    {
      title: 'Member of Toastmasters International Club',
      event: 'Waltair Toastmasters International',
      description: 'By being a member of Toastmasters club, Ive mastered my communication skills and leadership qualities which helped me to enhance my careeer',
      icon: <Brain size={22} />
    },
    {
      title: 'Winner – Group Discussion Competition',
      event: 'College Annual Meet 2024',
      description: 'Recognized for excellent verbal articulation, domain analysis, and team leadership during structured technical debate panels.',
      icon: <Award size={22} />
    }
  ];

  const certifications: Certification[] = [
  { name: 'Cryptography and Network Security (Elite)', issuer: 'NPTEL', year: '2026' },
  { name: 'Introduction to Critical Infrastructure Protection', issuer: 'OPSWAT', year: '2026' },
  { name: 'Cybersecurity Job Ready Certification (86%)', issuer: 'Certigo', year: '2026' },
  { name: 'API Development: Framework Security', issuer: 'Infosys', year: '2026' },
  { name: 'Python Basics for Data Science', issuer: 'IBM', year: '2026' }
  ];

  return (
    <section id="achievements" className="container">
      <h2 className="section-title">Achievements &amp; Awards</h2>

      {/* Achievements Cards Grid */}
      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <div key={idx} className="glass-card achievement-card fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="achievement-icon-wrapper">
              {ach.icon}
            </div>
            <div className="achievement-details">
              <span className="badge" style={{ width: 'fit-content', marginBottom: '0.2rem' }}>{ach.event}</span>
              <h3 className="achievement-name">{ach.title}</h3>
              <p className="achievement-desc">{ach.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Sub-section */}
      <div className="certs-wrapper">
        <h3 className="certs-title">Professional Certifications</h3>
        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card cert-card fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="cert-icon-wrapper">
                <CheckCircle size={20} />
              </div>
              <div className="cert-info">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
