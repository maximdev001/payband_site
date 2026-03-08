import { useLang } from '../i18n/LangContext';
import styles from './TrustedCustomers.module.css';

import Customer1 from '../assets/images/TrustedCustomers/customer1.png';
import Customer2 from '../assets/images/TrustedCustomers/customer2.png';
import Customer3 from '../assets/images/TrustedCustomers/customer3.png';

const cardAccents = [
  {
    glow: 'radial-gradient(circle at 50% 50%, rgba(176,38,255,0.18), transparent 70%)',
  },
  {
    glow: 'radial-gradient(circle at 50% 50%, rgba(48,120,255,0.16), transparent 70%)',
  },
  {
    glow: 'radial-gradient(circle at 50% 50%, rgba(0,201,177,0.14), transparent 70%)',
  },
];

const customerImages = [Customer1, Customer2, Customer3];

export default function TrustedCustomers() {
  const { t } = useLang();
  const tr = t.trusted;

  return (
    <section className={styles.section} id="trusted">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{tr.title}</h2>
        </div>

        <div className={styles.grid}>
          {tr.customers.map((name, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const image = customerImages[i % customerImages.length];

            return (
              <article
                key={i}
                className={styles.card}
                style={{ '--card-glow': accent.glow }}
              >
                <div className={styles.logoWrap}>
                  <img
                    src={image}
                    alt={name}
                    className={styles.logoImage}
                    loading="lazy"
                  />
                </div>

                <h3 className={styles.customerName}>{name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}