'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  Region,
  REGIONS,
  DEFAULT_REGION,
  getRegionBySlug,
  isValidRegionSlug,
} from '@/lib/regions';
import { getTranslation, Locale } from '@/lib/translations';

interface LanguageContextType {
  currentRegion: Region;
  currentLang: Locale;
  t: (key: string, fallback?: string) => string;
  changeRegion: (codeOrSlug: string) => void;
  regions: Region[];
  hasRegionInUrl: boolean;
  regionSelected: boolean;
  formatRegionLink: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialRegion,
  initialHasRegionInUrl,
}: {
  children: React.ReactNode;
  initialRegion?: Region;
  initialHasRegionInUrl?: boolean;
}) {
  const pathname = usePathname();

  // Helper to extract region from current pathname
  const detectRegionFromPath = useCallback((): Region | null => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      if (segments.length > 0 && isValidRegionSlug(segments[0])) {
        return getRegionBySlug(segments[0]);
      }
    }
    if (!pathname) return null;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && isValidRegionSlug(segments[0])) {
      return getRegionBySlug(segments[0]);
    }
    return null;
  }, [pathname]);

  const [currentRegion, setCurrentRegion] = useState<Region>(() => {
    return initialRegion || DEFAULT_REGION;
  });

  const [hasRegionInUrl, setHasRegionInUrl] = useState<boolean>(() => {
    return initialHasRegionInUrl ?? false;
  });

  // regionSelected: true when the user has explicitly picked a region (URL slug)
  const [regionSelected, setRegionSelected] = useState<boolean>(() => {
    return initialHasRegionInUrl ?? false;
  });

  // Sync region state from URL on mount and when pathname changes
  useEffect(() => {
    const fromPath = detectRegionFromPath();

    if (fromPath) {
      setCurrentRegion(fromPath);
      setHasRegionInUrl(true);
      setRegionSelected(true);
      // Synchronize cookie and localStorage
      const secure = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `gmp_country=${fromPath.code}; path=/; max-age=31536000; SameSite=Lax${secure}`;
      localStorage.setItem('gmp_country', fromPath.code);
    } else {
      // No region in URL (e.g. root '/', '/coupons', '/stores')
      // Default to English, no region selected!
      setCurrentRegion(DEFAULT_REGION);
      setHasRegionInUrl(false);
      setRegionSelected(false);
    }
  }, [pathname, detectRegionFromPath]);

  // Set html data attributes for language and region
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isSelected = regionSelected && hasRegionInUrl;
      document.documentElement.setAttribute('data-lang', isSelected ? currentRegion.lang : 'en');
      document.documentElement.setAttribute('data-region', isSelected ? currentRegion.code : 'GLOBAL');
    }
  }, [currentRegion, regionSelected, hasRegionInUrl]);

  const currentLang = useMemo<Locale>(() => {
    // If no region is explicitly selected in URL, ALWAYS use English
    if (!regionSelected || !hasRegionInUrl) return 'en';
    const lang = currentRegion.lang as Locale;
    return ['en', 'de', 'fr', 'it', 'nl', 'pl', 'es'].includes(lang) ? lang : 'en';
  }, [currentRegion, regionSelected, hasRegionInUrl]);

  const t = useCallback(
    (key: string, fallback?: string) => {
      return getTranslation(currentLang, key, fallback);
    },
    [currentLang]
  );

  const changeRegion = useCallback(
    (codeOrSlug: string) => {
      // Allow clearing region selection back to global default (English)
      if (!codeOrSlug || codeOrSlug.toLowerCase() === 'all' || codeOrSlug.toLowerCase() === 'global') {
        if (typeof window !== 'undefined') {
          document.cookie = 'gmp_country=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          localStorage.removeItem('gmp_country');
          const segments = pathname.split('/').filter(Boolean);
          let remainingSegments = segments;
          if (segments.length > 0 && isValidRegionSlug(segments[0])) {
            remainingSegments = segments.slice(1);
          }
          const newPath = remainingSegments.length > 0 ? `/${remainingSegments.join('/')}` : '/';
          window.location.href = newPath;
        }
        return;
      }

      const targetRegion =
        REGIONS.find(
          (r) =>
            r.code.toLowerCase() === codeOrSlug.toLowerCase() ||
            r.slug.toLowerCase() === codeOrSlug.toLowerCase()
        ) || DEFAULT_REGION;

      // Save cookie and local storage, then navigate to region-prefixed URL
      if (typeof window !== 'undefined') {
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `gmp_country=${targetRegion.code}; path=/; max-age=31536000; SameSite=Lax${secure}`;
        localStorage.setItem('gmp_country', targetRegion.code);

        // Calculate new URL: replace or prepend targetRegion.slug
        const segments = pathname.split('/').filter(Boolean);
        let remainingSegments: string[] = [];

        if (segments.length > 0 && isValidRegionSlug(segments[0])) {
          remainingSegments = segments.slice(1);
        } else {
          remainingSegments = segments;
        }

        const newPath = `/${targetRegion.slug}${
          remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : ''
        }`;

        window.location.href = newPath;
      }
    },
    [pathname]
  );

  const formatRegionLink = useCallback(
    (path: string) => {
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      if (hasRegionInUrl) {
        return `/${currentRegion.slug}${cleanPath === '/' ? '' : cleanPath}`;
      }
      return cleanPath;
    },
    [hasRegionInUrl, currentRegion.slug]
  );

  return (
    <LanguageContext.Provider
      value={{
        currentRegion,
        currentLang,
        t,
        changeRegion,
        regions: REGIONS,
        hasRegionInUrl,
        regionSelected,
        formatRegionLink,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
