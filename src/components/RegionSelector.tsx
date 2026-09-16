'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function RegionSelector() {
  const pathname = usePathname();
  const { regions, changeRegion, regionSelected } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    // NEVER show selector on admin / CMS routes or API routes
    if (pathname?.startsWith('/cms_admin_login') || pathname?.startsWith('/admin') || pathname?.startsWith('/api')) {
      setVisible(false);
      return;
    }

    // Show selector only if no region has been selected yet
    if (regionSelected) return;

    setVisible(true);
    // Trigger entrance animation after mount
    const raf = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(raf);
  }, [regionSelected, pathname]);

  // NEVER render on admin / CMS routes or API routes
  if (pathname?.startsWith('/cms_admin_login') || pathname?.startsWith('/admin') || pathname?.startsWith('/api')) {
    return null;
  }

  if (!visible) return null;

  const handleSelect = (code: string, idx: number) => {
    setSelectedIdx(idx);
    // Brief delay for the selection animation before navigating
    setTimeout(() => {
      changeRegion(code);
    }, 300);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(5, 8, 7, 0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        opacity: animateIn ? 1 : 0,
        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <style>{`
        @keyframes regioncard-enter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes regioncard-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 229, 117, 0.3); }
          50% { box-shadow: 0 0 0 8px rgba(0, 229, 117, 0); }
        }
        .region-card {
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.25rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 130px;
        }
        .region-card:hover {
          border-color: rgba(0, 229, 117, 0.5);
          background: rgba(0, 229, 117, 0.08);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 229, 117, 0.15);
        }
        .region-card.selected {
          border-color: #00e575;
          background: rgba(0, 229, 117, 0.12);
          animation: regioncard-pulse 0.6s ease-out;
        }
        .region-card-flag {
          font-size: 2.5rem;
          line-height: 1;
        }
        .region-card-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
        }
        .region-card-full {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.45);
          text-align: center;
        }
        @media (max-width: 768px) {
          .region-selector-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
          }
          .region-card {
            min-width: unset;
            padding: 1rem 0.65rem;
          }
          .region-card-flag {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .region-selector-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          padding: '2rem 1.5rem',
          maxWidth: '720px',
          width: '100%',
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              background: 'rgba(0, 229, 117, 0.1)',
              border: '1px solid rgba(0, 229, 117, 0.2)',
              marginBottom: '1.25rem',
              color: '#00e575',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <Globe size={14} />
            Choose Your Region
          </div>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '0.65rem',
            }}
          >
            Where Are You <span style={{ color: '#00e575' }}>Shopping</span>?
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.95rem',
              fontWeight: 500,
              maxWidth: '440px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            Select your region to see the best local deals, verified promo codes, and currency-specific savings.
          </p>
        </div>

        {/* Region Grid */}
        <div
          className="region-selector-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            width: '100%',
          }}
        >
          {regions.map((region, i) => (
            <div
              key={region.code}
              className={`region-card ${selectedIdx === i ? 'selected' : ''}`}
              onClick={() => handleSelect(region.code, i)}
              style={{
                animation: animateIn
                  ? `regioncard-enter 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + i * 0.05}s both`
                  : 'none',
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(region.code, i);
                }
              }}
              aria-label={`Select ${region.fullName}`}
            >
              <span className="region-card-flag">{region.flag}</span>
              <span className="region-card-name">{region.name}</span>
              <span className="region-card-full">{region.fullName}</span>
              {selectedIdx === i && (
                <ArrowRight size={16} color="#00e575" style={{ marginTop: '-0.25rem' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
