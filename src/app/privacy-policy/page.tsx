import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCanonicalUrl } from '@/lib/seo';
import { getServerTranslator } from '@/lib/serverLocale';

export const metadata: Metadata = {
  title: 'Privacy Policy & Affiliate Disclosure | RefPromos',
  description:
    'Read the RefPromos privacy policy, cookie guidelines, data protection standards, and transparent affiliate disclosure.',
  alternates: {
    canonical: getCanonicalUrl('/privacy-policy'),
  },
};

export default async function PrivacyPolicyPage() {
  const { t, formatRegionLink } = await getServerTranslator();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem 1.5rem', maxWidth: '880px' }}>
      <Breadcrumbs items={[{ name: t('footer_privacy', 'Privacy Policy'), url: formatRegionLink('/privacy-policy') }]} />

      <div style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow-pill" style={{ marginBottom: '0.85rem' }}>
          {t('privacy_eyebrow', 'Legal & Compliance')}
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
          {t('privacy_title', 'Privacy Policy & Affiliate Disclosure')}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
          {t('privacy_last_updated', 'Last Updated: August 2026')}
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
            {t('privacy_section_1_title', '1. Introduction & Scope')}
          </h2>
          <p>
            {t('privacy_section_1_desc', 'Welcome to RefPromos (referred to as "we", "us", or "our"). We are committed to safeguarding your privacy and ensuring transparent information practices when you use our website (refpromos.com) and services. This Privacy Policy explains what information we collect, how it is used, and your rights regarding your data.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_2_title', '2. Affiliate Disclosure (FTC Compliance)')}
          </h2>
          <p style={{ marginBottom: '0.85rem' }}>
            {t('privacy_section_2_desc_1', "RefPromos is a free online deals and coupon resource supported by affiliate partnerships. When you click on coupon codes, deals, or store links on our website and make a subsequent purchase at the merchant's site, we may receive an affiliate commission from the retailer at no extra cost to you.")}
          </p>
          <p>
            {t('privacy_section_2_desc_2', 'Our editorial integrity is paramount: our coupon verification processes, store ratings, and review opinions remain independent of affiliate commissions.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_3_title', '3. Information We Collect')}
          </h2>
          <p style={{ marginBottom: '0.85rem' }}>
            {t('privacy_section_3_desc', 'We adhere to strict data minimization principles:')}
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <li>{t('privacy_data_non_personal', 'Non-Personal & Analytical Data: Browser type, operating system, referring URL, country/region preferences, and anonymized click timestamps.')}</li>
            <li>{t('privacy_data_ip', 'IP Addresses: Processed through one-way cryptographic SHA-256 hashing to prevent duplicate click fraud without identifying individuals.')}</li>
            <li>{t('privacy_data_voluntary', 'Voluntary Submissions: Your name and email address when you voluntarily contact our support desk or subscribe to our newsletter.')}</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_4_title', '4. Cookies & Tracking Technologies')}
          </h2>
          <p>
            {t('privacy_section_4_desc', 'We use essential cookies and lightweight analytics cookies to remember your selected geographic region (e.g. US, UK, AU, CA, DE, FR, IT, NL, PL, ES) and track outbound merchant referrals. You may disable cookies at any time through your browser settings without losing access to our core website.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_5_title', '5. Your Privacy Rights & Data Erasure (GDPR & CCPA Compliance)')}
          </h2>
          <p style={{ marginBottom: '0.85rem' }}>
            {t('privacy_section_5_desc_1', 'Under global privacy frameworks including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you retain full sovereignty over your personal data:')}
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1rem' }}>
            <li>{t('privacy_rights_access', 'Right to Access: Request a copy of any personal data or communications held in our systems.')}</li>
            <li>{t('privacy_rights_erasure', 'Right to Erasure (Right to be Forgotten): Request the permanent deletion of your email, account records, and associated click telemetry.')}</li>
            <li>{t('privacy_rights_optout', 'Right to Opt-Out: Opt out of marketing digests or telemetry tracking at any time without penalty.')}</li>
          </ul>
          <p>
            {t('privacy_section_5_desc_2', 'To initiate an automated data deletion request, you can submit an erasure request to our privacy endpoint at /api/privacy/delete-data with your registered email, or email our Data Protection Desk directly at info@refpromos.com. Requests are processed within 48 hours.')}
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_6_title', '6. Data Security & Storage Architecture')}
          </h2>
          <p>
            {t('privacy_section_6_desc', 'We implement defense-in-depth security measures to protect user telemetry and credentials:')}
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.65rem' }}>
            <li>{t('privacy_sec_hashing', 'Salted Hashing: Raw visitor IP addresses are never saved to disk; they are immediately hashed using SHA-256 with an isolated server-side salt.')}</li>
            <li>{t('privacy_sec_passwords', 'Password Encryption: All staff and administrator passwords use bcrypt hashing with a minimum work factor of 10. Plaintext passwords are never logged, stored, or transmitted.')}</li>
            <li>{t('privacy_sec_cookies', 'Secure Cookies: Session tokens are stored exclusively in HTTP-only, Secure, SameSite cookies inaccessible to client-side scripts. Client-side local storage contains zero personal identifying information (PII).')}</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            {t('privacy_section_7_title', '7. Contact Us Regarding Privacy')}
          </h2>
          <p>
            {t('privacy_section_7_desc', 'For questions, data access inquiries, or deletion requests regarding your personal information, contact our Data Protection Officer at:')}
            <br />
            <strong style={{ color: 'var(--text-heading)' }}>Email:</strong>{' '}
            <a href="mailto:info@refpromos.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>
              info@refpromos.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
