import { useLang } from '../i18n/LangContext';
import { useNavigate } from 'react-router-dom';
import styles from './EduBandDetails.module.css';

export default function EndEdu() {
  const { t } = useLang();
  const n = t.edu;
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/#contact');
  };

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

          <button onClick={handleCTAClick} className={styles.ctaBtn}>
            {n.ctaBtn}
          </button>

        </div>

      </div>
    </section>
  );
}