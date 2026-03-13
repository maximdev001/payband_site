import { useLang } from '../i18n/LangContext';
import { Link } from 'react-router-dom';
import styles from './NezolaDetails.module.css';
import NZLLogo from '../assets/images/nzllogo.svg';
import NezoolaHero from '../assets/images/WhatWeDoImg.png';

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
          {/* What is Nezoola */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardInner}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="white" />
                    <path d="M12 10.2V16" stroke="#0b0b12" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="12" cy="7.4" r="1.2" fill="#0b0b12"/>
                  </svg>
                </span>

                {n.whatIsTitleStart}{' '}
                <span className={styles.highlight}>{n.whatIsTitleHighlight}</span>{' '}
                {n.whatIsTitleEnd}
              </h3>

              <p className={styles.cardText}>{n.whatIsDesc}</p>
            </div>
          </div>

          {/* Our Goal */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardInner}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="1.6" fill="white"/>
                    <path d="M15.8 8.2L20.2 3.8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.6 3.8H20.2V5.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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

        {/* CTA Card */}
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>
            {n.ctaTitleStart}{' '}
            <span className={styles.ctaTitleAccent}>{n.ctaTitleHighlight}</span>{' '}
            {n.ctaTitleEnd}
          </h3>

          <p className={styles.ctaSub}>{n.ctaSub}</p>

          <a href="#contact" className={styles.ctaBtn}>
            {n.ctaBtn}
          </a>
        </div>

      </div>
    </section>
  );
}