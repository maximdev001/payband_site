import { useLang } from '../i18n/LangContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} />
      <div className={styles.glowTeal} />
      <div className={styles.centralGlow} />

      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>{h.heading1}</span>
            <span className={styles.headingSpacer}> </span>
            <span className={styles.tealText}>{h.heading2}</span>
          </h1>
          <p className={styles.subheading}>{h.sub}</p>
          <a href="#solutions" className={styles.ctaBtn}>
            {h.cta}
            <span className={styles.ctaArrow}>
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" fill="rgba(255,255,255,0.15)"/>
                <path d="M8 11h6M11 8l3 3-3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Decorative card visual */}
        <div className={styles.visual}>
          
        </div>
      </div>



    </section>
  );
}
