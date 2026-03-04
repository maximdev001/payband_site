import styles from './CTABanner.module.css';
import { useLang } from '../i18n/LangContext';

export default function CTABanner() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section className={styles.section} id="cta">
      <div className={styles.glow} />
      <div className={styles.glowTeal} />
      <div className="container">
        <div className={styles.inner}>
          {/* Hand illustration (decorative) */}
          <div className={styles.decoration}>
            <div className={styles.decorRing} />
            <div className={styles.decorRing2} />
            <div className={styles.handIcon}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="36" stroke="url(#ctag)" strokeWidth="1.5" fill="none" strokeDasharray="6 4"/>
                <circle cx="40" cy="40" r="24" fill="url(#ctag)" fillOpacity="0.12"/>
                <path d="M30 42c0-5.5 4.5-10 10-10s10 4.5 10 10v8H30v-8z" stroke="url(#ctag)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <circle cx="40" cy="28" r="5" stroke="url(#ctag)" strokeWidth="1.8" fill="none"/>
                <defs><linearGradient id="ctag" x1="4" y1="4" x2="76" y2="76" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                </linearGradient></defs>
              </svg>
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{c.title}</h2>
            <a href="#contact" className={styles.btn}>
              {c.btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
