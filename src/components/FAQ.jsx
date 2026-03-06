import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{f.title}</h2>
        </div>

        <div className={styles.list}>
          {f.items.map((item, i) => (
            <div
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              key={i}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className={styles.qIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="url(#faqg)" strokeWidth="1.5" fill="none"/>
                    <path d="M8 5v3M8 10v1" stroke="url(#faqg)" strokeWidth="1.5" strokeLinecap="round"/>
                    <defs><linearGradient id="faqg" x1="1" y1="1" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </span>
                <span className={styles.qText}>{item.q}</span>
                <span className={`${styles.chevron} ${open === i ? styles.chevronOpen : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
