import { useLang } from '../i18n/LangContext';
import styles from './Solutions.module.css';

import BeatBand from '../assets/images/BeatBand.png';
import Edu from '../assets/images/Edu.png';
// Product brand colors / accent per card
const cardAccents = [
   { bg: 'rgba(0,201,177,0.1)', border: 'rgba(0,201,177,0.25)', label: '#00c9b1' },
    { bg: 'rgba(255,200,0,0.1)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
    { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)', label: '#b026ff' }, 
  
 
 
{ bg: 'rgba(255,200,0,0.1)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(255,140,0,0.1)', border: 'rgba(255,140,0,0.25)', label: '#ff8c00' },
  { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)', label: '#555256' },
];


const cardImages = [
  Edu,
  Edu,
  Edu,
  Edu,
  BeatBand,
  Edu,
];

export default function Solutions() {
  const { t } = useLang();
  const s = t.solutions;

  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{s.title}</h2>
          <p className={styles.subtitle}>{s.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {s.items.map((item, i) => (
            <div
              className={styles.flipCard}
              key={i}
              style={{
                '--card-bg': cardAccents[i]?.bg,
                '--card-border': cardAccents[i]?.border,
                '--card-label': cardAccents[i]?.label,
              }}
            >
              {/* tabindex makes it keyboard-focusable (flip on focus) */}
              <div className={styles.flipInner} tabIndex={0} aria-label={`${item.name} card`}>
                {/* FRONT */}
                <div className={styles.cardFront}>
         
                    <img
                      className={styles.cardImage}
                      src={cardImages[i]}
                      alt={item.name}
                      loading="lazy"
                    />
              

                  <h3 className={styles.cardTitle}>{item.name}</h3>
   
                </div>

                {/* BACK */}
                <div className={styles.cardBack}>
                  <div className={styles.backTop}>
                    <span className={styles.backLabel}>{item.name}</span>
                  </div>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  <div className={styles.backFooter}>
                    <span className={styles.backHint}>Move away to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}