import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Header from '@/components/Header';
export const metadata: Metadata = {
  title: 'Sativa Sage | Holistic Wellness & Botanical Wisdom',
  description: 'Discover the power of natural remedies, botanical wisdom, and holistic wellness at Sativa Sage. Evidence-based articles on herbs, vitality, and health.',
  keywords: 'botanical wellness, holistic health, herbal remedies, sativa herbs, natural healing, medicinal plants',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="logo">🌿 Sativa Sage</div>
                <p className="footer-description">
                  Empowering your journey to holistic health through botanical wisdom and natural remedies. Your trusted guide to evidence-based herbal wellness.
                </p>
              </div>
              
              <div>
                <h3 className="footer-heading">Categories</h3>
                <div className="footer-links">
                  <Link href="/herbs">Healing Herbs</Link>
                  <Link href="/wellness">Holistic Wellness</Link>
                  <Link href="/nutrition">Plant-Based Nutrition</Link>
                  <Link href="/mindfulness">Mindfulness & Sleep</Link>
                </div>
              </div>
              
              <div>
                <h3 className="footer-heading">Company</h3>
                <div className="footer-links">
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Service</Link>
                  <Link href="/disclaimer">Medical Disclaimer</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Sativa Sage. All rights reserved. The content provided is for informational purposes only and is not medical advice.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
