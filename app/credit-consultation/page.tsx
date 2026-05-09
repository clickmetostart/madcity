import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Credit Consultation for Home Loans Madison, WI | Rob Miller',
  description:
    'Improve your credit score for a mortgage. Rob Miller provides free credit consultation and actionable plans for Wisconsin homebuyers. Licensed in 11 states. Call 608-227-2002.',
  keywords: ['credit consultation Madison WI', 'improve credit for mortgage Wisconsin', 'mortgage credit score Madison', 'Rob Miller credit advice', 'licensed in 11 states'],
};

const faqs = [
  {
    q: 'Can I get a mortgage with bad credit?',
    a: 'Yes. FHA loans allow for credit scores as low as 580 (with 3.5% down) or even 500 (with 10% down). VA and USDA loans also have flexible guidelines. However, a higher score will get you a better interest rate and lower monthly payments. Rob will help you decide whether to apply now or work on your score first.',
  },
  {
    q: 'How long does it take to improve my credit score?',
    a: 'It varies. Some "quick fixes" like paying down high credit card balances can reflect on your score in 30–45 days. More complex issues like removing errors or building a new credit history can take 6–12 months. We\'ll create a personalized timeline for you.',
  },
  {
    q: 'Do you charge for credit consultation?',
    a: 'No. This is a complimentary service we provide to help prepare our clients for homeownership. We believe that everyone deserves a path to owning a home, and we\'re willing to put in the work to help you get there.',
  },
];

export default function CreditConsultationPage() {
  return (
    <>
      <LoanPageHero
        title="Credit Consultation: Your Path to a Better Rate"
        subtitle="Your credit score shouldn\'t be a mystery or a barrier. Rob Miller provides the expert analysis and actionable steps you need to optimize your credit and unlock the best mortgage terms available in 2026."
        imageSrc="/img-handshake.jpg"
        imageAlt="Rob Miller reviewing a credit report with a client in Madison, WI"
        badge="Expert Guidance"
        ctaText="Request a Consultation"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Knowledge is Power</div>
              <h2>Don\'t Fear Your Credit Score</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Many potential homebuyers wait years to apply because they *think* their credit isn\'t good enough. 
                The truth is, modern mortgage programs are more flexible than ever, and many "credit problems" 
                can be solved faster than you think.
              </p>
              <p>
                At MadCity Home Loans, we don\'t just pull your credit and say "yes" or "no." We analyze your 
                report, identify the specific factors holding your score back, and give you a step-by-step 
                plan to improve it.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>What We Offer</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🔍', title: 'Deep Report Analysis', desc: 'We look past the number to see exactly what is impacting your score — whether it\'s utilization, age of credit, or isolated errors.' },
                  { icon: '🛠️', title: 'Actionable Game Plan', desc: 'We\'ll tell you exactly which balances to pay down and which accounts to keep open to maximize your score in the shortest time.' },
                  { icon: '📈', title: 'Rapid Rescoring', desc: 'When you make a significant improvement, we can often request a "rapid rescore" to update your mortgage-qualifying score in days, not months.' },
                  { icon: '📉', title: 'Rate Optimization', desc: 'Sometimes a 10-point increase can save you $100/month. We\'ll show you the "break-even" on waiting to improve vs. buying now.' },
                  { icon: '🛡️', title: 'Error Identification', desc: 'Credit reports are often wrong. We\'ll help you spot errors and provide the resources to dispute them effectively.' },
                  { icon: '💡', title: 'Long-Term Habits', desc: 'We teach you the "credit game" so you can maintain a strong score for life, not just for your mortgage application.' },
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
                  <strong>Unsure if your credit is ready?</strong> Don\'t guess. Let a professional review your 
                  profile and give you a clear roadmap to homeownership.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule My Credit Review</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Consultation Facts</h4>
                <div className={styles.qfRow}><span>Cost</span><strong>$0 (Free)</strong></div>
                <div className={styles.qfRow}><span>Time to Results</span><strong>30–90 Days</strong></div>
                <div className={styles.qfRow}><span>Min. Score (FHA)</span><strong>500</strong></div>
                <div className={styles.qfRow}><span>Min. Score (Conv)</span><strong>620</strong></div>
                <div className={styles.qfRow}><span>Personalized Plan</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Credit Consultation FAQs" />

      <CTABanner
        heading="Unlock Better Mortgage Options Today"
        subtext="A better credit score means a better life. Let\'s work together to get you there."
        primaryLabel="Start My Consultation"
      />
    </>
  );
}
