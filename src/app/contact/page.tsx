import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sativa Sage',
  description: 'Get in touch with the Sativa Sage team for inquiries, feedback, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container animate-fade-in">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out with your questions or feedback.</p>
        </div>
      </div>
      
      <div className="container main-content animate-fade-in animate-delay-1" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="grid md:grid-cols-2">
          <div>
            <h2>Get In Touch</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-muted)' }}>
              Whether you have a question about an article, want to suggest a topic, or are interested in partnering with Sativa Sage, please fill out the form or use our direct contact information.
            </p>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Email:</strong><br />
              <a href="mailto:hello@sativasage.com" style={{ color: 'var(--color-primary)' }}>hello@sativasage.com</a>
            </div>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Editorial Inquiries:</strong><br />
              <a href="mailto:editorial@sativasage.com" style={{ color: 'var(--color-primary)' }}>editorial@sativasage.com</a>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Mailing Address (Headquarters):</strong><br />
              <address style={{ fontStyle: 'normal', color: 'var(--color-text-muted)' }}>
                Sativa Sage Media Group<br />
                123 Botanical Way, Suite 400<br />
                Denver, CO 80202<br />
                United States
              </address>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                *Please note: We do not accept unsolicited physical product samples without prior approval.
              </p>
            </div>
          </div>
          
          <div className="sidebar-widget">
            <h3 className="sidebar-title">Send a Message</h3>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
