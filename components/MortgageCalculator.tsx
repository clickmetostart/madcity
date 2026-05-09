'use client';

import { useState, useEffect } from 'react';
import styles from './MortgageCalculator.module.css';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(5400); // Annual
  const [insurance, setInsurance] = useState(1200); // Annual
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = homePrice - downPayment;
    const calculatedInterest = interestRate / 100 / 12;
    const calculatedPayments = loanTerm * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;

    setMonthlyPayment(monthly + monthlyTax + monthlyInsurance);
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance]);

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.inputs}>
        <div className={styles.inputGroup}>
          <label>Home Price ($)</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
          />
          <input
            type="range"
            min="100000"
            max="2000000"
            step="5000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
          <div className={styles.downPaymentNote}>
            {((downPayment / homePrice) * 100).toFixed(1)}% Down
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Loan Term (Years)</label>
          <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
            <option value={30}>30 Years Fixed</option>
            <option value={20}>20 Years Fixed</option>
            <option value={15}>15 Years Fixed</option>
            <option value={10}>10 Years Fixed</option>
          </select>
        </div>
      </div>

      <div className={styles.results}>
        <div className={styles.resultHeader}>Estimated Monthly Payment</div>
        <div className={styles.mainAmount}>
          ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={styles.breakdown}>
          <div className={styles.breakdownRow}>
            <span>Principal & Interest</span>
            <strong>${(monthlyPayment - (propertyTax / 12) - (insurance / 12)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
          </div>
          <div className={styles.breakdownRow}>
            <span>Property Taxes</span>
            <strong>${(propertyTax / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
          </div>
          <div className={styles.breakdownRow}>
            <span>Home Insurance</span>
            <strong>${(insurance / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
          </div>
        </div>
        <p className={styles.disclaimer}>
          *Estimate only. Does not include PMI or association fees. Rates change daily.
        </p>
      </div>
    </div>
  );
}
