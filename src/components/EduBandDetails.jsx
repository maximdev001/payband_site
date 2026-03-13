import { useLang } from '../i18n/LangContext';
import { Link } from 'react-router-dom';
import styles from './EduBandDetails.module.css';
import EDU from '../assets/images/Edu.png';
import EDUHero from '../assets/images/WhatWeDoImg.png';

export default function EduBandDetails() {
  const { t } = useLang();
  const n = t.edu;

  return (
    <section className={styles.section} id="edu-details">
      <div className={styles.banner}>
        <div className={styles.bannerImage}>
          <img
            src={EDUHero}
            alt="EDU illustration"
            className={styles.heroImg}
          />
        </div>

        <div className={styles.bannerText}>
          <img
            src={EDU}
            alt="EDU"
            className={styles.EDU}
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="white" />
                    <path
                      d="M12 10.2V16"
                      stroke="#0b0b12"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="7.4" r="1.2" fill="#0b0b12" />
                  </svg>
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="1.6" fill="white" />
                    <path
                      d="M15.8 8.2L20.2 3.8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.6 3.8H20.2V5.4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {n.goalTitleStart}{' '}
                <span className={styles.highlight}>{n.goalTitleHighlight}</span>{' '}
                {n.goalTitleEnd}
              </h3>

              <p className={styles.cardText}>{n.goalDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}