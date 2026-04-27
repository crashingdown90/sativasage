import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sativa Sage',
  description: 'Terms of Service and Conditions of Use for Sativa Sage.',
};

export default function TermsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container animate-fade-in">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using our website.</p>
        </div>
      </div>
      
      <div className="container main-content animate-fade-in animate-delay-1" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2>1. Terms</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          By accessing the website at sativasage.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>

        <h2>2. Use License</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Permission is granted to temporarily download one copy of the materials (information or software) on Sativa Sage's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul style={{ marginBottom: 'var(--spacing-lg)', paddingLeft: '1.5rem' }}>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Sativa Sage's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          The materials on Sativa Sage's website are provided on an 'as is' basis. Sativa Sage makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Please review our full <a href="/disclaimer" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>Medical Disclaimer</a> for health-related information.
        </p>

        <h2>4. Limitations</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          In no event shall Sativa Sage or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sativa Sage's website, even if Sativa Sage or a Sativa Sage authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>5. Revisions and Errata</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          The materials appearing on Sativa Sage's website could include technical, typographical, or photographic errors. Sativa Sage does not warrant that any of the materials on its website are accurate, complete or current. Sativa Sage may make changes to the materials contained on its website at any time without notice. However Sativa Sage does not make any commitment to update the materials.
        </p>

        <h2>6. Links</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Sativa Sage has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sativa Sage of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2>7. Site Terms of Use Modifications</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Sativa Sage may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </div>
    </>
  );
}
