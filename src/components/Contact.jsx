import { useState } from 'react';
import styles from './Contact.module.css';
import { useLang } from '../i18n/LangContext';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
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
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.layout}>
          {/* Left info */}
          <div className={styles.info}>
            <span className="section-tag">{c.tag}</span>
            <h2 className={styles.title}>
              {c.title}{' '}
              <span className="gradient-text">{c.titleHighlight}</span>
            </h2>
            <p className={styles.body}>{c.body}</p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1C5.7 1 3 3.7 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" stroke="url(#cg1)" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="7" r="2" stroke="url(#cg1)" strokeWidth="1.5" fill="none"/>
                    <defs><linearGradient id="cg1" x1="3" y1="1" x2="15" y2="17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>{c.office}</p>
                  <p className={styles.contactValue}>{c.officeVal}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="4" width="16" height="11" rx="2" stroke="url(#cg2)" strokeWidth="1.5" fill="none"/>
                    <path d="M1 7l8 5 8-5" stroke="url(#cg2)" strokeWidth="1.5"/>
                    <defs><linearGradient id="cg2" x1="1" y1="4" x2="17" y2="15" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>{c.email}</p>
                  <p className={styles.contactValue}>{c.emailVal}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3h3l1.5 3.5-2 1.2a9 9 0 005.8 5.8l1.2-2L16 13v3a1 1 0 01-1 1C7.2 17 1 10.8 1 3.5A1 1 0 012 3h1z" stroke="url(#cg3)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                    <defs><linearGradient id="cg3" x1="1" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b026ff"/><stop offset="1" stopColor="#00c9b1"/>
                    </linearGradient></defs>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>{c.phone}</p>
                  <p className={styles.contactValue}>{c.phoneVal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className={styles.formWrap}>
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
                    <label className={styles.label}>{c.nameLbl}</label>
                    <input className={styles.input} type="text" name="name" placeholder={c.namePh} value={form.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{c.emailLbl}</label>
                    <input className={styles.input} type="email" name="email" placeholder={c.emailPh} value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{c.subjectLbl}</label>
                  <input className={styles.input} type="text" name="subject" placeholder={c.subjectPh} value={form.subject} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{c.msgLbl}</label>
                  <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder={c.msgPh} rows={5} value={form.message} onChange={handleChange} required />
                </div>
                <button className={styles.submitBtn} type="submit">
                  {c.send}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M11 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
