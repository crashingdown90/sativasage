import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container animate-fade-in">
          <h1 className="hero-title">Discover the Wisdom of Nature</h1>
          <p className="hero-subtitle">
            Evidence-based botanical wellness, herbal remedies, and holistic health practices to nourish your body and mind.
          </p>
          <div className="flex gap-4 justify-center" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/herbs" className="btn btn-primary">Explore Herbs</Link>
            <Link href="/about" className="btn btn-outline glass">Our Mission</Link>
          </div>
        </div>
      </section>

      <div className="container main-content">
        {/* AdSense Top Leaderboard */}
        <div className="ad-slot ad-leaderboard animate-fade-in animate-delay-1">
          [AdSense Placeholder: Top Leaderboard 728x90]
        </div>

        <section className="mt-4 mb-4">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>Latest Botanical Insights</h2>
            <Link href="/articles" style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}>View All Articles &rarr;</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article, index) => (
              <article key={article.id} className={`article-card animate-fade-in`} style={{ animationDelay: `${(index % 3 + 1) * 0.1}s` }}>
                <Link href={`/article/${article.slug}`} className="article-image-wrapper">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
                <div className="article-content">
                  <span className="article-category">{article.category}</span>
                  <Link href={`/article/${article.slug}`}>
                    <h3 className="article-title">{article.title}</h3>
                  </Link>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span>By Sativa Sage Editorial</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AdSense In-feed or Bottom Leaderboard */}
        <div className="ad-slot ad-leaderboard animate-fade-in">
          [AdSense Placeholder: Bottom Leaderboard 728x90]
        </div>

        <section className="mt-4" style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Join the Sativa Sage Newsletter</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Get weekly evidence-based herbal remedies and holistic wellness tips delivered straight to your inbox.
          </p>
          <form style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
            <input type="email" placeholder="Your email address" className="form-control" style={{ flexGrow: 1 }} required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </section>
      </div>
    </>
  );
}
