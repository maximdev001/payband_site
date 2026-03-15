import { useLang } from '../i18n/LangContext';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import paybandLogo from '../assets/images/paybandlogo.svg';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <img src={paybandLogo} alt="Pay Band" className={styles.logoImg} />
            </a>

            <p className={styles.copyright}>© Pay Band 2024, All rights reserved</p>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Contact Us</p>
            <ul className={styles.linkList}>
              <li><a href="mailto:Info@paybandsolutions.com" className={styles.link}>Info@paybandsolutions.com</a></li>
              <li><a href="tel:01080801186" className={styles.link}>0 10 80 80 11 86</a></li>
              <li><a href="#contact" className={styles.link} onClick={handleContactClick}>Fill the form</a></li>
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