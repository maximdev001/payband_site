import { useLang } from '../i18n/LangContext';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
  const { t } = useLang();
  const w = t.whatWeDo;

  return (
    <section className={styles.section} id="what-we-do">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
        <h2 className={styles.title}>{w.title}</h2>
        <p className={styles.subtitle}>{w.subtitle}</p>
        </div>
        <div className={styles.visual}>
        <div className={styles.Mobile}></div>
        </div>
      </div>
    </section>
  );
}
