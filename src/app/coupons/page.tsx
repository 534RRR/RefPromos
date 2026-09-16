import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import { Search, Tag, X } from 'lucide-react';
import { getCanonicalUrl } from '@/lib/seo';
import { getServerTranslator, getServerRegionCode } from '@/lib/serverLocale';
import { getLocalizedCategoryName } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'All Verified Coupons, Promo Codes & Discounts | RefPromos',
  description:
    'Search and filter thousands of tested, working discount coupons, promo codes, and flash sales across top shopping categories and stores.',
  alternates: {
    canonical: getCanonicalUrl('/coupons'),
  },
};

interface CouponsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    store?: string;
    type?: string;
    sort?: string;
  }>;
}

export default async function CouponsHubPage(props: CouponsPageProps) {
  const { locale, t } = await getServerTranslator();
  const regionCode = await getServerRegionCode();
  const searchParams = await props.searchParams;
  const searchQuery = searchParams.search || '';
  const selectedCategory = searchParams.category || '';
  const selectedStore = searchParams.store || '';
  const selectedType = searchParams.type || 'all';
  const selectedSort = searchParams.sort || 'popular';

  // Look up the Country record for region filtering
  const currentCountry = await prisma.country.findUnique({
    where: { code: regionCode },
    select: { id: true },
  });

  const [categories, stores] = await Promise.all([
    prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: { select: { storeCategories: true } },
      },
    }),
    prisma.store.findMany({
      where: { status: 'active' },
      take: 15,
      orderBy: { name: 'asc' },
      select: { id: true, name: true, slug: true, logoUrl: true },
    }),
  ]);

  const whereCondition: any = {
    status: 'active',
  };

  // Region filter: show coupons tagged for this region OR coupons with no region tags (global)
  if (currentCountry) {
    whereCondition.OR = [
      { couponCountries: { some: { countryId: currentCountry.id } } },
      { couponCountries: { none: {} } },
    ];
  }

  if (searchQuery) {
    // If we already have an OR for region, wrap everything in AND
    const searchCondition = [
      { title: { contains: searchQuery } },
      { couponCode: { contains: searchQuery } },
      { discountValue: { contains: searchQuery } },
      { store: { name: { contains: searchQuery } } },
    ];
    if (whereCondition.OR) {
      // Combine region OR with search OR using AND
      const regionOr = whereCondition.OR;
      delete whereCondition.OR;
      whereCondition.AND = [
        { OR: regionOr },
        { OR: searchCondition },
      ];
    } else {
      whereCondition.OR = searchCondition;
    }
  }

  if (selectedStore) {
    whereCondition.store = {
      slug: selectedStore,
    };
  }

  if (selectedCategory) {
    whereCondition.store = {
      ...(whereCondition.store || {}),
      storeCategories: {
        some: {
          category: {
            slug: selectedCategory,
          },
        },
      },
    };
  }

  if (selectedType === 'code') {
    whereCondition.couponCode = { not: null };
  } else if (selectedType === 'deal') {
    whereCondition.couponCode = null;
  } else if (selectedType === 'free_shipping') {
    whereCondition.discountType = 'free_shipping';
  }

  let orderBy: any = [{ isFeatured: 'desc' }, { createdAt: 'desc' }];
  if (selectedSort === 'newest') {
    orderBy = { createdAt: 'desc' };
  } else if (selectedSort === 'expiring') {
    orderBy = { expiryDate: 'asc' };
  } else if (selectedSort === 'popular') {
    orderBy = [{ isFeatured: 'desc' }, { usedCount: 'desc' }];
  }

  const coupons = await prisma.coupon.findMany({
    where: whereCondition,
    orderBy,
    include: {
      store: {
        select: {
          id: true,
          name: true,
          slug: true,
          logoUrl: true,
          affiliateUrl: true,
        },
      },
    },
  });

  const totalCouponsCount = coupons.length;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem 1.5rem' }}>
      <Breadcrumbs items={[{ name: t('nav_coupons', 'Coupons'), url: '/coupons' }]} />

      {/* Page Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow-pill" style={{ marginBottom: '0.85rem' }}>
          <Tag size={13} /> {t('coupons_eyebrow', 'Deals Hub')}
        </span>
        <h1 className="page-title" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
          {t('coupons_title', 'Verified Promo Codes & Coupons')}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px' }}>
          {t('coupons_desc', 'Browse tested discount codes, voucher coupons, and flash sales verified working today.')}
        </p>
      </div>

      {/* Top Filter Bar */}
      <div
        className="coupons-filter-bar"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-2xl)',
          padding: '1.25rem 1.5rem',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Search Box */}
        <form action="/coupons" method="GET" style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '280px', position: 'relative' }}>
          {selectedCategory && <input type="hidden" name="category" value={selectedCategory} />}
          {selectedStore && <input type="hidden" name="store" value={selectedStore} />}
          {selectedType !== 'all' && <input type="hidden" name="type" value={selectedType} />}
          <Search size={18} color="var(--slate-400)" style={{ position: 'absolute', left: '1.1rem' }} />
          <input
            type="text"
            name="search"
            defaultValue={searchQuery}
            placeholder={t('search_coupons_placeholder', 'Search by store or code (e.g. Nike, SAVE20)...')}
            style={{
              width: '100%',
              padding: '0.8rem 1rem 0.8rem 2.8rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border)',
              background: 'var(--bg-input)',
              color: 'var(--text-main)',
              outline: 'none',
              fontSize: '0.94rem',
            }}
          />
        </form>

        {/* Offer Type Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          <Link
            href={`/coupons?type=all${selectedCategory ? `&category=${selectedCategory}` : ''}${selectedStore ? `&store=${selectedStore}` : ''}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`}
            className={`btn btn-sm ${selectedType === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {t('all_offers', 'All Offers')}
          </Link>
          <Link
            href={`/coupons?type=code${selectedCategory ? `&category=${selectedCategory}` : ''}${selectedStore ? `&store=${selectedStore}` : ''}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`}
            className={`btn btn-sm ${selectedType === 'code' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {t('promo_codes', 'Promo Codes')}
          </Link>
          <Link
            href={`/coupons?type=deal${selectedCategory ? `&category=${selectedCategory}` : ''}${selectedStore ? `&store=${selectedStore}` : ''}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`}
            className={`btn btn-sm ${selectedType === 'deal' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {t('sales_deals', 'Sales & Deals')}
          </Link>
          <Link
            href={`/coupons?type=free_shipping${selectedCategory ? `&category=${selectedCategory}` : ''}${selectedStore ? `&store=${selectedStore}` : ''}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`}
            className={`btn btn-sm ${selectedType === 'free_shipping' ? 'btn-primary' : 'btn-secondary'}`}
          >
            {t('free_shipping', 'Free Shipping')}
          </Link>
        </div>
      </div>

      {/* Active Filter Tags */}
      {(searchQuery || selectedCategory || selectedStore || selectedType !== 'all') && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)' }}>{t('active_filters', 'Active Filters:')}</span>
          {searchQuery && (
            <span className="badge badge-deal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              &ldquo;{searchQuery}&rdquo;
              <Link href={`/coupons?category=${selectedCategory}&store=${selectedStore}&type=${selectedType}`}><X size={12} /></Link>
            </span>
          )}
          {selectedCategory && (
            <span className="badge badge-deal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              Category: {selectedCategory}
              <Link href={`/coupons?search=${searchQuery}&store=${selectedStore}&type=${selectedType}`}><X size={12} /></Link>
            </span>
          )}
          {selectedStore && (
            <span className="badge badge-deal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              Store: {selectedStore}
              <Link href={`/coupons?search=${searchQuery}&category=${selectedCategory}&type=${selectedType}`}><X size={12} /></Link>
            </span>
          )}
          <Link href="/coupons" style={{ fontSize: '0.84rem', color: 'var(--primary)', fontWeight: 800, marginLeft: '0.5rem' }}>
            {t('clear_all_filters', 'Clear All')}
          </Link>
        </div>
      )}

      {/* 2-COLUMN LAYOUT (SIDEBAR ON LEFT, COUPONS GRID ON RIGHT) */}
      <div className="coupons-layout" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'start' }}>
        
        {/* SIDEBAR FILTERS */}
        <div className="coupons-sidebar">
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Categories Filter */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.4rem',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>
              {t('nav_categories', 'Categories')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <Link
                href={`/coupons?store=${selectedStore}&type=${selectedType}&search=${searchQuery}`}
                className={`sidebar-filter-item ${!selectedCategory ? 'active' : ''}`}
              >
                <span>{t('all_categories', 'All Categories')}</span>
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/coupons?category=${cat.slug}&store=${selectedStore}&type=${selectedType}&search=${searchQuery}`}
                  className={`sidebar-filter-item ${selectedCategory === cat.slug ? 'active' : ''}`}
                >
                  <span>{getLocalizedCategoryName(cat.name, locale)}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Stores Filter */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.4rem',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>
              {t('top_stores', 'Top Stores')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <Link
                href={`/coupons?category=${selectedCategory}&type=${selectedType}&search=${searchQuery}`}
                className={`sidebar-filter-item ${!selectedStore ? 'active' : ''}`}
              >
                <span>{t('all_stores', 'All Stores')}</span>
              </Link>
              {stores.map((st) => (
                <Link
                  key={st.id}
                  href={`/coupons?store=${st.slug}&category=${selectedCategory}&type=${selectedType}&search=${searchQuery}`}
                  className={`sidebar-filter-item ${selectedStore === st.slug ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <img src={st.logoUrl} alt={st.name} style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'contain', background: '#ffffff', padding: '2px', border: '1px solid var(--border)' }} />
                    <span>{st.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </aside>
        </div>

        {/* MAIN COUPON LIST */}
        <main>
          {coupons.length === 0 ? (
            <div style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}>
              <Tag size={44} color="var(--primary)" style={{ margin: '0 auto 1.25rem auto' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-heading)' }}>
                {t('no_coupons_found', 'No Coupons Found')}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
                {t('no_coupons_desc', "We couldn't find any verified offers matching your current filter selection.")}
              </p>
              <Link href="/coupons" className="btn btn-primary">
                {t('view_all_coupons', 'View All Coupons')}
              </Link>
            </div>
          ) : (
            <div className="coupons-grid grid grid-cols-2 gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))' }}>
              {coupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon as any} />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
