import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Mortgage Planning & Strategy in Madison, WI | MadCity Home Loans',
  description:
    'A mortgage is a powerful financial tool. Rob Miller provides expert mortgage planning and long-term strategy for Wisconsin homeowners. Plan for your financial future today. Call 608-227-2002.',
  keywords: ['mortgage planning Madison WI', 'home loan strategy Wisconsin', 'financial planning mortgage Madison', 'Rob Miller mortgage planning'],
};

const faqs = [
  {
    q: 'What is mortgage planning?',
    a: 'Mortgage planning is the process of integrating your home loan into your overall financial plan. It\'s not just about getting a low rate; it\'s about choosing a loan structure that helps you pay off debt faster, build wealth through real estate, or maximize your monthly cash flow based on your specific life goals.',
  },
  {
    q: 'How often should I review my mortgage?',
    a: 'We recommend an Annual Mortgage Review. Just as you meet with a financial advisor or CPA once a year, you should review your mortgage to ensure it\'s still the most efficient way to manage your home equity and debt in the current market.',
  },
  {
    q: 'Can a mortgage help me pay for college or retirement?',
    a: 'Absolutely. Strategic use of home equity through cash-out refinances or specific loan terms can provide the capital needed for major life expenses while maintaining a stable long-term financial position. Rob Miller specializes in these complex scenarios.',
  },
];

export default function MortgagePlanningPage() {
  return (
    <>
      <LoanPageHero
        title="Mortgage Planning: Your Home as a Financial Tool"
        subtitle="A mortgage shouldn\'t just be a monthly bill — it should be a key component of your wealth-building strategy. Rob Miller provides the expert analysis and long-term planning you need to make your home equity work for you."
        imageSrc="/hero-home.jpg"
        imageAlt="Rob Miller discussing mortgage planning and financial strategy in Madison, WI"
        badge="Strategic Planning"
        ctaText="Book a Planning Session"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Think Long-Term</div>
              <h2>Beyond the Interest Rate</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Most lenders focus on the transaction. They want to get your loan closed and move on to the next one. 
                At MadCity Home Loans, we focus on the **strategy**. We look at how your mortgage fits into your 
                tax situation, your retirement plans, and your family\'s evolving needs.
              </p>
              <p>
                Whether you\'re a first-time buyer wanting to pay off your home in 15 years instead of 30, or a seasoned 
                investor looking to optimize your portfolio, Rob Miller provides the high-level analysis usually reserved 
                for private wealth management.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Our Planning Process</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '📊', title: 'Equity Analysis', desc: 'We calculate your current equity position and identify opportunities to use that equity for debt consolidation or wealth building.' },
                  { icon: '📅', title: 'Life-Stage Matching', desc: 'As your family grows or you approach retirement, your mortgage needs change. We ensure your loan term matches your reality.' },
                  { icon: '💰', title: 'Cash Flow Optimization', desc: 'We run multiple scenarios to find the "sweet spot" between your interest rate and your monthly liquidity requirements.' },
                  { icon: '🛡️', title: 'Risk Management', desc: 'We evaluate your fixed vs. adjustable-rate exposure and suggest strategies to protect your home from market volatility.' },
                  { icon: '📈', title: 'Investment Strategy', desc: 'Planning to buy more property? We help you structure your first loan to make your second one easier to obtain.' },
                  { icon: '🎓', title: 'Tax Strategy Integration', desc: 'We work alongside your CPA to ensure your mortgage interest and points are used most effectively for your tax situation.' },
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
                  <strong>Is your current mortgage working for you?</strong> Most homeowners have never had a professional 
                  mortgage planning session. A 20-minute review with Rob could reveal thousands in potential savings.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule My Strategy Review</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Planning Benefits</h4>
                <div className={styles.qfRow}><span>Goal Focused</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Tax Integration</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Equity Tracking</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Portfolio Reviews</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Debt Strategy</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Mortgage Planning FAQs" />

      <CTABanner
        heading="Start Building Wealth Through Your Mortgage"
        subtext="Don\'t just settle for a loan. Choose a strategy that wins. Contact Rob Miller today."
        primaryLabel="Schedule My Consultation"
      />
    </>
  );
}
