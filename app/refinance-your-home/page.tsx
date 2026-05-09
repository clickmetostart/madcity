import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Refinance Your Home in Wisconsin | Lower Rates | Rob Miller | MadCity',
  description:
    'Refinance your Wisconsin home to lower your rate, reduce your payment, or access equity. Rob Miller is a refinance specialist licensed in 11 states. Call 608-227-2002.',
  keywords: ['refinance home Wisconsin', 'mortgage refinance Madison WI', 'lower mortgage rate Wisconsin', 'cash-out refinance Madison', 'FHA streamline refinance Wisconsin', 'licensed in 11 states'],
};

const faqs = [
  {
    q: 'When does it make sense to refinance my mortgage?',
    a: 'Refinancing typically makes sense when: you can lower your rate by 0.5% or more, you want to convert from an ARM to a fixed rate, you want to eliminate FHA mortgage insurance by switching to conventional, you want to pull equity out for home improvements or debt payoff, or you want to shorten your loan term. Rob Miller will calculate your break-even point — the number of months until your savings outpace your closing costs — so you can make a fully informed decision.',
  },
  {
    q: 'What is a cash-out refinance?',
    a: 'A cash-out refinance replaces your existing mortgage with a new, larger loan and pays you the difference in cash. For example, if your home is worth $400,000 and you owe $250,000, you might refinance into a $320,000 loan and receive $70,000 cash (minus closing costs). This cash can be used for home improvements, debt consolidation, education, or any other purpose.',
  },
  {
    q: 'What are current refinance rates in Wisconsin?',
    a: 'Mortgage rates change daily based on bond market conditions. Rob Miller monitors current rates for every loan type and can give you a real-time quote based on your specific credit profile, loan amount, and property type. Call 608-227-2002 or apply online for a current rate quote.',
  },
  {
    q: 'How much does it cost to refinance?',
    a: 'Typical refinance closing costs run 2%–5% of the loan amount — similar to purchase closing costs. On a $300,000 refinance, that\'s roughly $6,000–$15,000. However, many refinances can be structured as "no-closing-cost" refinances where costs are rolled into the loan or offset by a slightly higher rate. Rob will model both options and show you which saves more over your expected time in the home.',
  },
  {
    q: 'What is an FHA Streamline Refinance?',
    a: 'The FHA Streamline Refinance is a simplified program for existing FHA borrowers. It requires minimal documentation (no income verification in most cases), no appraisal, and faster processing. The main requirement is a clear payment history on your current FHA loan and a "net tangible benefit" — typically a reduction of at least 0.5% in your combined rate and MIP.',
  },
  {
    q: 'How long does a refinance take?',
    a: 'A standard refinance typically closes in 30–45 days. Streamline refinances (FHA, VA IRRRL) often close faster — sometimes in 2–3 weeks with minimal documentation required. Rob Miller\'s team prioritizes refinances to move quickly, especially when rate locks are time-sensitive.',
  },
];

export default function RefinancePage() {
  return (
    <>
      <LoanPageHero
        title="Refinance Your Home in Wisconsin"
        subtitle="Whether you want a lower rate, a lower payment, a shorter term, or cash in hand — refinancing your Wisconsin home may be one of the smartest financial moves you make. Rob Miller analyzes your current loan and long-term goals to find the refinance strategy that actually wins for you."
        imageSrc="/img-handshake.jpg"
        imageAlt="Wisconsin homeowner meeting with Rob Miller to discuss mortgage refinance options in Madison"
        badge="Refinance Programs"
        ctaText="See My Refinance Options"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Refinance Options</div>
              <h2>Why Wisconsin Homeowners Refinance</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A mortgage refinance replaces your existing home loan with a new one — ideally with better terms. The right
                refinance strategy depends entirely on your current loan, your goals, and how long you plan to stay in the home.
                There is no one-size-fits-all answer, which is why Rob Miller always starts with a full analysis of your
                current situation before recommending a course of action.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Types of Refinances</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '📉', title: 'Rate & Term Refinance', desc: 'Replace your current loan with a new one at a lower rate, a shorter term, or both. The most common refinance — purely focused on reducing your cost of borrowing.' },
                  { icon: '💵', title: 'Cash-Out Refinance', desc: 'Access your home\'s equity in cash by taking a new loan larger than your current balance. Use for renovations, debt payoff, or any major financial goal.' },
                  { icon: '🛡️', title: 'PMI/MIP Removal', desc: 'If your home has appreciated, refinancing to conventional can eliminate FHA MIP permanently — often saving $100–$300/month.' },
                  { icon: '⚡', title: 'FHA Streamline', desc: 'Simplified refinance for existing FHA borrowers. No appraisal, minimal income docs, faster processing. Requires a tangible benefit.' },
                  { icon: '🎖️', title: 'VA IRRRL', desc: 'VA Interest Rate Reduction Refinance Loan — zero-hassle rate reduction for existing VA loan holders. No appraisal, no income verification required.' },
                  { icon: '📅', title: 'ARM to Fixed', desc: 'Convert your adjustable-rate mortgage to a stable fixed rate before your next adjustment period and eliminate rate-hike risk.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>How Rob Analyzes Your Refinance</h2>
              <div className="gold-line gold-line-left" />
              <ul className="checklist">
                <li><strong>Break-Even Analysis:</strong> How many months until your monthly savings cover the cost of refinancing?</li>
                <li><strong>Total Interest Comparison:</strong> How much do you save (or spend) in total interest over the remaining life of both loans?</li>
                <li><strong>MIP Removal Opportunity:</strong> Would refinancing to conventional eliminate ongoing mortgage insurance?</li>
                <li><strong>Equity Position:</strong> Do you have enough equity for a cash-out, or to drop PMI/MIP without cash-in?</li>
                <li><strong>Rate Lock Strategy:</strong> When and how long to lock your rate to protect against market movement during processing.</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Is now the right time to refinance?</strong> Rob Miller will run a complete no-obligation analysis
                  of your current loan and show you exactly what a refinance would save — or cost.
                </p>
                <Link href="/contact" className="btn btn-outline">Get My Free Refinance Analysis</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Refinance Snapshot</h4>
                <div className={styles.qfRow}><span>Closing Costs</span><strong>2%–5%</strong></div>
                <div className={styles.qfRow}><span>Typical Timeline</span><strong>30–45 days</strong></div>
                <div className={styles.qfRow}><span>FHA Streamline</span><strong>~2–3 weeks</strong></div>
                <div className={styles.qfRow}><span>VA IRRRL</span><strong>~2–3 weeks</strong></div>
                <div className={styles.qfRow}><span>Min. Equity (Cash-Out)</span><strong>20%</strong></div>
                <div className={styles.qfRow}><span>No-Cost Option</span><strong>Available</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Refinance FAQs — Wisconsin Homeowners" />

      <CTABanner
        heading="Find Out If a Refinance Makes Sense for You"
        subtext="Rob Miller will analyze your current loan and run the numbers — no obligation, no pressure. Most homeowners are surprised by how much they can save."
        primaryLabel="Get My Free Refinance Analysis"
      />
    </>
  );
}
