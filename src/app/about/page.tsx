import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sativa Sage',
  description: 'Learn about Sativa Sage, our mission, and our commitment to evidence-based holistic wellness and botanical medicine.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container animate-fade-in">
          <h1>About Sativa Sage</h1>
          <p>Your trusted guide to holistic wellness and botanical wisdom.</p>
        </div>
      </div>
      
      <div className="container main-content animate-fade-in animate-delay-1" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2>Our Mission</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          At Sativa Sage, we believe that nature provides the fundamental building blocks for health and vitality. Our mission is to bridge the gap between ancient botanical wisdom and modern scientific research, providing our readers with evidence-based information on herbal remedies, plant-based nutrition, and holistic lifestyle practices.
        </p>

        <h2>Our Approach</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          The internet is filled with conflicting health information. We cut through the noise by focusing on peer-reviewed research, traditional medicine systems with proven historical efficacy, and practical applications for everyday life. Every article is crafted with care, ensuring that you receive accurate, reliable, and actionable insights.
        </p>

        <h2>Why "Sativa"?</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          The botanical term <em>sativa</em> originates from Latin, meaning "cultivated." It appears in the scientific names of many powerful medicinal plants, such as <em>Nigella sativa</em> (black seed), <em>Avena sativa</em> (oat straw), and <em>Castanea sativa</em> (sweet chestnut). We chose this name to honor the long history of human cultivation of healing plants and the deep connection between agriculture, nature, and human wellness.
        </p>

        <h2>Our Commitment to Quality (E-E-A-T)</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          We strictly adhere to Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, and Trustworthiness). We are committed to maintaining the highest editorial standards. Our content is thoroughly researched, fact-checked by experts, regularly updated, and designed to empower you to make informed decisions about your health journey. However, we always recommend consulting with qualified healthcare professionals for medical advice.
        </p>

        <h2>Editorial & Medical Review Process</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Every piece of content on Sativa Sage goes through a rigorous editorial process. Our writers cite primary sources, including peer-reviewed medical journals and academic research. Before publication, our articles are reviewed for accuracy, relevance, and clarity. We do not accept sponsored content that conflicts with our editorial integrity.
        </p>
      </div>
    </>
  );
}
