import styles from './WhatWeDo.module.css';
import { useLang } from '../i18n/LangContext';

export default function WhatWeDo() {
  const { t } = useLang();
  const w = t.whatWeDo;

  return (
    <section className={styles.section} id="what-we-do">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{w.tag}</span>
          <h2 className={styles.title}>{w.title}</h2>
          <p className={styles.subtitle}>{w.subtitle}</p>
        </div>

        {/* Sector pills */}
        <div className={styles.sectors}>
          {w.sectors.map((s) => (
            <span key={s} className={styles.sectorPill}>{s}</span>
          ))}
        </div>

        {/* Visual illustration */}
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            {/* Simulated dashboard graphic */}
            <div className={styles.dashRow}>
              <div className={styles.dashItem}>
                <div className={styles.dashIcon} style={{ background: 'rgba(176,38,255,0.2)', borderColor: 'rgba(176,38,255,0.3)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="6" width="18" height="12" rx="2.5" stroke="url(#wd1)" strokeWidth="1.6" fill="none"/>
                    <path d="M2 10h18" stroke="url(#wd1)" strokeWidth="1.6"/>
                    <rect x="5" y="13" width="5" height="2" rx="0.8" fill="url(#wd1)"/>
                    <defs><linearGradient id="wd1" x1="2" y1="6" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <span>Cashless Payments</span>
              </div>
              <div className={styles.dashItem}>
                <div className={styles.dashIcon} style={{ background: 'rgba(0,201,177,0.15)', borderColor: 'rgba(0,201,177,0.25)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.9 4.6-1.4 8-5.5 8-9.9V6L11 2z" stroke="url(#wd2)" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
                    <path d="M8 11l2.5 2.5L14 8" stroke="url(#wd2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs><linearGradient id="wd2" x1="3" y1="2" x2="19" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <span>Access Control</span>
              </div>
              <div className={styles.dashItem}>
                <div className={styles.dashIcon} style={{ background: 'rgba(176,38,255,0.15)', borderColor: 'rgba(176,38,255,0.25)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8.5" stroke="url(#wd3)" strokeWidth="1.6" fill="none"/>
                    <path d="M11 7v4l2.5 2.5" stroke="url(#wd3)" strokeWidth="1.6" strokeLinecap="round"/>
                    <defs><linearGradient id="wd3" x1="2.5" y1="2.5" x2="19.5" y2="19.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <span>Real-Time Tracking</span>
              </div>
              <div className={styles.dashItem}>
                <div className={styles.dashIcon} style={{ background: 'rgba(0,201,177,0.12)', borderColor: 'rgba(0,201,177,0.2)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11h3l2.5-6 3.5 12 2.5-7L17 13h1" stroke="url(#wd4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs><linearGradient id="wd4" x1="4" y1="5" x2="18" y2="17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <span>Analytics</span>
              </div>
            </div>
            <div className={styles.dashGraph}>
              <div className={styles.graphLine} />
              <div className={styles.graphBars}>
                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className={styles.graphBar} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
