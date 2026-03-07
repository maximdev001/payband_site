import { useLang } from '../i18n/LangContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg width="34" height="34" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="url(#fg)" strokeWidth="2.5" fill="none" />
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b026ff" />
                    <stop offset="1" stopColor="#00c9b1" />
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>pay band</span>
            </a>

            <p className={styles.copyright}>© Pay Band 2024, All rights reserved</p>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Contact Us</p>
            <ul className={styles.linkList}>
              <li><a href="mailto:Info@paybandsolutions.com" className={styles.link}>Info@paybandsolutions.com</a></li>
              <li><a href="tel:01080801186" className={styles.link}>0 10 80 80 11 86</a></li>
              <li><a href="#contact" className={styles.link}>Fill the form</a></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Our Platforms</p>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Facebook</a></li>
              <li><a href="#" className={styles.link}>Instagram</a></li>
              <li><a href="#" className={styles.link}>Linkedin</a></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Legal</p>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Terms &amp; conditions</a></li>
              <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#" className={styles.link}>FAQ</a></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Find Us</p>
            <ul className={styles.linkList}>
              <li>
                <span className={styles.linkStatic}>
                  147 Al Moltaga El Araby, Heliopolis, Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}