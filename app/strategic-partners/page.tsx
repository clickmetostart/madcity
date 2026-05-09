import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Strategic Partners | MadCity Home Loans Madison WI',
  description: 'Meet our network of trusted Wisconsin professionals in insurance, legal, remodeling, and more. Strategic partners of Rob Miller and MadCity Home Loans.',
};

const partners = [
  { 
    name: 'Jason Stendalen', 
    company: 'C4 Insurance Services',
    desc: 'Jason helps clients choose the right insurance coverage through a clear and education-focused approach.',
    link: 'https://c4ins.com/',
    category: 'Insurance',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/jason-color-768x512-1.jpg'
  },
  { 
    name: 'Dera Johnsen-Tracy', 
    company: 'Horn & Johnsen SC',
    desc: 'Expert legal guidance for estate planning and asset protection.',
    link: 'https://hornjohnsen.com/',
    category: 'Legal / Estate Planning',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Dera-L.-Johnsen-Tracy.jpg'
  },
  { 
    name: 'Scott Richardson', 
    company: 'The Richardson Team - AWA',
    desc: 'Dedicated real estate professionals serving the Madison area.',
    link: 'https://www.awateam.com/',
    category: 'Real Estate',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1567260912823-1.jpg'
  },
  { 
    name: 'Al Curran', 
    company: 'Curran Cabinetry & Design',
    desc: 'Custom cabinetry and interior design excellence.',
    link: 'https://currancabinetrydesign.com/',
    category: 'Interior Design',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Al-Curran-1-1024x769.jpg'
  },
  { 
    name: 'Kyle Davies', 
    company: 'W.E. Davies Remodeling',
    desc: 'Premier home remodeling and renovation services.',
    link: 'https://wedaviesremodeling.com/',
    category: 'Remodeling',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/kyle.jpg'
  },
  { 
    name: 'Stephen Lange', 
    company: 'Lange\'s Painting',
    desc: 'High-quality residential and commercial painting.',
    link: 'https://www.langespainting.com/',
    category: 'Painting',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Stephen-Lange-Langes-Painting.jpg'
  },
  { 
    name: 'Mike Melton', 
    company: 'Under Pressure Power Washing',
    desc: 'Professional exterior cleaning and power washing.',
    link: 'https://underpressurepowerwashingllc.com/',
    category: 'Exterior Maintenance',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Under-Pressure-Power-Washing.jpg'
  },
  { 
    name: 'Mike Putnam', 
    company: 'Putnam Exteriors',
    desc: 'Specializing in roofing, siding, and exterior estimates.',
    link: 'https://putnamexteriors-estimate.com/',
    category: 'Exteriors',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1740759863968-1.jpg'
  },
  { 
    name: 'Joe Cloute', 
    company: 'Bumble Bee Blinds',
    desc: 'Custom window treatments and blinds for your home.',
    link: 'https://www.bumblebeeblinds.com/madison-wi/',
    category: 'Window Treatments',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Joe-Cloute-Owner-Bumble-Bee-Blinds-Madison-WI1-1.jpg'
  },
  { 
    name: 'Elena Inanov', 
    company: 'Syntha Digital',
    desc: 'Full-service digital marketing and development.',
    link: 'https://synthadigital.com/',
    category: 'Marketing / Digital',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1671640735241-1.jpg'
  },
  { 
    name: 'Dean Slaby', 
    company: 'KSW Construction',
    desc: 'Commercial and residential construction expertise.',
    link: 'https://kswconstruction.com/',
    category: 'Construction',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/DSC_0003-1073x1536-1.jpg'
  },
  { 
    name: 'Eric Fenton', 
    company: 'Morgan\'s SCC',
    desc: 'Dedicated community service and support.',
    link: 'https://www.morganscc.org/',
    category: 'Community / Support',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/02/1753816348494-1.jpg'
  }
];

export default function StrategicPartners() {
  return (
    <main className={styles.partnersPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Network</span>
            <h1>Strategic Partners</h1>
            <div className="gold-line" />
            <p className={styles.heroSubtitle}>
              We've spent years building relationships with the most trusted professionals in Wisconsin. 
              These are the experts we trust for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.partnerGrid}>
            {partners.map((partner, idx) => (
              <div key={idx} className={styles.partnerCard}>
                {partner.img && (
                  <div className={styles.cardImgWrap}>
                    <img src={partner.img} alt={partner.name} className={styles.cardImg} />
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{partner.category}</span>
                  <h3>{partner.company}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.contactName}>{partner.name}</p>
                  <p className={styles.desc}>{partner.desc}</p>
                </div>
                <div className={styles.cardFooter}>
                  <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                    Visit Website →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.consultCta}>
            <div className={styles.ctaBox}>
              <h2>Need a personal introduction?</h2>
              <p>Rob Miller would be happy to connect you directly with any of our trusted partners to ensure you get priority service.</p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className="btn btn-primary">Connect with Rob</Link>
                <Link href="tel:6082272002" className="btn btn-outline">Call 608-227-2002</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
