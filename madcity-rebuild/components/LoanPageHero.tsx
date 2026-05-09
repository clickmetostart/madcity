import Image from 'next/image';
import Link from 'next/link';
import styles from './LoanPageHero.module.css';

interface LoanPageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function LoanPageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText = 'Get Pre-Approved Today',
  ctaHref = 'https://provisor.shapeportal.com/ref/34',
  badge,
}: LoanPageHeroProps) {
  const isExternal = ctaHref.startsWith('http');
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        {badge && <span className="badge badge-light">{badge}</span>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Link
            href={ctaHref}
            className="btn btn-primary btn-lg"
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {ctaText}
          </Link>
          <a href="tel:6082272002" className="btn btn-outline-light btn-lg">
            Call 608-227-2002
          </a>
        </div>
      </div>
    </section>
  );
}
