import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Home Buyer Webinars | MadCity Home Loans',
  description: 'Learn more about Home Buyer Webinars with MadCity Home Loans.',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="hero">
        <div className="hero-content">
          <h1>Home Buyer Webinars</h1>
          <p>This is a placeholder for the Home Buyer Webinars page content. We are building out comprehensive, SEO-optimized content for this section.</p>
        </div>
      </section>
    </main>
  );
}
