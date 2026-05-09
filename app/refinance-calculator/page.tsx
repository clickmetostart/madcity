import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Refinance Calculator | MadCity Home Loans',
  description: 'Learn more about Refinance Calculator with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Refinance Calculator</h1>
          <p>This is a placeholder for the Refinance Calculator page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
