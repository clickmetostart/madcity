import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'USDA Home Loans in Wisconsin | $0 Down Rural Financing | MadCity Home Loans',
  description:
    'USDA loans in Wisconsin offer 100% financing with no down payment for eligible rural and suburban properties. Rob Miller helps Wisconsin buyers qualify for USDA financing. Call 608-227-2002.',
  keywords: ['USDA loans Wisconsin', 'rural home loan Madison WI', 'zero down mortgage Wisconsin', 'USDA mortgage lender Madison', 'USDA loan eligible areas Wisconsin'],
};

const faqs = [
  {
    q: 'What areas in Wisconsin are eligible for USDA loans?',
    a: 'USDA loan eligibility is based on population density, not whether land is "rural." Many Wisconsin suburbs and smaller cities qualify — including areas near Madison such as DeForest, Waunakee, Stoughton, and Verona (portions). You can check eligibility at the USDA\'s official map, or Rob Miller can verify your specific property address instantly.',
  },
  {
    q: 'Is there really no down payment required for a USDA loan?',
    a: 'Yes — USDA loans offer 100% financing, meaning you can purchase a home with $0 down payment. This makes them one of the only zero-down mortgage options available today alongside VA loans.',
  },
  {
    q: 'What are the income limits for a USDA loan in Wisconsin?',
    a: 'USDA income limits vary by county and household size. For 2026, the standard limit for most Wisconsin counties is approximately $122,000 for 1-4 person households and $161,000 for 5-8 person households. These limits are higher than many people expect — about 115% of the area median income.',
  },
  {
    q: 'What is the USDA guarantee fee?',
    a: 'USDA loans charge a one-time upfront guarantee fee of 1.0% of the loan amount (vs. FHA\'s 1.75%) which can be rolled into the loan. There is also an annual fee of 0.35% of the outstanding balance, paid monthly. This is significantly lower than FHA\'s annual MIP, making USDA loans very cost-effective for eligible buyers.',
  },
  {
    q: 'What credit score is required for a USDA loan?',
    a: 'The USDA does not set a minimum credit score, but most lenders — including MadCity Home Loans — require a minimum score of 640 for the automated approval process. Borrowers with scores below 640 may still qualify through manual underwriting with compensating factors.',
  },
  {
    q: 'Can I use a USDA loan to buy a fixer-upper?',
    a: 'The standard USDA Guaranteed Loan requires the home to be in move-in ready condition. However, the USDA 504 Repair program and USDA Section 502 Direct loans may provide options for repairs and renovations. Rob Miller can help you explore which program fits your situation.',
  },
];

export default function USDAALoansPage() {
  return (
    <>
      <LoanPageHero
        title="USDA Home Loans in Wisconsin"
        subtitle="100% financing with no down payment for eligible rural and suburban Wisconsin properties. USDA loans are one of the best-kept secrets in mortgage financing — offering competitive rates, low fees, and zero money down for buyers who qualify."
        imageSrc="/img-usda.jpg"
        imageAlt="Wisconsin farmland and suburban home — eligible for USDA zero-down home loan"
        badge="USDA Loan Program"
        ctaText="Check USDA Eligibility"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">USDA Explained</div>
              <h2>What Is a USDA Home Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A USDA loan is a government-backed mortgage program offered through the U.S. Department of Agriculture's Rural
                Development division. Despite the name, USDA loans are not just for farms or remote countryside — they cover a
                surprisingly broad range of suburban and small-city properties across Wisconsin.
              </p>
              <p>
                The USDA Guaranteed Loan Program (Section 502) allows approved lenders like MadCity Home Loans to offer 100%
                financing to eligible borrowers purchasing in qualifying areas. The USDA guarantees a portion of the loan,
                allowing lenders to offer rates and terms comparable to conventional financing — with no down payment required.
              </p>
              <p>
                For Wisconsin buyers who earn a moderate income and are purchasing outside major urban centers, USDA loans are
                often the most affordable path to homeownership available.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>USDA Loan Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏠', title: '$0 Down Payment', desc: 'Finance 100% of your home\'s purchase price — no down payment required for eligible borrowers and properties.' },
                  { icon: '💰', title: 'Low Guarantee Fees', desc: 'USDA\'s 1.0% upfront fee and 0.35% annual fee are significantly lower than FHA\'s mortgage insurance costs.' },
                  { icon: '📉', title: 'Competitive Rates', desc: 'USDA loans are offered at market rates comparable to conventional loans, often lower than FHA.' },
                  { icon: '🗺️', title: 'Broader Eligibility Than You Think', desc: 'Many Wisconsin suburbs qualify — including areas near Madison, Milwaukee, Green Bay, and other cities.' },
                  { icon: '🔄', title: 'Refinance Options', desc: 'Existing USDA borrowers can use the USDA Streamlined-Assist refinance program to reduce their rate with minimal paperwork.' },
                  { icon: '🏡', title: 'No Reserve Requirements', desc: 'Unlike some loan programs, USDA typically does not require cash reserves in the bank after closing.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>USDA Loan Requirements in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <p>To qualify for a USDA loan with MadCity Home Loans, you'll generally need:</p>
              <ul className="checklist">
                <li>The property must be located in a USDA-eligible rural or suburban area (Rob can verify your address instantly)</li>
                <li>Household income must be at or below 115% of the area median income for your county</li>
                <li>Minimum credit score of 640 preferred (lower scores may qualify with manual underwriting)</li>
                <li>The home must be your primary residence — no investment properties or vacation homes</li>
                <li>Stable employment history — typically 2 years with the same employer or in the same field</li>
                <li>Debt-to-income ratio generally no more than 41-44% (higher with compensating factors)</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>USDA vs. FHA vs. VA: Which Is Right for You?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                If you're eligible for USDA, it's often the best option for non-veterans buying in qualifying areas. USDA's
                annual fee (0.35%) is lower than FHA's annual MIP (0.55%), and USDA offers $0 down just like VA loans.
              </p>
              <p>
                The key constraints are geographic eligibility and income limits. If your property or income doesn't qualify
                for USDA, FHA or conventional financing are natural alternatives.
              </p>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Not sure if your property qualifies?</strong> Rob Miller can check your specific address against the
                  USDA eligibility map in minutes — at no cost or obligation.
                </p>
                <Link href="/contact" className="btn btn-outline">Check My Property's USDA Eligibility</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>USDA Quick Facts</h4>
                <div className={styles.qfRow}><span>Down Payment</span><strong>$0</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>640</strong></div>
                <div className={styles.qfRow}><span>Upfront Fee</span><strong>1.0%</strong></div>
                <div className={styles.qfRow}><span>Annual Fee</span><strong>0.35%</strong></div>
                <div className={styles.qfRow}><span>Owner Occupied</span><strong>Required</strong></div>
                <div className={styles.qfRow}><span>Income Limits</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="USDA Loan FAQs — Wisconsin Homebuyers" />

      <CTABanner
        heading="Ready to Check Your USDA Eligibility?"
        subtext="Rob Miller can verify your property address and income eligibility in minutes. Zero-down homeownership may be closer than you think."
        primaryLabel="Start My USDA Pre-Approval"
      />
    </>
  );
}
