import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ContactForm from '../../../components/ContactForm';
import RobCard from '../../../components/RobCard';
import { stateData } from '../../../lib/stateData';
import styles from './page.module.css';

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const stateSlug = resolvedParams.state.toLowerCase();
  const stateInfo = stateData[stateSlug];
  
  if (!stateInfo) return {};
  
  return {
    title: `${stateInfo.name} Mortgage Lender | ${stateInfo.specialty} | Rob Miller`,
    description: `${stateInfo.description} Rob Miller is a high-performance mortgage expert licensed in 11 states, providing 5-star service in ${stateInfo.name}. Call 608-227-2002.`,
    keywords: [`mortgage lender ${stateInfo.name}`, `home loans ${stateInfo.name}`, `Rob Miller ${stateInfo.name}`, `licensed in 11 states`, ...stateInfo.cities.map(c => `mortgage ${c}`)]
  };
}

export function generateStaticParams() {
  return Object.keys(stateData).map(state => ({ state }));
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const stateSlug = resolvedParams.state.toLowerCase();
  const stateInfo = stateData[stateSlug];
  
  if (!stateInfo) {
    notFound();
  }

  return (
    <main className={styles.locationPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">{stateInfo.specialty}</span>
          <h1 className={styles.heroTitle}>Your Trusted Mortgage Lender in {stateInfo.name}</h1>
          <div className="gold-line" />
          <p className={styles.heroSubtitle}>
            {stateInfo.description}
          </p>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.mainContent}>
            <h2>Expert Home Loan Guidance in {stateInfo.name}</h2>
            <p>
              Navigating the real estate market in <strong>{stateInfo.name}</strong> requires a local expert who understands the nuances of the area. 
              Whether you are buying in {stateInfo.cities.slice(0, 3).join(', ')}, or anywhere else in the state, Rob Miller brings 15+ years of experience to ensure your loan closes smoothly.
            </p>
            
            <div className={styles.highlightsGrid}>
              {stateInfo.highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.check}>✓</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            <h3>Major Cities Served in {stateInfo.name}</h3>
            <div className={styles.cityGrid}>
              {stateInfo.cities.map(city => (
                <div key={city} className={styles.cityItem}>{city}</div>
              ))}
            </div>

            <div className={styles.blurbBox}>
              <h3>Ready to Get Started in {stateInfo.name}?</h3>
              <p>
                Take the first step toward your dream home. Fill out the contact form below, and Rob will personally reach out to discuss your options and build a customized mortgage strategy for your {stateInfo.name} property.
              </p>
            </div>

            <div className={styles.formCard}>
              <h3>Contact Us in {stateInfo.name}</h3>
              <ContactForm />
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.robCardWrap}>
              <RobCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
