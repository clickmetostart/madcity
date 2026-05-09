import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Extra Payment Calculator | MadCity Home Loans',
  description: 'Learn more about Extra Payment Calculator with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Extra Payment Calculator</h1>
          <p>This is a placeholder for the Extra Payment Calculator page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
