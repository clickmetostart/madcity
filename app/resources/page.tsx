import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '../../components/CTABanner';
import styles from '../fha-loans/page.module.css'; // Reusing layout styles

export const metadata: Metadata = {
  title: 'Mortgage Resources & Home Buyer Tools | MadCity Home Loans',
  description:
    'Explore our comprehensive library of mortgage resources, home buyer guides, and financial tools for Wisconsin homeowners. Learn about the loan process, calculate payments, and plan your future. Call 608-227-2002.',
  keywords: ['mortgage resources Madison WI', 'home buyer guides Wisconsin', 'mortgage tools Madison', 'Rob Miller resources'],
};

const resourceGroups = [
  {
    title: 'Buying Tools',
    links: [
      { href: '/mortgage-calculator', label: 'Mortgage Payment Calculator', desc: 'Estimate your monthly principal, interest, taxes, and insurance.' },
      { href: '/first-time-home-buyers', label: 'First-Time Buyer Guide', desc: 'Everything you need to know about buying your very first home.' },
      { href: '/purchase-a-new-home', label: 'Purchase Process', desc: 'A step-by-step walkthrough of the buying journey in Madison.' },
    ],
  },
  {
    title: 'Loan Programs',
    links: [
      { href: '/fha-loans', label: 'FHA Loans', desc: 'Low down payment solutions for all credit types.' },
      { href: '/va-loans', label: 'VA Loans', desc: 'Zero down financing for our nation\'s veterans.' },
      { href: '/wheda-loans', label: 'WHEDA Assistance', desc: 'Wisconsin-specific down payment assistance programs.' },
      { href: '/conventional-loans', label: 'Conventional Loans', desc: 'The gold standard for buyers with strong credit.' },
    ],
  },
  {
    title: 'Expert Guidance',
    links: [
      { href: '/mortgage-planning', label: 'Mortgage Planning', desc: 'Integrate your home loan into your long-term wealth strategy.' },
      { href: '/credit-consultation', label: 'Credit Consultation', desc: 'Learn how to optimize your score for the best possible rate.' },
      { href: '/mortgage-process', label: '12-Step Process Guide', desc: 'See the roadmap from application to closing day.' },
    ],
  },
  {
    title: 'Homeowner Support',
    links: [
      { href: '/refinance-your-home', label: 'Refinance Options', desc: 'Lower your rate, shorten your term, or remove PMI.' },
      { href: '/annual-mortgage-review', label: 'Annual Review', desc: 'Our free annual checkup to ensure your loan is still optimized.' },
      { href: '/home-equity', label: 'Home Equity Solutions', desc: 'Tap into your home\'s value for renovations or debt payoff.' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Knowledge Hub</span>
            <h1>Mortgage Resources & Tools</h1>
            <div className="gold-line" />
            <p className="lead">
              Everything you need to navigate the 2026 Wisconsin real estate market with confidence. 
              Knowledge is power — empower your homeownership journey today.
            </p>
          </div>

          <div className={styles.benefitsGrid} style={{ marginTop: '4rem' }}>
            {resourceGroups.map((group) => (
              <div key={group.title} className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{group.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className={styles.resourceLink} style={{ textDecoration: 'none' }}>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', color: 'var(--gold-dark)' }}>{link.label}</h4>
                      <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)' }}>{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        subtext="No resource can replace a 10-minute conversation with an expert. Rob Miller is ready to help."
        primaryLabel="Talk to Rob Today"
      />
    </>
  );
}
