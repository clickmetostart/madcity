import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Tax Benefits of Home Ownership | Rob Miller Madison',
  description: 'Explore the financial advantages of owning a home in Wisconsin. From mortgage interest deductions to property tax benefits, learn how homeownership wins. Licensed in 11 states.',
  keywords: ['tax benefits of owning a home', 'mortgage interest deduction 2026', 'property tax deduction Wisconsin', 'tax advantages of home ownership'],
};

export default function TaxBenefitsPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Financial Strategy</span>
            <h1>Tax Benefits of Home Ownership</h1>
            <div className="gold-line" />
            <p className="lead">
              Owning a home is one of the most powerful tax shelters available to the average American. 
              We help you understand how your mortgage impacts your overall tax liability.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>The Big Three Deductions</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              While we always recommend consulting with a CPA, here are the primary tax advantages 
              most Wisconsin homeowners enjoy in 2026:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-light)', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Mortgage Interest</h4>
                <p style={{ fontSize: '0.85rem' }}>You can typically deduct the interest paid on up to $750,000 of mortgage debt if you itemize.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Property Taxes</h4>
                <p style={{ fontSize: '0.85rem' }}>The SALT deduction allows you to deduct up to $10,000 in combined state and local taxes, including property taxes.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Closing Costs</h4>
                <p style={{ fontSize: '0.85rem' }}>Loan "points" paid during your purchase are often fully deductible in the year you buy the home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Long-Term Capital Gains Benefits</h2>
          <div className="gold-line gold-line-left" />
          <p>
            One of the greatest tax benefits comes when you *sell* your home. Under current IRS rules, 
            most homeowners can exclude up to <strong>$250,000 (single)</strong> or <strong>$500,000 (married)</strong> 
             of profit from capital gains taxes, provided the home was your primary residence for 
            two of the last five years.
          </p>
          <p>
            This allows you to build significant wealth through home appreciation and keep almost all 
            of it tax-free when you move — a benefit that doesn't exist with stocks or other investments.
          </p>
          
          <div className="card-bordered" style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '12px', background: 'var(--bg-light)' }}>
            <h3>Integrate Your Mortgage with Your Tax Strategy</h3>
            <p>
              Rob Miller doesn't just look at your loan; we look at your whole financial picture. 
              We work alongside your tax professional to ensure your mortgage is structured to 
              provide the maximum possible tax benefit for your unique situation.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Schedule a Strategic Consultation</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Make Your Home Work for Your Taxes?"
        subtext="Let's find the home loan strategy that maximizes your bottom line. Contact Rob Miller today."
        primaryLabel="Talk to Rob About Tax Strategies"
      />
    </>
  );
}
