import { useLang } from '../i18n/LangContext';
import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  const { t } = useLang();
  const w = t.whoWeAre;

  return (
    <section className={styles.section} id="who-we-are">
      <div className="container">
        <div className={styles.header}>
            <h2 className={styles.title}>{w.title}</h2>
            <p className={styles.body}>{w.body1}</p>
         
      
           <div className={styles.Mobile}>
  <div className={`${styles.icon} ${styles.icon1}`}></div>
  <div className={`${styles.icon} ${styles.icon2}`}></div>
  <div className={`${styles.icon} ${styles.icon3}`}></div>
  <div className={`${styles.icon} ${styles.icon4}`}></div>
</div>
            </div>
          </div>
      
    </section>
  );
}
