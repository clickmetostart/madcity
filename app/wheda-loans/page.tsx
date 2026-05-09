import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'WHEDA Loans in Madison, WI | Down Payment Assistance | MadCity Home Loans',
  description:
    'WHEDA loans for Wisconsin homebuyers. Rob Miller is an expert in WHEDA down payment assistance and below-market rates. Achieve homeownership sooner. Call 608-227-2002.',
  keywords: ['WHEDA loans Madison WI', 'WHEDA down payment assistance', 'Wisconsin first time buyer programs', 'below market mortgage rates WI', 'WHEDA specialist Rob Miller'],
};

const faqs = [
  {
    q: 'What is WHEDA and who offers these loans?',
    a: 'WHEDA stands for the Wisconsin Housing and Economic Development Authority — a state agency that partners with approved private lenders to offer below-market interest rate mortgages and down payment assistance to Wisconsin residents. MadCity Home Loans is an approved WHEDA lender, meaning Rob Miller can originate WHEDA loans directly.',
  },
  {
    q: 'Do I have to be a first-time homebuyer to use a WHEDA loan?',
    a: 'Not necessarily. While WHEDA programs are designed for first-time buyers (defined as someone who hasn\'t owned a home in the past 3 years), there are exceptions for veterans and buyers purchasing in certain targeted areas. Rob Miller can determine your eligibility based on your specific situation.',
  },
  {
    q: 'How much down payment assistance does WHEDA offer?',
    a: 'WHEDA\'s Easy Close DPA (Down Payment Assistance) program provides up to 6% of the purchase price as a 10-year fixed loan at a very low interest rate. For a $300,000 home, that\'s up to $18,000 in down payment and closing cost help. The assistance is a second mortgage — not a grant — but with below-market terms.',
  },
  {
    q: 'What are the income limits for WHEDA loans?',
    a: 'WHEDA income limits vary by county and household size. As a general guide, Dane County (Madison area) limits are approximately $120,500 for 1-2 person households and $140,000 for 3+ person households in 2026. Other Wisconsin counties have different limits. Contact Rob Miller for your specific county.',
  },
  {
    q: 'What credit score do I need for a WHEDA loan?',
    a: 'WHEDA requires a minimum credit score of 620 for most programs. The WHEDA Advantage Conventional product requires 640+. Unlike FHA or VA, WHEDA loans are paired with an underlying FHA, VA, or conventional loan — so the underlying loan requirements also apply.',
  },
  {
    q: 'What types of properties are eligible for WHEDA financing?',
    a: 'WHEDA loans can be used for single-family homes, condos, and 1-2 unit properties (if owner-occupied). The home must be your primary residence and meet standard property condition requirements. Purchase price limits also apply by county — typically around $385,000–$470,000 in most Wisconsin counties for 2026.',
  },
  {
    q: 'Can WHEDA be combined with FHA or VA?',
    a: 'Yes — WHEDA programs work as a "rate buy-down" and DPA layer on top of an underlying FHA, VA, or conventional loan. This means eligible veterans can combine WHEDA with their VA benefit, or first-time buyers can pair WHEDA with an FHA loan for maximum affordability.',
  },
];

export default function WHEDALoansPage() {
  return (
    <>
      <LoanPageHero
        title="WHEDA Loans in Wisconsin"
        subtitle="Wisconsin's own homebuyer program offers below-market interest rates and down payment assistance exclusively for Wisconsin residents. As an approved WHEDA lender, Rob Miller helps first-time buyers across Madison and the state take full advantage of this powerful state benefit."
        imageSrc="/img-firsttime.jpg"
        imageAlt="Wisconsin first-time homebuyer using WHEDA loan program through MadCity Home Loans in Madison"
        badge="WHEDA Loan Program"
        ctaText="Check My WHEDA Eligibility"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">WHEDA Explained</div>
              <h2>What Is a WHEDA Loan?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                WHEDA — the Wisconsin Housing and Economic Development Authority — is a state agency that partners with approved
                private lenders to offer affordable mortgage financing to Wisconsin residents. WHEDA doesn't lend money directly;
                instead, it provides funding and rate subsidies that approved lenders like MadCity Home Loans pass on to eligible
                borrowers in the form of below-market interest rates.
              </p>
              <p>
                WHEDA programs are specifically designed to make homeownership accessible to Wisconsin residents who might
                otherwise struggle to afford it — particularly first-time buyers, moderate-income households, and residents of
                targeted areas. When stacked with down payment assistance (DPA), WHEDA loans can dramatically reduce the
                upfront cost of buying a home.
              </p>
              <p>
                As an approved WHEDA lender, Rob Miller works with first-time buyers across Madison, Dane County, and all of
                Wisconsin to structure WHEDA financing that maximizes savings and minimizes barriers to homeownership.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>WHEDA Program Benefits</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '📉', title: 'Below-Market Interest Rate', desc: 'WHEDA\'s program rate is typically 0.25%–0.75% below current market rates, saving thousands over the life of your loan.' },
                  { icon: '💵', title: 'Down Payment Assistance', desc: 'Easy Close DPA provides up to 6% of the purchase price as a low-interest second mortgage for down payment and closing costs.' },
                  { icon: '🏡', title: 'Wisconsin-Exclusive Benefit', desc: 'WHEDA is a Wisconsin state program — it\'s a benefit designed specifically for Wisconsin residents that out-of-state buyers can\'t access.' },
                  { icon: '🔗', title: 'Pairs With FHA, VA & Conventional', desc: 'WHEDA works as a layer on top of your underlying loan type — eligible veterans can even combine WHEDA with their VA benefit.' },
                  { icon: '🎯', title: 'Targeted Area Exceptions', desc: 'Buyers purchasing in WHEDA-designated targeted areas may qualify even if they\'ve owned a home before.' },
                  { icon: '🏦', title: 'Approved Private Lender', desc: 'You work directly with Rob Miller — not a government office. Your experience is local, personal, and fast.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>WHEDA Loan Requirements in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <p>To qualify for a WHEDA loan with MadCity Home Loans, you'll generally need to meet the following criteria:</p>
              <ul className="checklist">
                <li>Be a first-time homebuyer (no ownership in last 3 years) — or purchase in a WHEDA targeted area, or be a qualifying veteran</li>
                <li>Household income must be within WHEDA county limits (approximately $120,500 in Dane County for 1-2 person households)</li>
                <li>Purchase price within WHEDA limits (typically $385,000–$470,000 depending on county and property type)</li>
                <li>Minimum credit score of 620 (640+ for WHEDA Advantage Conventional)</li>
                <li>The home must be your primary residence in Wisconsin</li>
                <li>Complete a WHEDA-approved homebuyer education course (available online)</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>WHEDA Easy Close DPA — Down Payment Help</h2>
              <div className="gold-line gold-line-left" />
              <p>
                WHEDA's Easy Close Down Payment Assistance (DPA) is a second mortgage that provides up to 6% of your purchase
                price to cover your down payment and closing costs. It's structured as a 10-year fixed loan at a very low rate —
                making it far more affordable than most assistance programs.
              </p>
              <p>
                <strong>Example:</strong> On a $300,000 purchase, Easy Close DPA can provide up to $18,000 in assistance. Combined
                with WHEDA's below-market first mortgage rate, many buyers can get into a home with minimal out-of-pocket cash.
              </p>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Is WHEDA your best option?</strong> Rob Miller will compare WHEDA rates and total costs against FHA,
                  conventional, and USDA options — so you can see exactly which program saves you the most money.
                </p>
                <Link href="/contact" className="btn btn-outline">Get a WHEDA Comparison</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>WHEDA Quick Facts</h4>
                <div className={styles.qfRow}><span>Rate Advantage</span><strong>Below Market</strong></div>
                <div className={styles.qfRow}><span>DPA Available</span><strong>Up to 6%</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>620</strong></div>
                <div className={styles.qfRow}><span>First-Time Buyer</span><strong>Required*</strong></div>
                <div className={styles.qfRow}><span>WI Residents Only</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Homebuyer Ed</span><strong>Required</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="WHEDA Loan FAQs — Wisconsin First-Time Buyers" />

      <CTABanner
        heading="Ready to Use Wisconsin's Own Homebuyer Program?"
        subtext="Rob Miller is an approved WHEDA lender serving Madison and all of Wisconsin. Find out if you qualify — at no cost or obligation."
        primaryLabel="Check My WHEDA Eligibility"
      />
    </>
  );
}
