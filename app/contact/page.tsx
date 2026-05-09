import type { Metadata } from 'next';
import RobCard from '../../components/RobCard';
import ContactForm from '../../components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Rob Miller | Madison, WI Mortgage Expert | MadCity',
  description:
    'Ready to start your home loan? Contact Rob Miller, Branch Manager at MadCity Home Loans. Licensed in 11 states. Expert guidance in Madison, WI. Call 608-227-2002.',
  keywords: ['contact Rob Miller Madison', 'mortgage lender contact Madison', 'Rob Miller phone number', 'MadCity Home Loans address', 'licensed in 11 states'],
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
              Whether you're ready to start your application or just have a few questions, 
              we're here to provide the expert guidance you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2>Send a Message</h2>
                <p>Fill out the form below and Rob will get back to you personally.</p>
                <ContactForm />
              </div>
            </div>

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
                <p className={styles.hoursNote}>* Rob is available for urgent weekend requests.</p>
              </div>

              <div className={styles.sidebarCard}>
                <RobCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
