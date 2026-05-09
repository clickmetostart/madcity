import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Extra Payment Calculator | Save on Interest | MadCity Home Loans',
  description: 'See how making extra principal payments can shorten your loan term and save you thousands in interest. Expert mortgage payoff strategies from Rob Miller. Licensed in 11 states.',
  keywords: ['mortgage extra payment calculator', 'early mortgage payoff Wisconsin', 'save on mortgage interest', 'principal only payments WI'],
};

export default function ExtraPaymentCalculatorPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Payoff Strategies</span>
            <h1>Extra Payment Calculator</h1>
            <div className="gold-line" />
            <p className="lead">
              Small additions to your monthly principal payment can shave years off your mortgage 
              and save you tens of thousands of dollars in interest over the life of your loan.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Calculator Coming Soon</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We are currently integrating our advanced 2026 principal-reduction tool. 
              In the meantime, here is a quick rule of thumb for early payoff:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>The One-Extra-Payment Strategy</h4>
                <p style={{ fontSize: '0.9rem' }}>Making just one extra mortgage payment per year can reduce a 30-year loan by approximately 4–5 years.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Bi-Weekly Payments</h4>
                <p style={{ fontSize: '0.9rem' }}>By paying half your mortgage every two weeks, you end up making 13 full payments a year without feeling the extra burden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Why Make Extra Payments?</h2>
          <div className="gold-line gold-line-left" />
          <p>
            When you make an "extra" payment, you should specify that it is for **Principal Only**. 
            This reduces the base balance that your interest is calculated from. Over time, this 
            creates a snowball effect where more of your regular monthly payment goes toward 
            principal rather than interest.
          </p>
          <p>
            <strong>Is it always the best move?</strong> Not necessarily. Depending on your current 
            interest rate and other high-interest debts (like credit cards), it might be smarter 
            to invest that extra cash or pay off higher-interest balances first.
          </p>
          <div className="card-bordered" style={{ marginTop: '2.5rem', padding: '2rem', borderRadius: '12px' }}>
            <h3>Get a Custom Payoff Strategy</h3>
            <p>
              Rob Miller can run a "What-If" analysis on your specific loan to show you exactly 
              how much time and money you can save. We'll help you decide if paying down your 
              mortgage early is the right move for your overall wealth strategy.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Request Payoff Analysis</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Own Your Home Free and Clear?"
        subtext="Let's build a strategy that gets you to the finish line faster. Contact Rob Miller today."
        primaryLabel="Talk to Rob About Payoff Strategies"
      />
    </>
  );
}
