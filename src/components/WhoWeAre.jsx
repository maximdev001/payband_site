import styles from './WhoWeAre.module.css';
import { useLang } from '../i18n/LangContext';

export default function WhoWeAre() {
  const { t } = useLang();
  const w = t.whoWeAre;

  return (
    <section className={styles.section} id="who-we-are">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.layout}>
          {/* Left: visual */}
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.teamRow}>
                {['A', 'B', 'C', 'D'].map((l, i) => (
                  <div
                    key={i}
                    className={styles.avatar}
                    style={{ background: i % 2 === 0 ? 'rgba(176,38,255,0.25)' : 'rgba(0,201,177,0.2)' }}
                  >
                    {l}
                  </div>
                ))}
                <span className={styles.teamLabel}>{w.teamLabel}</span>
              </div>
              <p className={styles.missionText}>{w.quote}</p>
              <div className={styles.missionAuthor}>
                <div className={styles.authorDot} />
                <span>{w.quoteAuthor}</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className={styles.statsGrid}>
              {w.stats.map((s, i) => (
                <div className={styles.statCard} key={i}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className={styles.text}>
            <span className="section-tag">{w.tag}</span>
            <h2 className={styles.title}>{w.title}</h2>
            <p className={styles.body}>{w.body1}</p>
            <p className={styles.body}>{w.body2}</p>
            <div className={styles.pillRow}>
              {w.pills.map((tag) => (
                <span key={tag} className={styles.pill}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
