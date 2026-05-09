import styles from './ReviewsSection.module.css';

const reviews = [
  {
    name: 'Ashley Hunt',
    role: 'Local Realtor',
    text: 'As a Realtor I used Rob for the first time for my own personal home purchase. He made me feel like we\'ve been forever friends and made the entire transaction super smooth! One of the best experiences I\'ve ever had with any lender in the industry.',
    stars: 5,
  },
  {
    name: 'Margaret Lucchesi',
    role: 'Verified Google Review',
    text: 'Rob was great to work with from start to finish. He is EXTREMELY knowledgeable. He provided us with tips to improve before closing to secure a lower rate and ran multiple financial scenarios to find a solution that was comfortable for us.',
    stars: 5,
  },
  {
    name: 'Teaguen Henderson',
    role: 'First-Time Homebuyer',
    text: 'As a first-time homebuyer, my situation was far from simple — but Rob went above and beyond to make it happen! He jumped through every hoop, took the time to explain things clearly, and fought to get my deal closed when I wasn\'t sure it would be possible.',
    stars: 5,
  },
  {
    name: 'Elizabeth',
    role: 'Verified Google Review',
    text: 'We were previously denied from another lender and thought home ownership might not be possible for us. Rob has made us feel like a priority throughout the entire process and has gone above and beyond to make a home loan work for us. We are so grateful!',
    stars: 5,
  },
  {
    name: 'Brian Liebaert',
    role: 'Verified Google Review',
    text: 'I worked with 2 other banks before I decided to give Rob a chance. After my initial talk with Rob, I told my other half I should have just called him first. He has so many more tools in his toolbox than anyone I ever worked with.',
    stars: 5,
  },
  {
    name: 'Adam Carlson',
    role: 'Verified Google Review',
    text: 'We had an outstanding experience with Rob and his team at ProVisor! From start to finish, they were professional, responsive, and genuinely cared about helping us. Rob took the time to explain every detail clearly, making the process stress-free.',
    stars: 5,
  },
];

interface ReviewsSectionProps {
  heading?: string;
  dark?: boolean;
}

export default function ReviewsSection({
  heading = 'What Our Clients Say',
  dark = false,
}: ReviewsSectionProps) {
  return (
    <section className={`${styles.section} ${dark ? styles.dark : ''}`}>
      <div className="container">
        <div className="section-header">
          {dark && <div className="badge badge-light">Client Reviews</div>}
          {!dark && <div className="badge">Client Reviews</div>}
          <h2 className={dark ? 'text-white' : ''}>{heading}</h2>
          <div className="gold-line" />
          <p className={dark ? 'text-white' : ''} style={{ opacity: dark ? 0.75 : 1 }}>
            Real stories from Wisconsin homeowners who worked with Rob Miller.
          </p>
        </div>
        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div key={i} className={`${styles.card} ${dark ? styles.cardDark : ''}`}>
              <div className={styles.stars}>{'⭐'.repeat(r.stars)}</div>
              <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.role}>{r.role}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.source}>
          Reviews sourced from Google. <a href="https://g.page/r/madcityhomeloans/review" target="_blank" rel="noopener noreferrer">Leave a review →</a>
        </p>
      </div>
    </section>
  );
}
