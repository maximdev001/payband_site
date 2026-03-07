import { useLang } from '../i18n/LangContext';
import styles from './Solutions.module.css';

import Edu from '../assets/images/Edu.png';
import BeatBand from '../assets/images/WhoWeAre/WhoWeAreIcon1.png';
import pluseband from '../assets/images/WhoWeAre/WhoWeAreIcon3.png';

const cardAccents = [
  { bg: 'rgba(0,201,177,0.10)', border: 'rgba(0,201,177,0.25)', label: '#00c9b1' },
  { bg: 'rgba(255,200,0,0.10)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(176,38,255,0.10)', border: 'rgba(176,38,255,0.25)', label: '#b026ff' },
  { bg: 'rgba(255,200,0,0.10)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(255,140,0,0.10)', border: 'rgba(255,140,0,0.25)', label: '#ff8c00' },
  { bg: 'rgba(85,82,86,0.10)', border: 'rgba(85,82,86,0.25)', label: '#c7c3cc' },
];

const cardImages = [
  Edu,
  Edu,
  Edu,
  pluseband,
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
          {s.items.map((item, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const image = cardImages[i % cardImages.length];

            return (
              <div
                className={styles.flipCard}
                key={i}
                style={{
                  '--card-bg': accent.bg,
                  '--card-border': accent.border,
                  '--card-label': accent.label,
                }}
              >
                <div
                  className={styles.flipInner}
                  tabIndex={0}
                  aria-label={`${item.name} card`}
                >
                  <div className={styles.cardFront}>
                    <img
                      className={styles.cardImage}
                      src={image}
                      alt={item.name}
                      loading="lazy"
                    />
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                  </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}