import { useLang } from '../i18n/LangContext';
import { Link } from 'react-router-dom';
import styles from './NezolaDetails.module.css';
import NZLLogo from '../assets/images/nzllogo.svg';
import NezoolaHero from '../assets/images/pana.svg';
import { HashLink } from 'react-router-hash-link';
import whatIsIcon from '../assets/images/whatIsIcon.png';
import goalIcon from '../assets/images/goalIcon.svg';

export default function NezolaDetails() {
  const { t } = useLang();
  const n = t.nezoola;

  return (
    <section className={styles.section} id="nezoola-details">
      <div className={styles.banner}>
        <div className={styles.bannerImage}>
          <img
            src={NezoolaHero}
            alt="Nezoola illustration"
            className={styles.heroImg}
          />
        </div>

        <div className={styles.bannerText}>
          <img
            src={NZLLogo}
            alt="NZL"
            className={styles.nzlLogo}
          />

          <p className={styles.bannerSub}>{n.bannerSub}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.cards}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardInner}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>
                  <img src={whatIsIcon} alt="What is icon" className={styles.cardIconImg} />
                </span>

                {n.whatIsTitleStart}{' '}
                <span className={styles.highlight}>{n.whatIsTitleHighlight}</span>{' '}
                {n.whatIsTitleEnd}
              </h3>

              <p className={styles.cardText}>{n.whatIsDesc}</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardInner}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>
                  <img src={goalIcon} alt="Goal icon" className={styles.cardIconImg} />
                </span>

                {n.goalTitleStart}{' '}
                <span className={styles.highlight}>{n.goalTitleHighlight}</span>{' '}
                {n.goalTitleEnd}
              </h3>

              <p className={styles.cardText}>{n.goalDesc}</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>
            {n.ctaTitleStart}{' '}
            <span className={styles.ctaTitleAccent}>{n.ctaTitleHighlight}</span>{' '}
            {n.ctaTitleEnd}
          </h3>

          <p className={styles.ctaSub}>{n.ctaSub}</p>

          <HashLink smooth to="/#contact" className={styles.ctaBtn}>
            {n.ctaBtn}
          </HashLink>
        </div>
      </div>
    </section>
  );
}
