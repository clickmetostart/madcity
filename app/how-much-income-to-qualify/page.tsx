import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How Much Income Do I Need for a Mortgage? | Rob Miller Madison',
  description: 'Learn how lenders calculate qualifying income for home loans. Expert guidance on self-employment income, bonuses, and fixed incomes from Rob Miller. Licensed in 11 states.',
  keywords: ['mortgage income requirements Wisconsin', 'qualify for home loan Madison', 'self employed mortgage income WI', 'how much income for 400k mortgage'],
};

export default function IncomeQualifyPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Qualification Prep</span>
            <h1>How Much Income Do I Need To Qualify?</h1>
            <div className="gold-line" />
            <p className="lead">
              Calculating qualifying income isn't always as simple as looking at your salary. 
              We help you understand how lenders view your earnings to ensure a smooth approval process.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '800px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>The Income Calculation</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Lenders use <strong>Gross Monthly Income</strong> (before taxes) to calculate your ratios. 
              However, different types of income are treated differently:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>W-2 Employees</h4>
                <p style={{ fontSize: '0.9rem' }}>We use your current base salary or hourly rate. Overtime and bonuses usually require a 2-year history to be counted.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Self-Employed</h4>
                <p style={{ fontSize: '0.9rem' }}>We typically use a 2-year average of your net taxable income (after business expenses). Specialized "Bank Statement" programs are available for unique cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Other Types of Qualifying Income</h2>
          <div className="gold-line gold-line-left" />
          <p>
            In 2026, many homeowners rely on diverse income streams. Rob Miller is an expert at 
            documenting "non-traditional" income to maximize your qualification:
          </p>
          <ul className="checklist" style={{ marginTop: '1.5rem' }}>
            <li><strong>Social Security & Pensions:</strong> We can often "gross up" non-taxable income by 25% to increase your qualifying power.</li>
            <li><strong>Rental Income:</strong> If you're buying a multi-unit or have existing rentals, we can use 75% of the projected rent to help you qualify.</li>
            <li><strong>Alimony & Child Support:</strong> If you've received these consistently for 6–12 months and they are expected to continue for 3+ years, they can be counted.</li>
            <li><strong>Investment Income:</strong> Dividends, interest, and capital gains can be counted if they show a stable 2-year history.</li>
          </ul>
          
          <div className="card-bordered" style={{ marginTop: '3rem', padding: '2.5rem', borderRadius: '12px', background: 'var(--bg-light)' }}>
            <h3>Get Your Personal Income Analysis</h3>
            <p>
              Income qualification is complex, especially for business owners or those with multiple income sources. 
              Rob Miller will provide a comprehensive review of your tax returns and paystubs to give you an 
              absolute qualifying number you can take to the bank.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Review My Income with Rob</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Uncertain About Your Qualifying Income?"
        subtext="Let a professional run the numbers. Rob Miller specializes in complex income scenarios and self-employed borrowers."
        primaryLabel="Schedule My Income Review"
      />
    </>
  );
}
