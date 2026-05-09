'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Purchase',
    loanType: 'Conventional',
    method: 'Email',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: 'Purchase', loanType: 'Conventional', method: 'Email', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMsg}>
        <div className={styles.successIcon}>✅</div>
        <h2>Message Sent!</h2>
        <p>Thanks for reaching out. Rob Miller will be in touch with you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline btn-sm">Send Another Message</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input 
            type="text" id="name" required 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address *</label>
          <input 
            type="email" id="email" required 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number *</label>
          <input 
            type="tel" id="phone" required 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            placeholder="608-555-0123"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="interest">I am interested in...</label>
          <select 
            id="interest" 
            value={formData.interest}
            onChange={e => setFormData({...formData, interest: e.target.value})}
          >
            <option value="Purchase">Purchasing a Home</option>
            <option value="Refinance">Refinancing</option>
            <option value="Pre-Approval">Getting Pre-Approved</option>
            <option value="Question">General Question</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="loanType">Loan Type (if known)</label>
          <select 
            id="loanType"
            value={formData.loanType}
            onChange={e => setFormData({...formData, loanType: e.target.value})}
          >
            <option value="Conventional">Conventional</option>
            <option value="FHA">FHA</option>
            <option value="VA">VA (Veterans)</option>
            <option value="Jumbo">Jumbo</option>
            <option value="USDA">USDA (Rural)</option>
            <option value="WHEDA">WHEDA</option>
            <option value="Not Sure">I'm Not Sure Yet</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="method">Preferred Contact Method</label>
          <select 
            id="method"
            value={formData.method}
            onChange={e => setFormData({...formData, method: e.target.value})}
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone Call</option>
            <option value="Text">Text Message</option>
          </select>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="message">Message / Questions</label>
          <textarea 
            id="message" rows={4}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            placeholder="Tell us a little about your goals..."
          ></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        className={`btn btn-primary ${styles.submitBtn}`}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMsg}>Sorry, something went wrong. Please try calling us instead.</p>
      )}
    </form>
  );
}
