import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Provisor Classroom | MadCity Home Loans',
  description: 'Learn more about Provisor Classroom with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Provisor Classroom</h1>
          <p>This is a placeholder for the Provisor Classroom page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
