import Image from 'next/image';
import Link from 'next/link';
import styles from './RobCard.module.css';

export default function RobCard() {
  return (
    <aside className={styles.card}>
      <div className={styles.photoWrap}>
        <Image
          src="/rob-miller.jpg"
          alt="Rob Miller — Senior Loan Officer, MadCity Home Loans"
          width={120}
          height={120}
          className={styles.photo}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Rob Miller</p>
        <p className={styles.title}>Branch Manager &amp; Senior Loan Officer</p>
        <p className={styles.nmls}>ProVisor, Inc. &nbsp;|&nbsp; NMLS #239865</p>
      </div>
      <div className={styles.divider} />
      <p className={styles.pitch}>
        With over 15 years of mortgage experience in Wisconsin, Rob is known for making complex loans simple, fast closings, and always being available when you need him.
      </p>
      <div className={styles.actions}>
        <a href="tel:6082272002" className={`btn btn-primary btn-sm ${styles.btn}`}>
          📞 Call Now
        </a>
        <Link
          href="https://provisor.shapeportal.com/ref/34"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-outline btn-sm ${styles.btn}`}
        >
          Apply Online
        </Link>
      </div>
      <div className={styles.stars}>
        ⭐⭐⭐⭐⭐ <span>5.0 Google Rating</span>
      </div>
    </aside>
  );
}
