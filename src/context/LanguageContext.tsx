'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Region,
  REGIONS,
  DEFAULT_REGION,
  getRegionBySlug,
  getRegionByCode,
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
  const router = useRouter();

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

  // regionSelected: true when the user has explicitly picked a region (URL slug or cookie)
  const [regionSelected, setRegionSelected] = useState<boolean>(() => {
    if (initialHasRegionInUrl) return true;
    // Check cookie on initial render (SSR-safe: will be false on server, corrected in useEffect)
    return false;
  });

  // Sync region state from URL on mount and when pathname changes
  useEffect(() => {
    const fromPath = detectRegionFromPath();

    // Check if user has a region cookie (means they chose a region before)
    const hasCookie = typeof window !== 'undefined' &&
      document.cookie.split('; ').some((c) => c.startsWith('gmp_country='));

    if (fromPath) {
      setCurrentRegion(fromPath);
      setHasRegionInUrl(true);
      setRegionSelected(true);
      // Synchronize cookie and localStorage
      const secure = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `gmp_country=${fromPath.code}; path=/; max-age=31536000; SameSite=Lax${secure}`;
      localStorage.setItem('gmp_country', fromPath.code);
    } else if (initialRegion && initialHasRegionInUrl) {
      setCurrentRegion(initialRegion);
      setHasRegionInUrl(true);
      setRegionSelected(true);
    } else if (hasCookie) {
      // User has a cookie but no slug in URL — they selected a region before
      const cookieVal = document.cookie
        .split('; ')
        .find((c) => c.startsWith('gmp_country='))
        ?.split('=')[1];
      if (cookieVal) {
        const region = getRegionByCode(cookieVal);
        setCurrentRegion(region);
        setRegionSelected(true);
      }
      setHasRegionInUrl(false);
    } else {
      // No region in URL, no cookie — first-time visitor, no region selected
      setCurrentRegion(DEFAULT_REGION);
      setHasRegionInUrl(false);
      setRegionSelected(false);
    }
  }, [pathname, detectRegionFromPath, initialRegion, initialHasRegionInUrl]);

  // Set html data attributes for language and region
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-lang', currentRegion.lang);
      document.documentElement.setAttribute('data-region', currentRegion.code);
    }
  }, [currentRegion]);

  const currentLang = useMemo<Locale>(() => {
    // If no region selected, always use English
    if (!regionSelected) return 'en';
    const lang = currentRegion.lang as Locale;
    return ['en', 'de', 'fr', 'it', 'nl', 'pl', 'es'].includes(lang) ? lang : 'en';
  }, [currentRegion, regionSelected]);

  const t = useCallback(
    (key: string, fallback?: string) => {
      return getTranslation(currentLang, key, fallback);
    },
    [currentLang]
  );

  const changeRegion = useCallback(
    (codeOrSlug: string) => {
      const targetRegion =
        REGIONS.find(
          (r) =>
            r.code.toLowerCase() === codeOrSlug.toLowerCase() ||
            r.slug.toLowerCase() === codeOrSlug.toLowerCase()
        ) || DEFAULT_REGION;

      // Save cookie and local storage immediately, then reload to new URL
      // Translation happens AFTER reload via AutoTranslator component
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

        // Hard reload to new region URL — AutoTranslator will handle translation on the new page
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
