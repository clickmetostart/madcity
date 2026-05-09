import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How Much House Can I Afford? | Mortgage Affordability Madison',
  description: 'Calculate your home buying power based on income, debt, and down payment. Get an accurate picture of your mortgage affordability in Wisconsin with Rob Miller. Licensed in 11 states.',
  keywords: ['how much home can I afford Madison', 'mortgage affordability Wisconsin', 'home buying power calculator', 'DTI for mortgage WI'],
};

export default function HomeAffordabilityPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Buying Power</span>
            <h1>How Much House Can I Afford?</h1>
            <div className="gold-line" />
            <p className="lead">
              Understanding your affordability is the first step toward a successful home purchase. 
              We look beyond just the purchase price to help you find a monthly payment that fits your life.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>The Affordability Formula</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Lenders typically use the <strong>Debt-to-Income (DTI)</strong> ratio to determine your max loan amount. 
              While every loan program is different, here are the general benchmarks:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Front-End Ratio</h4>
                <p style={{ fontSize: '0.9rem' }}>Typically 28%–31% of your gross monthly income should go toward your housing payment (PITI).</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Back-End Ratio</h4>
                <p style={{ fontSize: '0.9rem' }}>Typically 43%–50% of your gross monthly income can go toward ALL debts (mortgage + cars + credit cards).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Factors That Impact Your Affordability</h2>
          <div className="gold-line gold-line-left" />
          <p>
            Your purchasing power isn't just a single number. It changes based on several variables that Rob Miller 
            can help you optimize:
          </p>
          <ul className="checklist" style={{ marginTop: '1.5rem' }}>
            <li><strong>Interest Rates:</strong> A 1% drop in rates can increase your buying power by roughly 10%.</li>
            <li><strong>Property Taxes:</strong> Madison property taxes are higher than some surrounding areas; this reduces how much you can borrow for the same monthly payment.</li>
            <li><strong>Down Payment:</strong> A larger down payment reduces your loan amount and can eliminate PMI, lowering your monthly obligation.</li>
            <li><strong>Debt Profile:</strong> Paying off a $400 car loan can often increase your home buying power by $50,000 or more.</li>
          </ul>
          
          <div className="card-bordered" style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '12px', background: 'var(--bg-light)' }}>
            <h3>Get a Custom Affordability Audit</h3>
            <p>
              Don't rely on generic online calculators. Rob Miller will perform a deep-dive audit of your income, 
              assets, and debts to give you a "To the Penny" affordability breakdown for any property you're considering.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Schedule My Audit</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Know Your Number Before You Shop"
        subtext="Empower yourself with a verified budget. Contact Rob Miller today for an expert affordability consultation."
        primaryLabel="Get My Affordability Breakdown"
      />
    </>
  );
}
