import { useLang } from '../i18n/LangContext';
import styles from './EduFeatures.module.css';

import feature1 from '../assets/images/feature1.svg';
import feature2 from '../assets/images/feature2.svg';
import feature3 from '../assets/images/feature3.svg';

export default function EduFeatures() {
  const { t } = useLang();
  const e = t.edu || {};
  const features = e.features || [];

  const images = [feature1, feature2, feature3];

  return (
    <section className={styles.section} id="edu-features">
      <div className="container">

        <h2 className={styles.title}>{e.featuresTitle}</h2>

        <div className={styles.list}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>

              <div className={`${styles.iconBox} ${styles[item.accent]}`}>
                <span className={styles.iconGlow}></span>

                <img
                  src={images[index]}
                  alt={item.title}
                  className={styles.iconImg}
                />

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