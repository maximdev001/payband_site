import styles from './Solutions.module.css';
import { useLang } from '../i18n/LangContext';

// Product brand colors / accent per card
const cardAccents = [
  { bg: 'rgba(176,38,255,0.12)', border: 'rgba(176,38,255,0.25)', label: '#b026ff' },
  { bg: 'rgba(255,140,0,0.1)', border: 'rgba(255,140,0,0.25)', label: '#ff8c00' },
  { bg: 'rgba(0,201,177,0.1)', border: 'rgba(0,201,177,0.25)', label: '#00c9b1' },
  { bg: 'rgba(255,200,0,0.1)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(255,60,60,0.1)', border: 'rgba(255,60,60,0.25)', label: '#ff3c3c' },
  { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)', label: '#b026ff' },
];

// SVG icons per product
const icons = [
  // edu band - graduation cap
  <svg key="edu" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 6L4 13l14 7 14-7-14-7z" stroke="url(#sg0)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    <path d="M8 16v8c0 2.5 4.5 5 10 5s10-2.5 10-5v-8" stroke="url(#sg0)" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M30 13v8" stroke="url(#sg0)" strokeWidth="1.8" strokeLinecap="round"/>
    <defs><linearGradient id="sg0" x1="4" y1="6" x2="32" y2="29" gradientUnits="userSpaceOnUse">
      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
    </linearGradient></defs>
  </svg>,
  // Nezoola - hotel/building
  <svg key="nzl" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="10" width="24" height="22" rx="2" stroke="url(#sg1)" strokeWidth="1.8" fill="none"/>
    <path d="M6 17h24" stroke="url(#sg1)" strokeWidth="1.8"/>
    <path d="M14 10V6h8v4" stroke="url(#sg1)" strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="14" y="22" width="4" height="10" rx="1" fill="url(#sg1)"/>
    <defs><linearGradient id="sg1" x1="6" y1="6" x2="30" y2="32" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ff8c00"/><stop offset="1" stopColor="#ffcc00"/>
    </linearGradient></defs>
  </svg>,
  // stay band - door/key
  <svg key="stay" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="9" y="4" width="18" height="28" rx="3" stroke="url(#sg2)" strokeWidth="1.8" fill="none"/>
    <circle cx="20" cy="18" r="2.5" stroke="url(#sg2)" strokeWidth="1.6" fill="none"/>
    <defs><linearGradient id="sg2" x1="9" y1="4" x2="27" y2="32" gradientUnits="userSpaceOnUse">
      <stop stopColor="#00c9b1"/><stop offset="1" stopColor="#007aff"/>
    </linearGradient></defs>
  </svg>,
  // pulse band - heartbeat
  <svg key="pulse" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M3 18h5l4-9 6 18 4-12 3 3h8" stroke="url(#sg3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs><linearGradient id="sg3" x1="3" y1="9" x2="33" y2="27" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ffc800"/><stop offset="1" stopColor="#ff8c00"/>
    </linearGradient></defs>
  </svg>,
  // beat band - music/wave
  <svg key="beat" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="url(#sg4)" strokeWidth="1.8" fill="none"/>
    <path d="M13 22l4-10 4 10M14.5 19h5" stroke="url(#sg4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <defs><linearGradient id="sg4" x1="5" y1="5" x2="31" y2="31" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ff3c3c"/><stop offset="1" stopColor="#b026ff"/>
    </linearGradient></defs>
  </svg>,
  // Custom - plus
  <svg key="custom" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="url(#sg5)" strokeWidth="1.8" fill="none" strokeDasharray="4 3"/>
    <path d="M18 12v12M12 18h12" stroke="url(#sg5)" strokeWidth="2" strokeLinecap="round"/>
    <defs><linearGradient id="sg5" x1="5" y1="5" x2="31" y2="31" gradientUnits="userSpaceOnUse">
      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
    </linearGradient></defs>
  </svg>,
];

export default function Solutions() {
  const { t } = useLang();
  const s = t.solutions;

  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{s.tag}</span>
          <h2 className={styles.title}>{s.title}</h2>
          <p className={styles.subtitle}>{s.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {s.items.map((item, i) => (
            <div
              className={styles.card}
              key={i}
              style={{
                '--card-bg': cardAccents[i].bg,
                '--card-border': cardAccents[i].border,
                '--card-label': cardAccents[i].label,
              }}
            >
              <div className={styles.cardIcon}>{icons[i]}</div>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
