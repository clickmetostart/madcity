import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Community Outreach Giving | MadCity Home Loans',
  description: 'Learn more about Community Outreach Giving with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Community Outreach Giving</h1>
          <p>This is a placeholder for the Community Outreach Giving page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
