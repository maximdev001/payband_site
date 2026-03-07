import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;
  const [active, setActive] = useState(0);
  const item = tm.items[active];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % tm.items.length);
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.glowLeft} />
      <div className={styles.glowCenter} />
      <div className={styles.glowRight} />

      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{tm.title}</h2>
        </div>

        <div className={styles.outerCard}>
          <div className={styles.innerCard}>
            <div className={styles.topRow}>
              <div className={styles.avatarWrap}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.avatarImage}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.avatarFallback}>
                    {item.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className={styles.authorBlock}>
                <h3 className={styles.authorName}>{item.name}</h3>
                <p className={styles.authorRole}>{item.role}</p>
              </div>
            </div>

            <p className={styles.quote}>{item.text}</p>
          </div>
        </div>

        <div className={styles.controls}>
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

          <button
            className={styles.nextBtn}
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <span className={styles.nextBtnInner}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M8 5L14 11L8 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L11 11L5 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}