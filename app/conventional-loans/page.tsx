import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Conventional Loans in Madison, WI | Low Rates | MadCity Home Loans',
  description:
    'Conventional mortgages in Wisconsin with as little as 3% down. Rob Miller offers low rates and expert planning for buyers and refinancers. Licensed in 11 states. Call 608-227-2002.',
  keywords: ['conventional loans Madison WI', 'conventional mortgage Wisconsin', '3% down mortgage', 'low rate home loan Madison', 'fixed rate mortgage WI', 'licensed in 11 states'],
};

const faqs = [
  {
    q: 'What is the minimum down payment for a conventional loan?',
    a: 'Conventional loans can require as little as 3% down for first-time buyers through Fannie Mae\'s HomeReady or Freddie Mac\'s Home Possible programs. Standard conventional loans typically require 5% down, with 20% down eliminating PMI entirely.',
  },
  {
    q: 'What credit score do I need for a conventional loan?',
    a: 'Most conventional loans require a minimum credit score of 620, though better rates are available with scores of 740 or higher. Unlike FHA, conventional loans have a tiered pricing structure — the higher your score, the lower your rate and PMI cost.',
  },
  {
    q: 'What is PMI and when can I cancel it?',
    a: 'Private Mortgage Insurance (PMI) is required when your down payment is less than 20%. Unlike FHA MIP, conventional PMI automatically cancels once you reach 20% equity based on your payment schedule. You can also request cancellation once you reach 20% equity through appreciation or extra payments.',
  },
  {
    q: 'What are the conventional loan limits in Wisconsin for 2026?',
    a: 'The 2026 conforming loan limit for most Wisconsin counties is $832,750 for a single-family home. Loans above this amount are considered "jumbo" loans with different qualification requirements.',
  },
  {
    q: 'How does a conventional loan compare to an FHA loan?',
    a: 'With a credit score above 720 and 5%+ down, a conventional loan typically offers a lower total cost than FHA because PMI is cheaper than FHA\'s MIP and cancels automatically. With scores below 680, FHA may be the better option. Rob Miller will run both scenarios for your situation.',
  },
  {
    q: 'Can I use a conventional loan for investment properties?',
    a: 'Yes — unlike FHA and VA loans, conventional loans can be used for investment properties (1-4 units), second homes, and vacation homes. Investment properties typically require 15-25% down and carry slightly higher rates.',
  },
];

export default function ConventionalLoansPage() {
  return (
    <>
      <LoanPageHero
        title="Conventional Home Loans in Madison, WI"
        subtitle="The most versatile mortgage product available — conventional loans offer flexible down payment options, competitive rates, and automatic PMI cancellation. If you have solid credit and a stable income, a conventional loan may be your most cost-effective path to homeownership."
        imageSrc="/img-handshake.jpg"
        imageAlt="Homebuyer reviewing conventional loan documents with Rob Miller in Madison, WI"
        badge="Conventional Loan Program"
        ctaText="Get Conventional Pre-Approval"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Conventional Explained</div>
              <h2>What Is a Conventional Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A conventional loan is a mortgage not insured or guaranteed by a federal government agency. These loans conform
                to guidelines set by Fannie Mae and Freddie Mac, making them the most common mortgage type in America. They
                offer a wide range of terms (10–30 years), fixed or adjustable rates, and down payment options from 3% to 100%.
                They can be used for primary residences, second homes, and investment properties.
              </p>
              <p>
                At MadCity Home Loans, Rob Miller helps borrowers across Wisconsin — from first-time buyers in Madison to
                move-up buyers in Middleton, Sun Prairie, and Verona — find the conventional loan that best fits their situation.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Conventional Loan Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '📉', title: 'PMI Cancels Automatically', desc: 'Unlike FHA MIP, conventional PMI disappears once you hit 20% equity — you\'re not locked into it for the life of the loan.' },
                  { icon: '🏡', title: 'Investment & Second Homes', desc: 'Finance rental properties, vacation homes, and second homes — programs FHA and VA don\'t permit.' },
                  { icon: '💪', title: 'Higher Loan Limits', desc: 'Borrow up to $832,750 in most Wisconsin counties with standard conforming terms.' },
                  { icon: '📊', title: 'Flexible Terms', desc: 'Choose from 10, 15, 20, or 30-year fixed terms, or adjustable-rate mortgages (ARMs) for lower initial payments.' },
                  { icon: '🎯', title: 'Low Down Payment Options', desc: 'First-time buyers can put as little as 3% down through HomeReady and Home Possible programs.' },
                  { icon: '⚡', title: 'Faster Appraisal Process', desc: 'Conventional appraisals are often faster and less stringent than FHA or VA appraisals, speeding up closing.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>Conventional Loan Requirements in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <ul className="checklist">
                <li>Minimum credit score of 620 (best rates start at 740+)</li>
                <li>Debt-to-income ratio of 45% or less (up to 50% with strong compensating factors)</li>
                <li>Down payment of 3%–20% depending on loan program and property type</li>
                <li>2 years of steady employment history</li>
                <li>Loan amount within conforming limits ($832,750 in most WI counties for 2026)</li>
                <li>PMI required if down payment is less than 20% — cancels automatically at 80% LTV</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Conventional vs. FHA?</strong> Rob Miller can run a full side-by-side comparison — total monthly cost,
                  break-even point, and long-term savings — so you can make the most informed decision.
                </p>
                <Link href="/contact" className="btn btn-outline">Get a Side-by-Side Comparison</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Conventional Quick Facts</h4>
                <div className={styles.qfRow}><span>Min. Down Payment</span><strong>3%</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>620</strong></div>
                <div className={styles.qfRow}><span>Max Loan (WI)</span><strong>$832,750</strong></div>
                <div className={styles.qfRow}><span>Property Types</span><strong>1–4 Units</strong></div>
                <div className={styles.qfRow}><span>PMI Cancels</span><strong>At 80% LTV</strong></div>
                <div className={styles.qfRow}><span>Investment OK</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Conventional Loan FAQs — Wisconsin Homebuyers" />

      <CTABanner
        heading="Ready to Get Pre-Approved for a Conventional Loan?"
        subtext="Rob Miller's team will review your full financial picture and identify the best conventional loan product for your goals. Apply online or call today."
        primaryLabel="Get Conventional Pre-Approval"
      />
    </>
  );
}
