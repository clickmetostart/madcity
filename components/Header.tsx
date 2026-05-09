'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const loanTypes = [
  { href: '/fha-loans', label: 'FHA Loans', desc: 'Low down payment, flexible credit.', img: '/hero-home.jpg' },
  { href: '/va-loans', label: 'VA Loans', desc: 'Zero down for veterans & military.', img: '/hero-home.jpg' },
  { href: '/conventional-loans', label: 'Conventional Loans', desc: 'Stable, long-term financing.', img: '/hero-home.jpg' },
  { href: '/jumbo-loans', label: 'Jumbo Loans', desc: 'Luxury & high-balance homes.', img: '/hero-home.jpg' },
  { href: '/usda-loans', label: 'USDA Loans', desc: 'Zero down for rural properties.', img: '/hero-home.jpg' },
  { href: '/wheda-loans', label: 'WHEDA Loans', desc: 'Wisconsin down payment assistance.', img: '/hero-home.jpg' },
];

const services = [
  { href: '/first-time-home-buyers', label: 'First-Time Buyers', icon: '🔑' },
  { href: '/purchase-a-new-home', label: 'Purchase a New Home', icon: '🏡' },
  { href: '/refinance-your-home', label: 'Refinance Your Home', icon: '💰' },
  { href: '/mortgage-planning', label: 'Mortgage Planning', icon: '📊' },
  { href: '/annual-mortgage-review', label: 'Annual Review', icon: '📅' },
  { href: '/credit-consultation', label: 'Credit Consultation', icon: '📈' },
  { href: '/home-equity', label: 'Home Equity', icon: '🏘️' },
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
            <Image src="/logo.jpg" alt="MadCity Home Loans" width={170} height={50} priority className={styles.logo} />
          </Link>

          <nav className={styles.nav} onMouseLeave={() => setActiveMega(null)}>
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

            <Link href="/mortgage-calculator" className={styles.navLink}>Calculator</Link>

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
                        <p>15+ years of experience in the Madison market.</p>
                        <Link href="/about-rob" onClick={() => setActiveMega(null)}>View Profile →</Link>
                      </div>
                    </div>
                    <div className={styles.aboutLinks}>
                      <Link href="/about-mad-city-home-loans-team" onClick={() => setActiveMega(null)}>The MadCity Team</Link>
                      <Link href="/mortgage-process" onClick={() => setActiveMega(null)}>The 12-Step Process</Link>
                      <Link href="/reviews" onClick={() => setActiveMega(null)}>Client Reviews</Link>
                      <Link href="/contact" onClick={() => setActiveMega(null)}>Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary btn-sm" id="header-apply-btn">
            Apply Now
          </Link>

          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Simplified) */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileContent}>
          <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕ Close</button>
          <div className={styles.mobileLinks}>
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/loan-types" onClick={() => setMobileOpen(false)}>Loan Programs</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/mortgage-calculator" onClick={() => setMobileOpen(false)}>Calculator</Link>
            <Link href="/about-rob" onClick={() => setMobileOpen(false)}>About Rob</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
          <div className={styles.mobileCta}>
            <Link href="https://provisor.shapeportal.com/ref/34" className="btn btn-primary w-full">Apply Online</Link>
          </div>
        </div>
      </div>
    </>
  );
}
