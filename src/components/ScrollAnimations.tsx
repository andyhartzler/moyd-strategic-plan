'use client';

import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .timeline-node').forEach((el) => {
      observer.observe(el);
    });

    // Reading progress bar
    const updateProgress = () => {
      const bar = document.getElementById('reading-progress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${Math.min(progress, 100)}%`;
    };

    // Section labels for mobile indicator
    const sectionLabels: Record<string, string> = {
      'executive-summary': 'Summary',
      'mission-vision': 'Mission',
      'letter': 'Letter',
      'current-moment': 'Context',
      'strategic-advantage': 'Advantage',
      'goals': 'Goals',
      'theory-of-change': 'Theory',
      'implementation': 'Strategy',
      'organizational': 'Structure',
      'fundraising': 'Finance',
      'metrics': 'Metrics',
      'timeline': 'Timeline',
      'closing': 'Closing',
    };

    // Section nav active state
    const updateSectionNav = () => {
      const sections = document.querySelectorAll('[data-section]');
      const pills = document.querySelectorAll('.section-pill');
      const mobileLabel = document.getElementById('mobile-section-label');

      let currentSection = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) {
          currentSection = section.getAttribute('data-section') || '';
        }
      });

      pills.forEach((pill) => {
        const target = pill.getAttribute('data-target');
        if (target === currentSection) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });

      // Update mobile section indicator
      if (mobileLabel) {
        if (currentSection && sectionLabels[currentSection]) {
          mobileLabel.textContent = sectionLabels[currentSection];
          mobileLabel.style.opacity = '1';
        } else {
          mobileLabel.style.opacity = '0';
        }
      }
    };

    const handleScroll = () => {
      updateProgress();
      updateSectionNav();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export function SectionNav() {
  const sections = [
    { id: 'executive-summary', label: 'Summary' },
    { id: 'mission-vision', label: 'Mission' },
    { id: 'letter', label: 'Letter' },
    { id: 'current-moment', label: 'Context' },
    { id: 'strategic-advantage', label: 'Advantage' },
    { id: 'goals', label: 'Goals' },
    { id: 'theory-of-change', label: 'Theory' },
    { id: 'implementation', label: 'Strategy' },
    { id: 'organizational', label: 'Structure' },
    { id: 'fundraising', label: 'Finance' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'closing', label: 'Closing' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="section-nav" id="section-nav">
      {sections.map((s) => (
        <button
          key={s.id}
          className="section-pill"
          data-target={s.id}
          onClick={() => scrollToSection(s.id)}
        >
          <span className="label">{s.label}</span>
          <span className="dot" />
        </button>
      ))}
    </nav>
  );
}
