import type { Metadata } from 'next';
import Link from 'next/link';
import LoanPageHero from '../../components/LoanPageHero';
import RobCard from '../../components/RobCard';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css';

export const metadata: Metadata = {
  title: 'Non-Conventional Loans in Wisconsin | Bank Statement & DSCR | MadCity Home Loans',
  description:
    'Non-conventional mortgage programs for self-employed borrowers, real estate investors, and buyers who don\'t fit standard guidelines. Rob Miller offers bank statement, DSCR, and asset-depletion loans in Wisconsin. Call 608-227-2002.',
  keywords: ['non-conventional loans Wisconsin', 'bank statement loan Madison WI', 'DSCR loan Wisconsin', 'self-employed mortgage Madison', 'non-QM loan Wisconsin'],
};

const faqs = [
  {
    q: 'What makes a loan "non-conventional"?',
    a: 'Non-conventional loans (also called non-QM or non-conforming loans) are mortgages that don\'t meet the Qualified Mortgage (QM) guidelines set by the Consumer Financial Protection Bureau (CFPB), or the conforming guidelines set by Fannie Mae and Freddie Mac. They use alternative methods to assess a borrower\'s ability to repay — such as bank statements instead of tax returns, or rental income instead of personal income.',
  },
  {
    q: 'Who benefits most from non-conventional loans?',
    a: 'Non-conventional loans are designed for borrowers who have strong financial profiles but don\'t fit the standard W-2/tax-return box. This includes: self-employed business owners whose tax returns show lower income due to write-offs, real estate investors qualifying on property cash flow, retirees with large assets but limited monthly income, and foreign nationals purchasing in the U.S.',
  },
  {
    q: 'What is a bank statement loan?',
    a: 'A bank statement loan lets self-employed borrowers qualify using 12 or 24 months of personal or business bank deposits instead of tax returns. The lender averages the deposits over the statement period to calculate qualifying income — giving a more accurate picture of actual cash flow than a tax return that reflects deductions.',
  },
  {
    q: 'What is a DSCR loan?',
    a: 'A Debt-Service Coverage Ratio (DSCR) loan qualifies real estate investors based solely on the rental income of the property being purchased — not the buyer\'s personal income. If the property\'s projected rent covers the mortgage payment (DSCR ≥ 1.0–1.25), the loan can be approved without any personal income documentation.',
  },
  {
    q: 'Are non-conventional loan rates higher?',
    a: 'Non-conventional loans typically carry rates 0.5%–2.0% higher than conventional loans, depending on the program, LTV, and credit profile. However, for borrowers who can\'t qualify conventionally, they represent the most competitive option available. As your financial profile strengthens, Rob can help you refinance into conventional financing later.',
  },
  {
    q: 'Can I get a non-conventional loan with a recent foreclosure or bankruptcy?',
    a: 'Yes — some non-QM programs have significantly shorter seasoning requirements than conventional loans. Certain programs allow mortgage financing as soon as 1 day out of bankruptcy or foreclosure, though credit score and LTV requirements are stricter. Rob Miller can review your specific situation and identify what\'s available to you.',
  },
];

export default function NonConventionalLoansPage() {
  return (
    <>
      <LoanPageHero
        title="Non-Conventional Loans in Wisconsin"
        subtitle="Great borrowers come in many shapes — and not all of them fit a W-2. If you're self-employed, a real estate investor, a retiree, or have a complex financial profile, Rob Miller has access to non-conventional loan programs built for exactly your situation."
        imageSrc="/img-handshake.jpg"
        imageAlt="Self-employed borrower consulting with Rob Miller about non-conventional mortgage options in Madison, WI"
        badge="Non-Conventional Programs"
        ctaText="Explore My Loan Options"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <div className="badge">Non-QM Explained</div>
              <h2>What Are Non-Conventional Loans?</h2>
              <div className="gold-line gold-line-left" />
              <p>
                Non-conventional mortgages — also called non-QM (non-Qualified Mortgage) loans — are home financing products
                designed for borrowers whose income, assets, or credit history fall outside the parameters of standard Fannie
                Mae, Freddie Mac, FHA, VA, or USDA guidelines.
              </p>
              <p>
                These programs exist because millions of financially capable Americans don't fit the standard mold: the
                self-employed business owner whose tax returns understate actual income, the real estate investor who wants
                financing based on property cash flow, the retiree living off a large investment portfolio, or the foreign
                national buying a U.S. vacation property. Non-conventional loans give these borrowers a path to financing that
                actually reflects their real financial strength.
              </p>
              <p>
                At MadCity Home Loans, Rob Miller has access to multiple non-QM investors and programs, allowing him to structure
                creative solutions for Wisconsin borrowers who've been turned away elsewhere.
              </p>

              <h2 style={{ marginTop: '2.5rem' }}>Non-Conventional Loan Programs</h2>
              <div className="gold-line gold-line-left" />
              <div className={styles.benefitsGrid}>
                {[
                  { icon: '🏦', title: 'Bank Statement Loans', desc: '12–24 months of bank deposits used as income. Ideal for self-employed borrowers whose tax returns don\'t reflect actual cash flow.' },
                  { icon: '🏘️', title: 'DSCR Loans', desc: 'Qualify on the rental property\'s cash flow — not your personal income. No tax returns needed for real estate investors.' },
                  { icon: '💼', title: 'Asset Depletion', desc: 'Liquid assets (savings, retirement, investments) are converted into qualifying "income." Ideal for retirees or high-net-worth buyers.' },
                  { icon: '🌍', title: 'Foreign National Loans', desc: 'U.S. property financing for non-U.S. citizens using foreign income and asset documentation.' },
                  { icon: '⏱️', title: 'Recent Credit Event', desc: 'Programs available for borrowers as soon as 1 day out of bankruptcy, foreclosure, or short sale — with appropriate LTV requirements.' },
                  { icon: '📋', title: 'P&L Statement Loans', desc: 'A 12–24 month CPA-prepared Profit & Loss statement used in place of tax returns for self-employed qualification.' },
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

              <h2 style={{ marginTop: '2.5rem' }}>Who Non-Conventional Loans Are Built For</h2>
              <div className="gold-line gold-line-left" />
              <ul className="checklist">
                <li>Self-employed borrowers with 2+ years in business whose tax write-offs reduce reportable income</li>
                <li>Real estate investors building a rental portfolio who prefer income-based (DSCR) qualification</li>
                <li>Retirees with substantial assets but limited monthly W-2 or 1099 income</li>
                <li>Borrowers with a recent bankruptcy, foreclosure, or short sale who don't want to wait 4–7 years</li>
                <li>Foreign nationals purchasing primary residences, vacation homes, or investment properties</li>
                <li>Borrowers with complex income sources: K-1s, seasonal employment, multiple businesses</li>
              </ul>

              <h2 style={{ marginTop: '2.5rem' }}>General Requirements</h2>
              <div className="gold-line gold-line-left" />
              <p>Non-conventional loan parameters vary by program, but general guidelines include:</p>
              <ul className="checklist">
                <li>Credit scores typically 620–680 minimum depending on program and LTV</li>
                <li>Down payments of 10%–30% depending on loan type and risk profile</li>
                <li>Cash reserves of 3–12 months PITI (principal, interest, taxes, insurance)</li>
                <li>Alternative income documentation (bank statements, P&L, asset statements, lease agreements)</li>
                <li>Higher rates than conventional — typically 0.5%–2.0% above conforming rates</li>
              </ul>

              <div className={styles.compareCTA}>
                <p>
                  <strong>Not sure if you qualify conventionally?</strong> Rob Miller will evaluate your full financial picture
                  and identify every program available to you — conventional and non-conventional — so you get the best possible terms.
                </p>
                <Link href="/contact" className="btn btn-outline">Schedule a Free Consultation</Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickFacts}>
                <h4 className={styles.qfTitle}>Non-QM Quick Facts</h4>
                <div className={styles.qfRow}><span>Income Docs</span><strong>Alternative OK</strong></div>
                <div className={styles.qfRow}><span>Min. Credit Score</span><strong>620+</strong></div>
                <div className={styles.qfRow}><span>Min. Down Payment</span><strong>10%–30%</strong></div>
                <div className={styles.qfRow}><span>DSCR Available</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Bank Stmt Loans</span><strong>Yes</strong></div>
                <div className={styles.qfRow}><span>Foreign National</span><strong>Yes</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Non-Conventional Loan FAQs — Wisconsin Borrowers" />

      <CTABanner
        heading="Been Told You Don't Qualify? Let's Talk."
        subtext="Rob Miller has helped Wisconsin borrowers secure financing that other lenders said was impossible. A free 15-minute call may reveal options you haven't considered."
        primaryLabel="Explore My Options"
      />
    </>
  );
}
