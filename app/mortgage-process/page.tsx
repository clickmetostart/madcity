import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import CTABanner from '../../components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The Mortgage Process: Step-by-Step Guide | MadCity Home Loans',
  description:
    'Understand the home loan process from start to finish. Our 12-step guide explains pre-approval, house hunting, underwriting, and closing your Wisconsin home loan. Call 608-227-2002.',
  keywords: ['mortgage process Wisconsin', 'home loan steps Madison WI', 'how to get a mortgage Madison', 'mortgage timeline Wisconsin', 'closing on a house Madison'],
};

const steps = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: 'We discuss your goals, budget, and long-term financial plans to identify the best loan program for you.',
  },
  {
    num: '02',
    title: 'Application & Documents',
    desc: 'You submit your official application and provide supporting documents (paystubs, W-2s, bank statements).',
  },
  {
    num: '03',
    title: 'Verified Pre-Approval',
    desc: 'We review your file and issue a strong pre-approval letter, giving you the power to shop with confidence.',
  },
  {
    num: '04',
    title: 'The House Hunt',
    desc: 'You find your perfect home with your Realtor and submit an offer backed by your pre-approval.',
  },
  {
    num: '05',
    title: 'Offer Acceptance',
    desc: 'Once the seller accepts your offer, you are officially "under contract" and the real work begins.',
  },
  {
    num: '06',
    title: 'Loan Processing',
    desc: 'Our processing team verifies all details, orders the appraisal, and prepares your file for the underwriter.',
  },
  {
    num: '07',
    title: 'Home Appraisal',
    desc: 'An independent appraiser visits the property to ensure its value matches the purchase price.',
  },
  {
    num: '08',
    title: 'Underwriting Review',
    desc: 'The underwriter reviews your entire file to ensure it meets all program guidelines and safety standards.',
  },
  {
    num: '09',
    title: 'Conditional Approval',
    desc: 'The underwriter issues an approval with "conditions" — usually minor items or updated documents needed.',
  },
  {
    num: '10',
    title: 'Clear to Close',
    desc: 'The best three words in real estate! All conditions are met, and your loan is ready for the final stage.',
  },
  {
    num: '11',
    title: 'Closing Disclosure',
    desc: 'You receive a final statement of all loan terms and costs. You have 3 days to review this before signing.',
  },
  {
    num: '12',
    title: 'Closing Day!',
    desc: 'You sign the final documents, pay your closing costs, and receive the keys to your new home.',
  },
];

export default function MortgageProcessPage() {
  return (
    <>
      <LoanPageHero
        title="The Mortgage Process: 12 Steps to Homeownership"
        subtitle="Knowledge is power. We believe a stress-free closing starts with understanding the road ahead. Our 12-step guide walks you through every milestone from your first call to your final signature."
        imageSrc="/img-handshake.jpg"
        imageAlt="Guide to the mortgage process in Wisconsin with Rob Miller"
        badge="How It Works"
        ctaText="Get Started Today"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Your Journey to a New Home</h2>
            <div className="gold-line" />
            <p>Transparency is our priority. Here is exactly what happens after you choose Rob Miller as your lender.</p>
          </div>

          <div className={styles.processGrid}>
            {steps.map(step => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className={styles.timelineCTA}>
            <div className={styles.ctaContent}>
              <h2>How Long Does It Take?</h2>
              <p>
                While every situation is unique, a typical purchase transaction takes **30 to 45 days** from offer 
                acceptance to closing. Refinances often move even faster.
              </p>
              <p>
                Rob\'s team is optimized for speed. In competitive markets, we often beat these timelines to 
                help our clients win.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Speak With Rob</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Take Step 1?"
        subtext="The first step is a simple conversation. No pressure, no cost — just expert advice."
        primaryLabel="Schedule My Consultation"
      />
    </>
  );
}
