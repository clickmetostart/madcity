import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Mortgage Calculators | MadCity Home Loans',
  description: 'Learn more about Mortgage Calculators with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Mortgage Calculators</h1>
          <p>This is a placeholder for the Mortgage Calculators page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
