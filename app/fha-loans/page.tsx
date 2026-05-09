import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'FHA Loans in Madison, WI | Low Down Payment | MadCity Home Loans',
  description:
    'FHA loans in Wisconsin with as little as 3.5% down. Rob Miller helps first-time buyers and those rebuilding credit qualify for FHA financing. Call 608-227-2002.',
  keywords: ['FHA loans Madison WI', 'FHA loan Wisconsin', 'FHA mortgage lender Madison', 'low down payment mortgage Wisconsin', '3.5% down home loan'],
};

const faqs = [
  {
    q: 'What is the minimum down payment for an FHA loan in Wisconsin?',
    a: 'The minimum down payment for an FHA loan is 3.5% of the purchase price if your credit score is 580 or higher. If your score is between 500 and 579, you\'ll need a 10% down payment. For a $300,000 home, that\'s just $10,500 down with a 580+ score.',
  },
  {
    q: 'What credit score do I need to qualify for an FHA loan?',
    a: 'FHA requires a minimum credit score of 500. However, most lenders — including MadCity Home Loans — can approve borrowers with scores as low as 580 with the standard 3.5% down payment. The higher your score, the better your rate.',
  },
  {
    q: 'What are the FHA loan limits in Wisconsin for 2026?',
    a: 'For 2026, the FHA loan limit in most Wisconsin counties, including Dane County, is $541,287 for a single-family home. High-cost areas may have higher limits. Contact Rob Miller to confirm the limit in your specific county.',
  },
  {
    q: 'Is mortgage insurance required on FHA loans?',
    a: 'Yes. FHA loans require an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount, plus an annual MIP ranging from 0.15% to 0.75% depending on your loan term, LTV, and loan amount. This insurance protects the lender and is what makes FHA\'s flexible qualification standards possible.',
  },
  {
    q: 'Can I use an FHA loan to buy a duplex or multi-unit property?',
    a: 'Yes — FHA loans can be used for properties with up to 4 units, as long as you live in one of the units as your primary residence. This is a popular strategy for first-time investors who want to house-hack and have rental income help with their mortgage payment.',
  },
  {
    q: 'How long does it take to get an FHA loan approved?',
    a: 'With a complete application and all required documents, Rob Miller\'s team typically issues a pre-approval within 1-2 business days. Full underwriting and closing generally takes 30-45 days, though we routinely close faster for motivated buyers.',
  },
  {
    q: 'Can I refinance my current mortgage into an FHA loan?',
    a: 'Yes. The FHA Streamline Refinance program allows existing FHA borrowers to lower their rate with minimal paperwork. If you have a conventional loan, you can also refinance into an FHA loan using a standard FHA refinance.',
  },
];

export default function FHALoansPage() {
  return (
    <>
      <LoanPageHero
        title="FHA Loans in Madison, WI"
        subtitle="Government-backed financing with as little as 3.5% down. FHA loans are one of the most flexible mortgage programs available — ideal for first-time buyers, those with lower credit scores, and anyone who wants a path to homeownership with less upfront cash."
        imageSrc="/img-handshake.jpg"
        imageAlt="Couple signing home loan documents with Rob Miller in Madison, WI"
        badge="FHA Loan Program"
        ctaText="Get FHA Pre-Approval"
      />

      {/* ── What is an FHA Loan ── */}
      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">FHA Explained</div>
              <h2>What Is an FHA Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                An FHA loan is a mortgage insured by the Federal Housing Administration (FHA), a division of the U.S. Department of
                Housing and Urban Development (HUD). Because the federal government backs these loans, lenders like MadCity Home Loans
                can offer them with more flexible qualification standards than conventional mortgages — including lower credit score
                requirements and smaller down payments.
              </p>
              <p>
                FHA loans have been helping American families achieve homeownership since 1934. In Wisconsin, they remain one of the
                most popular mortgage products for first-time buyers, move-up buyers, and anyone who has experienced credit challenges
                in the past.
              </p>
              <p>
                At MadCity Home Loans, Rob Miller works with borrowers across the full credit spectrum to find FHA loan terms that
                fit their budget and long-term goals. Whether you're buying in Madison, Middleton, Sun Prairie, Janesville, or
                anywhere in Wisconsin, we can help you get pre-approved quickly.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>FHA Loan Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '💵', title: 'Low Down Payment', desc: 'Just 3.5% down with a 580+ credit score. On a $300K home, that\'s only $10,500 upfront.' },
                  { icon: '📊', title: 'Flexible Credit Standards', desc: 'Scores as low as 500 may qualify. We work with you to maximize your approval options.' },
                  { icon: '🎁', title: 'Gift Funds Allowed', desc: 'Your entire down payment can come from a gift from a family member — no personal savings required.' },
                  { icon: '🔄', title: 'Streamline Refinance', desc: 'Existing FHA borrowers can refinance with reduced documentation and no appraisal required.' },
                  { icon: '🏘️', title: 'Multi-Unit Properties', desc: 'FHA allows 2-4 unit properties when you\'ll live in one unit as your primary residence.' },
                  { icon: '📉', title: 'Competitive Rates', desc: 'FHA interest rates are typically lower than conventional rates for borrowers with similar credit.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>FHA Loan Requirements in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <p>To qualify for an FHA loan with MadCity Home Loans, you'll generally need to meet the following criteria:</p>
              <ul className="checklist">
                <li>Minimum credit score of 580 (for 3.5% down) or 500 (for 10% down)</li>
                <li>Debt-to-income ratio typically no more than 43-57% depending on compensating factors</li>
                <li>Stable employment history — typically 2 years with the same employer or in the same field</li>
                <li>The property must be your primary residence (not a vacation home or investment property)</li>
                <li>Property must meet FHA appraisal and safety standards</li>
                <li>Loan amount must be within the FHA county loan limit ($541,287 in most WI counties for 2026)</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>Understanding FHA Mortgage Insurance</h2>
              <div className="gold-line gold-line-left" />
              <p>
                FHA loans require two forms of mortgage insurance:
              </p>
              <p>
                <strong>Upfront MIP (UFMIP):</strong> 1.75% of your loan amount, paid at closing (or rolled into your loan). On a
                $300,000 loan, this equals $5,250.
              </p>
              <p>
                <strong>Annual MIP:</strong> Ranges from 0.15% to 0.75% of your loan balance per year, paid monthly. For most
                Wisconsin buyers with a 30-year loan and less than 10% down, the annual MIP is 0.55% — about $137/month on a $300,000 loan.
              </p>
              <p>
                For loans with 10% or more down, annual MIP cancels after 11 years. For loans with less than 10% down, MIP remains
                for the life of the loan — which is one reason many FHA borrowers refinance into a conventional loan once they've
                built 20% equity.
              </p>

              <div className={styles.compareCTA}>
                <p>
                  <strong>FHA vs. Conventional?</strong> Not sure which is right for you? Rob Miller can run both scenarios side
                  by side and show you the real monthly payment difference.
                </p>
                <Link href="/contact" className="btn btn-outline">Get a Side-by-Side Comparison</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>FHA Quick Facts</h4>
                <div className={styles.qfRow}><span>Min. Down Payment</span><strong>3.5%</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>500</strong></div>
                <div className={styles.qfRow}><span>Max Loan (WI)</span><strong>$541,287</strong></div>
                <div className={styles.qfRow}><span>Max Units</span><strong>4-unit</strong></div>
                <div className={styles.qfRow}><span>Owner Occupied</span><strong>Required</strong></div>
                <div className={styles.qfRow}><span>MIP Required</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="FHA Loan FAQs — Wisconsin Homebuyers" />

      <CTABanner
        heading="Ready to Get FHA Pre-Approved?"
        subtext="Rob Miller's team moves fast. Apply online or call today and get your pre-approval letter as quickly as tomorrow."
        primaryLabel="Apply for FHA Pre-Approval"
      />
    </>
  );
}
