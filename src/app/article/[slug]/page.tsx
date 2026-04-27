import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Sativa Sage`,
    description: `Learn more about ${title} and its evidence-based holistic wellness benefits on Sativa Sage.`,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container main-content">
      <div className="article-header animate-fade-in">
        <span className="article-category">Herbal Remedies</span>
        <h1 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--color-primary-dark)' }}>{title}</h1>
        <div className="article-meta" style={{ justifyContent: 'center', gap: '2rem', marginBottom: '2rem', borderTop: 'none', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          <span>By <strong>Sativa Sage Editorial</strong></span>
          <span>Updated: April 25, 2026</span>
          <span>10 Min Read</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>✓ Evidence-Based</span>
          <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>⚕️ Medically Reviewed</span>
        </div>
      </div>

      <Image 
        src="/images/hero.png" 
        alt={title} 
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

          <p>
            Welcome to our comprehensive guide on <strong>{title}</strong>. For centuries, traditional medicine has relied on the potent properties of natural botanicals to support health, vitality, and longevity. Today, modern science is increasingly validating what our ancestors intuitively knew.
          </p>

          <h2>The Historical Significance</h2>
          <p>
            The use of medicinal plants dates back to the dawn of human civilization. Historical texts from Ayurveda, Traditional Chinese Medicine (TCM), and Indigenous healing practices all highlight the profound impact that natural remedies can have on the human body.
          </p>

          <blockquote>
            "Let food be thy medicine and medicine be thy food, and let herbs be the gentle healers of the body and soul." 
          </blockquote>

          <h2>Evidence-Based Health Benefits</h2>
          <p>
            Recent pharmacological studies have isolated numerous active compounds in botanicals that exhibit antioxidant, anti-inflammatory, and neuroprotective properties. Here are some of the primary benefits:
          </p>
          <ul>
            <li><strong>Reduced Inflammation:</strong> Many herbs contain potent flavonoids and polyphenols that help modulate the body's inflammatory response.</li>
            <li><strong>Cognitive Support:</strong> Specific botanical extracts have been shown to improve memory retention and focus.</li>
            <li><strong>Stress Reduction:</strong> Adaptogenic herbs help regulate cortisol levels, promoting a state of calm.</li>
            <li><strong>Immune Modulation:</strong> Certain plants support the immune system's ability to fend off pathogens.</li>
          </ul>

          {/* AdSense Middle Article */}
          <div className="ad-slot" style={{ height: '250px', width: '100%', maxWidth: '100%', margin: '2rem 0' }}>
            [AdSense: In-Article Middle Responsive]
          </div>

          <h2>How to Incorporate It Into Your Routine</h2>
          <p>
            Adding natural remedies to your daily routine can be simple. Depending on the herb, it can be consumed as a tea, taken as a tincture, or used as an essential oil for aromatherapy. Always consult with a healthcare professional before starting any new herbal regimen, especially if you are currently taking prescription medications.
          </p>

          <h3>Preparation Methods</h3>
          <ol>
            <li><strong>Decoction:</strong> Boiling tougher plant parts like roots and bark to extract their medicinal properties.</li>
            <li><strong>Infusion:</strong> Steeping delicate leaves and flowers in hot water, much like a traditional tea.</li>
            <li><strong>Tincture:</strong> Using alcohol or glycerin to extract and preserve the active compounds for long-term use.</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            The world of botanical wellness offers a rich tapestry of remedies to support holistic health. By understanding the historical context and the modern scientific evidence, we can make informed decisions about integrating these natural gifts into our lives.
          </p>

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
  );
}
