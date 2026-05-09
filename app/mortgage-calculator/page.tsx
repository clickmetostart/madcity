import type { Metadata } from 'next';
import Link from 'next/link';
import MortgageCalculator from '../../components/MortgageCalculator';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';

export const metadata: Metadata = {
  title: 'Mortgage Calculator Madison, WI | Estimate Your Monthly Payment',
  description:
    'Use our free 2026 mortgage calculator to estimate your monthly payments, including taxes and insurance. Plan your home purchase in Madison, WI with confidence. Call Rob Miller at 608-227-2002.',
  keywords: ['mortgage calculator Madison WI', 'home loan calculator Wisconsin', 'monthly payment estimator Madison', 'Madison real estate calculator'],
};

const faqs = [
  {
    q: 'Does this calculator include PMI?',
    a: 'This specific tool estimates principal, interest, taxes, and insurance. Private Mortgage Insurance (PMI) is usually required if you put down less than 20% on a conventional loan. Since PMI costs vary based on your credit score and down payment amount, we recommend speaking with Rob for a precise total payment estimate.',
  },
  {
    q: 'What interest rate should I use?',
    a: 'Mortgage rates change daily and depend on your credit score, loan term, and down payment. The current default in the calculator is a general market average for 2026. For an accurate rate quote based on your specific profile, contact Rob Miller.',
  },
  {
    q: 'How accurate are the property tax estimates?',
    a: 'Property taxes in Wisconsin vary significantly by municipality. Madison, Sun Prairie, and Verona all have different tax rates. The default estimate is based on a typical average; for a specific property, we recommend checking the official county tax records.',
  },
];

export default function CalculatorPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Tools & Resources</span>
            <h1>Mortgage Payment Calculator</h1>
            <div className="gold-line" />
            <p className="lead">
              Calculate your estimated monthly payment and see how different down payments and interest rates impact your budget.
            </p>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 align-center">
            <div>
              <h2>Understanding Your Payment</h2>
              <div className="gold-line gold-line-left" />
              <p>
                A monthly mortgage payment is usually comprised of four main components, often referred to as **PITI**:
              </p>
              <ul className="checklist">
                <li><strong>Principal:</strong> The amount that goes toward paying down your original loan balance.</li>
                <li><strong>Interest:</strong> The cost of borrowing the money from the lender.</li>
                <li><strong>Taxes:</strong> Property taxes collected by your local municipality.</li>
                <li><strong>Insurance:</strong> Homeowners insurance to protect your property against damage.</li>
              </ul>
              <p>
                Depending on your loan type, you may also have <strong>PMI</strong> (Private Mortgage Insurance) 
                or <strong>HOA fees</strong> (Homeowners Association fees).
              </p>
            </div>
            <div className="card">
              <h3>Need a more precise number?</h3>
              <p>
                Calculators are great for general planning, but they can\'t see your whole financial picture. 
                Rob Miller can provide a **Verified Pre-Approval** that includes your exact interest rate and 
                a detailed breakdown of all closing costs.
              </p>
              <Link href="/contact" className="btn btn-primary">Speak With Rob</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Calculator FAQs" />

      <CTABanner
        heading="Found a Payment That Fits Your Budget?"
        subtext="The next step is to secure your pre-approval so you can start shopping with confidence."
        primaryLabel="Start My Pre-Approval"
      />
    </>
  );
}
