import { useLang } from '../i18n/LangContext';
import { Link } from 'react-router-dom';
import styles from './Solutions.module.css';

import EduImg from '../assets/images/Edu.png';
import NezoolaImg from '../assets/images/nzllogo.svg';
import StayBandImg from '../assets/images/staybandlogo.svg';
import PulseBandImg from '../assets/images/pulsebandlogo.svg';
import BeatBandImg from '../assets/images/BeatBand.png';
import AddIcon from '../assets/images/addicon.svg';
import ComingSoonImg from '../assets/images/comingsoon.svg';

const cardAccents = [
  { bg: 'rgba(0,201,177,0.10)', border: 'rgba(0,201,177,0.25)', label: '#00c9b1' },
  { bg: 'rgba(255,200,0,0.10)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(176,38,255,0.10)', border: 'rgba(176,38,255,0.25)', label: '#b026ff' },
  { bg: 'rgba(255,200,0,0.10)', border: 'rgba(255,200,0,0.25)', label: '#ffc800' },
  { bg: 'rgba(255,140,0,0.10)', border: 'rgba(255,140,0,0.25)', label: '#ff8c00' },
  { bg: 'rgba(85,82,86,0.10)', border: 'rgba(85,82,86,0.25)', label: '#c7c3cc' },
];

const cardImages = [
  EduImg,
  NezoolaImg,
  StayBandImg,
  PulseBandImg,
  BeatBandImg,
  AddIcon,
];

const WITH_DESCRIPTION = [0, 1];
const COMING_SOON = [2, 3, 4];
const CUSTOMIZE_INDEX = 5;

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
            const image = cardImages[i];
            const withDescription = WITH_DESCRIPTION.includes(i);
            const comingSoon = COMING_SOON.includes(i);
            const isCustomize = i === CUSTOMIZE_INDEX;

            // only first two cards (edu & nezola) should link to dedicated pages
            const path = i === 0 ? '/edu' : i === 1 ? '/nezola' : null;

            const card = (
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
                    {withDescription && (
                      <>
                        <div className={styles.backTop}>
                          <span className={styles.backLabel}>{item.name}</span>
                        </div>
                        <p className={styles.cardDesc}>{item.desc}</p>
                        <div className={styles.backFooter}>
                          <span className={styles.backHint}>Move away to flip back</span>
                        </div>
                      </>
                    )}
                    {comingSoon && (
                      <>
                        <img
                          className={styles.cardBackImage}
                          src={ComingSoonImg}
                          alt=""
                          aria-hidden
                        />
                        <p className={styles.comingSoonText}>{s.comingSoon}</p>
                        <div className={styles.backFooter}>
                          <span className={styles.backHint}>Move away to flip back</span>
                        </div>
                      </>
                    )}
                    {isCustomize && (
                      <div>
                        <div className={styles.backTop}>
                          <span className={styles.backLabel}>{item.name}</span>
                        </div>
                        <a href="#contact" className={styles.contactUsLink}>
                          {s.contactUs}
                        </a>
                        <div className={styles.backFooter}>
                          <span className={styles.backHint}>Move away to flip back</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

            if (path) {
              return (
                <Link
                  to={path}
                  key={i}
                  className={styles.cardLink}
                  aria-label={`Go to ${item.name} details`}
                >
                  {card}
                </Link>
              );
            }

            return card;
          })}
        </div>
      </div>
    </section>
  );
}