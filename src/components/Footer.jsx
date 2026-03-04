import styles from './Footer.module.css';
import { useLang } from '../i18n/LangContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="url(#fg)" strokeWidth="2.5" fill="none"/>
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>pay band</span>
            </a>
            <p className={styles.tagline}>{f.tagline}</p>
            <div className={styles.socials}>
              {['T', 'in', 'G'].map((s, i) => (
                <a key={i} href="#" className={styles.socialLink}>{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(f.groups).map(([group, items]) => (
            <div key={group} className={styles.linkGroup}>
              <p className={styles.groupTitle}>{group}</p>
              <ul className={styles.linkList}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>{f.copyright}</p>
          <p className={styles.copy}>{f.sub}</p>
        </div>
      </div>
    </footer>
  );
}
