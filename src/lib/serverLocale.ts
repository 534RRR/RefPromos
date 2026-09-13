import { headers, cookies } from 'next/headers';
import { Locale, getTranslation } from '@/lib/translations';
import { getRegionByCode, getRegionBySlug } from '@/lib/regions';

export async function getServerLocale(): Promise<Locale> {
  try {
    const headersList = await headers();
    const localeHeader = headersList.get('x-locale') as Locale | null;
    if (localeHeader && ['en', 'de', 'fr', 'it', 'nl'].includes(localeHeader)) {
      return localeHeader;
    }
    const regionSlugHeader = headersList.get('x-region-slug');
    if (regionSlugHeader) {
      const reg = getRegionBySlug(regionSlugHeader);
      if (reg && ['en', 'de', 'fr', 'it', 'nl'].includes(reg.lang)) {
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
      if (reg && ['en', 'de', 'fr', 'it', 'nl'].includes(reg.lang)) {
        return reg.lang as Locale;
      }
    }
  } catch {
    // If cookies() is called outside request context
  }

  return 'en';
}

export async function getServerTranslator() {
  const locale = await getServerLocale();
  return {
    locale,
    t: (key: string, fallback?: string) => getTranslation(locale, key, fallback),
  };
}
