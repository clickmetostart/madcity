import type { Metadata } from 'next';
import RobCard from '../../components/RobCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Rob Miller | MadCity Home Loans in Madison, WI',
  description:
    'Have a question about home loans? Contact Rob Miller, Senior Loan Officer at MadCity Home Loans. Call 608-227-2002 or visit us in Madison, WI.',
  keywords: ['contact Rob Miller Madison', 'mortgage lender contact Madison', 'Rob Miller phone number', 'MadCity Home Loans address'],
};

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Get In Touch</span>
            <h1>How Can We Help You?</h1>
            <div className="gold-line" />
            <p className={styles.heroSubtitle}>
              Whether you\'re ready to start your application or just have a few questions, 
              we\'re here to provide the expert guidance you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.infoCol}>
              <div className={styles.contactMethod}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h3>Call or Text</h3>
                  <p><a href="tel:6082272002" className={styles.link}>608-227-2002</a></p>
                  <span className={styles.note}>Direct line to Rob Miller</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:rob@provisor.com" className={styles.link}>rob@provisor.com</a></p>
                  <span className={styles.note}>Average response: under 2 hours</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h3>Office Location</h3>
                  <p>8446 Excelsior Dr Ste 2-RM</p>
                  <p>Madison, WI 53717</p>
                  <span className={styles.note}>ProVisor, Inc. Branch</span>
                </div>
              </div>

              <div className={styles.hoursBox}>
                <h4>Office Hours</h4>
                <div className={styles.hourRow}><span>Monday – Friday</span> <strong>8:00 AM – 6:00 PM</strong></div>
                <div className={styles.hourRow}><span>Saturday – Sunday</span> <strong>By Appointment</strong></div>
                <p className={styles.hoursNote}>* Rob is available for urgent pre-approval requests on weekends.</p>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <RobCard />
              <div className={styles.quickCta}>
                <h3>Ready to apply?</h3>
                <p>Skip the call and start your secure online application now.</p>
                <a href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  Apply Online
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
