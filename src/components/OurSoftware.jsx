import { useRef } from "react";
import styles from "./OurSoftware.module.css";
import { useLang } from "../i18n/LangContext";

import parentImg from "../assets/images/Artboard.svg";
import childImg from "../assets/images/child.svg";
import teacherImg from "../assets/images/Artboard (2).svg";
import busImg from "../assets/images/Mockup.svg";

export default function OurSoftware() {
  const { t, lang } = useLang();
  const sliderRef = useRef(null);

  const cards = [
    { key: "parentApp", image: parentImg },
    { key: "childApp", image: childImg },
    { key: "teacherApp", image: teacherImg },
    { key: "busManagement", image: busImg },
  ];

  const handleNext = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: lang === "ar" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: lang === "ar" ? 360 : -360,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.section}
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="ourSoftware"
    >
      <div className={styles.headerWrap}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.ourSoftware.title}</h2>
        </div>
      </div>

      <div className={styles.sliderViewport}>
        <div className={styles.cards} ref={sliderRef}>
          {cards.map((card) => (
            <div className={styles.card} key={card.key}>
              <div className={styles.imageBox}>
                <div className={styles.gridPattern}></div>

                <img
                  src={card.image}
                  alt={t.ourSoftware.cards[card.key].title}
                  className={`${styles.image} ${styles[card.key]}`}
                />
              </div>

              <h3 className={styles.cardTitle}>
                {t.ourSoftware.cards[card.key].title}
              </h3>

              <p className={styles.cardDesc}>
                {t.ourSoftware.cards[card.key].description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.arrowWrapper}>
        

        <button
          className={styles.arrow}
          onClick={handleNext}
          type="button"
          aria-label="Next software"
        >
          <span className={styles.arrowInner}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M8 5L14 11L8 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5L11 11L5 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
