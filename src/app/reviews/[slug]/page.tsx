import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import Breadcrumbs from '@/components/Breadcrumbs';
import RatingStars from '@/components/RatingStars';
import CouponCard from '@/components/CouponCard';
import { generateReviewSchema, safeJsonLd, SITE_URL } from '@/lib/seo';
import { getServerTranslator } from '@/lib/serverLocale';
import {
  getLocalizedReviewTitle,
  getLocalizedReviewSummary,
  getLocalizedHighlight,
} from '@/lib/translations';
import { Star, Check, X, ShieldCheck, ExternalLink, Tag } from 'lucide-react';

function renderMarkdownParagraph(text: string, formatRegionLink?: (path: string) => string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: 'var(--text-heading)', fontWeight: 800 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return (
        <em key={i} style={{ fontStyle: 'italic' }}>
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          style={{
            background: 'var(--bg-subtle)',
            padding: '0.15rem 0.45rem',
            borderRadius: '4px',
            border: '1px solid var(--border)',
            fontSize: '0.9em',
            color: 'var(--primary)',
            fontWeight: 700,
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      const linkUrl = linkMatch[2];
      const isInternal = linkUrl.startsWith('/');
      const href = isInternal && formatRegionLink ? formatRegionLink(linkUrl) : linkUrl;
      return (
        <a
          key={i}
          href={href}
          style={{
            color: 'var(--primary)',
            fontWeight: 700,
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
          {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {linkText}
        </a>
      );
    }
    return part;
  });
}

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: ReviewPageProps): Promise<Metadata> {
  const params = await Promise.resolve(props.params);
  const review = await prisma.review.findUnique({
    where: { slug: params.slug },
    include: { store: true },
  });

  if (!review) return { title: 'Review Not Found — RefPromos' };

  const currentYear = new Date().getFullYear();
  const title =
    review.seoTitle ||
    `${review.store.name} Review (${currentYear}) — Ratings, Pros & Cons | RefPromos`;
  const description =
    review.metaDescription ||
    review.summary ||
    `Honest review of ${review.store.name}. We analyze discounts, shipping speed, product quality, return policy, and customer reviews.`;

  const canonical = `${SITE_URL}/reviews/${review.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [review.store.logoUrl],
    },
  };
}

export default async function StoreReviewDetailPage(props: ReviewPageProps) {
  const { locale, t, formatRegionLink } = await getServerTranslator();
  const params = await Promise.resolve(props.params);
  const review = await prisma.review.findUnique({
    where: { slug: params.slug },
    include: {
      store: {
        include: {
          coupons: {
            where: { status: 'active' },
            take: 4,
            orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
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
          },
        },
      },
    },
  });

  if (!review || review.status !== 'published') notFound();

  let pros: string[] = [];
  let cons: string[] = [];

  try {
    if (review.prosJson) pros = JSON.parse(review.prosJson);
    if (review.consJson) cons = JSON.parse(review.consJson);
  } catch {}

  const localizedTitle = getLocalizedReviewTitle(review.store.slug, review.title, locale);
  const localizedSummary = getLocalizedReviewSummary(review.store.slug, review.summary, locale);

  const reviewSchema = generateReviewSchema(
    {
      title: localizedTitle,
      slug: review.slug,
      rating: review.rating,
      summary: localizedSummary,
      authorName: review.authorName,
      verdict: review.verdict,
    },
    {
      name: review.store.name,
      slug: review.store.slug,
      logoUrl: review.store.logoUrl,
    }
  );

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem 1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(reviewSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: t('nav_reviews', 'Reviews'), url: '/reviews' },
          { name: `${review.store.name} ${t('review_suffix', 'Review')}`, url: `/reviews/${review.slug}` },
        ]}
      />

      {/* REVIEW HERO */}
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border)',
          padding: '2.25rem 2rem',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            padding: '6px',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <img
              src={review.store.logoUrl}
              alt={review.store.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div>
            <span className="badge badge-amber" style={{ marginBottom: '0.45rem' }}>
              <ShieldCheck size={12} /> {t('verified_review', 'Verified Review')}
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
              {localizedTitle}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <RatingStars score={review.rating} size={16} />
              <span style={{ color: 'var(--slate-300)' }}>•</span>
              <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                {t('reviewed_by', 'Reviewed by')} <strong style={{ color: 'var(--text-heading)' }}>{review.authorName}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href={`/stores/${review.store.slug}`} className="btn btn-secondary btn-sm">
            {t('view_all_offers', 'View Coupons')} ({review.store.coupons.length})
          </Link>
          <a
            href={`/out/store/${review.store.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            {t('btn_visit_store', 'Visit Store')} <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* MAIN REVIEW LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2.2fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'start' }}>
        
        {/* REVIEW CONTENT */}
        <div>
          {/* Summary */}
          {localizedSummary && (
            <div
              style={{
                background: 'var(--primary-light)',
                border: '1px solid var(--primary-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.4rem 1.6rem',
                fontSize: '1.02rem',
                color: 'var(--text-main)',
                lineHeight: '1.65',
                fontWeight: 500,
                marginBottom: '2.25rem',
              }}
            >
              <strong style={{ color: 'var(--primary)' }}>{t('summary_label', 'Summary:')} </strong> {localizedSummary}
            </div>
          )}

          {/* Pros & Cons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {pros.length > 0 && (
              <div style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-border)', borderRadius: 'var(--radius-xl)', padding: '1.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={16} strokeWidth={3} /> {t('what_shoppers_love', 'What Shoppers Love')}
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.88rem' }}>
                  {pros.map((pro, i) => (
                    <li key={i}>{getLocalizedHighlight(pro, locale)}</li>
                  ))}
                </ul>
              </div>
            )}

            {cons.length > 0 && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: 'var(--radius-xl)', padding: '1.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ef4444', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <X size={16} strokeWidth={3} /> {t('things_to_note', 'Things to Keep in Mind')}
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.88rem' }}>
                  {cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Detailed Content */}
          <div style={{ fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            {review.detailedContent.split('\n\n').map((para, i) => {
              const trimmed = para.trim();
              if (trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
                return (
                  <h3 key={i} style={{ fontSize: '1.35rem', fontWeight: 900, marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
                    {trimmed.replace(/^#+\s*/, '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote
                    key={i}
                    style={{
                      borderLeft: '4px solid var(--primary)',
                      padding: '0.85rem 1.25rem',
                      margin: '1.4rem 0',
                      background: 'var(--bg-subtle)',
                      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                      fontStyle: 'italic',
                      color: 'var(--text-heading)',
                    }}
                  >
                    {renderMarkdownParagraph(trimmed.replace(/^>\s*/, ''), formatRegionLink)}
                  </blockquote>
                );
              }
              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n').filter(Boolean);
                return (
                  <ul key={i} style={{ paddingLeft: '1.4rem', marginBottom: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} style={{ lineHeight: '1.7' }}>
                        {renderMarkdownParagraph(li.replace(/^-\s*/, ''), formatRegionLink)}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} style={{ marginBottom: '1.35rem' }}>
                  {renderMarkdownParagraph(para, formatRegionLink)}
                </p>
              );
            })}
          </div>

          {/* Verdict */}
          {review.verdict && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1.5px solid var(--primary)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '3rem',
              }}
            >
              <span className="badge badge-code" style={{ marginBottom: '0.65rem' }}>
                {t('editorial_recommendation', 'Editorial Recommendation')}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                {t('our_verdict_on', 'Our Verdict on')} {review.store.name}
              </h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: '1.65' }}>
                {review.verdict}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Active Promo Codes */}
          {review.store.coupons.length > 0 && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-2xl)',
                padding: '1.6rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-heading)' }}>
                <Tag size={16} color="var(--primary)" /> {t('active_offers_prefix', 'Active')} {review.store.name} {t('offers_suffix', 'Deals')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {review.store.coupons.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon as any} />
                ))}
              </div>
            </div>
          )}

        </aside>

      </div>
    </div>
  );
}
