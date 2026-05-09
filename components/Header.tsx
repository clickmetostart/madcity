'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const loanTypes = [
  { href: '/fha-loans', label: 'FHA Loans', desc: 'Low down payment, government-backed' },
  { href: '/va-loans', label: 'VA Loans', desc: 'Zero down for veterans & military' },
  { href: '/conventional-loans', label: 'Conventional Loans', desc: 'Flexible terms for strong credit' },
  { href: '/jumbo-loans', label: 'Jumbo Loans', desc: 'High-balance financing for luxury homes' },
  { href: '/usda-loans', label: 'USDA Loans', desc: 'Zero down for rural properties' },
  { href: '/wheda-loans', label: 'WHEDA Loans', desc: 'Wisconsin-specific assistance programs' },
  { href: '/non-conventional-loans', label: 'Non-Conventional', desc: 'Alternative solutions for unique situations' },
];

const services = [
  { href: '/first-time-home-buyers', label: 'First-Time Buyers' },
  { href: '/purchase-a-new-home', label: 'Purchase a New Home' },
  { href: '/refinance-your-home', label: 'Refinance Your Home' },
  { href: '/mortgage-planning', label: 'Mortgage Planning' },
  { href: '/annual-mortgage-review', label: 'Annual Mortgage Review' },
  { href: '/credit-consultation', label: 'Credit Consultation' },
  { href: '/home-equity', label: 'Home Equity' },
];

const about = [
  { href: '/about-rob', label: 'About Rob Miller' },
  { href: '/about-mad-city-home-loans-team', label: 'About the Team' },
  { href: '/mortgage-process', label: 'The Mortgage Process' },
  { href: '/reviews', label: 'Client Reviews' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = (name: string) =>
    setOpenDropdown(prev => (prev === name ? null : name));

  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <a href="tel:6082272002" className={styles.topBarLink}>📞 608-227-2002</a>
          <a href="mailto:rob@provisor.com" className={styles.topBarLink}>✉ rob@provisor.com</a>
          <span className={styles.topBarRight}>NMLS #239865 &nbsp;|&nbsp; Equal Housing Lender</span>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logoLink} aria-label="MadCity Home Loans Home">
            <Image src="/logo.jpg" alt="MadCity Home Loans" width={180} height={54} priority className={styles.logo} />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <div className={styles.dropdown}>
              <button className={styles.navBtn}>Loan Types <span className={styles.chevron}>▾</span></button>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownGrid}>
                  {loanTypes.map(item => (
                    <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                      <span className={styles.dropdownLabel}>{item.label}</span>
                      <span className={styles.dropdownDesc}>{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.navBtn}>Services <span className={styles.chevron}>▾</span></button>
              <div className={styles.dropdownMenu}>
                {services.map(item => (
                  <Link key={item.href} href={item.href} className={styles.dropdownItemSimple}>{item.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/mortgage-calculator" className={styles.navLink}>Calculator</Link>
            <Link href="/resources" className={styles.navLink}>Resources</Link>

            <div className={styles.dropdown}>
              <button className={styles.navBtn}>About <span className={styles.chevron}>▾</span></button>
              <div className={styles.dropdownMenu}>
                {about.map(item => (
                  <Link key={item.href} href={item.href} className={styles.dropdownItemSimple}>{item.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer"
            className={`btn btn-primary btn-sm ${styles.ctaBtn}`} id="header-apply-btn">
            Apply Now
          </Link>

          <button className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {mobileOpen && <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} />}

      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileDrawerInner}>
          <Link href="/" onClick={() => setMobileOpen(false)} className={styles.mobileLogo}>
            <Image src="/logo.jpg" alt="MadCity Home Loans" width={150} height={45} />
          </Link>

          {[{ key: 'loans', label: 'Loan Types', items: loanTypes },
            { key: 'services', label: 'Services', items: services }].map(group => (
            <div key={group.key} className={styles.mobileSection}>
              <button className={styles.mobileSectionToggle} onClick={() => toggleDropdown(group.key)}>
                {group.label} <span>{openDropdown === group.key ? '▲' : '▼'}</span>
              </button>
              {openDropdown === group.key && (
                <div className={styles.mobileSectionLinks}>
                  {group.items.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {[
            { href: '/mortgage-calculator', label: 'Calculator' },
            { href: '/resources', label: 'Resources' },
            { href: '/about-rob', label: 'About Rob' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/contact', label: 'Contact' },
          ].map(item => (
            <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileCtaGroup}>
            <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" onClick={() => setMobileOpen(false)}>Apply Online</Link>
            <a href="tel:6082272002" className="btn btn-outline">Call 608-227-2002</a>
          </div>
        </div>
      </div>
    </>
  );
}
