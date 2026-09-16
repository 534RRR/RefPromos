import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import { generateArticleSchema, safeJsonLd, SITE_URL } from '@/lib/seo';
import { getServerTranslator } from '@/lib/serverLocale';
import {
  getLocalizedBlogTitle,
  getLocalizedBlogExcerpt,
  getLocalizedBlogContent,
  getLocalizedCategoryName,
} from '@/lib/translations';
import { Clock, User, Calendar, Tag, ArrowLeft, BookOpen } from 'lucide-react';

function renderMarkdownParagraph(text: string, formatRegionLink?: (path: string) => string) {
  // Split on: **bold**, *italic*, `code`, and [link text](url)
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
    // Markdown link: [text](url)
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

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await Promise.resolve(props.params);
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });

  if (!blog) return { title: 'Article Not Found — RefPromos' };

  const title = blog.seoTitle || `${blog.title} | RefPromos Shopping Guide`;
  const description = blog.metaDescription || blog.excerpt || blog.title;

  const canonical = `${SITE_URL}/blogs/${blog.slug}`;

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
      images: blog.featuredImage ? [blog.featuredImage] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { locale, t, formatRegionLink } = await getServerTranslator();
  const params = await Promise.resolve(props.params);
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
    include: {
      category: true,
      blogStores: {
        include: {
          store: {
            include: {
              _count: { select: { coupons: true, deals: true } },
            },
          },
        },
      },
      blogCoupons: {
        include: {
          coupon: {
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

  if (!blog || blog.status !== 'published') notFound();

  const relatedBlogs = await prisma.blog.findMany({
    where: {
      status: 'published',
      id: { not: blog.id },
      categoryId: blog.categoryId,
    },
    take: 3,
    orderBy: { publishedAt: 'desc' },
  });

  const localizedBlogTitle = getLocalizedBlogTitle(blog.title, locale);
  const localizedBlogExcerpt = getLocalizedBlogExcerpt(blog.excerpt, locale);
  const localizedBlogContent = getLocalizedBlogContent(blog.slug, blog.content, locale);

  const articleSchema = generateArticleSchema({
    title: localizedBlogTitle,
    slug: blog.slug,
    excerpt: localizedBlogExcerpt,
    content: localizedBlogContent,
    featuredImage: blog.featuredImage,
    authorName: blog.authorName,
    publishedAt: blog.publishedAt,
    updatedAt: blog.updatedAt,
  });

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString(
    locale === 'de' ? 'de-DE' :
    locale === 'fr' ? 'fr-FR' :
    locale === 'it' ? 'it-IT' :
    locale === 'nl' ? 'nl-NL' :
    locale === 'pl' ? 'pl-PL' :
    locale === 'es' ? 'es-ES' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const readingTimeText = blog.readingTime
    ? blog.readingTime.replace(/min read/i, t('min_read', 'min read'))
    : `5 ${t('min_read', 'min read')}`;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 5rem 1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: t('nav_guides', 'Guides & Articles'), url: formatRegionLink('/blogs') },
          { name: localizedBlogTitle, url: formatRegionLink(`/blogs/${blog.slug}`) },
        ]}
      />

      {/* 2-COLUMN ARTICLE LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2.2fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'start' }}>
        
        {/* MAIN ARTICLE */}
        <article>
          {/* Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
              {getLocalizedCategoryName(blog.category.name, locale)}
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-heading)', lineHeight: '1.25', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              {localizedBlogTitle}
            </h1>

            {/* Author Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.86rem', color: 'var(--text-muted)', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <User size={15} color="var(--primary)" />
                <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{blog.authorName}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} color="var(--primary)" />
                <span>{formattedDate}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={15} color="var(--primary)" />
                <span>{readingTimeText}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featuredImage && (
            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-card)',
              maxHeight: '440px',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
            }}>
              <img
                src={blog.featuredImage}
                alt={localizedBlogTitle}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Article Excerpt */}
          {localizedBlogExcerpt && (
            <div style={{
              background: 'var(--primary-subtle)',
              borderLeft: '3px solid var(--primary)',
              padding: '1.25rem 1.6rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '1.05rem',
              color: 'var(--text-main)',
              fontWeight: 600,
              lineHeight: '1.65',
              marginBottom: '2.5rem',
            }}>
              {localizedBlogExcerpt}
            </div>
          )}

          {/* Body Content */}
          <div
            style={{
              fontSize: '1.02rem',
              lineHeight: '1.8',
              color: 'var(--text-main)',
              marginBottom: '3rem',
            }}
          >
            {localizedBlogContent.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
                return (
                  <h3 key={idx} style={{ fontSize: '1.45rem', fontWeight: 900, marginTop: '2.25rem', marginBottom: '0.75rem', color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
                    {trimmed.replace(/^#+\s*/, '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote
                    key={idx}
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
                  <ul key={idx} style={{ paddingLeft: '1.4rem', marginBottom: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} style={{ lineHeight: '1.7' }}>
                        {renderMarkdownParagraph(li.replace(/^-\s*/, ''), formatRegionLink)}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: '1.4rem' }}>
                  {renderMarkdownParagraph(paragraph, formatRegionLink)}
                </p>
              );
            })}
          </div>

          {/* Embedded Referenced Coupons in Blog */}
          {blog.blogCoupons.length > 0 && (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-2xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '3rem',
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-heading)' }}>
                <Tag size={20} color="var(--primary)" /> {t('mentioned_promo_codes', 'Mentioned Promo Codes & Deals')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {blog.blogCoupons.map(({ coupon }) => (
                  <CouponCard key={coupon.id} coupon={coupon as any} />
                ))}
              </div>
            </div>
          )}

          {/* Back to Guides */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
            <Link href={formatRegionLink('/blogs')} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ArrowLeft size={16} /> {t('all_shopping_guides', 'All Shopping Guides')}
            </Link>
          </div>
        </article>

        {/* RIGHT SIDEBAR */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-2xl)',
              padding: '1.6rem',
              boxShadow: 'var(--shadow-card)',
            }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-heading)' }}>
                <BookOpen size={17} color="var(--primary)" /> {t('related_guides', 'Related Guides')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {relatedBlogs.map((relBlog) => (
                  <Link
                    key={relBlog.id}
                    href={formatRegionLink(`/blogs/${relBlog.slug}`)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                      padding: '0.65rem 0',
                      borderBottom: '1px solid var(--border)',
                      textDecoration: 'none',
                    }}
                  >
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: '1.4' }}>
                      {getLocalizedBlogTitle(relBlog.title, locale)}
                    </h4>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      {relBlog.readingTime ? relBlog.readingTime.replace(/min read/i, t('min_read', 'min read')) : `5 ${t('min_read', 'min read')}`}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </aside>

      </div>
    </div>
  );
}
