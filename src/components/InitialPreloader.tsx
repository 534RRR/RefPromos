'use client';

import { useEffect, useState } from 'react';

export default function InitialPreloader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    // Start the fade-out, then fully remove after animation
    const dismiss = () => {
      setPhase((prev) => (prev === 'visible' ? 'fading' : prev));
    };

    // If the page has already finished loading, dismiss immediately
    if (document.readyState === 'complete') {
      dismiss();
    } else {
      // Listen for the load event
      window.addEventListener('load', dismiss, { once: true });
    }

    // Safety timeout: always dismiss after 4 seconds no matter what
    const safetyTimer = setTimeout(dismiss, 4000);

    return () => {
      window.removeEventListener('load', dismiss);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Once fading starts, remove from DOM after the animation completes
  useEffect(() => {
    if (phase === 'fading') {
      const removeTimer = setTimeout(() => setPhase('gone'), 400);
      return () => clearTimeout(removeTimer);
    }
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading RefPromos"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
        background: '#050807',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 0.35s ease-out',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
      }}
    >
      <style>{`
        @keyframes refpromos-initial-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
      <div style={{ display: 'grid', justifyItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            aria-hidden="true"
            style={{
              width: '42px',
              height: '42px',
              display: 'grid',
              placeItems: 'center',
              background: '#00e575',
              borderRadius: '10px',
              transform: 'rotate(-4deg)',
              boxShadow: '0 4px 18px rgba(0, 229, 117, .3)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8z" fill="#050807" />
              <circle cx="7.5" cy="7.5" r="1.75" fill="#00e575" />
            </svg>
          </div>
          <span style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Ref<span style={{ color: '#00e575' }}>Promos</span>
          </span>
        </div>

        <div
          aria-hidden="true"
          style={{
            width: '180px',
            height: '4px',
            overflow: 'hidden',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, .16)',
          }}
        >
          <div
            style={{
              width: '42%',
              height: '100%',
              borderRadius: 'inherit',
              background: '#00e575',
              animation: 'refpromos-initial-progress 1.2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
}