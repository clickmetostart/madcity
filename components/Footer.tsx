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
  { href: '/purchase-a-new-home', label: 'Purchase a Home' },
  { href: '/refinance-your-home', label: 'Refinance' },
  { href: '/mortgage-planning', label: 'Mortgage Planning' },
  { href: '/credit-consultation', label: 'Credit Consultation' },
  { href: '/home-equity', label: 'Home Equity' },
];

const resourceLinks = [
  { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  { href: '/mortgage-process', label: 'Mortgage Process' },
  { href: '/resources', label: 'Knowledge Hub' },
  { href: '/reviews', label: 'Client Reviews' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        {/* Brand col */}
        <div className={styles.brandCol}>
          <Link href="/">
            <Image 
              src="/logo-transparent-hd.png" 
              alt="MadCity Home Loans" 
              width={160} 
              height={160} 
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
            Wisconsin · Illinois · Iowa · Minnesota · Michigan · Florida · Texas · Colorado · North Dakota · South Dakota · Washington
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
