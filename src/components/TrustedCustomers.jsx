import styles from './TrustedCustomers.module.css';
import { useLang } from '../i18n/LangContext';

// School logo initials / placeholder badges
const schoolColors = [
  { bg: 'rgba(30,60,120,0.3)', border: 'rgba(30,60,120,0.5)', text: '#6090ff' },
  { bg: 'rgba(120,30,30,0.3)', border: 'rgba(120,30,30,0.5)', text: '#ff7070' },
  { bg: 'rgba(20,80,40,0.3)', border: 'rgba(20,80,40,0.5)', text: '#60c080' },
];

export default function TrustedCustomers() {
  const { t } = useLang();
  const tr = t.trusted;

  return (
    <section className={styles.section} id="trusted">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{tr.tag}</span>
          <h2 className={styles.title}>{tr.title}</h2>
        </div>

        <div className={styles.grid}>
          {tr.customers.map((name, i) => (
            <div className={styles.card} key={i} style={{ '--acc-bg': schoolColors[i].bg, '--acc-border': schoolColors[i].border, '--acc-text': schoolColors[i].text }}>
              <div className={styles.logo}>
                <div className={styles.logoInner}>
                  {/* Stylized school crest */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M20 12v8M16 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 26c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className={styles.customerName}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
