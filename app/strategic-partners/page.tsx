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
    desc: 'Jason helps clients choose the right insurance coverage through a clear and education-focused approach. He makes sure homeowners understand their options and feel confident in their protection.',
    link: 'https://c4ins.com/',
    category: 'Insurance',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/jason-color-768x512-1.jpg'
  },
  { 
    name: 'Dera Johnsen-Tracy', 
    company: 'Horn & Johnsen SC',
    desc: 'Dera provides expert legal guidance focusing on estate planning, business law, and asset protection. Her tailored approach ensures that your family\'s future and hard-earned assets are fully secured.',
    link: 'https://hornjohnsen.com/',
    category: 'Legal / Estate Planning',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Dera-L.-Johnsen-Tracy.jpg'
  },
  { 
    name: 'Scott Richardson', 
    company: 'The Richardson Team - AWA',
    desc: 'Scott and his team offer unparalleled real estate expertise in the Madison area. Whether buying or selling, their deep market knowledge and negotiation skills guarantee a seamless transaction.',
    link: 'https://www.awateam.com/',
    category: 'Real Estate',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1567260912823-1.jpg'
  },
  { 
    name: 'Al Curran', 
    company: 'Curran Cabinetry & Design',
    desc: 'Al brings decades of experience in custom cabinetry and interior design. From kitchen remodels to custom built-ins, his craftsmanship elevates the beauty and functionality of any home.',
    link: 'https://currancabinetrydesign.com/',
    category: 'Interior Design',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Al-Curran-1-1024x769.jpg'
  },
  { 
    name: 'Kyle Davies', 
    company: 'W.E. Davies Remodeling',
    desc: 'Kyle leads a premier home remodeling team specializing in high-end renovations. They turn existing properties into dream homes with meticulous attention to detail and structural integrity.',
    link: 'https://wedaviesremodeling.com/',
    category: 'Remodeling',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/kyle.jpg'
  },
  { 
    name: 'Stephen Lange', 
    company: 'Lange\'s Painting',
    desc: 'Stephen provides high-quality residential and commercial painting services. His team is known for their precision, clean workspaces, and transforming interiors and exteriors with flawless finishes.',
    link: 'https://www.langespainting.com/',
    category: 'Painting',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Stephen-Lange-Langes-Painting.jpg'
  },
  { 
    name: 'Mike Melton', 
    company: 'Under Pressure Power Washing',
    desc: 'Mike specializes in professional exterior cleaning and power washing. His services restore the curb appeal of your home, safely removing years of grime from siding, driveways, and decks.',
    link: 'https://underpressurepowerwashingllc.com/',
    category: 'Exterior Maintenance',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Under-Pressure-Power-Washing.jpg'
  },
  { 
    name: 'Mike Putnam', 
    company: 'Putnam Exteriors',
    desc: 'Mike is the go-to expert for roofing, siding, and comprehensive exterior renovations. He provides honest estimates and high-quality materials to protect your home from the Wisconsin weather.',
    link: 'https://putnamexteriors-estimate.com/',
    category: 'Exteriors',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1740759863968-1.jpg'
  },
  { 
    name: 'Joe Cloute', 
    company: 'Bumble Bee Blinds',
    desc: 'Joe offers custom window treatments, from elegant blinds to automated shades. His team provides in-home consultations to perfectly match your aesthetic and lighting control needs.',
    link: 'https://www.bumblebeeblinds.com/madison-wi/',
    category: 'Window Treatments',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/Joe-Cloute-Owner-Bumble-Bee-Blinds-Madison-WI1-1.jpg'
  },
  { 
    name: 'Elena Inanov', 
    company: 'Syntha Digital',
    desc: 'Elena leads a full-service digital marketing and web development agency. Syntha Digital helps local businesses thrive online with cutting-edge design and strategic marketing campaigns.',
    link: 'https://synthadigital.com/',
    category: 'Marketing / Digital',
    img: 'https://madcityhomeloans.com/wp-content/uploads/2026/01/1671640735241-1.jpg'
  },
  { 
    name: 'Dean Slaby', 
    company: 'KSW Construction',
    desc: 'Dean brings unparalleled expertise in commercial and large-scale residential construction. KSW is renowned for delivering complex building projects on time and with exceptional quality standards.',
    link: 'https://kswconstruction.com/',
    category: 'Construction',
    img: '/ksw-dean-slaby.jpg'
  },
  { 
    name: 'Eric Fenton', 
    company: 'Morgan\'s SCC',
    desc: 'Eric runs Morgan\'s SCC, dedicating his time to community service, outreach, and providing essential support networks. He is a pillar of the local community making a real difference everyday.',
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
