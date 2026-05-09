'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const loanTypes = [
  { href: '/fha-loans', label: 'FHA Loans', desc: 'Low down payment options.', img: '/logo-fha-new.jpg' },
  { href: '/va-loans', label: 'VA Loans', desc: 'Zero down for veterans.', img: '/logo-va.svg' },
  { href: '/conventional-loans', label: 'Conventional Loans', desc: 'Stable, long-term financing.', img: '/logo-conventional.png' },
  { href: '/jumbo-loans', label: 'Jumbo Loans', desc: 'Luxury & high-balance homes.', img: '/logo-jumbo.png' },
  { href: '/usda-loans', label: 'USDA Loans', desc: 'Zero down for rural properties.', img: '/logo-usda-new.png' },
  { href: '/wheda-loans', label: 'WHEDA Loans', desc: 'WI down payment assistance.', img: '/logo-wheda.png' },
];

const services = [
  { href: '/first-time-home-buyers', label: 'First-Time Buyers', icon: '🔑' },
  { href: '/purchase-a-new-home', label: 'Purchase a New Home', icon: '🏡' },
  { href: '/refinance-your-home', label: 'Refinance Your Home', icon: '💰' },
  { href: '/mortgage-calculator', label: 'Mortgage Calculator', icon: '🧮' },
  { href: '/mortgage-planning', label: 'Mortgage Planning', icon: '📊' },
  { href: '/annual-mortgage-review', label: 'Annual Review', icon: '📅' },
  { href: '/credit-consultation', label: 'Credit Consultation', icon: '📈' },
  { href: '/home-equity', label: 'Home Equity', icon: '🏘️' },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <a href="tel:6082272002" className={styles.topBarLink}>📞 608-227-2002</a>
            <a href="mailto:rob@provisor.com" className={styles.topBarLink}>✉ rob@provisor.com</a>
          </div>
          <span className={styles.topBarRight}>NMLS #239865 &nbsp;|&nbsp; Licensed in 11 States</span>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/logo-header.jpg" alt="MadCity Home Loans" width={180} height={54} priority className={styles.logo} />
          </Link>

          <nav className={styles.nav} onMouseLeave={() => setActiveMega(null)}>
            <Link href="/" className={styles.navLink}>Home</Link>

            <div className={styles.navItem} onMouseEnter={() => setActiveMega('about')}>
              <button className={styles.navBtn}>
                About <span className={styles.chevron}>▾</span>
              </button>
              <div className={`${styles.megaMenu} ${activeMega === 'about' ? styles.megaVisible : ''}`}>
                <div className="container">
                  <div className={styles.aboutMega}>
                    <div className={styles.aboutCard}>
                      <Image src="/rob-miller.jpg" alt="Rob Miller" width={100} height={120} className={styles.aboutImg} />
                      <div>
                        <strong>Meet Rob Miller</strong>
                        <p>15+ years of expertise in the Madison market.</p>
                        <Link href="/about-rob" onClick={() => setActiveMega(null)}>Full Bio →</Link>
                      </div>
                    </div>
                    <div className={styles.aboutLinks}>
                      <Link href="/about-mad-city-home-loans-team" onClick={() => setActiveMega(null)}>The MadCity Team</Link>
                      <Link href="/strategic-partners" onClick={() => setActiveMega(null)}>Strategic Partners</Link>
                      <Link href="/mortgage-process" onClick={() => setActiveMega(null)}>The 12-Step Process</Link>
                      <Link href="/reviews" onClick={() => setActiveMega(null)}>Client Reviews</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={styles.navItem} 
              onMouseEnter={() => setActiveMega('loans')}
            >
              <button className={styles.navBtn}>
                Loan Programs <span className={styles.chevron}>▾</span>
              </button>
              <div className={`${styles.megaMenu} ${activeMega === 'loans' ? styles.megaVisible : ''}`}>
                <div className="container">
                  <div className={styles.megaGrid}>
                    {loanTypes.map(loan => (
                      <Link key={loan.href} href={loan.href} className={styles.megaCard} onClick={() => setActiveMega(null)}>
                        <div className={styles.megaImgWrap}>
                          <Image src={loan.img} alt={loan.label} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.megaContent}>
                          <strong>{loan.label}</strong>
                          <span>{loan.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={styles.navItem} 
              onMouseEnter={() => setActiveMega('services')}
            >
              <button className={styles.navBtn}>
                Services <span className={styles.chevron}>▾</span>
              </button>
              <div className={`${styles.megaMenu} ${activeMega === 'services' ? styles.megaVisible : ''}`}>
                <div className="container">
                  <div className={styles.megaGridSimple}>
                    <div className={styles.megaSide}>
                      <h3>Mortgage Services</h3>
                      <p>From buying your first home to strategic equity management.</p>
                      <Link href="/resources" className="btn btn-outline btn-sm" onClick={() => setActiveMega(null)}>All Resources</Link>
                    </div>
                    <div className={styles.megaLinks}>
                      {services.map(s => (
                        <Link key={s.href} href={s.href} className={styles.megaLinkItem} onClick={() => setActiveMega(null)}>
                          <span className={styles.megaIcon}>{s.icon}</span>
                          <div className={styles.megaLinkText}>
                            <strong>{s.label}</strong>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/knowledge-hub" className={styles.navLink}>Knowledge Hub</Link>
            <div 
              className={styles.navItem} 
              onMouseEnter={() => setActiveMega('contact')}
            >
              <Link href="/contact" className={styles.navBtn} onClick={() => setActiveMega(null)}>
                Contact Us <span className={styles.chevron}>▾</span>
              </Link>
              <div className={`${styles.megaMenu} ${activeMega === 'contact' ? styles.megaVisible : ''}`}>
                <div className="container">
                  <div className={styles.locationsMega}>
                    <div className={styles.contactMegaSide}>
                      <div className={styles.aboutCard}>
                        <Image src="/rob-miller.jpg" alt="Rob Miller" width={80} height={100} className={styles.aboutImg} />
                        <div>
                          <strong>Ready to Start?</strong>
                          <p>Schedule a call or start your application with Rob Miller today.</p>
                          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" className="btn btn-primary btn-sm" onClick={() => setActiveMega(null)}>Start Application →</Link>
                        </div>
                      </div>
                      <div className={styles.contactQuickLinks}>
                        <Link href="/contact" onClick={() => setActiveMega(null)}>Standard Contact Form</Link>
                        <Link href="tel:6082272002" onClick={() => setActiveMega(null)}>Call 608-227-2002</Link>
                      </div>
                    </div>
                    <div className={styles.locationsGrid}>
                      <div className={styles.locationsHeader}>
                        <strong>Select Your State</strong>
                        <span>For localized SEO & contact info</span>
                      </div>
                      {stateLinks.map(state => (
                        <Link 
                          key={state.slug} 
                          href={`/locations/${state.slug}`} 
                          className={styles.locationItem}
                          onClick={() => setActiveMega(null)}
                        >
                          {state.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer"
            className={`btn btn-primary btn-sm ${styles.applyBtn}`} id="header-apply-btn">
            Apply Now
          </Link>

          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileContent}>
          <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕ Close</button>
          <div className={styles.mobileLinks}>
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

            <details className={styles.mobileDetails}>
              <summary className={styles.mobileSummary}>About <span className={styles.mobileChevron}>▾</span></summary>
              <div className={styles.mobileSubLinks}>
                <Link href="/about-rob" onClick={() => setMobileOpen(false)}>Meet Rob Miller</Link>
                <Link href="/about-mad-city-home-loans-team" onClick={() => setMobileOpen(false)}>The MadCity Team</Link>
                <Link href="/strategic-partners" onClick={() => setMobileOpen(false)}>Strategic Partners</Link>
                <Link href="/mortgage-process" onClick={() => setMobileOpen(false)}>The 12-Step Process</Link>
                <Link href="/reviews" onClick={() => setMobileOpen(false)}>Client Reviews</Link>
              </div>
            </details>

            <details className={styles.mobileDetails}>
              <summary className={styles.mobileSummary}>Loan Programs <span className={styles.mobileChevron}>▾</span></summary>
              <div className={styles.mobileSubLinks}>
                <Link href="/loan-types" onClick={() => setMobileOpen(false)}><strong>All Loan Programs</strong></Link>
                {loanTypes.map(loan => (
                  <Link key={loan.href} href={loan.href} onClick={() => setMobileOpen(false)}>
                    {loan.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className={styles.mobileDetails}>
              <summary className={styles.mobileSummary}>Services <span className={styles.mobileChevron}>▾</span></summary>
              <div className={styles.mobileSubLinks}>
                <Link href="/services" onClick={() => setMobileOpen(false)}><strong>All Services</strong></Link>
                {services.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/knowledge-hub" onClick={() => setMobileOpen(false)}>Knowledge Hub</Link>
            <details className={styles.mobileDetails}>
              <summary className={styles.mobileSummary}>Contact Us <span className={styles.mobileChevron}>▾</span></summary>
              <div className={styles.mobileSubLinks}>
                <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" onClick={() => setMobileOpen(false)}><strong>Start Your Application</strong></Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Standard Contact Form</Link>
                <div className={styles.mobileDivider}>Select Your State:</div>
                {stateLinks.map(state => (
                  <Link key={state.slug} href={`/locations/${state.slug}`} onClick={() => setMobileOpen(false)}>
                    {state.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>
          <div className={styles.mobileCta}>
            <Link href="https://provisor.shapeportal.com/ref/34" className="btn btn-primary w-full">Apply Online</Link>
          </div>
        </div>
      </div>
    </>
  );
}
