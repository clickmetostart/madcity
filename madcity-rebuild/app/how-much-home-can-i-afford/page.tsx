import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How Much Home Can I Afford | MadCity Home Loans',
  description: 'Learn more about How Much Home Can I Afford with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>How Much Home Can I Afford</h1>
          <p>This is a placeholder for the How Much Home Can I Afford page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
