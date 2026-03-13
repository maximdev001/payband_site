import { useState } from 'react';
import styles from './Contact.module.css';
import { useLang } from '../i18n/LangContext';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    solution: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowCenter} />
      <div className={styles.bgGlowRight} />

      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Discover how pay Band can work for you</p>
        </div>

        <div className={styles.topCards}>
          <div className={`${styles.infoCard} ${styles.phoneCard}`}>
            <div className={styles.infoIcon}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.5 4.5C7.5 3.95 7.95 3.5 8.5 3.5H11L12.5 7L10.75 8.25C11.5 9.95 12.85 11.3 14.55 12.05L15.8 10.3L19.3 11.8V14.3C19.3 14.85 18.85 15.3 18.3 15.3C11.01 15.3 5.1 9.39 5.1 2.1C5.1 1.55 5.55 1.1 6.1 1.1H8.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 4.5C18.43 5.08 19.92 6.57 20.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 1.5C20.08 2.29 22.71 4.92 23.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoValue}>0 10 80 80 11 86</p>
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.emailCard}`}>
            <div className={styles.infoIcon}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6.75L12 13.5L21 6.75"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={`${styles.infoValue} ${styles.emailValue}`}>
                Info@paybandsolutions.com
              </p>
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.locationCard}`}>
            <div className={styles.infoIcon}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21C12 21 18 15.4 18 10.2C18 6.78 15.31 4 12 4C8.69 4 6 6.78 6 10.2C6 15.4 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="10" r="2.2" fill="currentColor" />
              </svg>
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Find Us</h3>
              <p className={styles.infoValue}>
                147 Al Moltaga El Araby,
                <br />
                Heliopolis, Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.formHeading}>Let’s Get In Touch and Fill The Form</h3>

          {sent ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3>{c.successTitle}</h3>
              <p>{c.successBody}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>
                    First Name <span>( required )</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    Last Name <span>( required )</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Company Name <span>( required )</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Industry</label>
                <input
                  className={styles.input}
                  type="text"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Email Address <span>( required )</span>
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Phone Number <span>( required )</span>
                </label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Which Solution Are You Interested In ?</label>
                <div className={styles.selectWrap}>
                  <select
                    className={`${styles.input} ${styles.select}`}
                    name="solution"
                    value={form.solution}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="payband">Pay Band</option>
                    <option value="education">Education</option>
                    <option value="operations">Operations</option>
                  </select>
                  <span className={styles.selectArrow}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Your Message</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button className={styles.submitBtn} type="submit">
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}