import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Purchase a New Home in Madison, WI | Expert Mortgage Guidance | MadCity Home Loans',
  description:
    'Planning to purchase a new home in Wisconsin? Get expert mortgage advice, fast pre-approvals, and local market insights from Rob Miller. Navigate the Madison real estate market with confidence. Call 608-227-2002.',
  keywords: ['purchase home Madison WI', 'home buying process Wisconsin', 'buy a house Madison', 'mortgage pre-approval Madison', 'Madison real estate financing'],
};

const faqs = [
  {
    q: 'Why should I get pre-approved before looking at homes?',
    a: 'In a competitive market like Madison, a pre-approval is essential. It shows sellers you are a serious buyer with the financial backing to close the deal. It also gives you a clear understanding of your budget, so you don\'t waste time looking at homes outside your price range.',
  },
  {
    q: 'How much money do I really need for a down payment?',
    a: 'While 20% is the traditional benchmark to avoid PMI, many programs allow much less. FHA starts at 3.5%, conventional for first-time buyers at 3%, and VA/USDA offer 0% down options. Rob Miller will help you calculate the total "cash to close" required for your specific situation.',
  },
  {
    q: 'What are closing costs and how much are they?',
    a: 'Closing costs are fees paid at the end of the real estate transaction. They typically range from 2% to 5% of the purchase price and include things like appraisal fees, title insurance, loan origination fees, and government recording fees.',
  },
  {
    q: 'How long does the home purchase process take?',
    a: 'Once you are under contract, the mortgage process typically takes 30 to 45 days. However, the initial pre-approval can happen in as little as 24-48 hours. The total time depends on how quickly you find the right home and the length of the inspection period.',
  },
  {
    q: 'Can I buy a home if I have a lot of student loan debt?',
    a: 'Yes! Lenders look at your Debt-to-Income (DTI) ratio, not just the total amount of debt. Many programs have flexible guidelines for student loans. Rob Miller specializes in finding paths to homeownership for borrowers with complex financial profiles.',
  },
];

export default function PurchaseHomePage() {
  return (
    <>
      <LoanPageHero
        title="Purchase Your New Home in Wisconsin"
        subtitle="The Madison real estate market moves fast — you need a lender who moves faster. From your first pre-approval letter to the final keys at the closing table, Rob Miller provides the local expertise and high-speed service you need to win your dream home."
        imageSrc="/img-handshake.jpg"
        imageAlt="Happy couple shaking hands with Rob Miller after purchasing their new home in Madison, WI"
        badge="Home Purchase Experts"
        ctaText="Get Pre-Approved to Shop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Buying Guide</div>
              <h2>Your Path to a New Home starts here</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Buying a home is more than a transaction; it's a milestone. Whether you're upgrading to a larger space, 
                downsizing for retirement, or relocating to the beautiful Madison area, the mortgage you choose will 
                impact your financial health for years to come.
              </p>
              <p>
                At MadCity Home Loans, we don't just "process loans." We partner with you to understand your long-term 
                goals, provide transparent options, and ensure you have the strongest possible offer in a competitive 
                market.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>The Power of Local Expertise</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '📍', title: 'Madison Market Knowledge', desc: 'We know the local neighborhoods, the local agents, and the local appraisal landscape — giving you a distinct advantage.' },
                  { icon: '⚡', title: 'Lightning-Fast Pre-Approvals', desc: 'In a hot market, a 48-hour delay can cost you a house. We prioritize speed so you can submit offers with confidence.' },
                  { icon: '🤝', title: 'Personalized Loan Options', desc: 'We compare FHA, VA, USDA, and Conventional programs to find the exact mix of rate and down payment that fits your budget.' },
                  { icon: '📱', title: 'Constant Communication', desc: 'No more "black hole" loan status. You\'ll have Rob\'s direct line and regular updates every step of the way.' },
                  { icon: '🛡️', title: 'On-Time Closings', desc: 'Missing a closing date can result in penalties or a lost contract. Our 15+ years of experience ensures we hit every deadline.' },
                  { icon: '💎', title: 'Competitive Rates', desc: 'As a local branch of ProVisor, we offer the rates of a national lender with the service of a boutique firm.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>3 Steps to a Successful Purchase</h2>
              <div className="gold-line gold-line-left" />
              <ul className="checklist">
                <li><strong>1. The Strategy Session:</strong> Before you visit a single open house, we sit down (or hop on a call) to run your numbers and define your target payment and max purchase price.</li>
                <li><strong>2. The Verified Pre-Approval:</strong> We perform a comprehensive review of your credit, income, and assets. This makes your pre-approval letter as strong as cash in the eyes of most sellers.</li>
                <li><strong>3. The Finish Line:</strong> Once you\'re under contract, our team works tirelessly behind the scenes to manage the appraisal, title, and final underwriting for a stress-free closing.</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Ready to start shopping?</strong> Don't wait until you find the perfect house to find the perfect loan. 
                  Get your pre-approval in place today and be ready to move when the right opportunity strikes.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule My Strategy Session</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Purchase Quick Facts</h4>
                <div className={styles.qfRow}><span>Pre-Approval Time</span><strong>24-48 Hours</strong></div>
                <div className={styles.qfRow}><span>Min Down Payment</span><strong>0% - 3.5%</strong></div>
                <div className={styles.qfRow}><span>Typical Closing</span><strong>30-45 Days</strong></div>
                <div className={styles.qfRow}><span>Local Focus</span><strong>Madison & WI</strong></div>
                <div className={styles.qfRow}><span>Loan Limit</span><strong>Up to $3M+</strong></div>
                <div className={styles.qfRow}><span>Direct Access</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Home Purchase FAQs — Wisconsin" />

      <CTABanner
        heading="Found a Home You Love? Let's Secure It."
        subtext="Rob Miller's team works fast so you don't miss out. Get the local advantage and the expert guidance you deserve."
        primaryLabel="Start My Pre-Approval Now"
      />
    </>
  );
}
