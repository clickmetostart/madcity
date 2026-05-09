import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Programs in Madison, WI | MadCity Home Loans',
  description:
    'First-time homebuyer programs in Wisconsin with low down payments, down payment assistance, and expert guidance. Rob Miller has helped hundreds of first-time buyers in Madison, WI achieve homeownership. Call 608-227-2002.',
  keywords: ['first-time home buyer Madison WI', 'first-time homebuyer Wisconsin', 'first-time buyer mortgage Madison', 'down payment assistance Wisconsin', 'WHEDA first-time buyer'],
};

const faqs = [
  {
    q: 'What qualifies as a "first-time homebuyer" in Wisconsin?',
    a: 'For most programs, a first-time homebuyer is someone who has not owned a primary residence in the past 3 years. This means if you previously owned a home but sold it 3+ years ago, you may qualify as a first-time buyer again. Veterans and buyers in certain WHEDA-targeted areas may be exempt from the first-time buyer requirement.',
  },
  {
    q: 'What is the minimum down payment for a first-time buyer?',
    a: 'As little as $0 with VA or USDA loans for eligible buyers. WHEDA and FHA programs start at 3% and 3.5% respectively. Conventional HomeReady and Home Possible programs allow 3% down for first-time buyers. Rob Miller will identify the lowest-down-payment option you qualify for.',
  },
  {
    q: 'Is down payment assistance available in Wisconsin?',
    a: 'Yes — WHEDA\'s Easy Close DPA program provides up to 6% of the purchase price as a low-interest second mortgage for down payment and closing costs. Some local municipalities and nonprofits also offer additional assistance. Rob Miller knows the local programs available in Madison, Dane County, and across Wisconsin.',
  },
  {
    q: 'Do I need to take a homebuyer education course?',
    a: 'WHEDA loans require completion of an approved homebuyer education course, which is available online. Some other first-time buyer programs also require it. The course typically takes 6–8 hours and covers budgeting, the buying process, and maintaining your home. Many buyers find it genuinely useful.',
  },
  {
    q: 'What credit score do I need to buy my first home?',
    a: 'It depends on the loan program. FHA allows scores as low as 580 (with 3.5% down) or 500 (with 10% down). Conventional loans require 620+. WHEDA requires 620+. VA and USDA don\'t set a minimum, but most lenders require 580–640. Rob Miller works with first-time buyers at every credit level to find viable paths forward.',
  },
  {
    q: 'How long does it take to buy a first home in Wisconsin?',
    a: 'From starting your search to closing day, the typical Wisconsin homebuying process takes 60–90 days. The mortgage process itself — from application to closing — typically runs 30–45 days once you\'re under contract. Getting pre-approved before you start shopping puts you in the best position to move quickly when you find your home.',
  },
];

export default function FirstTimeHomeBuyersPage() {
  return (
    <>
      <LoanPageHero
        title="First-Time Home Buyer Programs in Madison, WI"
        subtitle="Buying your first home is the biggest financial decision of your life — and Rob Miller has spent 15+ years making it less intimidating and more affordable for Wisconsin buyers. From low-down-payment options to WHEDA assistance, we'll find the program that gets you into your first home."
        imageSrc="/img-firsttime.jpg"
        imageAlt="First-time homebuyers receiving keys to their new Madison, Wisconsin home with help from Rob Miller"
        badge="First-Time Buyer Programs"
        ctaText="Start My Pre-Approval"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Getting Started</div>
              <h2>Buying Your First Home in Wisconsin</h2>
              <div className="gold-line gold-line-left" />
              <p>
                The biggest barrier for most first-time buyers isn't income — it's the upfront cost. Down payments,
                closing costs, inspections, and moving expenses can add up fast. The good news: Wisconsin has some of the
                best first-time homebuyer programs in the country, and Rob Miller knows how to stack them to minimize what
                you need to bring to closing.
              </p>
              <p>
                Whether you're buying in Madison, Middleton, Sun Prairie, Fitchburg, or anywhere in Wisconsin, the right
                combination of loan program and assistance can make homeownership far more achievable than you think —
                often with less cash out of pocket than your current monthly rent.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>First-Time Buyer Loan Programs</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏠', title: 'WHEDA Advantage', desc: 'Wisconsin\'s state program offers below-market rates + up to 6% down payment assistance exclusively for WI residents.' },
                  { icon: '🏛️', title: 'FHA Loans', desc: 'As little as 3.5% down with a 580+ credit score. Gift funds from family are allowed for the entire down payment.' },
                  { icon: '✅', title: 'Conventional 97', desc: 'Fannie Mae HomeReady and Freddie Mac Home Possible offer 3% down for first-time buyers with income limits.' },
                  { icon: '🎖️', title: 'VA Loans (Veterans)', desc: '$0 down with no PMI for eligible veterans and active-duty service members — the most powerful first-time buyer tool available.' },
                  { icon: '🌾', title: 'USDA Loans', desc: '$0 down for eligible suburban and rural Wisconsin properties. Broader geographic coverage than most buyers realize.' },
                  { icon: '🤝', title: 'Down Payment Assistance', desc: 'WHEDA Easy Close DPA provides up to 6% of purchase price. Additional local programs may be available in your area.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>The First-Time Buyer Roadmap</h2>
              <div className="gold-line gold-line-left" />
              <ul className="checklist">
                <li><strong>Step 1 — Get Pre-Approved:</strong> Know your budget before you start shopping. A pre-approval letter also makes your offers competitive.</li>
                <li><strong>Step 2 — Identify Your Program:</strong> Rob reviews your credit, income, and savings to identify every program you qualify for and rank them by total cost.</li>
                <li><strong>Step 3 — Complete Homebuyer Education (if required):</strong> WHEDA and some DPA programs require an online course — typically 6–8 hours and available anytime.</li>
                <li><strong>Step 4 — Make an Offer:</strong> Your agent submits the offer; your pre-approval letter is attached to show sellers you're a serious, qualified buyer.</li>
                <li><strong>Step 5 — Application & Underwriting:</strong> Rob's team handles the loan processing, keeps you updated, and resolves any underwriting conditions quickly.</li>
                <li><strong>Step 6 — Close & Get Your Keys:</strong> Sign your closing documents, pay your minimal down payment and closing costs, and get your keys.</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Not sure which program is right for you?</strong> A free 15-minute call with Rob Miller is all it
                  takes to find out exactly what you qualify for and how much you'll need at closing.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule a Free First-Time Buyer Consultation</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>First-Time Buyer Options</h4>
                <div className={styles.qfRow}><span>Lowest Down Payment</span><strong>$0 (VA/USDA)</strong></div>
                <div className={styles.qfRow}><span>FHA Minimum</span><strong>3.5%</strong></div>
                <div className={styles.qfRow}><span>Conventional Min.</span><strong>3%</strong></div>
                <div className={styles.qfRow}><span>WHEDA DPA</span><strong>Up to 6%</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>500 (FHA)</strong></div>
                <div className={styles.qfRow}><span>Avg. Close Time</span><strong>30–45 days</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="First-Time Buyer FAQs — Wisconsin" />

      <CTABanner
        heading="Ready to Buy Your First Home in Wisconsin?"
        subtext="Rob Miller has helped hundreds of first-time buyers in Madison and across Wisconsin. Let's find out what you qualify for — completely free, no obligation."
        primaryLabel="Get My Free Pre-Approval"
      />
    </>
  );
}
