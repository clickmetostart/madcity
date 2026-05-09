import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Discount Points: Should You Buy Down Your Rate? | Rob Miller',
  description: 'Understand mortgage discount points and whether paying upfront to lower your interest rate is the right move for your Wisconsin home loan. Expert analysis from Rob Miller. Licensed in 11 states.',
  keywords: ['mortgage discount points explained', 'buy down interest rate Wisconsin', 'mortgage points break even analysis', 'is it worth paying points for mortgage'],
};

export default function DiscountPointsPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Rate Strategy</span>
            <h1>Should I Pay Discount Points?</h1>
            <div className="gold-line" />
            <p className="lead">
              Discount points allow you to pay more at closing in exchange for a lower lifetime interest rate. 
              We help you calculate the "break-even point" to see if it's a smart investment for your loan.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>How Points Work</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              One "point" typically costs 1% of your loan amount and lowers your interest rate by 
              approximately 0.25%. Here is the math on a $400,000 loan:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>The Cost</h4>
                <p style={{ fontSize: '0.9rem' }}>Paying 1 point costs $4,000 upfront at closing.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>The Savings</h4>
                <p style={{ fontSize: '0.9rem' }}>A 0.25% lower rate might save you $65/month. You would "break even" in roughly 61 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>When Paying Points Makes Sense</h2>
          <div className="gold-line gold-line-left" />
          <p>
            Paying points is essentially "pre-paying" interest. It's a smart move if you plan to keep 
            the home or the loan long enough for the monthly savings to outweigh the upfront cost.
          </p>
          <ul className="checklist" style={{ marginTop: '1.5rem' }}>
            <li><strong>Long-Term Residency:</strong> If this is your "forever home" and you plan to keep the mortgage for 7+ years, points almost always win.</li>
            <li><strong>Seller Credits:</strong> If you negotiated a seller credit for closing costs, using that money to buy down your rate is often the best use of those funds.</li>
            <li><strong>High-Rate Environments:</strong> In a market with higher rates, a small buy-down can make the difference in qualifying for the home you want.</li>
            <li><strong>Fixed-Income Planning:</strong> If you want the absolute lowest possible monthly payment to protect your cash flow, points can help achieve that.</li>
          </ul>
          
          <div className="card-bordered" style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '12px', background: 'var(--bg-light)' }}>
            <h3>Get a Custom Point vs. Rate Analysis</h3>
            <p>
              Rob Miller will run a side-by-side comparison of multiple rate and point options for your 
              specific loan. We'll show you exactly how many months it takes to break even so you can 
              make a data-driven decision.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Request My Rate Analysis</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Maximize Your Long-Term Savings"
        subtext="Don't just take the standard rate. Let's find the optimal balance between upfront cost and monthly savings."
        primaryLabel="Talk to Rob About Rate Buy-Downs"
      />
    </>
  );
}
