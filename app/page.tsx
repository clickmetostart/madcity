import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReviewsSection from '../components/ReviewsSection';
import CTABanner from '../components/CTABanner';
import InteractiveMap from '../components/InteractiveMap';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Madison, WI Mortgage Lender | Home Loans 2026 | MadCity Home Loans',
  description:
    'MadCity Home Loans — Rob Miller, Senior Loan Officer in Madison, WI. Expert FHA, VA, conventional, jumbo, USDA & WHEDA loans in 2026. Fast closings, local expertise. Call 608-227-2002.',
};

const loanPrograms = [
  { href: '/fha-loans', icon: '🏠', title: 'FHA Loans', desc: 'As low as 3.5% down. Perfect for first-time buyers or those rebuilding credit in 2026. Government-backed with flexible qualification standards.' },
  { href: '/va-loans', icon: '🎖️', title: 'VA Loans', desc: 'Zero down payment for eligible veterans, active duty, and surviving spouses. No PMI, competitive rates, and a lender who honors your service.' },
  { href: '/conventional-loans', icon: '🏡', title: 'Conventional Loans', desc: 'Fannie Mae and Freddie Mac-backed loans with as little as 3% down. Flexible terms and automatic PMI cancellation at 80% LTV.' },
  { href: '/jumbo-loans', icon: '🏛️', title: 'Jumbo Loans', desc: 'Financing above the $832,750 conforming limit for high-value Wisconsin properties. Up to $3M+ with competitive fixed and ARM options.' },
  { href: '/usda-loans', icon: '🌾', title: 'USDA Loans', desc: 'Zero down payment for eligible rural and suburban Wisconsin homes. Income limits apply — check your 2026 eligibility today.' },
  { href: '/wheda-loans', icon: '🌟', title: 'WHEDA Loans', desc: 'Wisconsin\'s exclusive program offers below-market interest rates and down payment assistance for state residents.' },
  { href: '/non-conventional-loans', icon: '💡', title: 'Non-Conventional', desc: 'Bank statement loans, DSCR investor loans, and asset-depletion products for borrowers who don\'t fit the traditional mold.' },
  { href: '/resources', icon: '🛠️', title: 'Mortgage Services', desc: 'From purchase planning to equity management. Explore our full suite of professional mortgage services designed for your success.' },
];

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '1,000+', label: 'Families Helped' },
  { number: '11', label: 'States Licensed' },
  { number: '5.0 ⭐', label: 'Google Rating' },
];

const steps = [
  { num: '01', title: 'Strategy Session', desc: 'A no-pressure call to discuss your 2026 goals, explore loan programs, and define your buying power.' },
  { num: '02', title: 'Verified Pre-Approval', desc: 'We perform a comprehensive review of your financial picture to give you a pre-approval as strong as cash.' },
  { num: '03', title: 'The Finish Line', desc: 'From contract to closing — Rob\'s team manages every detail for a stress-free, on-time keys-in-hand day.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero-home.jpg"
            alt="Premium home in Madison, Wisconsin"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>Leading Madison, WI Mortgage Expert</div>
          <h1 className={styles.heroTitle}>
            Secure Your Future<br />
            <span className={styles.heroAccent}>In Your Dream Home</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Expert mortgage guidance for the 2026 Madison real estate market. 
            Experience the MadCity difference: absolute transparency, lightning-fast closings, and local expertise that wins.
          </p>
          <div className={styles.heroActions}>
            <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-lg" id="hero-apply-btn">
              Apply With Rob Miller
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────── */}
      <div className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Loan Programs ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">2026 Loan Programs</div>
            <h2>Mortgage Solutions Built for You</h2>
            <div className="gold-line" />
            <p className="lead">
              From first-time buyer assistance to high-balance jumbo financing, 
              we offer the most comprehensive loan portfolio in Wisconsin.
            </p>
          </div>
          <div className={styles.loanGrid}>
            {loanPrograms.map(loan => (
              <Link key={loan.href} href={loan.href} className={styles.loanCard}>
                <span className={styles.loanIcon}>{loan.icon}</span>
                <h3 className={styles.loanTitle}>{loan.title}</h3>
                <p className={styles.loanDesc}>{loan.desc}</p>
                <span className={styles.loanArrow}>Explore Program →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Rob ──────────────────────────────────── */}
      <section className={`section ${styles.whyRob}`}>
        <div className="container grid-2">
          <div className={styles.whyContent}>
            <div className="badge">The MadCity Advantage</div>
            <h2>Why Wisconsin Homeowners Choose Rob Miller</h2>
            <div className="gold-line gold-line-left" />
            <p>
              Rob Miller has spent 15+ years simplifying the home loan process for families across the Midwest. 
              As Branch Manager at ProVisor, Inc., Rob provides the power of a national lender with the 
              care and accessibility of a local Madison neighbor.
            </p>
            <p>
              In today\'s competitive market, you don\'t just need a loan — you need a strategy. 
              Rob specializes in finding creative solutions for complex files and ensuring every 
              closing happens on time, every time.
            </p>
            <ul className="checklist">
              <li>Direct access to Rob\'s cell phone — no call centers</li>
              <li>Pre-approvals that Madison Realtors trust and respect</li>
              <li>Expertise in FHA, VA, WHEDA, and Specialty Non-QM loans</li>
              <li>Licensed in 11 states including FL, TX, CO, and WA</li>
              <li>Transparent, "No-Surprise" closing cost estimates</li>
            </ul>
            <div className={styles.whyActions}>
              <Link href="/about-rob" className="btn btn-primary">Learn About Rob</Link>
              <Link href="/reviews" className="btn btn-outline">See Client Stories</Link>
            </div>
          </div>
          <div className={styles.robPhotoWrap}>
            <Image
              src="/rob-miller.jpg"
              alt="Rob Miller, Senior Loan Officer at MadCity Home Loans in Madison, WI"
              width={480}
              height={580}
              className={styles.robPhoto}
            />
            <div className={styles.robBadge}>
              <strong>NMLS #239865</strong>
              <span>Senior Loan Officer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────── */}
      <section className="section section-slate">
        <div className="container">
          <div className="section-header">
            <div className="badge">Simple Process</div>
            <h2>Your Roadmap to Closing Day</h2>
            <div className="gold-line" />
            <p className="lead">We\'ve removed the friction from the mortgage process so you can focus on your new home.</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map(step => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.stepsCta}>
            <Link href="/mortgage-process" className="btn btn-outline">
              View the Full 12-Step Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────── */}
      <ReviewsSection heading="Real People. Real Results." dark />

      {/* ── Service Areas ────────────────────────────── */}
      <section className={`section ${styles.areas}`}>
        <div className="container">
          <div className="section-header">
            <div className="badge">Service Areas</div>
            <h2>Licensed Expertise Across the Country</h2>
            <div className="gold-line" />
            <p>Based in Madison, WI | Serving Homeowners in 11 States</p>
          </div>
          
          <InteractiveMap />

          <div className={styles.stateGrid}>
            {[
              { name: 'Wisconsin', slug: 'wisconsin' },
              { name: 'Illinois', slug: 'illinois' },
              { name: 'Iowa', slug: 'iowa' },
              { name: 'Minnesota', slug: 'minnesota' },
              { name: 'Michigan', slug: 'michigan' },
              { name: 'Florida', slug: 'florida' },
              { name: 'Texas', slug: 'texas' },
              { name: 'Colorado', slug: 'colorado' },
              { name: 'North Dakota', slug: 'north-dakota' },
              { name: 'South Dakota', slug: 'south-dakota' },
              { name: 'Washington', slug: 'washington' }
            ].map(state => (
              <Link key={state.slug} href={`/locations/${state.slug}`} className={styles.stateChip}>
                {state.name}
              </Link>
            ))}
          </div>
          <p className={styles.areasNote}>
            Our Madison office serves the entire Dane County area including Middleton, Sun Prairie, and Verona. 
            Remote digital closings available for all licensed states.
          </p>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <CTABanner
        heading="Experience a Smarter Path to Homeownership"
        subtext="Don\'t settle for a generic lender. Get the strategy, speed, and service you deserve in 2026."
        primaryLabel="Start Your Secure Application"
      />
    </>
  );
}
