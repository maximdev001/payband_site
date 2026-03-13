import { useLang } from '../i18n/LangContext';
import styles from './EduFeatures.module.css';

export default function EduFeatures() {
  const { t } = useLang();
  const e = t.edu || {};
  const features = e.features || [];

  return (
    <section className={styles.section} id="edu-features">
      <div className="container">

        <h2 className={styles.title}>{e.featuresTitle}</h2>

        <div className={styles.list}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>

              <div className={`${styles.iconBox} ${styles[item.accent]}`}>
                <span className={styles.iconGlow}></span>

                {item.accent === 'pink' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="8" r="2.2" fill="currentColor"/>
                    <circle cx="15.5" cy="9.2" r="1.8" fill="currentColor" opacity="0.9"/>
                    <path d="M5.8 18V16.9C5.8 15.5 6.9 14.4 8.3 14.4H9.8C11.2 14.4 12.3 15.5 12.3 16.9V18"
                      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <path d="M13.7 18V17.2C13.7 16.2 14.4 15.4 15.4 15.4H16.3C17.3 15.4 18.1 16.2 18.1 17.2V18"
                      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                )}

                {item.accent === 'yellow' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 19.5H19.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <path d="M7 19.5V9.2L12 6.4L17 9.2V19.5" stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M10 11.2H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <path d="M10 14.2H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                )}

                {item.accent === 'green' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="4.5" y="4.5" width="15" height="15" rx="3"
                      stroke="currentColor" strokeWidth="1.7"/>
                    <path d="M8 15L11 12L13 14L16.5 10.5"
                      stroke="currentColor" strokeWidth="1.7"/>
                  </svg>
                )}
              </div>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardDesc}>
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}