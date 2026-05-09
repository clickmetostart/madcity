import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Home Equity Loans & Cash-Out Refinance Madison | Rob Miller',
  description:
    'Access your home equity for renovations, debt payoff, or investments. Rob Miller helps Madison homeowners with strategic cash-out refinances. Licensed in 11 states. Call 608-227-2002.',
  keywords: ['home equity loan Madison WI', 'cash-out refinance Wisconsin', 'HELOC vs cash-out Madison', 'access home equity Madison', 'licensed in 11 states'],
};

const faqs = [
  {
    q: 'What is the difference between a cash-out refinance and a HELOC?',
    a: 'A cash-out refinance replaces your entire mortgage with a new one, while a Home Equity Line of Credit (HELOC) is a second mortgage that acts like a credit card tied to your home. Cash-out refis typically offer lower, fixed rates, while HELOCs offer flexibility and interest-only payments during the draw period. Rob Miller will help you decide which fits your specific needs.',
  },
  {
    q: 'How much equity can I take out of my home?',
    a: 'Most programs allow you to borrow up to 80% of your home\'s current market value (including your existing mortgage). For example, if your home is worth $500,000, your total debt (old mortgage + new cash) usually can\'t exceed $400,000. Some VA programs allow up to 90% or even 100% in certain cases.',
  },
  {
    q: 'Do I need a new appraisal for a home equity loan?',
    a: 'Yes, a full appraisal is typically required to determine the current market value of your home. This ensures both you and the lender have an accurate understanding of the available equity.',
  },
];

export default function HomeEquityPage() {
  return (
    <>
      <LoanPageHero
        title="Access Your Home Equity: Turn Your House Into Capital"
        subtitle="Your home is likely your largest asset. In 2026, many Wisconsin homeowners have record levels of equity. Rob Miller helps you unlock that value for renovations, debt consolidation, or new investments with a strategic cash-out refinance."
        imageSrc="/img-jumbo.jpg"
        imageAlt="Modern Madison home — demonstrating the value of home equity"
        badge="Equity Solutions"
        ctaText="Check My Available Equity"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Smart Capital</div>
              <h2>Make Your Equity Work For You</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Home equity is the difference between what your home is worth and what you owe on your mortgage. 
                With home values in Madison, Sun Prairie, and Verona reaching new heights, you may be sitting 
                on a significant financial resource without even realizing it.
              </p>
              <p>
                A cash-out refinance allows you to tap into that equity at interest rates that are typically much 
                lower than personal loans or credit cards. It\'s a powerful tool for restructuring your debt or 
                investing in your future.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Common Uses for Home Equity</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🔨', title: 'Home Improvements', desc: 'Finance a kitchen remodel, a new deck, or a finished basement. Using equity for renovations can often increase your home\'s value even further.' },
                  { icon: '💳', title: 'High-Interest Debt Payoff', desc: 'Consolidate credit cards, personal loans, or medical bills into a single, low-interest mortgage payment and save hundreds in interest.' },
                  { icon: '🎓', title: 'Education Funding', desc: 'Pay for college tuition or advanced degrees without relying on high-interest private student loans.' },
                  { icon: '📈', title: 'Real Estate Investment', desc: 'Use the equity from your primary residence as a down payment for a rental property or a vacation home.' },
                  { icon: '💼', title: 'Business Capital', desc: 'Provide the seed money or expansion capital for your business with the security of a fixed-rate mortgage.' },
                  { icon: '🛡️', title: 'Safety Net', desc: 'Access cash to handle unexpected life events or medical expenses while maintaining long-term financial stability.' },
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
                  <strong>How much equity do you have?</strong> We\'ll provide a free, updated valuation of your home 
                  and show you exactly how much cash you could access at current market rates.
                </p>
                <Link href="/contact" className="btn btn-outline">Request My Equity Analysis</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Equity Quick Facts</h4>
                <div className={styles.qfRow}><span>Max LTV</span><strong>80% (Typical)</strong></div>
                <div className={styles.qfRow}><span>Rate Type</span><strong>Fixed Available</strong></div>
                <div className={styles.qfRow}><span>Appraisal Required</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Use of Funds</span><strong>Unrestricted</strong></div>
                <div className={styles.qfRow}><span>Tax Deductible</span><strong>Consult your CPA</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Home Equity FAQs" />

      <CTABanner
        heading="Unlock the Value Hidden in Your Home"
        subtext="Don\'t let your equity sit idle. Put it to work for your goals. Reach out to Rob Miller today."
        primaryLabel="Start My Equity Check"
      />
    </>
  );
}
