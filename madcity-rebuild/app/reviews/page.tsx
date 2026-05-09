import type { Metadata } from 'next';
import Link from 'next/link';
import ReviewsSection from '../../components/ReviewsSection';
import CTABanner from '../../components/CTABanner';

export const metadata: Metadata = {
  title: 'Client Reviews | Rob Miller Madison Mortgage Lender | MadCity Home Loans',
  description:
    'Read real Google reviews and testimonials from Wisconsin homeowners who have worked with Rob Miller and MadCity Home Loans. 5.0 rated mortgage expertise in Madison, WI.',
  keywords: ['Rob Miller reviews', 'MadCity Home Loans reviews', 'mortgage lender reviews Madison', 'Rob Miller testimonials', 'best mortgage lender Madison'],
};

export default function ReviewsPage() {
  return (
    <>
      <section className="section section-slate" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Success Stories</span>
            <h1>Trust Is Earned</h1>
            <div className="gold-line" />
            <p>
              We are proud of our 5.0 Google rating and the thousands of families we\'ve helped 
              secure their piece of Wisconsin. Here is what they have to say about working 
              with Rob Miller and his team.
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection heading="Latest Google Reviews" />

      <section className="section">
        <div className="container">
          <div className="card text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem' }}>
            <h2>Have we helped you?</h2>
            <div className="gold-line" />
            <p style={{ marginBottom: '2rem' }}>
              Your feedback helps us continue to provide the best possible service to the Madison community. 
              If you\'ve worked with Rob, we\'d love to hear about your experience.
            </p>
            <a 
              href="https://g.page/r/madcityhomeloans/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Write a Google Review
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Experience 5-Star Service for Yourself"
        subtext="Ready to start your own success story? Reach out to Rob today."
        primaryLabel="Start My Application"
      />
    </>
  );
}
