import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ContactForm from '../../../components/ContactForm';
import RobCard from '../../../components/RobCard';
import styles from './page.module.css';

// To title case the slug (e.g., south-dakota -> South Dakota)
function formatStateName(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Licensed states
const validStates = [
  'wisconsin', 'illinois', 'iowa', 'minnesota', 'michigan',
  'florida', 'texas', 'colorado', 'north-dakota', 'south-dakota', 'washington'
];

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const stateSlug = resolvedParams.state;
  if (!validStates.includes(stateSlug.toLowerCase())) return {};
  
  const stateName = formatStateName(stateSlug);
  return {
    title: `${stateName} Mortgage Lender & Home Loans | MadCity Home Loans`,
    description: `Looking for a home loan in ${stateName}? Rob Miller at MadCity Home Loans provides expert mortgage lending, including FHA, VA, Conventional, and Jumbo loans in ${stateName}.`,
    keywords: [`mortgage lender ${stateName}`, `home loans ${stateName}`, `Rob Miller ${stateName}`, `buy a house in ${stateName}`]
  };
}

// Next.js 16 requires async generateStaticParams if we want static generation
export function generateStaticParams() {
  return validStates.map(state => ({ state }));
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const stateSlug = resolvedParams.state.toLowerCase();
  
  if (!validStates.includes(stateSlug)) {
    notFound();
  }

  const stateName = formatStateName(stateSlug);

  return (
    <main className={styles.locationPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero-home.jpg"
            alt={`Home loans in ${stateName}`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">Licensed in {stateName}</span>
          <h1 className={styles.heroTitle}>Your Trusted Mortgage Lender in {stateName}</h1>
          <div className="gold-line" />
          <p className={styles.heroSubtitle}>
            Whether you are buying your first home, upgrading, or refinancing in {stateName}, 
            Rob Miller and the MadCity Home Loans team are here to secure the best rates and terms for you.
          </p>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.mainContent}>
            <h2>Why Choose MadCity Home Loans in {stateName}?</h2>
            <p>
              Navigating the real estate market in <strong>{stateName}</strong> requires a local expert who understands the nuances of the area. 
              As a licensed mortgage lender in {stateName}, Rob Miller brings 15+ years of experience to ensure your loan closes smoothly, on time, and without surprises.
            </p>
            <h3>Our Loan Programs in {stateName}</h3>
            <ul className="checklist">
              <li><strong>FHA Loans:</strong> Perfect for first-time homebuyers in {stateName} looking for low down payment options.</li>
              <li><strong>VA Loans:</strong> Zero down payment financing for eligible veterans and active-duty military in {stateName}.</li>
              <li><strong>Conventional Loans:</strong> Competitive rates and terms for {stateName} homebuyers with strong credit.</li>
              <li><strong>Jumbo Loans:</strong> High-balance loans for luxury properties across {stateName}.</li>
              <li><strong>USDA Loans:</strong> Zero down payment options for eligible rural properties in {stateName}.</li>
            </ul>
            <div className={styles.blurbBox}>
              <h3>Ready to Get Started?</h3>
              <p>
                Take the first step toward your dream home in {stateName}. Fill out the contact form, and Rob will personally reach out to discuss your options and build a customized mortgage strategy.
              </p>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.formCard}>
              <h3>Contact Us in {stateName}</h3>
              <ContactForm />
            </div>
            <div className={styles.robCardWrap}>
              <RobCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
