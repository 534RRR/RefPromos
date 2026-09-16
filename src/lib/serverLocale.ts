import { headers, cookies } from 'next/headers';
import { Locale, getTranslation } from '@/lib/translations';
import { getRegionByCode, getRegionBySlug } from '@/lib/regions';

const VALID_LOCALES: Locale[] = ['en', 'de', 'fr', 'it', 'nl', 'pl', 'es'];

export async function getServerLocale(): Promise<Locale> {
  try {
    const headersList = await headers();
    const localeHeader = headersList.get('x-locale') as Locale | null;
    if (localeHeader && VALID_LOCALES.includes(localeHeader)) {
      return localeHeader;
    }
    const regionSlugHeader = headersList.get('x-region-slug');
    if (regionSlugHeader) {
      const reg = getRegionBySlug(regionSlugHeader);
      if (reg && VALID_LOCALES.includes(reg.lang as Locale)) {
        return reg.lang as Locale;
      }
    }
  } catch {
    // If headers() is called outside request context
  }

  try {
    const cookieStore = await cookies();
    const cookieCountry = cookieStore.get('gmp_country')?.value;
    if (cookieCountry) {
      const reg = getRegionByCode(cookieCountry);
      if (reg && VALID_LOCALES.includes(reg.lang as Locale)) {
        return reg.lang as Locale;
      }
    }
  } catch {
    // If cookies() is called outside request context
  }

  return 'en';
}

export async function getServerRegion() {
  try {
    const headersList = await headers();
    const regionSlugHeader = headersList.get('x-region-slug');
    if (regionSlugHeader) {
      return getRegionBySlug(regionSlugHeader);
    }
  } catch {
    // If headers() is called outside request context
  }

  try {
    const cookieStore = await cookies();
    const cookieCountry = cookieStore.get('gmp_country')?.value;
    if (cookieCountry) {
      return getRegionByCode(cookieCountry);
    }
  } catch {
    // If cookies() is called outside request context
  }

  return getRegionBySlug('us');
}

export async function getServerTranslator() {
  const locale = await getServerLocale();
  const region = await getServerRegion();

  let regionSlug: string | null = null;
  try {
    const headersList = await headers();
    regionSlug = headersList.get('x-region-slug');
  } catch {
    // If called outside request context
  }

  return {
    locale,
    region,
    hasRegionInUrl: Boolean(regionSlug),
    t: (key: string, fallback?: string) => getTranslation(locale, key, fallback),
    formatRegionLink: (path: string) => {
      if (
        !path ||
        path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('//') ||
        path.startsWith('#') ||
        path.startsWith('mailto:')
      ) {
        return path;
      }
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      if (regionSlug) {
        return `/${regionSlug}${cleanPath === '/' ? '' : cleanPath}`;
      }
      return cleanPath;
    },
  };
}

/**
 * Returns the current region's country code (e.g. 'US', 'UK', 'DE')
 * from the request headers or cookie. Used for server-side Prisma queries
 * that need to filter by CouponCountry / DealCountry relations.
 */
export async function getServerRegionCode(): Promise<string> {
  const region = await getServerRegion();
  return region.code;
}

