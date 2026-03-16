'use client';

import { useState } from 'react';

export function DownloadButton() {
  const [state, setState] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleClick = () => {
    if (state !== 'idle') return;
    setState('downloading');

    setTimeout(() => {
      setState('done');

      // Trigger actual download after animation completes
      const link = document.createElement('a');
      link.href = '/MOYD-Two-Year-Strategic-Plan.pdf';
      link.download = 'MOYD-Two-Year-Strategic-Plan.pdf';
      link.click();

      setTimeout(() => setState('idle'), 2500);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`download-btn inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold relative pb-1 ${
        state === 'downloading' ? 'downloading' : ''
      } ${state === 'done' ? 'downloaded' : ''}`}
    >
      {state === 'done' ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )}
      {state === 'idle' && 'Download PDF'}
      {state === 'downloading' && 'Downloading...'}
      {state === 'done' && 'Downloaded'}
      <span className="download-progress" />
    </button>
  );
}
