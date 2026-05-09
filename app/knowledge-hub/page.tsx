import type { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Knowledge Hub | MadCity Home Loans',
  description: 'Expert mortgage advice, market updates, and homebuyer tips from Rob Miller and the MadCity Home Loans team in Madison, WI.',
};

export default function KnowledgeHub() {
  const posts = getSortedPostsData();

  return (
    <main className={styles.hubPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Insights & Education</span>
            <h1>Knowledge Hub</h1>
            <div className="gold-line" />
            <p className={styles.heroSubtitle}>
              Stay informed with expert advice, market trends, and practical tips for navigating the Wisconsin real estate market.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {posts.map(({ slug, title, description, date, image }) => (
              <Link href={`/knowledge-hub/${slug}`} key={slug} className={styles.card}>
                {image && (
                  <div className={styles.cardImgWrap}>
                    <img src={image} alt={title} className={styles.cardImg} />
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <time className={styles.date}>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                  <h3 className={styles.title}>{title}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.desc}>{description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
