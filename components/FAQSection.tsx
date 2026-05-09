'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  // Build FAQ schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container container-sm">
        <div className="section-header">
          <div className="badge">FAQ</div>
          <h2>{heading}</h2>
          <div className="gold-line" />
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={styles.icon}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
