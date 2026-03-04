import { useState } from 'react';
import styles from './Testimonials.module.css';
import { useLang } from '../i18n/LangContext';

export default function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;
  const [active, setActive] = useState(0);
  const item = tm.items[active];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{tm.tag}</span>
          <h2 className={styles.title}>{tm.title}</h2>
        </div>

        <div className={styles.card}>
          {/* Avatar */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              {item.name.charAt(0)}
            </div>
            <div className={styles.avatarGlow} />
          </div>

          {/* Quote */}
          <div className={styles.quoteWrap}>
            <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 20c0-4.4 2-8 6-10L12 6C6.7 8.7 4 13.3 4 20v6h8v-6zm14 0c0-4.4 2-8 6-10L26 6c-5.3 2.7-8 7.3-8 14v6h8v-6z"
                fill="url(#tg)" fillOpacity="0.4"/>
              <defs><linearGradient id="tg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
              </linearGradient></defs>
            </svg>
            <p className={styles.quote}>{item.text}</p>
            <div className={styles.author}>
              <p className={styles.authorName}>{item.name}</p>
              <p className={styles.authorRole}>{item.role}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {tm.items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
