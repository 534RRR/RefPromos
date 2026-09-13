import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCanonicalUrl } from '@/lib/seo';
import { getServerTranslator } from '@/lib/serverLocale';

export const metadata: Metadata = {
  title: 'Terms and Conditions | RefPromos',
  description:
    'Review the terms of service and user agreements for RefPromos.com.',
  alternates: {
    canonical: getCanonicalUrl('/terms-and-conditions'),
  },
};

export default async function TermsAndConditionsPage() {
  const { t, formatRegionLink } = await getServerTranslator();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem 1.5rem', maxWidth: '880px' }}>
      <Breadcrumbs items={[{ name: t('footer_terms', 'Terms and Conditions'), url: formatRegionLink('/terms-and-conditions') }]} />

      <div style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow-pill" style={{ marginBottom: '0.85rem' }}>
          {t('terms_eyebrow', 'Terms of Service')}
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
          {t('terms_title', 'Terms and Conditions')}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
          {t('terms_last_updated', 'Last Updated: August 2026')}
        </p>
      </div>

      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border)',
          padding: '2.5rem 2.25rem',
          boxShadow: 'var(--shadow-card)',
          fontSize: '1rem',
          lineHeight: '1.75',
          color: 'var(--text-main)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.25rem',
        }}
      >
        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('terms_section_1_title', '1. Acceptance of Terms')}
          </h2>
          <p>
            {t('terms_section_1_desc', 'By accessing or browsing RefPromos (the "Website"), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please discontinue use of our services immediately.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('terms_section_2_title', '2. Nature of Deals & Coupon Codes')}
          </h2>
          <p style={{ marginBottom: '0.85rem' }}>
            {t('terms_section_2_desc', 'RefPromos publishes promotional coupons, discount codes, and sales aggregated from merchants and brand partners. While we take rigorous measures to test and verify every offer before publication:')}
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <li>{t('terms_rule_1', 'Merchant coupon validity, discount percentage, pricing, and expiration dates are subject to change at the sole discretion of the retailer without prior notice.')}</li>
            <li>{t('terms_rule_2', 'We do not guarantee that all third-party discounts will be honored by the merchant at all times.')}</li>
            <li>{t('terms_rule_3', "All transactions occur directly on the respective merchant's website. RefPromos does not process payments or handle order fulfillment.")}</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('terms_section_3_title', '3. Intellectual Property Rights')}
          </h2>
          <p>
            {t('terms_section_3_desc', 'All original content, design layouts, logos, and software code on RefPromos are protected by international copyright and trademark laws. Third-party brand names, logos, and trademarks (e.g. Nike, Amazon, Sephora) belong to their respective owners and are used solely for identification and referral purposes.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('terms_section_4_title', '4. Limitation of Liability')}
          </h2>
          <p>
            {t('terms_section_4_desc', 'To the fullest extent permitted by applicable law, RefPromos and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use any promotional offer listed on the site.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('terms_section_5_title', '5. Contact Information')}
          </h2>
          <p>
            {t('terms_section_5_desc', 'For legal inquiries or notices regarding these terms, please email:')}
            <br />
            <strong style={{ color: 'var(--text-heading)' }}>Email:</strong>{' '}
            <a href="mailto:contact@refpromos.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>
              contact@refpromos.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
