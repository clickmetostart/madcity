import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Jumbo Home Loans in Madison, WI | High-Balance Mortgage | MadCity Home Loans',
  description:
    'Jumbo loans in Wisconsin for loan amounts above $766,550. Rob Miller offers competitive rates on high-balance mortgages with flexible qualification options. Call 608-227-2002.',
  keywords: ['jumbo loans Madison WI', 'jumbo mortgage Wisconsin', 'high balance home loan Madison', 'luxury home loan Wisconsin', 'non-conforming mortgage Madison'],
};

const faqs = [
  {
    q: 'What is the jumbo loan threshold in Wisconsin for 2026?',
    a: 'In most Wisconsin counties, any loan amount above the conforming loan limit of $832,750 is considered a jumbo loan. Jumbo loans are non-conforming because they exceed the limits set by Fannie Mae and Freddie Mac, and therefore cannot be sold on the secondary market under standard guidelines.',
  },
  {
    q: 'What credit score do I need for a jumbo loan?',
    a: 'Most jumbo lenders require a minimum credit score of 700–720, with the best rates available for borrowers with scores of 740 or higher. Unlike FHA or USDA, there\'s no government guarantee on jumbo loans, so lenders hold these to a higher standard.',
  },
  {
    q: 'How much do I need to put down on a jumbo loan?',
    a: 'Jumbo loan down payment requirements typically range from 10% to 20%. Some lenders offer 10% down jumbo programs for highly qualified borrowers, while others require 20% to avoid additional requirements. Rob Miller works with multiple jumbo investors to find the structure that best fits your financial profile.',
  },
  {
    q: 'Are jumbo loan rates higher than conventional rates?',
    a: 'Historically, jumbo rates were 0.25%–0.50% higher than conforming rates. In recent years, that spread has narrowed — and in some rate environments, jumbo rates have actually been lower than conforming rates. Rob Miller monitors multiple jumbo investors daily to ensure you get the most competitive rate available.',
  },
  {
    q: 'Do I need cash reserves for a jumbo loan?',
    a: 'Yes — most jumbo programs require 6–12 months of mortgage payments in verified liquid reserves (cash, retirement accounts, or investment accounts). This is a key qualification difference from conforming loans. Rob Miller will review your asset picture and help you structure your finances for approval.',
  },
  {
    q: 'Can I get a jumbo loan on an investment property or second home?',
    a: 'Yes. Jumbo loans are available for primary residences, second homes, and investment properties, though down payment and reserve requirements are higher for non-primary residences. Interest rates are also slightly higher for non-owner-occupied properties.',
  },
];

export default function JumboLoansPage() {
  return (
    <>
      <LoanPageHero
        title="Jumbo Home Loans in Madison, WI"
        subtitle="When your dream home exceeds conventional loan limits, a jumbo mortgage gives you the high-balance financing to make it happen. Rob Miller works with Wisconsin's top jumbo investors to deliver competitive rates and creative solutions for larger loan amounts."
        imageSrc="/img-jumbo.jpg"
        imageAlt="Luxury home in Madison, Wisconsin financed with a jumbo mortgage through MadCity Home Loans"
        badge="Jumbo Loan Program"
        ctaText="Explore Jumbo Loan Options"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Jumbo Explained</div>
              <h2>What Is a Jumbo Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A jumbo loan is a mortgage that exceeds the conforming loan limits set annually by the Federal Housing Finance
                Agency (FHFA). For 2026, the standard conforming limit in most Wisconsin counties is $832,750 for a single-family
                home. Any loan above this threshold is considered "jumbo" or "non-conforming" because it cannot be purchased by
                Fannie Mae or Freddie Mac under standard guidelines.
              </p>
              <p>
                Because jumbo loans are held in a lender's portfolio or sold to private investors (rather than Fannie/Freddie),
                they come with slightly stricter qualification requirements — including higher credit scores, larger down payments,
                and cash reserve requirements. In exchange, they provide the financing power needed for higher-value properties
                that simply can't be financed with a conforming loan.
              </p>
              <p>
                At MadCity Home Loans, Rob Miller works with multiple jumbo investors and programs, allowing him to shop for the
                most competitive rates and terms for Wisconsin buyers purchasing luxury homes, high-value properties, and premium
                real estate in Madison, Middleton, Maple Bluff, Shorewood Hills, and beyond.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Jumbo Loan Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏰', title: 'Borrow What You Need', desc: 'No artificial ceiling on your financing. Borrow $800K, $1.5M, $3M — whatever your qualified purchase requires.' },
                  { icon: '📊', title: 'Fixed & Adjustable Rates', desc: 'Choose from 15-year or 30-year fixed terms, or explore ARM products with lower initial rates for shorter time horizons.' },
                  { icon: '🏡', title: 'Primary, Second & Investment', desc: 'Jumbo financing is available for primary residences, vacation homes, and investment properties with appropriate down payments.' },
                  { icon: '💼', title: 'Multiple Investor Options', desc: 'Rob Miller accesses multiple jumbo investors, which means competitive rate shopping — not a take-it-or-leave-it single source.' },
                  { icon: '⚡', title: 'Faster Than You Expect', desc: 'Despite the larger loan amounts, Rob\'s jumbo loans can close in 30-45 days with proper documentation in place.' },
                  { icon: '🔑', title: 'Self-Employed Friendly', desc: 'Certain jumbo programs offer bank statement loans and asset-depletion qualification for self-employed buyers and retirees.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>Jumbo Loan Requirements in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <p>Jumbo loan qualification is more rigorous than conforming loans. Here's what most programs require:</p>
              <ul className="checklist">
                <li>Minimum credit score of 700–720 (740+ for best rates and terms)</li>
                <li>Down payment of 10%–20% depending on loan amount and program</li>
                <li>Debt-to-income ratio typically 43% or less (some programs up to 49% with strong compensating factors)</li>
                <li>6–12 months of cash reserves (mortgage payment × months in liquid/semi-liquid accounts)</li>
                <li>Full income documentation: 2 years tax returns, W-2s, recent pay stubs</li>
                <li>Full appraisal required — often two independent appraisals for very large loan amounts</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>Alternative Jumbo Qualification: Bank Statement & Asset Programs</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Traditional income documentation doesn't always tell the full story — especially for self-employed borrowers,
                retirees, and real estate investors. Rob Miller has access to specialty jumbo programs including:
              </p>
              <ul className="checklist">
                <li><strong>Bank Statement Loans:</strong> Qualify using 12–24 months of bank deposits instead of tax returns</li>
                <li><strong>Asset Depletion:</strong> Qualify using liquid assets divided over loan term as "income"</li>
                <li><strong>DSCR Loans:</strong> For investment properties — qualify based on rental income rather than personal income</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Ready to explore your jumbo options?</strong> Rob Miller will review your financial picture and
                  identify the jumbo program with the best rate and the smoothest path to closing.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule a Jumbo Loan Consultation</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Jumbo Quick Facts</h4>
                <div className={styles.qfRow}><span>Min. Loan Amount</span><strong>$832,751+</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>700–720</strong></div>
                <div className={styles.qfRow}><span>Min. Down Payment</span><strong>10%–20%</strong></div>
                <div className={styles.qfRow}><span>Cash Reserves</span><strong>6–12 months</strong></div>
                <div className={styles.qfRow}><span>Max DTI</span><strong>43–49%</strong></div>
                <div className={styles.qfRow}><span>Property Types</span><strong>All types</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Jumbo Loan FAQs — Wisconsin High-Balance Buyers" />

      <CTABanner
        heading="Ready to Finance Your Dream Home?"
        subtext="Rob Miller's jumbo loan experience means you get competitive rates, creative solutions, and a loan officer who knows how to get complex deals to closing."
        primaryLabel="Explore My Jumbo Loan Options"
      />
    </>
  );
}
