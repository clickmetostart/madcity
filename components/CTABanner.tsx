import Link from 'next/link';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTABanner({
  heading = 'Ready to Get Started?',
  subtext = 'Talk to Rob Miller today — no obligation, just clear answers about your home loan options.',
  primaryLabel = 'Apply Online Now',
  primaryHref = 'https://provisor.shapeportal.com/ref/34',
}: CTABannerProps) {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.sub}>{subtext}</p>
        </div>
        <div className={styles.actions}>
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="cta-banner-apply"
          >
            {primaryLabel}
          </Link>
          <a href="tel:6082272002" className="btn btn-outline-light btn-lg">
            Call 608-227-2002
          </a>
        </div>
      </div>
    </section>
  );
}
