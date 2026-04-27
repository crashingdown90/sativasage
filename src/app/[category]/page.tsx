import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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

  // Mock articles for the category
  const articles = [
    {
      id: 1,
      title: `The Essential Guide to ${categoryTitle}`,
      excerpt: `Discover the foundational principles of ${categoryTitle.toLowerCase()} and how integrating these botanical practices can improve your holistic well-being.`,
      date: 'April 25, 2026',
      slug: `guide-to-${resolvedParams.category}`,
      image: '/images/hero.png'
    },
    {
      id: 2,
      title: `Top 5 Myths About ${categoryTitle} Debunked`,
      excerpt: `We explore the scientific research behind common misconceptions surrounding ${categoryTitle.toLowerCase()} to provide you with evidence-based facts.`,
      date: 'April 20, 2026',
      slug: `myths-about-${resolvedParams.category}`,
      image: '/images/hero.png'
    },
    {
      id: 3,
      title: `How to Incorporate ${categoryTitle} in Your Daily Routine`,
      excerpt: `Practical, actionable steps to seamlessly integrate the benefits of ${categoryTitle.toLowerCase()} into your busy everyday life.`,
      date: 'April 15, 2026',
      slug: `incorporate-${resolvedParams.category}-daily-routine`,
      image: '/images/hero.png'
    }
  ];

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
          {articles.map((article, index) => (
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
                <span className="article-category">{categoryTitle}</span>
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

        {/* AdSense Bottom Leaderboard */}
        <div className="ad-slot ad-leaderboard animate-fade-in">
          [AdSense Placeholder: Bottom Leaderboard 728x90]
        </div>
      </div>
    </>
  );
}
