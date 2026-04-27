import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sativa Sage',
  description: 'Privacy Policy for Sativa Sage.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-header">
        <div className="container animate-fade-in">
          <h1>Privacy Policy</h1>
          <p>Last updated: April 25, 2026</p>
        </div>
      </div>
      
      <div className="container main-content animate-fade-in animate-delay-1" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2>Introduction</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          At Sativa Sage, accessible from sativasage.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Sativa Sage and how we use it.
        </p>

        <h2>Information We Collect</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>

        <h2>How We Use Your Information</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          We use the information we collect in various ways, including to:
        </p>
        <ul style={{ marginBottom: 'var(--spacing-lg)', paddingLeft: '1.5rem' }}>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Sativa Sage follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2>Cookies and Web Beacons</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Like any other website, Sativa Sage uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2>Google DoubleClick DART Cookie</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
        </p>

        <h2>Advertising Partners Privacy Policies</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          You may consult this list to find the Privacy Policy for each of the advertising partners of Sativa Sage.
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Sativa Sage, which are sent directly to users' browser. They automatically receive your IP address when this occurs.
        </p>

        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. If you make a request, we have one month to respond to you.
        </p>

        <h2>GDPR Data Protection Rights</h2>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, The right to rectification, The right to erasure, The right to restrict processing, The right to object to processing, and The right to data portability. If you would like to exercise any of these rights, please contact us.
        </p>
      </div>
    </>
  );
}
