import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const loanLinks = [
  { href: '/fha-loans', label: 'FHA Loans' },
  { href: '/va-loans', label: 'VA Loans' },
  { href: '/conventional-loans', label: 'Conventional Loans' },
  { href: '/jumbo-loans', label: 'Jumbo Loans' },
  { href: '/usda-loans', label: 'USDA Loans' },
  { href: '/wheda-loans', label: 'WHEDA Loans' },
  { href: '/non-conventional-loans', label: 'Non-Conventional' },
];

const serviceLinks = [
  { href: '/first-time-home-buyers', label: 'First-Time Buyers' },
  { href: '/purchase-a-new-home', label: 'Purchase a New Home' },
  { href: '/refinance-your-home', label: 'Refinance Your Home' },
  { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  { href: '/mortgage-planning', label: 'Mortgage Planning' },
  { href: '/annual-mortgage-review', label: 'Annual Review' },
  { href: '/credit-consultation', label: 'Credit Consultation' },
  { href: '/home-equity', label: 'Home Equity' },
];

const resourceLinks = [
  { href: '/mortgage-process', label: 'The 12-Step Process' },
  { href: '/knowledge-hub', label: 'Knowledge Hub' },
  { href: '/reviews', label: 'Client Reviews' },
  { href: '/strategic-partners', label: 'Strategic Partners' },
  { href: '/contact', label: 'Contact Us' },
];

const stateLinks = [
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
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        {/* Brand col */}
        <div className={styles.brandCol}>
          <Link href="/">
            <Image 
              src="/logo-footer.png" 
              alt="MadCity Home Loans" 
              width={180} 
              height={180} 
              className={styles.footerLogo} 
            />
          </Link>
          <p className={styles.brandTagline}>
            Expert mortgage guidance from a local Madison, WI lender you can trust.
            Rob Miller &amp; team are here to guide you from first call to closing day.
          </p>
          <div className={styles.contactBlock}>
            <a href="tel:6082272002" className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>608-227-2002</span>
            </a>
            <a href="mailto:rob@provisor.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <span>rob@provisor.com</span>
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>8446 Excelsior Dr Ste 2-RM<br />Madison, WI 53717</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <Link href="https://maps.app.goo.gl/bmjq8VgRowjQwnaQ8" target="_blank" title="Google Directions" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </Link>
            <Link href="https://share.google/tYYTzjB7YoyaRc3nY" target="_blank" title="Google Reviews" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </Link>
            <Link href="https://www.facebook.com/madcityhomeloans" target="_blank" title="Facebook" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4.63h3v12h4.5v-12h3.85l.42-4.63z"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/madcityhomeloans/" target="_blank" title="LinkedIn" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </Link>
          </div>
          <Link
            href="https://provisor.shapeportal.com/ref/34"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-sm ${styles.footerCta}`}
          >
            Start Your Application →
          </Link>
        </div>

        {/* Loan Programs */}
        <div className={styles.linkCol}>
          <h4 className={styles.colHead}>Loan Programs</h4>
          {loanLinks.map(l => (
            <Link key={l.href} href={l.href} className={styles.footerLink}>{l.label}</Link>
          ))}
        </div>

        {/* Services */}
        <div className={styles.linkCol}>
          <h4 className={styles.colHead}>Services</h4>
          {serviceLinks.map(l => (
            <Link key={l.href} href={l.href} className={styles.footerLink}>{l.label}</Link>
          ))}
        </div>

        {/* Resources */}
        <div className={styles.linkCol}>
          <h4 className={styles.colHead}>Resources</h4>
          {resourceLinks.map(l => (
            <Link key={l.href} href={l.href} className={styles.footerLink}>{l.label}</Link>
          ))}
        </div>
      </div>

      {/* States served */}
      <div className={styles.statesBar}>
        <div className="container">
          <p className={styles.statesText}>
            <strong>Licensed &amp; Serving:</strong>{' '}
            {stateLinks.map((state, idx) => (
              <span key={state.slug}>
                <Link href={`/locations/${state.slug}`} className={styles.stateLink}>{state.name}</Link>
                {idx < stateLinks.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} MadCity Home Loans / ProVisor, Inc. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Robert Miller NMLS #239865 &nbsp;|&nbsp; ProVisor, Inc. NMLS #1802853 &nbsp;|&nbsp;
            Equal Housing Lender &nbsp;|&nbsp; Not affiliated with HUD, FHA or the Federal Government.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/contact">Contact</Link>
            <Link href="/mortgage-process">Process</Link>
            <Link href="/reviews">Reviews</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
