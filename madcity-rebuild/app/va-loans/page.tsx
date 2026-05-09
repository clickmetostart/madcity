import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'VA Home Loans in Madison, WI | $0 Down for Veterans | MadCity Home Loans',
  description:
    'VA home loans in Wisconsin with zero down payment. Rob Miller is a trusted VA loan specialist helping veterans, active-duty military, and surviving spouses achieve homeownership. Call 608-227-2002.',
  keywords: ['VA loans Madison WI', 'VA home loan Wisconsin', 'veteran mortgage Madison', 'zero down home loan Wisconsin', 'VA loan lender Madison'],
};

const faqs = [
  {
    q: 'Do VA loans require a down payment?',
    a: 'No — one of the most powerful benefits of the VA loan is the $0 down payment requirement. Eligible veterans and active-duty service members can finance 100% of the home\'s purchase price with no private mortgage insurance required.',
  },
  {
    q: 'Who is eligible for a VA loan in Wisconsin?',
    a: 'VA loan eligibility generally includes: veterans with at least 90 consecutive days of active service during wartime (or 181 days during peacetime), active-duty service members, National Guard and Reserve members with 6+ years of service, and surviving spouses of veterans who died in service or from a service-connected disability.',
  },
  {
    q: 'Is there a VA loan limit in Wisconsin?',
    a: 'For eligible veterans with full entitlement, there is no VA loan limit — you can borrow as much as a lender approves with $0 down. Loan limits only apply to veterans with reduced entitlement (e.g., those who have an active VA loan). In most Wisconsin counties, the standard conforming limit is $832,750 for 2026.',
  },
  {
    q: 'What is the VA Funding Fee?',
    a: 'The VA Funding Fee is a one-time fee paid to the VA that helps sustain the program. It ranges from 1.25% to 3.3% of the loan amount depending on your down payment and whether it\'s your first VA loan. The fee can be rolled into the loan. Veterans with service-connected disabilities of 10% or more are exempt from the funding fee.',
  },
  {
    q: 'Can I use a VA loan more than once?',
    a: 'Yes. VA loan benefits can be used multiple times. As long as you\'ve paid off a previous VA loan (or sold the home), your entitlement is typically restored and you can use a VA loan again. In some cases, veterans can even have two VA loans simultaneously.',
  },
  {
    q: 'How do VA loans compare to FHA or conventional loans?',
    a: 'VA loans offer significant advantages: no down payment, no PMI, competitive interest rates (often lower than conventional), and more flexible qualification standards. The main trade-off is the funding fee. For eligible borrowers, VA loans are almost always the better choice over FHA or conventional financing.',
  },
  {
    q: 'How fast can I get a VA loan pre-approval?',
    a: 'With your Certificate of Eligibility (COE) and standard financial documents, Rob Miller\'s team can typically issue a VA pre-approval within 1-2 business days. We\'re experienced with the VA process and work to make it as smooth as possible for our veteran clients.',
  },
];

export default function VALoansPage() {
  return (
    <>
      <LoanPageHero
        title="VA Home Loans in Madison, WI"
        subtitle="You served our country — now let us serve you. VA loans offer $0 down payment, no private mortgage insurance, and some of the most competitive rates available. Rob Miller is proud to help Wisconsin veterans and active-duty military achieve the dream of homeownership."
        imageSrc="/img-va.jpg"
        imageAlt="Veteran homeowner shaking hands with Rob Miller, VA loan specialist in Madison, WI"
        badge="VA Loan Program"
        ctaText="Check Your VA Eligibility"
      />

      {/* ── What is a VA Loan ── */}
      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">VA Explained</div>
              <h2>What Is a VA Home Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A VA home loan is a mortgage benefit provided through the U.S. Department of Veterans Affairs. The VA doesn't
                directly lend money — instead, it guarantees a portion of the loan made by approved private lenders like
                MadCity Home Loans. This guarantee allows lenders to offer veterans exceptional terms that simply aren't
                available with conventional financing.
              </p>
              <p>
                Established in 1944 as part of the original GI Bill, the VA loan program has helped over 28 million veterans
                become homeowners. It remains one of the most powerful mortgage benefits available — and one of the most
                underutilized, with many eligible veterans not realizing they qualify.
              </p>
              <p>
                At MadCity Home Loans, Rob Miller has extensive experience guiding veterans, active-duty service members, and
                surviving spouses through the VA loan process in Madison, Janesville, Wausau, Green Bay, and across all of
                Wisconsin.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>VA Loan Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏠', title: '$0 Down Payment', desc: 'Finance 100% of your home\'s purchase price — no down payment required for eligible veterans with full entitlement.' },
                  { icon: '🚫', title: 'No PMI Required', desc: 'Unlike conventional loans under 20% down, VA loans carry no private mortgage insurance — saving you hundreds per month.' },
                  { icon: '📉', title: 'Lower Interest Rates', desc: 'VA loans consistently offer rates 0.25%–0.5% lower than comparable conventional loans, saving tens of thousands over the life of your loan.' },
                  { icon: '🔄', title: 'VA Streamline Refinance', desc: 'The IRRRL (Interest Rate Reduction Refinance Loan) lets existing VA borrowers refinance with minimal paperwork and no appraisal.' },
                  { icon: '🛡️', title: 'Flexible Credit Standards', desc: 'The VA doesn\'t set a minimum credit score — most lenders, including MadCity, work with scores starting around 580–620.' },
                  { icon: '♾️', title: 'Reusable Benefit', desc: 'Your VA entitlement can be used multiple times throughout your life — it\'s a lifetime benefit, not a one-time program.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>VA Loan Eligibility Requirements</h2>
              <div className="gold-line gold-line-left" />
              <p>To qualify for a VA loan with MadCity Home Loans, you generally need to meet the following criteria:</p>
              <ul className="checklist">
                <li>Veteran with 90+ consecutive days of active service during wartime, or 181 days during peacetime</li>
                <li>Active-duty service member currently serving for at least 90 days</li>
                <li>National Guard or Reserve member with 6+ years of service (or 90 days under Title 32)</li>
                <li>Surviving spouse of a veteran who died in service or from a service-connected disability</li>
                <li>Valid Certificate of Eligibility (COE) — Rob Miller can help you obtain this directly</li>
                <li>The property must be your primary residence (no vacation homes or investment properties)</li>
                <li>Property must meet VA Minimum Property Requirements (MPR)</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>Understanding the VA Funding Fee</h2>
              <div className="gold-line gold-line-left" />
              <p>
                The VA Funding Fee is a one-time charge that helps sustain the VA loan program for future generations of veterans.
                Unlike PMI, it's paid once — not monthly — and can be rolled directly into your loan amount.
              </p>
              <p>
                <strong>First-time use with $0 down:</strong> 2.15% of the loan amount (e.g., $6,450 on a $300,000 loan).
              </p>
              <p>
                <strong>Subsequent use with $0 down:</strong> 3.3% of the loan amount.
              </p>
              <p>
                <strong>Fee exemptions:</strong> Veterans receiving VA disability compensation of 10% or more, surviving spouses
                of veterans who died in service, and certain Purple Heart recipients are exempt from the funding fee entirely.
              </p>

              <div className={styles.compareCTA}>
                <p>
                  <strong>VA vs. Conventional?</strong> Not sure which is right for you? Rob Miller can run both scenarios side
                  by side — including the funding fee impact — and show you the real monthly payment difference.
                </p>
                <Link href="/contact" className="btn btn-outline">Get a Side-by-Side Comparison</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>VA Loan Quick Facts</h4>
                <div className={styles.qfRow}><span>Down Payment</span><strong>$0</strong></div>
                <div className={styles.qfRow}><span>PMI Required</span><strong>None</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>~580+</strong></div>
                <div className={styles.qfRow}><span>Loan Limit (WI)</span><strong>No Limit*</strong></div>
                <div className={styles.qfRow}><span>Owner Occupied</span><strong>Required</strong></div>
                <div className={styles.qfRow}><span>Funding Fee</span><strong>2.15%–3.3%</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="VA Loan FAQs — Wisconsin Veterans" />

      <CTABanner
        heading="Ready to Use Your VA Benefit?"
        subtext="Rob Miller has helped dozens of Wisconsin veterans secure VA financing. Get your pre-approval started today — it costs nothing and obligates you to nothing."
        primaryLabel="Start My VA Pre-Approval"
      />
    </>
  );
}
