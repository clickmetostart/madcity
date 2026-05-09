import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '../../components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Rob Miller | Senior Loan Officer in Madison, WI | MadCity Home Loans',
  description:
    'Meet Rob Miller, your local Madison mortgage expert. With 15+ years of experience, Rob helps Wisconsin families navigate the home loan process with transparency and speed. Learn more about Rob Miller NMLS #239865.',
  keywords: ['Rob Miller Madison', 'mortgage broker Madison WI', 'loan officer Madison WI', 'Rob Miller ProVisor', 'MadCity Home Loans Rob Miller'],
};

export default function AboutRobPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/rob-miller.jpg"
                alt="Rob Miller — Senior Loan Officer, MadCity Home Loans"
                width={500}
                height={600}
                className={styles.heroImage}
                priority
              />
              <div className={styles.experienceBadge}>
                <strong>15+</strong>
                <span>Years Exp.</span>
              </div>
            </div>
            <div className={styles.heroContent}>
              <span className="badge">Local Expertise</span>
              <h1>Meet Rob Miller</h1>
              <p className={styles.subtitle}>Branch Manager & Senior Loan Officer | NMLS #239865</p>
              <div className="gold-line gold-line-left" />
              <p className={styles.lead}>
                "My goal is simple: to make the most complex financial transaction of your life feel fast, transparent, 
                and stress-free."
              </p>
              <p>
                With over 15 years in the Wisconsin mortgage industry, Rob Miller has seen it all. From the market shifts 
                of 2008 to the dynamic environment of 2026, Rob has built his reputation on a foundation of 
                honesty, accessibility, and high-speed execution.
              </p>
              <p>
                As a Branch Manager with ProVisor, Inc., Rob leverages the power of a major mortgage platform while 
                maintaining the personalized, "white glove" service of a local boutique lender.
              </p>
              <div className={styles.actions}>
                <Link href="https://provisor.shapeportal.com/ref/34" className="btn btn-primary">Apply With Rob</Link>
                <a href="tel:6082272002" className="btn btn-outline">Call 608-227-2002</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-slate">
        <div className="container">
          <div className="section-header">
            <h2>The Rob Miller Difference</h2>
            <div className="gold-line" />
            <p>Why hundreds of Wisconsin families choose Rob as their mortgage partner every year.</p>
          </div>

          <div className={styles.valuesGrid}>
            {[
              { title: 'No Surprises', desc: 'Transparency is non-negotiable. You\'ll know exactly what your costs are, what your rate is, and what to expect at every milestone.' },
              { icon: '📱', title: 'Always Available', desc: 'Rob isn\'t a 9-to-5 banker. He knows real estate happens on evenings and weekends, and he\'s there when you need him.' },
              { icon: '⚡', title: 'High-Speed Closings', desc: 'In a hot market, time is currency. Rob\'s team is optimized for speed, often closing loans in weeks, not months.' },
              { icon: '🗺️', title: 'Truly Local', desc: 'Rob lives and works in Madison. He understands the local market dynamics in a way that "big bank" call centers never will.' },
            ].map(v => (
              <div key={v.title} className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.credentialsLayout}>
            <div className={styles.credContent}>
              <h2>Credentials & Community</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Rob is a proud member of the Madison community and is committed to promoting financial literacy across 
                the state. He regularly hosts first-time homebuyer webinars and provides credit consultation services 
                to help buyers prepare for the long term.
              </p>
              <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                <li>Licensed in WI, IL, MN, IA, MI, FL, TX, CO, WA, ND, SD</li>
                <li>Branch Manager at ProVisor, Inc.</li>
                <li>Top Producer Awards (Multi-Year Recipient)</li>
                <li>Expert in FHA, VA, USDA, Conventional & WHEDA</li>
                <li>University of Wisconsin-Madison Alumnus</li>
              </ul>
            </div>
            <div className={styles.credStats}>
              <div className={styles.statBox}>
                <strong>5.0</strong>
                <span>Google Rating</span>
              </div>
              <div className={styles.statBox}>
                <strong>1,000+</strong>
                <span>Loans Closed</span>
              </div>
              <div className={styles.statBox}>
                <strong>11</strong>
                <span>States Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Work with Madison's Top Mortgage Expert?"
        subtext="Experience the difference that 15 years of local expertise can make. Reach out to Rob Miller today."
        primaryLabel="Start Your Application"
      />
    </>
  );
}
