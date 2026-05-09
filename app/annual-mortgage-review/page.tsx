import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Annual Mortgage Review | Optimize Your Home Loan | MadCity Home Loans',
  description:
    'Is your mortgage still the best fit for your life? Get a free Annual Mortgage Review from Rob Miller in Madison, WI. We analyze your rate, equity, and goals every year. Call 608-227-2002.',
  keywords: ['annual mortgage review Madison', 'home loan checkup Wisconsin', 'mortgage optimization Madison', 'Rob Miller mortgage review'],
};

const faqs = [
  {
    q: 'What is an Annual Mortgage Review?',
    a: 'It\'s a brief, annual "checkup" where we review your current mortgage, your home\'s current value, and your current financial goals. We look for opportunities to lower your rate, shorten your term, or remove mortgage insurance based on your updated equity position.',
  },
  {
    q: 'Why do I need to review my mortgage every year?',
    a: 'The market changes and your life changes. A loan that made sense two years ago might be costing you money today. Whether it\'s a rate drop, a rise in home value, or a change in your family size, an annual review ensures your largest debt is always working for you, not against you.',
  },
  {
    q: 'Does an annual review cost anything?',
    a: 'No. At MadCity Home Loans, we provide this as a free service to our past clients and any Wisconsin homeowner who wants to ensure they are in the best possible position. There is zero obligation to refinance or take a new loan.',
  },
];

export default function AnnualReviewPage() {
  return (
    <>
      <LoanPageHero
        title="Annual Mortgage Review: The 15-Minute Checkup"
        subtitle="You check your retirement accounts and visit your doctor once a year — why not your largest financial liability? Our Annual Mortgage Review ensures your home loan stays aligned with your life and the current market."
        imageSrc="/img-handshake.jpg"
        imageAlt="Rob Miller performing an annual mortgage review for a Wisconsin family"
        badge="Service Excellence"
        ctaText="Request My Review"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Stay Optimized</div>
              <h2>Don\'t Set It and Forget It</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Most people get a mortgage and never think about it again until they sell their house. This "set it and 
                forget it" approach can cost you thousands of dollars in unnecessary interest or mortgage insurance.
              </p>
              <p>
                A quick 15-minute review with Rob Miller can answer the most important question for any homeowner: 
                **"Is there a better way to structure my mortgage right now?"**
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>What We Cover in Your Review</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏠', title: 'Equity Update', desc: 'We\'ll provide an estimate of your home\'s current market value and calculate your exact Loan-to-Value (LTV) ratio.' },
                  { icon: '🛡️', title: 'PMI/MIP Check', desc: 'If your value has gone up, you may be eligible to drop your private mortgage insurance or FHA MIP. We\'ll show you how.' },
                  { icon: '📉', title: 'Rate Analysis', desc: 'We compare your current interest rate against current market rates to see if a refinance could lower your monthly payment.' },
                  { icon: '📅', title: 'Term Evaluation', desc: 'Thinking about paying off the house faster? We\'ll run the numbers on switching to a 10, 15, or 20-year term.' },
                  { icon: '💳', title: 'Debt Consolidation', desc: 'If you have high-interest credit card debt, we\'ll explore if a cash-out refinance could save you hundreds in monthly interest.' },
                  { icon: '🔮', title: 'Future Goals', desc: 'Planning a move, a renovation, or a major life event in the next 12–24 months? We\'ll build a mortgage roadmap to get you there.' },
                ].map(b => (
                  <div key={b.title} className={styles.benefitCard}>
                    <span className={styles.benefitIcon}>{b.icon}</span>
                    <div>
                      <h4 className={styles.benefitTitle}>{b.title}</h4>
                      <p className={styles.benefitDesc}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.compareCTA}>
                <p>
                  <strong>When was the last time you reviewed your mortgage?</strong> Even if you didn\'t get your original 
                  loan with us, we\'re happy to provide a professional, no-obligation second opinion.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule My Free Checkup</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Review Snapshot</h4>
                <div className={styles.qfRow}><span>Duration</span><strong>15 Minutes</strong></div>
                <div className={styles.qfRow}><span>Cost</span><strong>$0 (Free)</strong></div>
                <div className={styles.qfRow}><span>Obligation</span><strong>None</strong></div>
                <div className={styles.qfRow}><span>Frequency</span><strong>Annual</strong></div>
                <div className={styles.qfRow}><span>Local Expertise</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Annual Review FAQs" />

      <CTABanner
        heading="Ensure Your Mortgage is Still the Best Fit"
        subtext="The market moves fast. Make sure your home loan is moving with it. Reach out for a free review today."
        primaryLabel="Book My Review"
      />
    </>
  );
}
