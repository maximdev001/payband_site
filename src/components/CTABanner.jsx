import { useLang } from '../i18n/LangContext';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section className={styles.section} id="cta">
      <div className={styles.glowLeft} />
      <div className={styles.glowCenter} />
      <div className={styles.glowRight} />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>{c.title}</h2>
            <a href="#contact" className={styles.btn}>
              {c.btn}
            </a>
          </div>

        
        </div>

       <div className={styles.phoneImage} aria-hidden="true" />
      </div>
    </section>
  );
}