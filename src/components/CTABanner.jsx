import { useLang } from '../i18n/LangContext';
import styles from './CTABanner.module.css';
import { useNavigate } from 'react-router-dom';

export default function CTABanner() {
  const { t } = useLang();
  const c = t.cta;
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/#contact');
  };

  return (
    <section className={styles.section} id="cta">
      <div className={styles.rings} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
        <span className={`${styles.ring} ${styles.ring3}`} />
        <span className={`${styles.ring} ${styles.ring4}`} />
        <span className={`${styles.ring} ${styles.ring5}`} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>{c.title}</h2>
            <button onClick={handleCTAClick} className={styles.btn}>
              {c.btn}
            </button>
          </div>
        </div>

        <div className={styles.phoneImage} aria-hidden="true" />
      </div>
    </section>
  );
}