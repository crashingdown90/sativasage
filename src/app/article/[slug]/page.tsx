import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    return { title: 'Article Not Found | Sativa Sage' };
  }
  
  return {
    title: `${article.title} | Sativa Sage`,
    description: article.excerpt,
    alternates: {
      canonical: `/article/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: [`https://sativasage.com${article.image}`],
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: [{
        '@type': 'Organization',
        name: 'Sativa Sage Editorial',
        url: 'https://sativasage.com/about'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Sativa Sage',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sativasage.com/images/hero.png'
      }
    },
    description: article.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container main-content">
      <div className="article-header animate-fade-in">
        <span className="article-category">{article.category}</span>
        <h1 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--color-primary-dark)' }}>{article.title}</h1>
        <div className="article-meta" style={{ justifyContent: 'center', gap: '2rem', marginBottom: '2rem', borderTop: 'none', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          <span>By <strong>Sativa Sage Editorial</strong></span>
          <span>Updated: {article.date}</span>
          <span>10 Min Read</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>✓ Evidence-Based</span>
          <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>⚕️ Medically Reviewed</span>
        </div>
      </div>

      <Image 
        src={article.image} 
        alt={article.title} 
        width={1200} 
        height={600} 
        className="article-hero-image animate-fade-in animate-delay-1"
      />

      <div className="with-sidebar">
        <article className="article-body animate-fade-in animate-delay-2">
          {/* AdSense Top Article */}
          <div className="ad-slot ad-leaderboard" style={{ margin: '0 0 2rem 0' }}>
            [AdSense: In-Article Top]
          </div>

          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* AdSense Bottom Article */}
          <div className="ad-slot ad-leaderboard" style={{ margin: '2rem 0 0 0' }}>
            [AdSense: In-Article Bottom]
          </div>

          <hr style={{ margin: '3rem 0', borderColor: 'var(--color-border)' }} />

          {/* Author Bio Section (E-E-A-T) */}
          <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--color-background)', padding: '2rem', borderRadius: 'var(--radius-lg)', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', flexShrink: 0 }}>
              🌿
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>About Sativa Sage Editorial</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                Our editorial team consists of certified holistic health practitioners, herbalists, and medical writers dedicated to bridging the gap between traditional botanical wisdom and modern scientific research. Every article is rigorously fact-checked against peer-reviewed clinical studies.
              </p>
            </div>
          </div>
        </article>

        <aside className="sidebar animate-fade-in animate-delay-3">
          <div className="sidebar-widget">
            <h3 className="sidebar-title">About Sativa Sage</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              We are dedicated to providing evidence-based information on holistic wellness, herbal medicine, and natural living.
            </p>
            <Link href="/about" className="btn btn-outline" style={{ width: '100%' }}>Read Our Story</Link>
          </div>

          <div className="sidebar-widget">
            <h3 className="sidebar-title">Popular Topics</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/article/nigella-sativa-black-seed-oil" style={{ display: 'block', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Nigella Sativa (Black Seed Oil)</Link></li>
              <li><Link href="/article/ashwagandha-adaptogen-stress-vitality" style={{ display: 'block', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Ashwagandha for Stress</Link></li>
              <li><Link href="/article/lavender-essential-oil-anxiety-sleep" style={{ display: 'block', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Lavender & Sleep Quality</Link></li>
              <li><Link href="/article/holy-basil-tulsi-queen-of-herbs" style={{ display: 'block', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Holy Basil (Tulsi)</Link></li>
            </ul>
          </div>

          {/* AdSense Sidebar Rectangle */}
          <div className="sidebar-widget" style={{ padding: 0, border: 'none', background: 'transparent' }}>
            <div className="ad-slot ad-rectangle" style={{ margin: 0 }}>
              [AdSense: Sidebar 300x250]
            </div>
          </div>
          
          <div className="sidebar-widget">
            <h3 className="sidebar-title">Medical Disclaimer</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              The information provided on Sativa Sage is for educational purposes only and is not intended as medical advice. Always consult a qualified healthcare provider regarding any medical conditions.
            </p>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
