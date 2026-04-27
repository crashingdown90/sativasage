import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { articles } from '@/data/articles';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const title = resolvedParams.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} Articles | Sativa Sage`,
    description: `Browse all our evidence-based articles and guides under the ${title} category at Sativa Sage.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryTitle = resolvedParams.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Filter articles based on category, or show all if it's 'articles'
  const filteredArticles = resolvedParams.category.toLowerCase() === 'articles' 
    ? articles 
    : articles.filter(a => a.category.toLowerCase() === resolvedParams.category.toLowerCase());

  return (
    <>
      <div className="page-header">
        <div className="container animate-fade-in">
          <h1>{categoryTitle === 'Articles' ? 'All Articles' : categoryTitle}</h1>
          <p>Explore our evidence-based guides and insights.</p>
        </div>
      </div>
      
      <div className="container main-content">
        {/* AdSense Top Leaderboard */}
        <div className="ad-slot ad-leaderboard animate-fade-in animate-delay-1" style={{ marginTop: 0 }}>
          [AdSense Placeholder: Top Leaderboard 728x90]
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 mb-4">
          {filteredArticles.length > 0 ? filteredArticles.map((article, index) => (
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
          )) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem' }}>No articles found in this category.</p>
            </div>
          )}
        </div>

        {/* AdSense Bottom Leaderboard */}
        <div className="ad-slot ad-leaderboard animate-fade-in">
          [AdSense Placeholder: Bottom Leaderboard 728x90]
        </div>
      </div>
    </>
  );
}
