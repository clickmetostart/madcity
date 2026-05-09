import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '../../components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Meet the MadCity Home Loans Team | Madison, WI Mortgage Experts',
  description:
    'Led by Rob Miller, the MadCity Home Loans team provides 5-star mortgage services in Madison, WI. Our expert managers ensure fast, transparent closings for every family. Call 608-227-2002.',
  keywords: ['MadCity Home Loans team', 'Madison mortgage team', 'Rob Miller team Madison', 'local mortgage experts Madison', 'Callie Causey', 'Jon Donovan', 'Kerstin Dwyer', 'mortgage processing Madison'],
};

const teamMembers = [
  {
    name: 'Rob Miller',
    role: 'Branch Manager & Senior Loan Officer',
    image: '/rob-miller.jpg',
    bio: 'With over 15 years in the Wisconsin mortgage industry, Rob has built his reputation on honesty, accessibility, and high-speed execution. He brings the power of a national platform with the personalized service of a local boutique lender.',
  },
  {
    name: 'Samantha',
    role: '‘Amazing’ Loan Partner',
    image: '/Samantha.jpeg',
    bio: 'Samantha ensures your home loan journey runs smoothly with clear communication and attention to detail. She coordinates with underwriters and real estate professionals so you don’t have to worry about the details.',
  },
  {
    name: 'Kerstin Dwyer',
    role: 'Loan Manager',
    image: '/Kerstin.jpeg',
    bio: 'Kerstin is the organizational powerhouse who ensures every file is complete, compliant, and on schedule. She keeps our clients informed and prevents delays throughout the complex journey to homeownership.',
  },
  {
    name: 'Callie Causey',
    role: 'Processing Manager',
    image: '/Callie.jpeg',
    bio: 'Callie is the expert behind the scenes preparing and reviewing every document needed for approval. Her dedication to detail reduces delays and ensures a stress-free process for every client.',
  },
  {
    name: 'Jon Donovan',
    role: 'Closing Manager',
    image: '/jon.jpeg',
    bio: 'Jon handles the final and most exciting step of the mortgage process. He coordinates closing documents and ensures funds are transferred properly so you can move into your new home without a hitch.',
  },
  {
    name: 'Vanessa Gilbert',
    role: 'Marketing Manager',
    image: '/Vanessa.jpeg',
    bio: 'Vanessa leads our marketing and community outreach, ensuring homebuyers have easy access to the guidance they need. She empowers families to feel confident about their financial future.',
  },
];

export default function TeamPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Team</span>
            <h1>The MadCity Home Loans Family</h1>
            <div className="gold-line" />
            <p>
              Based in Madison, our team combines decades of local market knowledge 
              with the processing power of a premier national mortgage platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.teamIntro}>
            <h2>Local Roots. National Strength.</h2>
            <div className="gold-line gold-line-left" />
            <p>
              At MadCity Home Loans, we believe that a mortgage is more than just a loan — it's the 
              foundation of your family's future. We've assembled a team of specialists 
              who are your neighbors in Madison, Middleton, Sun Prairie, and beyond.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.memberCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={450}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-slate">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="gold-line" />
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: '💎', title: 'Absolute Transparency', desc: 'Clear, written estimates and regular updates. No hidden fees, no last-minute surprises.' },
              { icon: '⚡', title: 'Radical Speed', desc: 'In the Madison market, speed is a competitive advantage. We close faster than the industry average.' },
              { icon: '🎓', title: 'Buyer Education', desc: 'We don\'t just sell loans; we empower homeowners by explaining the "why" behind every option.' },
              { icon: '🏠', title: 'Community First', desc: 'We live here and work here. A stronger Madison means a better future for everyone.' },
            ].map(v => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Join the MadCity Family?"
        subtext="Experience a mortgage process that prioritizes your needs and respects your time."
        primaryLabel="Meet With Our Team"
      />
    </>
  );
}
