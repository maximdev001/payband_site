import { useLang } from '../i18n/LangContext';
import styles from './EduBandDetails.module.css';

export default function EndEdu() {
  const { t } = useLang();
  const n = t.edu;

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>
            {n.ctaTitleStart}{' '}
            <span className={styles.ctaTitleAccent}>
              {n.ctaTitleHighlight}
            </span>{' '}
            {n.ctaTitleEnd}
          </h3>

          <p className={styles.ctaSub}>
            {n.ctaSub}
          </p>

          <a href="#contact" className={styles.ctaBtn}>
            {n.ctaBtn}
          </a>

        </div>

      </div>
    </section>
  );
}